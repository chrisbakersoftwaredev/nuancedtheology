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
const root = path.resolve(__dirname, '../dist/nuanced-theology/browser');
const read = route => fs.readFileSync(path.join(root, route, 'index.html'), 'utf8');
const text = html => html.replace(/<[^>]*>/g, '').replaceAll('&amp;', '&').replaceAll('&#39;', "'").replaceAll('&quot;', '"');
const collections = new Map([
  ['introductory-rites','know-the-mass/introductory-rites'],
  ['entering-church','know-the-mass/entering-church'],
  ['liturgy-of-the-word','know-the-mass/liturgy-of-the-word'],
  ['liturgy-of-the-eucharist','know-the-mass/liturgy-of-the-eucharist'],
  ['concluding-rites','know-the-mass/concluding-rites'],
  ['liturgical-signs','know-the-mass/liturgical-signs'],
  ['gods-plan-of-salvation','know-the-faith/gods-plan-of-salvation']
]);
test('ten Mass and ten Faith articles plus the original and salvation overview', () => {
  assert.equal(articles.length, 22);
  assert.equal(articles.filter(a => a.topicId === 'gods-plan-of-salvation').length, 11);
  assert.equal(articles.filter(a => a.topicId !== 'gods-plan-of-salvation').length, 11);
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
    for (const collection of [collections.get(article.topicId), article.topicId === 'gods-plan-of-salvation' ? 'know-the-faith' : 'know-the-mass', 'family-lessons']) {
      const listing = read(collection);
      assert.ok(listing.includes(`href="/${route}"`), collection);
      assert.ok(listing.includes(`href="/${route}/family-lesson"`), collection);
      assert.ok(listing.includes('Read this article →'));
      assert.ok(listing.includes('Learn as a family →'));
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
