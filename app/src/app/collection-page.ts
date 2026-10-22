import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ContentLibrary } from './library';
import { curricula, publishedSlugs } from './curriculum';

@Component({
  imports: [RouterLink], templateUrl: './collection-page.html'
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
  readonly entries = () => this.familyMode ? this.library.articles() : this.topic ? this.library.inTopic(this.topic.id) : this.area ? this.library.inArea(this.area.id) : [];
  readonly visibleTopics = () => this.library.topics().filter(t => t.areaId === this.area?.id);
  readonly curriculum = curricula.find(sequence => sequence.areaId === this.area?.id);
  readonly sequences = () => (this.familyMode ? curricula : this.curriculum ? [this.curriculum] : []).map(sequence => ({...sequence, phases: sequence.phases.map(phase => ({...phase, published: phase.published.filter(slug => this.entries().some(article => article.slug === slug))})).filter(phase => phase.published.length)}));
  readonly first = () => this.entries()[0];
  readonly lessonNumber = (slug: string) => this.curriculum ? publishedSlugs(this.curriculum).indexOf(slug) + 1 : 0;
  constructor() {
    inject(Title).setTitle(this.title + ' | nuancedTheology');
    inject(Meta).updateTag({name: 'description', content: this.introduction});
  }
}
