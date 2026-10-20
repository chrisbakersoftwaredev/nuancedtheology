import type { Article, Source } from './content';

export const bible = (book: string, chapter: number, verses: string, note: string): Source => ({
  id: `${book}-${chapter}`, label: `${book === '2samuel' ? '2 Samuel' : book === '1corinthians' ? '1 Corinthians' : book[0].toUpperCase() + book.slice(1)} ${chapter}:${verses}`,
  url: `https://bible.usccb.org/bible/${book}/${chapter}`, note
});
export const catechism = (path: string, numbers: string, note: string): Source => ({
  id: 'catechism', label: `Catechism ${numbers}`, url: `https://www.vatican.va/content/catechism/en/${path}.html`, note
});
export const girm = (chapter: number, numbers: string, note: string): Source => ({
  id: 'missal', label: `General Instruction of the Roman Missal ${numbers}`,
  url: `https://www.usccb.org/prayer-and-worship/the-mass/general-instruction-of-the-roman-missal/girm-chapter-${chapter}`, note
});
interface LessonSeed {
  slug: string; title: string; summary: string; topicId: string; keywords: string[];
  sources: Source[];
  sections: [string, string[], string[]][];
  questions: [string, string][];
  remember: string; practice: string; prayer: string; parentGuidance: string;
}
// The printable always reads the article's explanation, keeping both versions in sync.
export function lesson(seed: LessonSeed): Article {
  const words = seed.sections.flatMap(section => section[1]).join(' ').split(/\s+/).length;
  return {
    slug: seed.slug, title: seed.title, summary: seed.summary, topicId: seed.topicId,
    keywords: seed.keywords, readMinutes: Math.max(2, Math.ceil(words / 170)),
    sections: seed.sections.map(([title, paragraphs, sourceIds]) => ({title, paragraphs, sourceIds})),
    sources: seed.sources,
    deeperResources: seed.sources.slice(0, 2).map((source, index) => ({level: index === 0 ? 2 : 3, sourceId: source.id, description: `Read more: ${source.label}`})),
    revision: {date: '2026-10-19', version: 1, status: 'Awaiting theological review'},
    lesson: {parentSourceIds: seed.sources.map(source => source.id), parentGuidance: seed.parentGuidance,
      questions: seed.questions.map(([question, guidance]) => ({question, guidance})),
      remember: seed.remember, practice: seed.practice, prayer: seed.prayer}
  };
}
