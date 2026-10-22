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
  introduction: 'Follow the story of God’s saving love, from creation and the covenants to Jesus and the new life he offers us.'
};
export const areas: readonly LibraryArea[] = [faithArea, massArea];
export const topics: readonly LibraryTopic[] = [{
  id: 'introductory-rites', areaId: 'mass', title: 'Introductory Rites',
  path: '/know-the-mass/introductory-rites',
  introduction: 'The opening of Mass gathers us to pray together, remembering who God is and asking for his mercy.'
}, {
  id: 'entering-church', areaId: 'mass', title: 'Entering Church', path: '/know-the-mass/entering-church',
  introduction: 'Holy water, genuflection, and the tabernacle help us arrive with attention and reverence.'
}, {
  id: 'liturgy-of-the-word', areaId: 'mass', title: 'Liturgy of the Word', path: '/know-the-mass/liturgy-of-the-word',
  introduction: 'Listen to God’s Word and discover why the Gospel has a special place in the celebration.'
}, {
  id: 'liturgy-of-the-eucharist', areaId: 'mass', title: 'Liturgy of the Eucharist', path: '/know-the-mass/liturgy-of-the-eucharist',
  introduction: 'Begin to understand Christ’s gift of himself in the Eucharist.'
}, {
  id: 'concluding-rites', areaId: 'mass', title: 'Concluding Rites', path: '/know-the-mass/concluding-rites',
  introduction: 'Mass sends us into daily life to praise God by loving and serving our neighbors.'
}, {
  id: 'liturgical-signs', areaId: 'mass', title: 'Signs of Worship', path: '/know-the-mass/liturgical-signs',
  introduction: 'Explore the altar, vestments, and colors that help express the Church’s worship.'
}, {
  id: 'gods-plan-of-salvation', areaId: 'faith', title: 'God’s Plan of Salvation', path: '/know-the-faith/gods-plan-of-salvation',
  introduction: 'Start with the whole story in one short paragraph, then explore creation, the covenants, the prophets, Jesus’ life, his death and Resurrection, and our life in him. Read in order or begin with a question that interests you.'
}];

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
