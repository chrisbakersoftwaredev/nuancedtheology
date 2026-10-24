import type { Article } from './content';

export interface PlannedLesson { title: string; note: string; }
export interface CurriculumPhase { title: string; introduction?: string; published: string[]; planned: PlannedLesson[]; }
export interface Curriculum {
  id: string; areaId: string; title: string; path: string;
  part?: number; description?: string; question?: string; transitionSource?: {url: string; label: string};
  phases: CurriculumPhase[]; nextId?: string; transition?: string; gap?: string;
}

// The only source of teaching order. Planned lessons have no slug or live route.
export const curricula: Curriculum[] = [{
  id: 'salvation', areaId: 'faith', part: 1, title: 'God’s Plan of Salvation', path: '/know-the-faith/gods-plan-of-salvation',
  description: 'Follow God’s saving work from creation and the Fall through his covenants to Jesus Christ and the gift of the Holy Spirit.',
  question: 'What has God done to save humanity?',
  phases: [
    {title: 'Creation and the Fall', published: ['creation-and-gods-friendship', 'the-fall-and-our-savior', 'gods-plan-of-salvation-overview'], planned: []},
    {title: 'God’s Covenants and Israel', published: ['covenant-with-noah', 'covenant-with-abraham', 'covenant-with-moses', 'covenant-with-david'], planned: []},
    {title: 'The Prophets and Jesus Christ', published: ['promises-pointing-to-jesus', 'the-incarnation', 'life-of-jesus'], planned: []},
    {title: 'Salvation Through Christ', published: ['new-covenant-in-jesus', 'death-burial-and-resurrection', 'christ-establishes-his-church', 'pentecost-and-the-holy-spirit'], planned: [
      {title: 'The Ascension of Jesus', note: 'Planned: a dedicated lesson connecting Christ’s Ascension, his reign, and the sending of the Spirit. The whole-story overview near the beginning provides orientation before the detailed covenant lessons.'}
    ]}
  ], nextId: 'living',
  gap: 'A dedicated Ascension lesson is still planned. Next continues with the published introduction to living by God’s grace.',
  transition: 'God’s saving love invites our response. Continue with the new life that his grace makes possible.'
}, {
  id: 'living', areaId: 'faith', part: 2, title: 'Living the Faith', path: '/know-the-faith/living-the-faith',
  description: 'Explore how God’s grace makes possible a life of faith, conversion, prayer, and love. This path is beginning with one published introduction.',
  question: 'How do we respond to God’s grace and live as Christians?',
  phases: [
    {title: 'Faith, Grace, and Conversion', published: ['new-life-in-christ'], planned: [{title: 'Faith, works, and repentance', note: 'Planned: our response depends on God’s grace; salvation is not earned by unaided effort.'}]},
    {title: 'The Sacraments and Christian Life', published: [], planned: [{title: 'Baptism and sanctifying grace', note: 'Planned: an introduction to sacramental life and God’s freely given gift.'}]},
    {title: 'Prayer and Growing in Holiness', published: [], planned: [{title: 'Prayer and the theological virtues', note: 'Planned: growing in faith, hope, and charity.'}]},
    {title: 'Morality, Virtue, and the Commandments', published: [], planned: [{title: 'Following Christ in daily choices', note: 'Planned: conscience, virtue, and the commandments in a life of grace.'}]}
  ], nextId: 'church',
  gap: 'Living the Faith currently has one published introduction. Its fuller chapters are planned; Next continues to the published Church lesson.',
  transition: 'Christian life is lived in communion with Christ and his people. Continue by learning about the Church as his Body.'
}, {
  id: 'church', areaId: 'faith', part: 3, title: 'The Church', path: '/know-the-faith/the-church',
  description: 'Discover the people Christ gathers, their apostolic foundation, and their mission of worship and service. A published introduction leads toward the Mass.',
  question: 'What is the Church that Christ established, and what does it mean to belong to her?',
  phases: [
    {title: 'The Church as the Body of Christ', published: ['church-body-of-christ'], planned: []},
    {title: 'The Apostles and Apostolic Succession', published: [], planned: [{title: 'The apostles and their successors', note: 'Planned: Christ’s entrusted authority and the continuing apostolic mission. Part 1 already introduces the Church’s foundation.'}]},
    {title: 'The Four Marks of the Church', published: [], planned: [{title: 'One, holy, catholic, and apostolic', note: 'Planned: what the Creed teaches about the Church.'}]},
    {title: 'The Church’s Mission and Worship', published: [], planned: [{title: 'Proclaiming the Gospel and celebrating the sacraments', note: 'Planned: a fuller conclusion about the Church’s mission and worship; the current Body of Christ lesson introduces this connection.'}]}
  ], nextId: 'mass',
  gap: 'The fuller Church chapters are still planned. The published introduction already connects the Church’s sacramental life to worship, so you can continue into Know the Mass.',
  transition: 'The Eucharist is the source and summit of Christian life. The Church gathers to hear God’s Word and celebrate the Holy Sacrifice of the Mass, where Christ’s one sacrifice is made sacramentally present and he is truly present in the Eucharist.',
  transitionSource: {url: 'https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/i_the_eucharist_source_and_summit_of_ecclesial_life.index.html', label: 'Catechism 1324'}
}, {
  id: 'mass', areaId: 'mass', title: 'Know the Mass', path: '/know-the-mass',
  phases: [
    {title: 'Before Mass Begins', introduction: 'Notice the church, its furnishings, and the gestures that help us prepare. These background lessons describe what we may see before Mass; they are not additional parts of the ceremony.', published: ['preparing-for-mass', 'holy-water', 'tabernacle', 'genuflection', 'altar', 'vestments', 'liturgical-colors'], planned: []},
    {title: 'The Beginning of Mass', introduction: 'We gather, make the Sign of the Cross, ask for mercy, and pray. The Church calls these opening prayers and actions the Introductory Rites. A rite is an established action or ceremony of worship.', published: ['entrance-and-greeting', 'sign-of-the-cross', 'penitential-act', 'gloria-and-collect'], planned: []},
    {title: 'Bible Readings', introduction: 'We listen to the Bible, hear its meaning explained, share our faith, and pray for others. This part is called the Liturgy of the Word. Liturgy means the Church’s public worship.', published: ['readings-and-psalm', 'standing-for-the-gospel', 'homily-creed-and-prayers'], planned: []},
    {title: 'The Eucharist', introduction: 'Eucharist means thanksgiving. In this part of Mass, called the Liturgy of the Eucharist, we offer thanks as Christ’s one sacrifice is made present and bread and wine become his Body and Blood. It includes the Communion Rite: the prayers and actions leading to receiving Christ and giving thanks.', published: ['preparation-of-the-gifts', 'the-eucharistic-prayer', 'eucharist-real-presence', 'prayer-peace-and-lamb-of-god', 'holy-communion-and-thanksgiving'], planned: []},
    {title: 'The End of Mass', introduction: 'We receive God’s blessing and are sent to love and serve. These final actions are called the Concluding Rites. Worship continues to shape our daily lives.', published: ['final-blessing', 'dismissal'], planned: []}
  ]
}];

export const publishedSlugs = (sequence: Curriculum) => sequence.phases.flatMap(phase => phase.published);
export function curriculumPosition(slug: string) {
  for (const sequence of curricula) {
    const slugs = publishedSlugs(sequence);
    const index = slugs.indexOf(slug);
    if (index !== -1) return {sequence, number: index + 1, total: slugs.length, chapter: sequence.phases.find(phase => phase.published.includes(slug))?.title};
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
