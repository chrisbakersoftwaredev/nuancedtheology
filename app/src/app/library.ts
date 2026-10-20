import { computed, Injectable, signal } from '@angular/core';
import { Article, articles } from './content';

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
export const areas: readonly LibraryArea[] = [{
  id: 'mass', title: 'Know the Mass', path: '/know-the-mass',
  introduction: 'Discover the meaning behind the words, gestures, and prayers of Catholic worship. Begin with one practice, and learn at your own pace.'
}];
export const topics: readonly LibraryTopic[] = [{
  id: 'introductory-rites', areaId: 'mass', title: 'Introductory Rites',
  path: '/know-the-mass/introductory-rites',
  introduction: 'The opening of Mass gathers us to pray together. Start with the Sign of the Cross, a prayer that also belongs in everyday life.'
}];

// One content access boundary for discovery and readers. A future API can populate
// this signal without duplicating article records across directories or pathways.
@Injectable({ providedIn: 'root' })
export class ContentLibrary {
  private readonly records = signal<readonly Article[]>(articles);
  readonly articles = this.records.asReadonly();
  readonly topics = computed(() => topics.filter(topic => this.articles().some(a => a.topicId === topic.id)));
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
