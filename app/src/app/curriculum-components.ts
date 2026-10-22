import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentLibrary } from './library';
import { curriculumPosition, nextLesson } from './curriculum';

@Component({selector: 'nt-curriculum-position', template: `
  @if(position(); as p) {
    <p class="curriculum-position screen-only">Lesson {{p.number}} of {{p.total}} — {{p.sequence.title}}<span>Read, reflect, and learn together</span></p>
  }
`})
export class CurriculumPosition {
  readonly slug = input.required<string>();
  readonly position = computed(() => curriculumPosition(this.slug()));
}

@Component({selector: 'nt-curriculum-navigation', imports: [RouterLink], template: `
  @if(position(); as p) {
    <nav class="curriculum-next screen-only" aria-label="Lesson navigation">
      @if(next(); as destination) {
        @if(destination.crossCollection) {
          <p class="curriculum-gap">{{p.sequence.gap}}</p>
          <p>{{p.sequence.transition}} <a href="https://www.usccb.org/prayer-and-worship/the-mass/general-instruction-of-the-roman-missal/girm-chapter-2">GIRM 27–28</a></p>
        } @else if(gapBeforeNext()) {
          <p class="curriculum-gap">{{gapBeforeNext()}}</p>
        }
        <p class="eyebrow" id="next-lesson-title">Up next: {{library.find(destination.slug)?.title}}</p>
        <a class="button" [routerLink]="family() ? ['/articles',destination.slug,'family-lesson'] : ['/articles',destination.slug]" aria-describedby="next-lesson-title">Next →</a>
      } @else {
        <h2>You’ve reached the end of the published journey</h2>
        <p>You have completed this introductory journey. Keep growing in faith by revisiting an article, learning as a family, and bringing what you have learned into daily life.</p>
        <a class="button secondary" [routerLink]="p.sequence.path">Explore the collection →</a>
      }
    </nav>
  }
`})
export class CurriculumNavigation {
  readonly library = inject(ContentLibrary);
  readonly slug = input.required<string>();
  readonly family = input(false);
  readonly position = computed(() => curriculumPosition(this.slug()));
  readonly next = computed(() => nextLesson(this.slug()));
  readonly gapBeforeNext = computed(() => {
    const p = this.position();
    const next = this.next();
    if (!p || !next || next.crossCollection) return '';
    const phases = p.sequence.phases;
    const current = phases.findIndex(phase => phase.published.includes(this.slug()));
    const following = phases.findIndex(phase => phase.published.includes(next.slug));
    const planned = phases.slice(current, following > current ? following : current + 1).flatMap(phase => phase.planned);
    // Surface gaps at a phase boundary without interrupting every article.
    return following > current && planned.length
      ? 'Still planned before this next stage: ' + planned.map(item => item.title).join('; ') + '. Next opens the next available published lesson.' : '';
  });
}
