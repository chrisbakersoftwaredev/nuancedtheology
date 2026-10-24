const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
// Check the actual authored records, rather than a second content manifest.
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(
  fs.readFileSync(filename, 'utf8'), {compilerOptions: {module: ts.ModuleKind.CommonJS}}
).outputText, filename);
const { articles } = require('../src/app/content.ts');
const { curricula, publishedSlugs, curriculumPosition, nextLesson, orderArticles } = require('../src/app/curriculum.ts');
const root = path.resolve(__dirname, '../dist/nuanced-theology/browser');
const read = route => fs.readFileSync(path.join(root, route, 'index.html'), 'utf8');
const text = html => html.replace(/<[^>]*>/g, '').replaceAll('&amp;', '&').replaceAll('&#39;', "'").replaceAll('&quot;', '"');
const collections = new Map([
  ['introductory-rites','know-the-mass/introductory-rites'],
  ['entering-church','know-the-mass/entering-church'],
  ['liturgy-of-the-word','know-the-mass/liturgy-of-the-word'],
  ['liturgy-of-the-eucharist','know-the-mass/liturgy-of-the-eucharist'],
  ['communion-rite','know-the-mass/communion-rite'],
  ['concluding-rites','know-the-mass/concluding-rites'],
  ['liturgical-signs','know-the-mass/liturgical-signs'],
  ['living-the-faith','know-the-faith/living-the-faith'],
  ['the-church','know-the-faith/the-church'],
  ['gods-plan-of-salvation','know-the-faith/gods-plan-of-salvation']
]);
test('complete Faith and Mass curricula', () => {
  assert.equal(articles.length, 37);
  assert.equal(articles.filter(a => ['gods-plan-of-salvation', 'living-the-faith', 'the-church'].includes(a.topicId)).length, 16);
  assert.equal(articles.filter(a => !['gods-plan-of-salvation', 'living-the-faith', 'the-church'].includes(a.topicId)).length, 21);
  assert.equal(new Set(articles.map(a => a.slug)).size, articles.length);
});
for (const article of articles) {
  test(`${article.slug}: complete, cited, discoverable article and shared printable`, () => {
    assert.match(article.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(collections.has(article.topicId));
    const overview = article.slug === 'gods-plan-of-salvation-overview';
    assert.ok(overview ? article.sections.length === 1 && article.sections[0].paragraphs.length === 1 : article.sections.length >= 3);
    const words = article.sections.flatMap(s => s.paragraphs).join(' ').split(/\s+/).length;
    assert.ok(overview ? words >= 100 && words <= 180 : words >= 200);
    assert.equal(article.lesson.questions.length, 3);
    for (const key of ['remember','practice','prayer','parentGuidance']) assert.ok(article.lesson[key]?.trim());
    const sourceIds = new Set(article.sources.map(s => s.id));
    assert.equal(sourceIds.size, article.sources.length);
    for (const section of [...article.sections, ...(article.level2 ?? []), ...(article.level3 ?? [])]) {
      assert.ok(section.sourceIds.length, section.title);
      for (const id of section.sourceIds) assert.ok(sourceIds.has(id), id);
    }
    for (const id of [...article.lesson.parentSourceIds, ...article.deeperResources.map(r => r.sourceId)]) assert.ok(sourceIds.has(id), id);
    for (const source of article.sources) assert.equal(new URL(source.url).protocol, 'https:');
    const route = `articles/${article.slug}`;
    const page = read(route), printable = read(`${route}/family-lesson`);
    for (const html of [page, printable]) {
      assert.equal((html.match(/<h1(?:\s[^>]*)?>/g) || []).length, 1);
      assert.ok(text(html).includes(article.title));
      assert.match(html, /<meta name="description" content="[^\"]+"/);
      assert.match(html, /<title>[^<]*nuancedTheology[^<]*<\/title>/);
      assert.ok(html.includes('Awaiting theological review'));
      assert.ok(!html.includes('href="/family-lessons"'), 'no separate family navigation');
    }
    for (const section of article.sections) for (const paragraph of section.paragraphs) {
      assert.ok(text(page).includes(paragraph), `article paragraph: ${section.title}`);
      assert.ok(text(printable).includes(paragraph), `shared printable paragraph: ${section.title}`);
    }
    const anchors = new Set(Array.from(page.matchAll(/id="(source-[^"]+)"/g), m => m[1]));
    for (const match of page.matchAll(/href="[^"]*#(source-[^"]+)"/g)) assert.ok(anchors.has(match[1]), match[1]);
    for (const section of ['Let’s Learn','Let’s Talk','Let’s Remember','Let’s Practice','Let’s Pray','For Parents']) assert.ok(printable.includes(section));
    assert.equal((printable.match(/<li><h3>/g)||[]).length, 3);
    assert.ok(printable.includes('No ecclesiastical approval is claimed.'));
    assert.ok(page.includes('Learn as a family →'));
    assert.ok(!page.includes('Print Family Lesson →'));
    assert.match(printable, /<button[^>]*>Print Family Lesson /);
    for (const collection of [collections.get(article.topicId), ['gods-plan-of-salvation', 'living-the-faith', 'the-church'].includes(article.topicId) ? 'know-the-faith' : 'know-the-mass', 'family-lessons']) {
      const listing = read(collection);
      assert.ok(listing.includes(`href="/${route}${collection === 'family-lessons' ? '/family-lesson' : ''}"`), collection);
      assert.ok(!listing.includes('id="collection-search"'));
      assert.ok(!listing.includes('Lessons in this collection'));
      assert.ok(!listing.includes('Read the lesson →'));
      assert.ok(!listing.includes('Print Family Lesson →'));
    }
  });
}
test('collections prerender and expose only published navigation', () => {
  for (const route of ['', 'know-the-mass', 'know-the-faith', 'family-lessons', ...collections.values()]) {
    const html = read(route);
    assert.equal((html.match(/<h1(?:\s[^>]*)?>/g)||[]).length, 1);
    assert.ok(html.includes('href="/know-the-faith"'));
    for (const unpublished of ['/apologetics','/ocia','/reflections']) assert.ok(!html.includes(`href="${unpublished}"`));
  }
});
test('original parent guidance is preserved', () => {
  assert.ok(read('articles/sign-of-the-cross/family-lesson').includes('Jesus, through whom the whole world was made, died for you and rose from the dead.'));
});

test('Faith appears before Mass in navigation and homepage collections', () => {
  const home = read('');
  assert.ok(home.indexOf('href="/know-the-faith"') < home.indexOf('href="/know-the-mass"'));
  const cards = home.slice(home.indexOf('class="library-area-card"'));
  assert.ok(cards.indexOf('href="/know-the-faith"') < cards.indexOf('href="/know-the-mass"'));
  assert.ok(read('know-the-faith/gods-plan-of-salvation').includes('God’s Plan of Salvation'));
});

test('old Creed collection link redirects to God’s Plan of Salvation', () => {
  const legacy = read('know-the-faith/the-creed');
  assert.ok(legacy.includes('http-equiv="refresh"'));
  assert.ok(legacy.includes('/know-the-faith/gods-plan-of-salvation'));
});

test('curriculum explicitly covers every published article exactly once', () => {
  const sequence = curricula.flatMap(publishedSlugs);
  assert.equal(new Set(sequence).size, sequence.length);
  assert.deepEqual([...sequence].sort(), articles.map(a => a.slug).sort());
  assert.deepEqual(orderArticles([...articles].reverse()).map(a => a.slug), sequence);
  assert.ok(sequence.indexOf('promises-pointing-to-jesus') < sequence.indexOf('life-of-jesus'));
  assert.ok(sequence.indexOf('life-of-jesus') < sequence.indexOf('new-covenant-in-jesus'));
  assert.ok(sequence.indexOf('holy-water') < sequence.indexOf('sign-of-the-cross'));
  assert.ok(sequence.indexOf('sign-of-the-cross') < sequence.indexOf('standing-for-the-gospel'));
  assert.ok(sequence.indexOf('standing-for-the-gospel') < sequence.indexOf('eucharist-real-presence'));
  assert.equal(sequence.at(-1), 'dismissal');
});

for (const article of articles) {
  test(`${article.slug}: correct position, Next destination, placement and print exclusion`, () => {
    const position = curriculumPosition(article.slug);
    assert.ok(position);
    const next = nextLesson(article.slug);
    for (const family of [false, true]) {
      const html = read(`articles/${article.slug}${family ? '/family-lesson' : ''}`);
      const navStart = html.search(/<nav\b[^>]*class="curriculum-next screen-only"/);
      assert.ok(navStart !== -1);
      const navigation = html.slice(navStart, html.indexOf('</nav>', navStart));
      assert.ok(text(html).includes(`Lesson ${position.number} of ${position.total} — ${position.sequence.title}`));
      assert.ok(navStart > html.indexOf(family ? 'No ecclesiastical approval is claimed.' : 'References support the explanation;'));
      if (next) {
        assert.ok(articles.some(a => a.slug === next.slug));
        assert.ok(navigation.includes(`href="/articles/${next.slug}${family ? '/family-lesson' : ''}"`));
        assert.ok(navigation.includes('>Next →</a>'));
        assert.ok(navigation.includes('aria-describedby="next-lesson-title"'));
      } else {
        assert.equal(article.slug, 'dismissal');
        assert.ok(navigation.includes('end of the published journey'));
        assert.ok(!navigation.includes('>Next →</a>'));
      }
    }
  });
}

test('complete outlines retain order and connect Faith to Mass', () => {
  for (const sequence of curricula) {
    const html = read(sequence.path.slice(1));
    assert.match(html, /<a[^>]*>Start Learning<\/a>/);
    const outline = html.slice(html.indexOf('class="curriculum-plan"'));
    let last = -1;
    for (const slug of publishedSlugs(sequence)) {
      const index = outline.indexOf(`href="/articles/${slug}"`);
      assert.ok(index > last, slug);
      last = index;
    }
    const plannedRows = [...outline.matchAll(/<li class="curriculum-planned">([\s\S]*?)<\/li>/g)];
    assert.equal(plannedRows.length, sequence.phases.flatMap(phase => phase.planned).length);
    for (const row of plannedRows) assert.ok(!row[1].includes('href='));
    assert.ok(!html.includes('id="collection-search"'));
  }
  assert.ok(read('articles/church-body-of-christ').includes('href="/articles/preparing-for-mass"'));
  assert.ok(read('articles/eucharist-real-presence').includes('href="/articles/prayer-peace-and-lamb-of-god"'));
});
test('homepage warns about construction and lack of Church approval', () => {
  const home = read('');
  assert.ok(home.includes('Under construction'));
  assert.ok(home.includes('None of the articles has been approved by any authority of the Catholic Church.'));
  assert.ok(home.indexOf('construction-notice') < home.indexOf('<h1'));
  assert.match(home, /type="search"/);
});

test('Faith has three ordered parts with honest gaps and intact part boundaries', () => {
  const faith = curricula.filter(sequence => sequence.areaId === 'faith');
  assert.deepEqual(faith.map(sequence => sequence.id), ['salvation', 'living', 'church']);
  assert.deepEqual(faith.map(sequence => publishedSlugs(sequence).length), [14, 1, 1]);
  assert.equal(publishedSlugs(faith[0])[0], 'creation-and-gods-friendship');
  assert.equal(nextLesson('gods-plan-of-salvation-overview').slug, 'new-life-in-christ');
  assert.equal(nextLesson('new-life-in-christ').slug, 'church-body-of-christ');
  const landing = read('know-the-faith');
  let previous = -1;
  for (const sequence of faith) {
    const index = landing.indexOf(`Part ${sequence.part} — ${sequence.title}`);
    assert.ok(index > previous);
    previous = index;
    assert.ok(read(sequence.path.slice(1)).includes(sequence.question));
    for (const chapter of sequence.phases) assert.ok(landing.includes(chapter.title));
  }
  assert.ok(read('articles/new-life-in-christ').includes('Living the Faith currently has one published introduction'));
  assert.ok(read('articles/church-body-of-christ').includes('source and summit'));
  assert.ok(read('articles/church-body-of-christ').includes('one sacrifice is made sacramentally present'));
  assert.ok(read('articles/dismissal').includes('More Faith chapters are planned'));
});
