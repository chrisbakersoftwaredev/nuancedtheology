import { computed, Injectable, signal } from '@angular/core';
import { Article, articles } from './content';
import { orderArticles } from './curriculum';

export interface LibraryArea {
  id: string;
  title: string;
  path: string;
  introduction: string;
}

export interface LibraryTopic {
  summary?: string;
  id: string;
  areaId: string;
  title: string;
  path: string;
  introduction: string;
}

// Register topics as useful articles are published. Empty areas stay out of navigation.
const massArea: LibraryArea = {
  id: 'mass', title: 'Know the Mass', path: '/know-the-mass',
  introduction: 'Discover the meaning behind the words, gestures, and prayers of Catholic worship. Begin with one practice, and learn at your own pace.'
};
const faithArea: LibraryArea = {
  id: 'faith', title: 'Know the Faith', path: '/know-the-faith',
  introduction: 'Explore God’s saving work, our response in grace, and the life and worship of the Church.'
};
export const areas: readonly LibraryArea[] = [faithArea, massArea];
export const topics: readonly LibraryTopic[] = [{
  summary: 'Before Mass, we can take a little time to turn our attention toward God. Holy water reminds us of Baptism, and a quiet visit helps us notice where the Eucharist is reserved. When we kneel on one knee before the Blessed Sacrament, we honor Jesus himself. The altar, the priest’s clothing, and the colors also help us understand the worship we are about to join. These lessons explain those signs and offer simple ways to prepare as a family.',
  id: 'entering-church', areaId: 'mass', title: 'Before Mass Begins', path: '/know-the-mass/entering-church',
  introduction: 'Get ready for Mass and explore the church, its furnishings, and gestures of prayer. These lessons describe preparation and background, not extra parts of the ceremony.'
}, {
  summary: 'The beginning of Mass gathers us into one prayer. The ministers enter, we make the Sign of the Cross, and the priest greets us. We ask God for mercy, praise him in the Gloria when it is called for, and join the opening prayer. The Church calls these actions the Introductory Rites. They help us bring our real lives before God and become ready to listen to his Word.',
  id: 'introductory-rites', areaId: 'mass', title: 'The Beginning of Mass', path: '/know-the-mass/introductory-rites',
  introduction: 'Follow the opening prayers and actions that gather us to worship. Inside the lessons, learn why the Church calls them the Introductory Rites.'
}, {
  summary: 'During the Bible readings, we listen to God’s Word and answer in prayer. The Psalm gives us words to pray, and we stand to honor the Gospel, the good news of Jesus. A priest or deacon helps explain what we have heard in the homily. When the Creed is used, we profess our faith together, and we pray for the needs of others. The Church calls this part of Mass the Liturgy of the Word.',
  id: 'liturgy-of-the-word', areaId: 'mass', title: 'Bible Readings', path: '/know-the-mass/liturgy-of-the-word',
  introduction: 'Listen to the Bible, discover its meaning, and respond with faith and prayer. This part of Mass is called the Liturgy of the Word.'
}, {
  summary: 'Eucharist means thanksgiving. Bread and wine are brought to the altar, and the priest leads the Eucharistic Prayer. Through Christ’s words and the Holy Spirit’s action, they become his Body and Blood; Jesus gives us himself, and his one sacrifice is made present. We then pray the Our Father, ask for mercy and peace, and prepare for Holy Communion. Those receiving Communion approach with faith and reverence, and the Church gives thanks for Christ’s gift.',
  id: 'liturgy-of-the-eucharist', areaId: 'mass', title: 'The Eucharist', path: '/know-the-mass/liturgy-of-the-eucharist',
  introduction: 'Eucharist means thanksgiving. Discover Christ’s gift of himself: the preparation of bread and wine, the Eucharistic Prayer, Holy Communion, and thanksgiving. The Church calls this the Liturgy of the Eucharist; it includes the Communion Rite.'
}, {
  summary: 'At the end of Mass, we receive God’s blessing and are sent out to live what we have received. The dismissal is more than permission to leave: it calls us to carry Christ’s love into our homes, schools, work, and friendships. A simple act of patience, mercy, or service can be part of that response. The Church calls these final actions the Concluding Rites.',
  id: 'concluding-rites', areaId: 'mass', title: 'The End of Mass', path: '/know-the-mass/concluding-rites',
  introduction: 'Receive the final blessing and discover how being sent out at Mass calls us to love and serve. The Church calls these final actions the Concluding Rites.'
}, {
  id: 'gods-plan-of-salvation', areaId: 'faith', title: 'God’s Plan of Salvation', path: '/know-the-faith/gods-plan-of-salvation',
  introduction: 'Part 1: Follow God’s saving work from creation and the Fall, through the covenants and prophets, to Jesus Christ and the sending of the Holy Spirit.'
}, {
  id: 'living-the-faith', areaId: 'faith', title: 'Living the Faith', path: '/know-the-faith/living-the-faith',
  introduction: 'Part 2: Discover how God’s grace enables our response. Explore living faith, Baptism and sacramental life, prayer, and choices shaped by love.'
}, {
  id: 'the-church', areaId: 'faith', title: 'The Church', path: '/know-the-faith/the-church',
  introduction: 'Part 3: Begin with the Church as Christ’s Body, then continue toward her worship in the Mass. Further chapters on apostolic succession, the four marks, and mission are planned.'

}];

// Preserve bookmarked topic URLs after grouping the curriculum into five sections.
export const collectionRedirects = [
  {path: 'know-the-mass/liturgical-signs', redirectTo: '/know-the-mass/entering-church', pathMatch: 'full' as const},
  {path: 'know-the-mass/communion-rite', redirectTo: '/know-the-mass/liturgy-of-the-eucharist', pathMatch: 'full' as const}
];
export const collectionRoutes = [
  ...areas.filter(area => topics.some(topic => topic.areaId === area.id && articles.some(article => article.topicId === topic.id)))
    .map(area => ({path: area.path.slice(1), data: {area: area.id}})),
  ...topics.filter(topic => articles.some(article => article.topicId === topic.id))
    .map(topic => ({path: topic.path.slice(1), data: {topic: topic.id}}))
];

// One content access boundary for discovery and readers. A future API can populate
// this signal without duplicating article records across directories or pathways.
@Injectable({ providedIn: 'root' })
export class ContentLibrary {
  private readonly records = signal<readonly Article[]>(articles);
  readonly articles = computed(() => orderArticles(this.records()));
  readonly topics = computed(() => topics.filter(topic => this.articles().some(a => a.topicId === topic.id))
    .sort((a, b) => this.articles().findIndex(article => article.topicId === a.id) - this.articles().findIndex(article => article.topicId === b.id)));
  readonly areas = computed(() => areas.filter(area => this.topics().some(t => t.areaId === area.id)));

  find(slug: string) { return this.articles().find(article => article.slug === slug); }
  topic(id: string) { return topics.find(topic => topic.id === id); }
  area(id: string) { return areas.find(area => area.id === id); }
  inTopic(id: string) { return this.articles().filter(article => article.topicId === id); }
  inArea(id: string) { return this.articles().filter(article => this.topic(article.topicId)?.areaId === id); }
  search(query: string, entries = this.articles()) {
    const needle = query.trim().toLocaleLowerCase();
    return entries.filter(article => {
      const topic = this.topic(article.topicId);
      const area = topic && this.area(topic.areaId);
      return [article.title, article.summary, topic?.title, area?.title, ...article.keywords]
        .join(' ').toLocaleLowerCase().includes(needle);
    });
  }
}
