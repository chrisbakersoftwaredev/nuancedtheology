import { Component, computed, input } from '@angular/core';
import type { Article } from './content';
import { coloringPages } from './coloring-pages';
import { familyReadings } from './family-readings';

@Component({
  selector: 'nt-coloring-page',
  template: `
    @if (page(); as picture) {
      <section class="coloring-sheet" aria-label="Lesson coloring page">
        <p class="coloring-eyebrow">nuancedTheology · Color and remember</p>
        <h2>{{article().title}}</h2>
        <p class="coloring-caption">{{picture.caption}}</p>
        <img [src]="'/coloring/' + picture.filename" [alt]="picture.alt" [width]="picture.width" [height]="picture.height">
        <p class="coloring-reference">{{reference()}} · Name ____________________</p>
      </section>
    }
  `
})
export class ColoringPage {
  readonly article = input.required<Article>();
  readonly page = computed(() => coloringPages[this.article().slug]);
  readonly reference = computed(() => familyReadings[this.article().slug]?.reference ?? '');
}
