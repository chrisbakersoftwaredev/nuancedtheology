import { Component, computed, input } from '@angular/core';
import { familyReadings } from './family-readings';
import { ReferenceLink } from './reference-link';
import { scripturePassages } from './scripture-passages';

@Component({
  selector: 'nt-family-scripture',
  imports: [ReferenceLink],
  template: `
    @if (reading(); as selection) {
      @if (passage(); as text) {
        <section class="family-scripture" aria-label="Read God’s Word">
          <h2 class="lesson-heading">Read God’s Word</h2>
          <p>{{selection.introduction}}</p>
          <p class="family-scripture-reference"><strong>{{selection.reference}}</strong> · Douay-Rheims Bible
            @if (text.editionReference) {<span> · In this edition {{text.editionReference}}</span>}
          </p>
          <blockquote>
            @for (verse of text.verses; track verse[0]) {
              <p><sup>{{verse[0]}}</sup> {{verse[1]}}</p>
            }
          </blockquote>
          @if (selection.scriptureNote; as note) { <p class="read-note">{{note}}</p> }
          <p class="family-scripture-question"><strong>Wonder together</strong> {{selection.question}}</p>
          @if (selection.longer; as longer) {
            <p class="read-note">
              <span class="screen-only">Want to read more? <nt-reference [reference]="longer"/></span>
              <span class="print-only">Optional longer reading {{longer.label}}</span>
            </p>
          }
        </section>
      }
    }
  `
})
export class FamilyScripture {
  readonly slug = input.required<string>();
  readonly reading = computed(() => familyReadings[this.slug()]);
  readonly passage = computed(() => {
    const selection = this.reading();
    return selection ? scripturePassages[selection.reference] : undefined;
  });
}
