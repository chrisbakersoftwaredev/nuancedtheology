import { Component, input } from '@angular/core';
import type { MassPrayer } from './mass-prayers';

@Component({
  selector: 'nt-mass-prayer-words',
  template: `
    <div class="mass-prayer-transcript screen-only">
      <details>
        <summary>Read the words</summary>
        <p>{{prayer().wordsContext}}</p>
        @if (prayer().text; as words) {
          <p><strong>{{prayer().speaker}}</strong></p>
          <blockquote class="mass-prayer-words" [attr.lang]="prayer().language ?? null">{{words}}</blockquote>
        }
      </details>
      <p><a [href]="prayer().wordsUrl" target="_blank" rel="noopener">{{prayer().wordsLabel ?? 'Official source · Read the complete text'}}</a>
        @if (prayer().alternate; as other) { · <a [href]="other.url" target="_blank" rel="noopener">{{other.label}}</a> }
      </p>
    </div>
  `
})
export class MassPrayerWords {
  readonly prayer = input.required<MassPrayer>();
}
