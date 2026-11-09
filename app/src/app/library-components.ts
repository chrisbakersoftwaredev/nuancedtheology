import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject, input, output, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';
import { Article } from './content';
import { ContentLibrary } from './library';
import { curricula, curriculumPosition } from './curriculum';

@Component({
  selector: 'nt-library-nav', imports: [RouterLink, RouterLinkActive, NgTemplateOutlet],
  template: `
    <nav class="library-navigation" aria-label="Learning library">
      <a routerLink="/" routerLinkActive="is-active" [routerLinkActiveOptions]="{exact:true}" ariaCurrentWhenActive="page" (click)="navigate.emit()">Library home</a>
      <p class="nav-section-label">Explore & understand</p>
      @for(area of library.areas(); track area.id) {
        @if(!hasMatchingTopic(area.path)) {<a class="nav-area" [routerLink]="area.path" routerLinkActive="is-active" [routerLinkActiveOptions]="{exact:true}" ariaCurrentWhenActive="page" (click)="navigate.emit()">{{area.title}}</a>}
        @for(topic of library.topics(); track topic.id) {
          @if(topic.areaId === area.id) {
            <a [class]="topic.path === area.path ? 'nav-area' : 'nav-topic'" [routerLink]="topic.path" routerLinkActive="is-active" ariaCurrentWhenActive="page" (click)="navigate.emit()">{{topic.title}}</a>
            @if(activeTopicId() === topic.id) {
              @if(topic.path === salvation.path) {
                <ul class="nav-chapter-list">
                  @for(chapter of salvation.phases; track chapter.anchor) {
                    <li>
                      <a [routerLink]="['/articles', chapter.anchor]"
                        [class.is-active]="activeChapter() === chapter.anchor"
                        [attr.aria-expanded]="activeChapter() === chapter.anchor"
                        (click)="navigate.emit()">{{chapter.title}}</a>
                      @if(activeChapter() === chapter.anchor) {
                        <ng-container [ngTemplateOutlet]="lessonList"
                          [ngTemplateOutletContext]="{$implicit: chapterLessons()}"/>
                      }
                    </li>
                  }
                </ul>
              } @else {
                <ng-container [ngTemplateOutlet]="lessonList"
                  [ngTemplateOutletContext]="{$implicit: library.inTopic(topic.id)}"/>
              }
            }
          }
        }
      }
      <div class="nav-about"><a routerLink="/" fragment="mission" (click)="navigate.emit()">Our mission</a><p>Faithful explanations.<br>Shared freely, for every learner.</p></div>
    </nav>
    <ng-template #lessonList let-lessons>
      <ul class="nav-lesson-list">
        @for(article of lessons; track article.slug) {
          <li>
            <a [routerLink]="['/articles', article.slug]" routerLinkActive="is-active"
              [routerLinkActiveOptions]="{exact:true}" ariaCurrentWhenActive="page"
              (click)="navigate.emit()">{{article.title}}</a>
          </li>
        }
      </ul>
    </ng-template>
  `
})
export class LibraryNav {
  readonly library = inject(ContentLibrary);
  readonly navigate = output<void>();
  hasMatchingTopic(path: string) { return this.library.topics().some(topic => topic.path === path); }
  private readonly router = inject(Router);
  private readonly url = toSignal(this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(event => event.urlAfterRedirects)
  ), {initialValue: this.router.url});

  readonly salvation = curricula[0];
  private readonly location = computed(() => this.router.parseUrl(this.url()));
  private readonly segments = computed(() => this.location().root.children['primary']?.segments ?? []);
  private readonly activeArticle = computed(() => {
    const [section, article] = this.segments();
    return section?.path === 'articles' && article ? this.library.find(article.path) : undefined;
  });

  readonly activeChapter = computed(() => {
    const article = this.activeArticle();
    return article
      ? this.salvation.phases.find(chapter => chapter.anchor === article.slug || chapter.published.includes(article.slug))?.anchor
      : this.location().fragment;
  });

  readonly chapterLessons = computed(() => {
    const chapter = this.salvation.phases.find(item => item.anchor === this.activeChapter());
    return this.library.articles().filter(article => chapter?.published.includes(article.slug));
  });

  readonly activeTopicId = computed(() => {
    const article = this.activeArticle();
    if (article) return article.topicId;
    const segments = this.segments();
    const path = '/' + segments.map(segment => segment.path).join('/');
    return this.library.topics().find(topic => topic.path === path)?.id;
  });
}

@Component({
  selector: 'nt-article-cards', imports: [RouterLink],
  template: `
    <div class="article-grid">
      @for(article of entries(); track article.slug) {
        <article class="article-card">
          @if(numbered()) {<p class="curriculum-card-number">Lesson {{position(article.slug)?.number}}</p>}
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
  readonly numbered = input(false);
  readonly position = curriculumPosition;

}

@Component({
  imports: [RouterLink, ArticleCards], templateUrl: './library-home.html'
})
export class LibraryHome {
  readonly library = inject(ContentLibrary);
  readonly query = signal('');
  readonly results = () => this.library.search(this.query());
}
