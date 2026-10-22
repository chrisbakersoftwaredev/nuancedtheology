import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ArticleCards } from './library-components';
import { ContentLibrary } from './library';
import { curricula, publishedSlugs } from './curriculum';

@Component({
  imports: [RouterLink, ArticleCards], templateUrl: './collection-page.html'
})
export class CollectionPage {
  readonly library = inject(ContentLibrary);
  private readonly route = inject(ActivatedRoute);
  readonly familyMode = this.route.snapshot.data['collection'] === 'family';
  readonly topic = this.library.topic(this.route.snapshot.data['topic']);
  readonly area = this.library.area(this.topic?.areaId ?? this.route.snapshot.data['area']);
  readonly title = this.familyMode ? 'Family Lessons' : this.topic?.title ?? this.area?.title ?? 'Learning library';
  readonly introduction = this.familyMode
    ? 'Ready-to-print lessons for a conversation at home. You can be learning too: read aloud, explore three questions, practice, and pray together.'
    : this.topic?.introduction ?? this.area?.introduction ?? '';
  readonly query = signal('');
  readonly entries = () => this.familyMode ? this.library.articles() : this.topic ? this.library.inTopic(this.topic.id) : this.area ? this.library.inArea(this.area.id) : [];
  readonly results = () => this.library.search(this.query(), this.entries());
  readonly visibleTopics = () => this.library.topics().filter(t => t.areaId === this.area?.id);
  readonly curriculum = curricula.find(sequence => sequence.areaId === this.area?.id);
  readonly showPlan = !!this.curriculum && (!this.topic || this.area?.id === 'faith') && !this.familyMode;
  readonly first = () => this.entries()[0];
  readonly lessonNumber = (slug: string) => this.curriculum ? publishedSlugs(this.curriculum).indexOf(slug) + 1 : 0;
  constructor() {
    inject(Title).setTitle(this.title + ' | nuancedTheology');
    inject(Meta).updateTag({name: 'description', content: this.introduction});
  }
}
