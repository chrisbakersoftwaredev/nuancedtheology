const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../dist/nuanced-theology/browser');
const read = route => fs.readFileSync(path.join(root, route, 'index.html'), 'utf8');
const pages = [
  ['', 'Understand your faith.'],
  ['know-the-mass', 'Know the Mass'],
  ['know-the-mass/introductory-rites', 'Introductory Rites'],
  ['family-lessons', 'Family Lessons'],
  ['articles/sign-of-the-cross', 'Why do Catholics make the Sign of the Cross?'],
  ['articles/sign-of-the-cross/family-lesson', 'Why do Catholics make the Sign of the Cross?']
];
for (const [route, title] of pages) {
  test(`prerendered /${route} has unique main heading and useful metadata`, () => {
    const html = read(route);
    assert.equal((html.match(/<h1(?:\s[^>]*)?>/g) || []).length, 1);
    assert.ok(html.includes(title));
    assert.match(html, /<meta name="description" content="[^\"]+"/);
    assert.ok(/<title>[^<]*nuancedTheology[^<]*<\/title>/.test(html), "page title");
    assert.ok(!html.includes('href="/family-lessons"'), 'family lessons are accessed from lesson buttons');
    assert.ok(html.includes('href="/know-the-mass/introductory-rites"'));
    for (const unpublished of ['/know-the-faith', '/apologetics', '/ocia', '/reflections']) {
      assert.ok(!html.includes(`href="${unpublished}"`), `unpublished navigation: ${unpublished}`);
    }
  });
}
test('collections link to the same canonical article and printable', () => {
  for (const route of ['', 'know-the-mass', 'know-the-mass/introductory-rites', 'family-lessons']) {
    const html = read(route);
    assert.ok(html.includes('href="/articles/sign-of-the-cross"'));
    assert.ok(html.includes('href="/articles/sign-of-the-cross/family-lesson"'));
  }
});
test('article and printable retain the shared explanation and parent guidance', () => {
  const article = read('articles/sign-of-the-cross');
  const lesson = read('articles/sign-of-the-cross/family-lesson');
  for (const phrase of ['Have you ever watched someone', 'A reminder that you matter', 'We do not have to earn God’s love.']) {
    assert.ok(article.includes(phrase)); assert.ok(lesson.includes(phrase));
  }
  assert.ok(lesson.includes('Jesus, through whom the whole world was made, died for you and rose from the dead.'));
  for (const section of ['Let’s Learn', 'Let’s Talk', 'Let’s Remember', 'Let’s Practice', 'Let’s Pray', 'For Parents']) assert.ok(lesson.includes(section));
  assert.equal((lesson.match(/<li><h3>/g)||[]).length,3);
  const ids = new Set(Array.from(article.matchAll(/id="(source-[^"]+)"/g),match=>match[1]));
  for (const match of article.matchAll(/href="\/articles\/sign-of-the-cross#(source-[^"]+)"/g)) assert.ok(ids.has(match[1]),match[1]);
  assert.ok(article.includes('Awaiting theological review'));
  assert.ok(lesson.includes('No ecclesiastical approval is claimed.'));
});
