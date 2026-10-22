import { Component, inject, input, output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Article } from './content';
import { ContentLibrary } from './library';

@Component({
  selector: 'nt-library-nav', imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="library-navigation" aria-label="Learning library">
      <a routerLink="/" routerLinkActive="is-active" [routerLinkActiveOptions]="{exact:true}" ariaCurrentWhenActive="page" (click)="navigate.emit()">Library home</a>
      <p class="nav-section-label">Explore & understand</p>
      @for(area of library.areas(); track area.id) {
        <a class="nav-area" [routerLink]="area.path" routerLinkActive="is-active" [routerLinkActiveOptions]="{exact:true}" ariaCurrentWhenActive="page" (click)="navigate.emit()">{{area.title}}</a>
        @for(topic of library.topics(); track topic.id) {
          @if(topic.areaId === area.id) {
            <a class="nav-topic" [routerLink]="topic.path" routerLinkActive="is-active" ariaCurrentWhenActive="page" (click)="navigate.emit()">{{topic.title}}</a>
          }
        }
      }
      <div class="nav-about"><a routerLink="/" fragment="mission" (click)="navigate.emit()">Our mission</a><p>Faithful explanations.<br>Shared freely, for every learner.</p></div>
    </nav>
  `
})
export class LibraryNav {
  readonly library = inject(ContentLibrary);
  readonly navigate = output<void>();
}

@Component({
  selector: 'nt-article-cards', imports: [RouterLink],
  template: `
    <div class="article-grid">
      @for(article of entries(); track article.slug) {
        <article class="article-card">
          <p class="eyebrow">{{library.topic(article.topicId)?.title}} · {{article.readMinutes}} min</p>
          <h3><a [routerLink]="['/articles',article.slug]">{{article.title}}</a></h3>
          <p>{{article.summary}}</p>
          <div class="card-bottom">
            <a class="text-link" [routerLink]="['/articles',article.slug]">Read this article →</a>
            <a class="button secondary lesson-card-link" [routerLink]="['/articles',article.slug,'family-lesson']">Learn as a family →</a>
          </div>
        </article>
      }
    </div>
  `
})
export class ArticleCards {
  readonly library = inject(ContentLibrary);
  readonly entries = input.required<readonly Article[]>();

}

@Component({
  imports: [RouterLink, ArticleCards], templateUrl: './library-home.html'
})
export class LibraryHome {
  readonly library = inject(ContentLibrary);
  readonly query = signal('');
  readonly results = () => this.library.search(this.query());
}
