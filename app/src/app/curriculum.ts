import type { Article } from './content';

export interface PlannedLesson { title: string; note: string; }
export interface CurriculumPhase { title: string; published: string[]; planned: PlannedLesson[]; }
export interface Curriculum {
  id: string; areaId: string; title: string; path: string;
  phases: CurriculumPhase[]; nextId?: string; transition?: string; gap?: string;
}

// The only source of teaching order. Planned lessons have no slug or live route.
export const curricula: Curriculum[] = [{
  id: 'salvation', areaId: 'faith', title: 'God’s Plan of Salvation', path: '/know-the-faith/gods-plan-of-salvation',
  phases: [
    {title: 'The beginning', published: ['gods-plan-of-salvation-overview', 'creation-and-gods-friendship', 'the-fall-and-our-savior'], planned: []},
    {title: 'God’s covenants', published: ['covenant-with-noah', 'covenant-with-abraham', 'covenant-with-moses', 'covenant-with-david'], planned: []},
    {title: 'The prophets and Jesus Christ', published: ['promises-pointing-to-jesus', 'the-incarnation', 'life-of-jesus'], planned: []},
    {title: 'Salvation through Christ', published: ['new-covenant-in-jesus', 'death-burial-and-resurrection', 'new-life-in-christ'], planned: []},
    {title: 'The Church and her mission', published: ['christ-establishes-his-church', 'pentecost-and-the-holy-spirit', 'church-body-of-christ'], planned: []}
  ],
  nextId: 'mass',
  transition: 'The Church gathers to hear God’s Word and celebrate the Holy Sacrifice of the Mass, where Christ is truly present, most especially in the Eucharist.'
}, {
  id: 'mass', areaId: 'mass', title: 'Know the Mass', path: '/know-the-mass',
  phases: [
    {title: 'Preparing for Mass and entering church', published: ['preparing-for-mass', 'holy-water', 'tabernacle', 'genuflection', 'altar', 'vestments', 'liturgical-colors'], planned: []},
    {title: 'The Introductory Rites', published: ['entrance-and-greeting', 'sign-of-the-cross', 'penitential-act', 'gloria-and-collect'], planned: []},
    {title: 'The Liturgy of the Word', published: ['readings-and-psalm', 'standing-for-the-gospel', 'homily-creed-and-prayers'], planned: []},
    {title: 'The Liturgy of the Eucharist', published: ['preparation-of-the-gifts', 'the-eucharistic-prayer', 'eucharist-real-presence'], planned: []},
    {title: 'The Communion Rite', published: ['prayer-peace-and-lamb-of-god', 'holy-communion-and-thanksgiving'], planned: []},
    {title: 'The Concluding Rites', published: ['final-blessing', 'dismissal'], planned: []}
  ]
}];

export const publishedSlugs = (sequence: Curriculum) => sequence.phases.flatMap(phase => phase.published);
export function curriculumPosition(slug: string) {
  for (const sequence of curricula) {
    const slugs = publishedSlugs(sequence);
    const index = slugs.indexOf(slug);
    if (index !== -1) return {sequence, number: index + 1, total: slugs.length};
  }
  return undefined;
}
export function nextLesson(slug: string) {
  const position = curriculumPosition(slug);
  if (!position) return undefined;
  const slugs = publishedSlugs(position.sequence);
  if (position.number < slugs.length) return {slug: slugs[position.number], crossCollection: false};
  const following = curricula.find(sequence => sequence.id === position.sequence.nextId);
  const first = following && publishedSlugs(following)[0];
  return first ? {slug: first, crossCollection: true} : undefined;
}
export function orderArticles(entries: readonly Article[]) {
  const rank = new Map(curricula.flatMap(publishedSlugs).map((slug, index) => [slug, index]));
  return [...entries].sort((a, b) => (rank.get(a.slug) ?? Number.MAX_SAFE_INTEGER) - (rank.get(b.slug) ?? Number.MAX_SAFE_INTEGER));
}
