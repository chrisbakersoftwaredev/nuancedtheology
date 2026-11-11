import type { Article } from './content';

export interface PlannedLesson { title: string; note: string; }
export interface CurriculumPhase { anchor?: string; title: string; introduction?: string; published: string[]; planned: PlannedLesson[]; }
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
    {anchor: 'creation-and-the-fall', title: 'Creation and the Fall', published: ['creation-and-gods-friendship', 'the-fall-and-our-savior', 'gods-plan-of-salvation-overview'], planned: []},
    {anchor: 'covenants-and-israel', title: 'God’s Covenants and Israel', published: ['covenant-with-noah', 'covenant-with-abraham', 'covenant-with-moses', 'covenant-with-david'], planned: []},
    {anchor: 'prophets-and-jesus-christ', title: 'The Prophets and Jesus Christ', published: ['promises-pointing-to-jesus', 'the-incarnation', 'life-of-jesus'], planned: []},
    {anchor: 'salvation-through-christ', title: 'Salvation Through Christ', published: ['new-covenant-in-jesus', 'death-burial-and-resurrection', 'the-ascension-of-jesus'], planned: []},
    {anchor: 'a-first-look-at-the-church', title: 'A First Look at the Church', published: ['christ-establishes-his-church', 'pentecost-and-the-holy-spirit', 'church-body-of-christ'], planned: []}
  ], nextId: 'mass',
  transition: 'The Eucharist is the source and summit of Christian life. The Church gathers to hear God’s Word and celebrate the Holy Sacrifice of the Mass, where Christ’s one sacrifice is made sacramentally present and he is truly present in the Eucharist.',
  transitionSource: {url: 'https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/i_the_eucharist_source_and_summit_of_ecclesial_life.index.html', label: 'Catechism 1324'}
}, {
  id: 'mass', areaId: 'mass', part: 2, title: 'Understanding the Mass', path: '/know-the-mass',
  phases: [
    {title: 'Before Mass Begins', introduction: 'Notice the church, its furnishings, and the gestures that help us prepare. These background lessons describe what we may see before Mass; they are not additional parts of the ceremony.', published: ['holy-water', 'tabernacle', 'altar', 'vestments', 'liturgical-colors'], planned: []},
    {title: 'Gestures and Postures at Mass', introduction: 'Learn how Catholics pray with their bodies, from making the Sign of the Cross to kneeling and bowing in reverence.', published: ['sign-of-the-cross', 'small-crosses-before-the-gospel', 'raised-hands-in-prayer', 'genuflection', 'bowing-at-mass'], planned: []},
    {title: 'The Beginning of Mass', introduction: 'We gather, make the Sign of the Cross, ask for mercy, and pray. The Church calls these opening prayers and actions the Introductory Rites. A rite is an established action or ceremony of worship.', published: ['entrance-and-greeting', 'penitential-act', 'gloria-and-collect'], planned: []},
    {title: 'Bible Readings', introduction: 'We listen to the Bible, hear its meaning explained, share our faith, and pray for others. This part is called the Liturgy of the Word. Liturgy means the Church’s public worship.', published: ['readings-and-psalm', 'standing-for-the-gospel', 'homily-creed-and-prayers', 'nicene-creed'], planned: []},
    {title: 'The Eucharist', introduction: 'Eucharist means thanksgiving. In this part of Mass, called the Liturgy of the Eucharist, we offer thanks as Christ’s one sacrifice is made present and bread and wine become his Body and Blood. It includes the Communion Rite: the prayers and actions leading to receiving Christ and giving thanks.', published: ['preparation-of-the-gifts', 'the-eucharistic-prayer', 'eucharist-real-presence', 'prayer-peace-and-lamb-of-god', 'holy-communion-and-thanksgiving'], planned: []},
    {title: 'The End of Mass', introduction: 'We receive God’s blessing and are sent to love and serve. These final actions are called the Concluding Rites. Worship continues to shape our daily lives.', published: ['final-blessing', 'dismissal'], planned: []}
  ], nextId: 'sacraments',
  transition: 'At Mass we celebrate the Eucharist, one of the seven sacraments. Next, explore how Christ gives us grace through all seven.'
}, {
  id: 'sacraments', areaId: 'sacraments', part: 3, title: 'Sacraments', path: '/sacraments',
  question: 'How does Christ give us grace through the sacraments?',
  phases: [
    {title: 'What Is a Sacrament?', published: ['what-is-a-sacrament'], planned: []},
    {title: 'Sacraments of Initiation', published: ['sacrament-of-baptism', 'sacrament-of-confirmation', 'sacrament-of-the-eucharist'], planned: []},
    {title: 'Sacraments of Healing', published: ['sacrament-of-reconciliation', 'sacrament-of-anointing'], planned: []},
    {title: 'Sacraments at the Service of Communion', published: ['sacrament-of-holy-orders', 'sacrament-of-matrimony'], planned: []}
  ], nextId: 'living',
  transition: 'The sacraments give us grace for daily life. Continue with prayer, service, and choices shaped by Christ.'
}, {
  id: 'living', areaId: 'living', part: 4, title: 'Living the Faith', path: '/know-the-faith/living-the-faith',
  description: 'Begin with the Beatitudes, which portray Christ’s love and promise the Kingdom. Continue with the foundations of daily Christian life. Every step depends on God’s grace.',
  question: 'How do we respond to God’s grace and live as Christians?',
  phases: [
    {title: 'The Beatitudes', published: ['beatitude-poor-in-spirit', 'beatitude-those-who-mourn', 'beatitude-the-meek', 'beatitude-hunger-for-righteousness', 'beatitude-the-merciful', 'beatitude-pure-in-heart', 'beatitude-peacemakers', 'beatitude-persecuted-for-righteousness'], planned: []},
    {title: 'Everyday Christian Life', published: ['new-life-in-christ', 'faith-works-and-repentance', 'baptism-and-sanctifying-grace', 'prayer-faith-hope-and-love', 'following-christ-in-daily-choices'], planned: []},
    {title: 'Works of Mercy', published: [], planned: [{title: 'Caring for our neighbors in body and spirit', note: 'Future series on the corporal and spiritual works of mercy.'}]},
    {title: 'Theological Virtues', published: [], planned: [{title: 'Faith hope and charity', note: 'Future series on the gifts by which we live in relationship with God.'}]},
    {title: 'Fruits of the Holy Spirit', published: [], planned: [{title: 'Growing in the life of the Spirit', note: 'Future series on the fruit of the Holy Spirit in Christian life.'}]}
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
