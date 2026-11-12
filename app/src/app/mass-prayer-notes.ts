import { Component, computed, input } from '@angular/core';
import { MassPrayerWords } from './mass-prayer-words';
import { massPrayers } from './mass-prayers';

@Component({
  selector: 'nt-mass-prayer-notes',
  imports: [MassPrayerWords],
  template: `
    @for (prayer of prayers(); track prayer.title) {
      <section class="mass-prayer-note">
        <h2>{{prayer.title}}</h2>
        @if (family()) {
          <p><strong>Listen for on Sunday</strong> {{prayer.listen}}</p>
          <p><strong>Talk about it</strong> {{prayer.question}}</p>
        }
        <nt-mass-prayer-words [prayer]="prayer"/>
      </section>
    }
  `
})
export class MassPrayerNotes {
  readonly slug = input.required<string>();
  readonly family = input(false);
  readonly prayers = computed(() => massPrayers.filter(prayer => prayer.slug === this.slug()));
}
