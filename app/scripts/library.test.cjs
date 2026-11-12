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
  ['gestures-and-postures','know-the-mass/gestures-and-postures'],
  ['sacraments','sacraments'],
  ['introductory-rites','know-the-mass/introductory-rites'],
  ['entering-church','know-the-mass/entering-church'],
  ['liturgy-of-the-word','know-the-mass/liturgy-of-the-word'],
  ['liturgy-of-the-eucharist','know-the-mass/liturgy-of-the-eucharist'],
  ['concluding-rites','know-the-mass/concluding-rites'],
  ['living-the-faith','know-the-faith/living-the-faith/everyday-life'],
  ['beatitudes','know-the-faith/living-the-faith/beatitudes'],
  ['prayers-at-mass','know-the-mass/prayers-at-mass'],
  ['gods-plan-of-salvation','know-the-faith/gods-plan-of-salvation']
]);
test('complete Faith and Mass curricula', () => {
  assert.equal(articles.length, 66);
  assert.equal(articles.filter(a => ['gods-plan-of-salvation', 'living-the-faith'].includes(a.topicId)).length, 21);
  assert.equal(articles.filter(a => !['gods-plan-of-salvation', 'living-the-faith', 'beatitudes', 'sacraments'].includes(a.topicId)).length, 29);
  assert.equal(new Set(articles.map(a => a.slug)).size, articles.length);
});
for (const article of articles) {
  test(`${article.slug}: complete, cited, discoverable article and shared printable`, () => {
    assert.match(article.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(collections.has(article.topicId));
    const overview = article.slug === 'gods-plan-of-salvation-overview';
    assert.ok(overview ? article.sections.length === 1 && article.sections[0].paragraphs.length === 1 : article.sections.length >= 3);
    const words = article.sections.flatMap(s => s.paragraphs).join(' ').split(/\s+/).length;
    assert.ok(overview ? words >= 100 && words <= 180 : words >= (['sacraments','prayers-at-mass'].includes(article.topicId) ? 110 : article.topicId === 'gestures-and-postures' ? 160 : 200));
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
    for (const section of article.sections) {
      for (const paragraph of section.paragraphs) assert.ok(text(page).includes(paragraph), `article paragraph: ${section.title}`);
      for (const paragraph of section.familyParagraphs ?? section.paragraphs) {
        assert.ok(text(printable).includes(paragraph), `family lesson paragraph: ${section.title}`);
      }
    }
    const anchors = new Set(Array.from(page.matchAll(/id="(source-[^"]+)"/g), m => m[1]));
    for (const match of page.matchAll(/href="[^"]*#(source-[^"]+)"/g)) assert.ok(anchors.has(match[1]), match[1]);
    for (const section of ['Let’s Learn','Let’s Talk','Let’s Remember','Let’s Practice','Let’s Pray','For Parents']) assert.ok(printable.includes(section));
    assert.equal((printable.match(/<li><h3>/g)||[]).length, 3);
    assert.ok(printable.includes('No ecclesiastical approval is claimed.'));
    assert.ok(page.includes('Learn as a family →'));
    assert.ok(!page.includes('Print Family Lesson →'));
    assert.match(printable, /Print selected pages/);
    for (const collection of new Set([collections.get(article.topicId), article.topicId === 'gods-plan-of-salvation' ? collections.get(article.topicId) : ['living-the-faith','beatitudes'].includes(article.topicId) ? 'know-the-faith/living-the-faith' : article.topicId === 'sacraments' ? 'sacraments' : 'know-the-mass', 'family-lessons'])) {
      const listing = read(collection);
      const suffix = collection === 'family-lessons' ? '/family-lesson' : collection === 'know-the-mass/prayers-at-mass' ? '?from=prayers-at-mass' : '';
      assert.ok(listing.includes(`href="/${route}${suffix}"`), collection);
      assert.ok(!listing.includes('id="collection-search"'));
      assert.ok(!listing.includes('Lessons in this collection'));
      assert.ok(!listing.includes('Read the lesson →'));
      assert.ok(!listing.includes('Print Family Lesson →'));
    }
  });
}
test('collections prerender and expose only published navigation', () => {
  for (const route of ['', 'know-the-mass', 'family-lessons', ...collections.values()]) {
    const html = read(route);
    assert.equal((html.match(/<h1(?:\s[^>]*)?>/g)||[]).length, 1);
    assert.ok(html.includes('href="/know-the-faith/gods-plan-of-salvation"'));
    for (const unpublished of ['/apologetics','/ocia','/reflections']) assert.ok(!html.includes(`href="${unpublished}"`));
  }
});
test('original parent guidance is preserved', () => {
  assert.ok(read('articles/sign-of-the-cross/family-lesson').includes('Jesus, through whom the whole world was made, died for you and rose from the dead.'));
});

test('Faith appears before Mass in navigation and homepage collections', () => {
  const home = read('');
  assert.ok(home.indexOf('href="/know-the-faith/gods-plan-of-salvation"') < home.indexOf('href="/know-the-mass"'));
  const cards = home.slice(home.indexOf('class="library-area-card"'));
  assert.ok(cards.indexOf('href="/know-the-faith/gods-plan-of-salvation"') < cards.indexOf('href="/know-the-mass"'));
  assert.ok(read('know-the-faith/gods-plan-of-salvation').includes('God’s Plan of Salvation'));
});

test('old Know the Faith and Creed links redirect to God’s Plan of Salvation', () => {
  assert.ok(read('know-the-faith').includes('content="0; url=/know-the-faith/gods-plan-of-salvation"'));
  const legacy = read('know-the-faith/the-creed');
  assert.ok(legacy.includes('http-equiv="refresh"'));
  assert.ok(legacy.includes('content="0; url=/know-the-faith/gods-plan-of-salvation"'));
  assert.ok(!legacy.includes('/know-the-faith/know-the-faith/'));
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
  assert.equal(sequence.at(-1), 'following-christ-in-daily-choices');
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
        assert.equal(article.slug, 'following-christ-in-daily-choices');
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
  assert.ok(read('articles/church-body-of-christ').includes('href="/articles/holy-water"'));
  assert.ok(read('articles/eucharist-real-presence').includes('href="/articles/prayer-peace-and-lamb-of-god"'));
});
test('homepage warns about construction and lack of Church approval', () => {
  const home = read('');
  assert.ok(home.includes('Under construction'));
  assert.ok(home.includes('None of the articles has been approved by any authority of the Catholic Church.'));
  assert.ok(home.indexOf('construction-notice') < home.indexOf('<h1'));
  assert.match(home, /type="search"/);
});

test('the journey moves from salvation through Mass and the sacraments into daily life', () => {
  assert.deepEqual(curricula.map(sequence => sequence.id), ['salvation', 'mass', 'sacraments', 'living']);
  assert.deepEqual(curricula.map(sequence => publishedSlugs(sequence).length), [16, 29, 8, 13]);
  assert.equal(nextLesson('pentecost-and-the-holy-spirit').slug, 'church-body-of-christ');
  assert.equal(nextLesson('church-body-of-christ').slug, 'holy-water');
  assert.equal(nextLesson('dismissal').slug, 'what-is-a-sacrament');
  assert.equal(nextLesson('sacrament-of-matrimony').slug, 'beatitude-poor-in-spirit');
  assert.equal(nextLesson('following-christ-in-daily-choices'), undefined);
  assert.ok(read('know-the-faith/gods-plan-of-salvation').includes('A First Look at the Church'));
  assert.ok(read('know-the-faith/the-church').includes('/know-the-faith/gods-plan-of-salvation'));
  assert.ok(read('articles/church-body-of-christ').includes('source and summit'));
  assert.ok(read('articles/following-christ-in-daily-choices').includes('future Catechism section'));
});

// Independent expected itinerary: catches a valid-looking but editorially wrong Next link.
const expectedJourney = [
  'creation-and-gods-friendship', 'the-fall-and-our-savior', 'gods-plan-of-salvation-overview',
  'covenant-with-noah', 'covenant-with-abraham', 'covenant-with-moses', 'covenant-with-david',
  'promises-pointing-to-jesus', 'the-incarnation', 'life-of-jesus', 'new-covenant-in-jesus',
  'death-burial-and-resurrection', 'the-ascension-of-jesus', 'christ-establishes-his-church', 'pentecost-and-the-holy-spirit',
  'church-body-of-christ', 'holy-water', 'tabernacle',
  'altar', 'vestments', 'liturgical-colors',
  'sign-of-the-cross', 'small-crosses-before-the-gospel', 'raised-hands-in-prayer', 'genuflection', 'bowing-at-mass', 'entrance-and-greeting',
  'penitential-act', 'gloria-and-collect', 'readings-and-psalm', 'standing-for-the-gospel',
  'homily-creed-and-prayers', 'nicene-creed', 'preparation-of-the-gifts', 'the-eucharistic-prayer',
  'lift-up-your-hearts', 'sanctus', 'mystery-of-faith', 'great-amen',
  'eucharist-real-presence', 'prayer-peace-and-lamb-of-god', 'lord-i-am-not-worthy', 'holy-communion-and-thanksgiving',
  'final-blessing', 'dismissal',
  'what-is-a-sacrament', 'sacrament-of-baptism', 'sacrament-of-confirmation', 'sacrament-of-the-eucharist', 'sacrament-of-reconciliation', 'sacrament-of-anointing', 'sacrament-of-holy-orders', 'sacrament-of-matrimony',
  'beatitude-poor-in-spirit', 'beatitude-those-who-mourn', 'beatitude-the-meek', 'beatitude-hunger-for-righteousness', 'beatitude-the-merciful', 'beatitude-pure-in-heart', 'beatitude-peacemakers', 'beatitude-persecuted-for-righteousness',
  'new-life-in-christ', 'faith-works-and-repentance', 'baptism-and-sanctifying-grace',
  'prayer-faith-hope-and-love', 'following-christ-in-daily-choices'
];
test('published Next destinations match the approved itinerary without loops', () => {
  assert.deepEqual(curricula.flatMap(publishedSlugs), expectedJourney);
  for (const family of [false, true]) {
    const seen = new Set();
    let slug = expectedJourney[0];
    for (let index = 0; index < expectedJourney.length; index++) {
      assert.equal(slug, expectedJourney[index]);
      assert.ok(!seen.has(slug)); seen.add(slug);
      const suffix = family ? '/family-lesson' : '';
      const html = read(`articles/${slug}${suffix}`);
      const nav = html.match(/<nav[^>]*class="curriculum-next screen-only"[\s\S]*?<\/nav>/)?.[0];
      assert.ok(nav);
      const nextAnchor = nav.match(/<a\b[^>]*>Next →<\/a>/)?.[0];
      const destination = nextAnchor?.match(/href="([^"]+)"/)?.[1];
      const next = expectedJourney[index + 1];
      if (!next) { assert.equal(destination, undefined); break; }
      assert.equal(destination, `/articles/${next}${suffix}`);
      assert.ok(read(destination.slice(1)).includes('<h1'));
      slug = destination.split('/')[2];
    }
    assert.equal(seen.size, articles.length);
  }
});
test('shared primary menus follow the journey and show six ordered Mass sections', () => {
  const home = read('');
  const menus = [...home.matchAll(/<nav[^>]*aria-label="Learning library"[^>]*>([\s\S]*?)<\/nav>/g)];
  assert.equal(menus.length, 2, 'desktop sidebar and mobile drawer');
  for (const [,menu] of menus) {
    for (const route of ['know-the-faith/gods-plan-of-salvation', 'know-the-faith/living-the-faith', 'know-the-mass']) assert.ok(menu.includes(`href="/${route}"`));
    const massIndex = menu.indexOf('href="/know-the-mass"');
    assert.ok(!menu.includes('href="/know-the-faith"'));
    const sacraments = menu.indexOf('href="/sacraments"');
    assert.ok(massIndex < sacraments && sacraments < menu.indexOf('href="/know-the-faith/living-the-faith"'));
    assert.ok(!menu.includes('href="/know-the-mass/entering-church"'));
    assert.ok(!menu.includes('href="/know-the-faith/living-the-faith/beatitudes"'));
  }
  const massMenus = [...read('know-the-mass').matchAll(/<nav[^>]*aria-label="Learning library"[^>]*>([\s\S]*?)<\/nav>/g)];
  for (const [,menu] of massMenus) {
    let previous = menu.indexOf('href="/know-the-mass"');
    for (const route of ['entering-church','gestures-and-postures','introductory-rites','liturgy-of-the-word','liturgy-of-the-eucharist','concluding-rites']) {
      const index = menu.indexOf(`href="/know-the-mass/${route}"`);
      assert.ok(index > previous, route); previous = index;
      const section = read('know-the-mass/'+route);
      assert.ok(section.includes('aria-labelledby="section-summary-heading"'));
      assert.ok(section.includes('A quick summary'));
      assert.ok(section.indexOf('section-summary-heading') < section.indexOf('>Start Learning</a>'));
    }
  }
  for (const route of collections.values()) assert.ok(read(route).includes('<h1'));
});
const {reviewStage, reviewStatusLabel} = require('../src/app/review-status.ts');
test('all current articles are Drafted and reviews require version-specific evidence', () => {
  for (const article of articles) {
    assert.equal(article.revision.status, 'Drafted');
    assert.equal(reviewStage(article), 'Drafted');
    assert.ok(read(`articles/${article.slug}`).includes('Drafted · Awaiting theological review'));
  }
  const sample = {...articles[0], revision: {...articles[0].revision, status: 'Editorially Reviewed', reviewer: 'Test reviewer', reviewedOn: '2026-10-23', reviewedVersion: articles[0].revision.version, note: 'Test fixture only'}};
  assert.equal(reviewStage(sample), 'Editorially Reviewed');
  assert.ok(reviewStatusLabel(sample).includes('Awaiting theological review'));
  assert.equal(reviewStage({...sample, revision: {...sample.revision, reviewedVersion: 0}}), 'Drafted');
  assert.equal(reviewStage({...sample, revision: {...sample.revision, reviewer: ''}}), 'Drafted');
});
test('print rules exclude curriculum navigation and retain family sections', () => {
  const styles = fs.readFileSync(path.resolve(__dirname, '../src/styles.css'),'utf8') + fs.readFileSync(path.resolve(__dirname, '../src/library.css'),'utf8');
  assert.match(styles, /@media print\{nt-curriculum-position,nt-curriculum-navigation/);
  assert.match(styles, /\.screen-only[^}]*display:none!important/);
  assert.match(styles, /\.discussion-page\{break-before:page/);
});

test('generated pages contain every internal link destination, including Next and fragments', () => {
  const pages = [];
  function visit(directory) {
    for (const entry of fs.readdirSync(directory, {withFileTypes:true})) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) visit(file);
      else if (entry.name === 'index.html') pages.push(file);
    }
  }
  visit(root);
  const targets = new Set();
  for (const page of pages) {
    const route = '/' + path.relative(root, path.dirname(page)).split(path.sep).join('/');
    const html = fs.readFileSync(page,'utf8');
    for (const [,href] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
      if (/^(https?:|mailto:|tel:)/.test(href)) continue;
      assert.ok(!/^(javascript:|data:)/i.test(href));
      const target = new URL(href, 'http://localhost' + route);
      targets.add(target.pathname + target.hash);
    }
    const redirect = html.match(/http-equiv="refresh"[^>]*content="[^"]*url=([^"]+)"/i)?.[1];
    if (redirect) targets.add(new URL(redirect,'http://localhost').pathname);
  }
  const failures = [];
  for (const target of targets) {
    const url = new URL(target, 'http://localhost');
    const file = path.join(root, decodeURIComponent(url.pathname), 'index.html');
    if (!fs.existsSync(file)) {
      failures.push(target + ': missing page');
      continue;
    }
    if (url.hash) {
      const fragment = decodeURIComponent(url.hash.slice(1));
      const html = fs.readFileSync(file, 'utf8');
      if (!html.includes('id="' + fragment + '"')) failures.push(target + ': missing fragment');
    }
  }
  assert.deepEqual(failures, []);
  assert.equal(pages.length, 165);
  console.log('Verified ' + targets.size + ' internal link targets across ' + pages.length + ' static pages.');
});

test('Mass has six family-friendly sections while preserving its lesson itinerary', () => {
  const mass = curricula.find(sequence => sequence.id === 'mass');
  assert.deepEqual(mass.phases.map(phase => phase.title), ['Before Mass Begins','Gestures and Postures at Mass','The Beginning of Mass','Bible Readings','The Eucharist','The End of Mass']);
  const landing = read('know-the-mass');
  let previous = -1;
  for (const phase of mass.phases) {
    assert.ok(phase.introduction);
    const index = landing.indexOf('. ' + phase.title + '</h3>');
    assert.ok(index > previous, phase.title); previous = index;
    assert.ok(text(landing).includes(phase.introduction));
  }
  assert.equal(publishedSlugs(mass).length, 29);
  assert.ok(read('know-the-mass/liturgy-of-the-eucharist').includes('Eucharist means thanksgiving.'));
  for (const slug of ['prayer-peace-and-lamb-of-god','holy-communion-and-thanksgiving']) assert.ok(read('know-the-mass/liturgy-of-the-eucharist').includes(`href="/articles/${slug}"`));
});
test('old Mass URLs redirect without breaking bookmarks', () => {
  for (const route of ['articles/preparing-for-mass', 'articles/preparing-for-mass/family-lesson']) {
    assert.ok(read(route).includes('content="0; url=/know-the-mass/entering-church"'));
  }
  for (const [old,target] of [['liturgical-signs','entering-church'],['communion-rite','liturgy-of-the-eucharist']]) {
    assert.ok(read('know-the-mass/'+old).includes(`content="0; url=/know-the-mass/${target}"`));
    assert.ok(read('know-the-mass/'+target).includes('<h1'));
  }
});
test('Mass articles teach essential terminology inline and qualify variable practices', () => {
  const body = slug => articles.find(article => article.slug === slug).sections.flatMap(section => section.paragraphs).join(' ');
  const checks = {
    'entrance-and-greeting':['a procession is','Introductory Rites'],
    'genuflection':['called a genuflection','depends on where the Blessed Sacrament is reserved'],
    'penitential-act':['several approved forms','Kyrie means'],
    'gloria-and-collect':['Gloria is Latin','called the Collect','Sundays outside Advent and Lent'],
    'readings-and-psalm':['Bible is also called Scripture','This is the Responsorial Psalm','typical Sunday Mass'],
    'homily-creed-and-prayers':['This explanation is the homily','recommended on other days','Creed, meaning a profession of faith','Universal Prayer','Intercession means'],
    'the-eucharistic-prayer':['Eucharist means thanksgiving','This is the consecration'],
    'prayer-peace-and-lamb-of-god':['Communion Rite','invitation to exchange a sign of peace may be omitted','Fraction Rite']
  };
  for (const [slug,phrases] of Object.entries(checks)) for (const phrase of phrases) assert.ok(body(slug).includes(phrase), `${slug}: ${phrase}`);
  for (const article of articles.filter(article => article.topicId !== 'gods-plan-of-salvation' && !['living-the-faith','the-church'].includes(article.topicId))) {
    assert.ok(article.discussionQuestion?.endsWith('?'), article.slug);
    const page = read('articles/'+article.slug);
    assert.ok(page.includes('Talk About It Together'));
    assert.ok(text(page).includes(article.discussionQuestion));
    assert.equal((read('articles/'+article.slug+'/family-lesson').match(/<li><h3>/g)||[]).length,3);
  }
});

test('every family lesson has a contextual Scripture reading before its explanation', () => {
  const {chapterSummaries} = require('../src/app/chapter-summaries.ts');
  const {familyReadings} = require('../src/app/family-readings.ts');
  const {scripturePassages} = require('../src/app/scripture-passages.ts');
  const lessons = [...articles, ...chapterSummaries];
  assert.deepEqual(Object.keys(familyReadings).sort(), lessons.map(article => article.slug).sort());
  for (const article of lessons) {
    const reading = familyReadings[article.slug];
    assert.ok(reading.introduction.trim().length > 30, article.slug);
    assert.ok(reading.question.endsWith('?'), article.slug);
    const passage = scripturePassages[reading.reference];
    assert.ok(passage, article.slug);
    if (article.slug === 'liturgical-colors') {
      assert.deepEqual(passage.verses.map(([number]) => number), [24, 25]);
    } else {
      assert.ok(passage.verses.length >= 3 && passage.verses.length <= 10, article.slug);
    }
    assert.equal(new Set(passage.verses.map(([number]) => number)).size, passage.verses.length);
    const page = read('articles/' + article.slug + '/family-lesson');
    const start = page.indexOf('class="family-scripture"');
    const explanation = page.indexOf('>Let’s Learn</h2>');
    assert.ok(start >= 0 && start < explanation, article.slug);
    const readingBlock = text(page.slice(start, explanation));
    for (const value of [reading.reference, reading.introduction, reading.question, ...passage.verses.map(([,verse]) => verse)]) {
      assert.ok(readingBlock.includes(value), article.slug + ': missing reading content');
    }
    if (reading.longer) {
      assert.ok(scripturePassages[reading.longer.label]?.verses.length, article.slug);
      assert.ok(readingBlock.includes('Optional longer reading ' + reading.longer.label), article.slug);
    }
    assert.equal((page.match(/aria-label="Read God’s Word"/g) || []).length, 1, article.slug);
    assert.ok(page.includes('Print selected pages'));
    assert.equal((page.match(/<li><h3>/g) || []).length, 3, article.slug);
  }
});

test('Beatitudes lead Living the Faith and preserve the three educational areas', () => {
  const {beatitudeArticles} = require('../src/app/beatitude-articles.ts');
  assert.equal(beatitudeArticles.length, 8);
  assert.equal(new Set(beatitudeArticles.map(article => article.slug)).size, 8);
  const landing = read('know-the-faith/living-the-faith');
  let previous = -1;
  for (const article of beatitudeArticles) {
    const current = landing.indexOf('href="/articles/' + article.slug + '"');
    assert.ok(current > previous, article.slug);
    previous = current;
    assert.equal(article.topicId, 'beatitudes');
    assert.equal(article.revision.status, 'Drafted');
    assert.deepEqual(article.sections.map(section => section.title), ['Scripture','Understanding the Teaching','Catholic Understanding','Living the Beatitude','Prayer']);
    assert.ok(article.sources.some(source => source.label === 'Catechism 1716–1717'));
    assert.ok(read('articles/' + article.slug).includes('Learn as a family'));
  }
  assert.ok(previous < landing.indexOf('href="/articles/new-life-in-christ"'));
  for (const name of ['Works of Mercy','Theological Virtues','Fruits of the Holy Spirit']) assert.ok(landing.includes(name));
  const home = read('');
  assert.ok(home.includes('Helping Catholic families understand what we believe, why we worship, and how we live our faith together.'));
  const menu = home.match(/<nav[^>]*aria-label="Learning library"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
  assert.ok(menu);
  for (const title of ['God’s Plan of Salvation','Understanding the Mass','Living the Faith']) assert.ok(menu.includes('>' + title + '</a>'));
  assert.ok(read('sacraments').includes('href="/articles/sacrament-of-baptism"'));
});

test('Family lessons offer coloring only when a static illustration is available', () => {
  const { chapterSummaries } = require('../src/app/chapter-summaries.ts');
  const { coloringPages } = require('../src/app/coloring-pages.ts');
  for (const { slug } of [...articles, ...chapterSummaries]) {
    const printable = read(`articles/${slug}/family-lesson`);
    const illustration = coloringPages[slug];
    if (illustration) {
      const choices = printable.match(/<input type="radio" name="family-print-content"[^>]*>/g) ?? [];
      assert.deepEqual(choices.map(choice => choice.match(/value="([^"]+)"/)[1]), ['lesson', 'both', 'coloring'], slug);
      assert.deepEqual(choices.filter(choice => choice.includes(' checked')).map(choice => choice.match(/value="([^"]+)"/)[1]), ['both'], slug);
      assert.match(printable, /class="reading-layout lesson-layout print-both"/);
      assert.ok(printable.includes(`src="/coloring/${illustration.filename}"`), slug);
      assert.match(printable, / · Name _+/);
      assert.ok(fs.existsSync(path.join(root, 'coloring', illustration.filename)));
    } else {
      assert.match(printable, /name="family-print-content" value="lesson" checked/);
      assert.ok(!/name="family-print-content" value="(?:coloring|both)"/.test(printable), slug);
      assert.ok(!printable.includes('src="/coloring/'), slug);
      assert.match(printable, /Print selected pages/);
    }
  }
});

test('the document applies a saved theme or system preference before styles load', () => {
  const { runInNewContext } = require('node:vm');
  const home = read('');
  const themeScript = [...home.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
    .find(match => match[1].includes("localStorage.getItem('nt-theme')"));
  assert.ok(themeScript);
  const firstStyles = home.search(/<style\b|<link[^>]+rel="stylesheet"/);
  assert.ok(firstStyles > themeScript.index);
  for (const [stored, systemDark, expected] of [
    [null, true, 'dark'], [null, false, 'light'],
    ['light', true, 'light'], ['dark', false, 'dark'], ['invalid', true, 'dark']
  ]) {
    const document = { documentElement: { dataset: {} } };
    runInNewContext(themeScript[1], {
      document,
      localStorage: { getItem: () => stored },
      matchMedia: () => ({ matches: systemDark })
    });
    assert.equal(document.documentElement.dataset.theme, expected);
  }
});

test('Prayers at Mass lists the eleven entries in order and prints the Sunday prompts', () => {
  const {massPrayers} = require('../src/app/mass-prayers.ts');
  const html = read('know-the-mass/prayers-at-mass');
  const list = html.match(/<ol class="mass-prayer-directory">([\s\S]*?)<\/ol>/)?.[1];
  assert.ok(list);
  const titles = [...list.matchAll(/<h2><a[^>]*>([^<]+)<\/a><\/h2>/g)].map(match => text(match[1]));
  assert.deepEqual(titles, ['Penitential Act','Gloria','Gospel Acclamation','Nicene Creed','Lift up your hearts',
    'Sanctus (Holy, Holy, Holy)','The Mystery of Faith','The Great Amen','The Our Father','Agnus Dei (Lamb of God)','Lord, I am not worthy']);
  assert.ok(read('know-the-mass').includes('href="/know-the-mass/prayers-at-mass"'));
  for (const prayer of massPrayers) {
    assert.ok(list.includes('href="' + prayer.wordsUrl + '"'), prayer.title);
    assert.ok(list.includes('href="/articles/' + prayer.slug + '?from=prayers-at-mass"'), prayer.title);
    assert.ok(list.includes('href="/articles/' + prayer.slug + '/family-lesson?from=prayers-at-mass"'), prayer.title);
    const printable = read('articles/' + prayer.slug + '/family-lesson');
    assert.ok(text(printable).includes(prayer.listen), prayer.title);
    assert.ok(text(printable).includes(prayer.question), prayer.title);
  }
});
