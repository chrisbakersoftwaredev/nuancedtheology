import { afterNextRender, Component, DestroyRef, DOCUMENT, inject, Injectable, signal } from '@angular/core';

type Theme = 'light' | 'dark';
const preferenceKey = 'nt-theme';
const cautionKey = 'nt-dark-caution-seen';
const colorQuery = '(prefers-color-scheme: dark)';

@Injectable({ providedIn: 'root' })
export class SiteTheme {
  private readonly document = inject(DOCUMENT);
  private readonly window = this.document.defaultView;
  private preference: Theme | null = null;
  private cautionSeen = false;
  private toggleButton?: HTMLButtonElement;

  readonly dark = signal(false);
  readonly showCaution = signal(false);

  constructor() {
    const destroy = inject(DestroyRef);
    afterNextRender(() => {
      const stored = this.read(preferenceKey);
      this.preference = stored === 'dark' || stored === 'light' ? stored : null;
      this.cautionSeen = this.read(cautionKey) === '1';
      const media = this.window?.matchMedia(colorQuery);
      const update = () => this.apply(this.preference ?? (media?.matches ? 'dark' : 'light'));
      update();
      media?.addEventListener('change', update);
      destroy.onDestroy(() => media?.removeEventListener('change', update));
    });
  }

  toggle(button: HTMLButtonElement) {
    const next = this.document.documentElement.dataset['theme'] === 'dark' ? 'light' : 'dark';
    this.preference = next;
    this.apply(next);
    this.save(preferenceKey, next);
    if (next === 'dark' && !this.cautionSeen && this.read(cautionKey) !== '1') {
      this.cautionSeen = true;
      this.toggleButton = button;
      this.showCaution.set(true);
      this.save(cautionKey, '1');
    } else if (next === 'light') {
      this.showCaution.set(false);
    }
  }

  dismissCaution() {
    this.showCaution.set(false);
    this.toggleButton?.focus();
  }

  private apply(theme: Theme) {
    this.document.documentElement.dataset['theme'] = theme;
    this.dark.set(theme === 'dark');
  }

  private read(key: string): string | null {
    try { return this.window?.localStorage.getItem(key) ?? null; }
    catch { return null; }
  }

  private save(key: string, value: string) {
    try { this.window?.localStorage.setItem(key, value); }
    catch { /* The current visit can still use its chosen theme. */ }
  }
}

@Component({
  selector: 'nt-theme-toggle',
  template: `
    <button #button type="button" class="theme-toggle" aria-label="Dark mode"
      [attr.aria-pressed]="theme.dark()" (click)="theme.toggle(button)">
      <svg class="theme-moon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20.8 15.3A9 9 0 0 1 8.7 3.2a9 9 0 1 0 12.1 12.1Z"/>
      </svg>
      <svg class="theme-sun" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
        <circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19m0-14-1.4 1.4M6.4 17.6 5 19"/>
      </svg>
    </button>
  `
})
export class ThemeToggle {
  readonly theme = inject(SiteTheme);
}
