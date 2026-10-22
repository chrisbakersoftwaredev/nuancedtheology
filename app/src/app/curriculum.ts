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
    {title: 'The beginning', published: ['gods-plan-of-salvation-overview', 'creation-and-gods-friendship'], planned: [
      {title: 'The Fall and our need for a Savior', note: 'Introduced in the creation article; a dedicated lesson is planned.'}
    ]},
    {title: 'God’s covenants', published: ['covenant-with-noah', 'covenant-with-abraham', 'covenant-with-moses', 'covenant-with-david'], planned: []},
    {title: 'The prophets and Jesus Christ', published: ['promises-pointing-to-jesus', 'life-of-jesus'], planned: [
      {title: 'The Incarnation', note: 'Introduced in Jesus’ life; a dedicated lesson is planned.'}
    ]},
    {title: 'Salvation through Christ', published: ['new-covenant-in-jesus', 'death-burial-and-resurrection', 'new-life-in-christ'], planned: []},
    {title: 'The Church and her mission', published: [], planned: [
      {title: 'Christ establishes his Church', note: 'Future lesson on the Church’s foundation and apostolic mission.'},
      {title: 'Pentecost and the Holy Spirit', note: 'Future lesson on the Spirit and the life of the Church.'},
      {title: 'The Church: Body of Christ and sacramental life', note: 'Future conclusion connecting the Church’s nature and mission to the Mass.'}
    ]}
  ],
  nextId: 'mass',
  gap: 'The Church and Pentecost lessons are still planned. This published sequence does not yet complete the journey through the Church. For now, you can continue with the available Mass lessons.',
  transition: 'The Church gathers to hear God’s Word and celebrate the Holy Sacrifice of the Mass, where Christ is truly present, most especially in the Eucharist.'
}, {
  id: 'mass', areaId: 'mass', title: 'Know the Mass', path: '/know-the-mass',
  phases: [
    {title: 'Preparing for Mass and entering church', published: ['holy-water', 'tabernacle', 'genuflection', 'altar', 'vestments', 'liturgical-colors'], planned: [
      {title: 'Preparing our hearts for Mass', note: 'A dedicated introduction to preparation and prayer is planned. The altar, vestments, and colors are background lessons, not extra rites.'}
    ]},
    {title: 'The Introductory Rites', published: ['sign-of-the-cross', 'penitential-act'], planned: [
      {title: 'The entrance, greeting, Gloria, and Collect', note: 'Further lessons on the opening prayers are planned.'}
    ]},
    {title: 'The Liturgy of the Word', published: ['standing-for-the-gospel'], planned: [
      {title: 'The readings, Psalm, homily, Creed, and Universal Prayer', note: 'Further lessons on listening and responding to God’s Word are planned.'}
    ]},
    {title: 'The Liturgy of the Eucharist', published: ['eucharist-real-presence'], planned: [
      {title: 'The preparation of the gifts and the Eucharistic Prayer', note: 'A fuller account of the Eucharistic celebration and Christ’s one sacrifice is planned.'}
    ]},
    {title: 'The Communion Rite', published: [], planned: [
      {title: 'The Lord’s Prayer, peace, and Lamb of God', note: 'Dedicated Communion Rite lessons are planned.'},
      {title: 'Receiving Holy Communion and giving thanks', note: 'A lesson on preparation, reception, and thanksgiving is planned; the Real Presence article is not a full explanation of this rite.'}
    ]},
    {title: 'The Concluding Rites', published: ['dismissal'], planned: [
      {title: 'The final blessing', note: 'A dedicated lesson is planned.'}
    ]}
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
