import { Component, computed, input } from '@angular/core';
import { massPrayers } from './mass-prayers';

@Component({
  selector: 'nt-mass-prayer-notes',
  template: `
    @for (prayer of prayers(); track prayer.title) {
      <section class="mass-prayer-note">
        <h2>{{prayer.title}}</h2>
        @if (family()) {
          <p><strong>Listen for on Sunday</strong> {{prayer.listen}}</p>
          <p><strong>Talk about it</strong> {{prayer.question}}</p>
        }
        <div class="screen-only">
          @if (prayer.text) { <p class="mass-prayer-words">{{prayer.text}}</p> }
          <p><a [href]="prayer.wordsUrl" target="_blank" rel="noopener">{{prayer.wordsLabel ?? 'Read the complete words'}}</a>
            @if (prayer.alternate; as other) { · <a [href]="other.url" target="_blank" rel="noopener">{{other.label}}</a> }
          </p>
        </div>
      </section>
    }
  `
})
export class MassPrayerNotes {
  readonly slug = input.required<string>();
  readonly family = input(false);
  readonly prayers = computed(() => massPrayers.filter(prayer => prayer.slug === this.slug()));
}
