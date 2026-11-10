import { ChangeDetectorRef, Component, computed, inject, input, signal } from '@angular/core';
import type { Source } from './content';
import { scripturePassages } from './scripture-passages';

@Component({
  selector: 'nt-reference',
  template: `
    @if (passage(); as excerpt) {
      <button class="scripture-reference" type="button" aria-haspopup="dialog" (click)="open(reader)">{{reference().label}}</button>
      <dialog #reader class="scripture-reader screen-only" [attr.aria-label]="reference().label" (close)="showText.set(false)" (click)="dismissOnBackdrop($event, reader)">
        @if (showText()) {
          <div class="scripture-reader-header">
            <div>
              <h2>{{reference().label}}</h2>
              <p>Douay-Rheims Bible @if(excerpt.editionReference) { · {{excerpt.editionReference}} }</p>
            </div>
            <form method="dialog"><button class="scripture-close" type="submit" autofocus><span aria-hidden="true">×</span> Close</button></form>
          </div>
          @for (verse of excerpt.verses; track verse[0]) {
            <p><strong class="verse-number">{{verse[0]}}</strong> {{verse[1]}}</p>
          }
        }
      </dialog>
    } @else {
      <a [href]="reference().url" target="_blank" rel="noopener">{{reference().label}}</a>
    }
  `
})
export class ReferenceLink {
  private readonly changeDetector = inject(ChangeDetectorRef);
  readonly reference = input.required<Source>();
  readonly showText = signal(false);
  readonly passage = computed(() => this.reference().url.startsWith('https://bible.usccb.org/bible/')
    ? scripturePassages[this.reference().label] : undefined);

  dismissOnBackdrop(event: MouseEvent, reader: HTMLDialogElement) {
    if (event.target !== reader) return;
    const bounds = reader.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) {
      reader.close();
    }
  }

  open(reader: HTMLDialogElement) {
    this.showText.set(true);
    this.changeDetector.detectChanges();
    reader.showModal();
  }
}
