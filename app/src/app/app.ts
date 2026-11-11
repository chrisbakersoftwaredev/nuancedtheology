import { SiteTheme, ThemeToggle } from './theme';
import { ColoringPage } from './coloring-page';
import { coloringPages } from './coloring-pages';
import { FamilyScripture } from './family-scripture';
import { FirstVisitGuide } from './first-visit-guide';
import { ReferenceLink } from './reference-link';
import { massGestureLinks } from './mass-gesture-articles';
import { ApplicationConfig, Component, computed, DOCUMENT, ElementRef, HostListener, ViewChild, inject, input, provideZonelessChangeDetection, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet, Routes, provideRouter, withInMemoryScrolling } from '@angular/router';
import { Meta, Title, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { Article, Section } from './content';
import { reviewStatusLabel } from './review-status';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { curricula } from './curriculum';
import { ContentLibrary, collectionRoutes, collectionRedirects } from './library';
import { LibraryHome as Home, LibraryNav } from './library-components';
import { CollectionPage } from './collection-page';
import { CurriculumPosition, CurriculumNavigation } from './curriculum-components';

@Component({selector:'nt-explanation',imports:[ReferenceLink],template:`@for(section of sections(); track section.title) {<section class="explanation-section"><h2>{{section.title}}</h2>@for(paragraph of section.paragraphs; track $index) {<p>{{paragraph}}</p>}@if(showSources()) {<p class="section-sources">References: @for(id of section.sourceIds; track id; let last = $last) {@if(source(id); as reference) {<nt-reference [reference]="reference"/>@if(!last) { · }} }</p>}</section>}`})
export class Explanation { sections = input.required<Section[]>(); article = input.required<Article>(); showSources = input(true); source(id:string) {return this.article().sources.find(s=>s.id===id);} }

@Component({selector:'nt-family-lesson',imports:[Explanation,ReferenceLink,FamilyScripture],template:`<article class="family-sheet"><div class="lesson-page"><p class="eyebrow">nuancedTheology · A lesson for your family</p><h1>{{article().title}}</h1><p class="lesson-intro">Gather together. Read aloud. Leave room for little questions.</p><nt-family-scripture [slug]="article().slug"/><h2 class="lesson-heading">Let’s Learn</h2><p class="muted read-note">Read aloud together · about {{article().readMinutes + 3}} minutes</p><nt-explanation [article]="article()" [sections]="sections()" [showSources]="false" /></div><div class="lesson-page discussion-page"><p class="print-only eyebrow">nuancedTheology · {{article().title}}</p><section><h2>Let’s Talk</h2><ol class="questions">@for(item of article().lesson.questions; track item.question) {<li><h3>{{item.question}}</h3><p><strong>For parents:</strong> {{item.guidance}}</p></li>}</ol></section><section class="remember"><h2>Let’s Remember</h2><p>{{article().lesson.remember}}</p></section><section><h2>Let’s Practice</h2><p>{{article().lesson.practice}}</p></section><section><h2>Let’s Pray</h2><p>{{article().lesson.prayer}}</p></section><section class="parent-references"><h2>For Parents</h2><p>@for(id of article().lesson.parentSourceIds; track id; let last = $last) {@if(source(id); as reference) {<span class="screen-only"><nt-reference [reference]="reference"/></span><span class="print-only">{{reference.label}}</span>@if(!last) {; }}}. {{article().lesson.parentGuidance}}</p><p>Optional further reading:</p><ul class="parent-resources">@for(resource of article().deeperResources; track resource.sourceId) {@if(source(resource.sourceId); as reference) {<li><nt-reference [reference]="reference"/><span class="print-only">{{host(reference.url)}}</span></li>}}</ul><p class="screen-only">Find more references alongside each section of the <a [href]="'/articles/' + article().slug">article</a>.</p><p class="print-only">Use the Scripture and Catechism references above to find the passages in a Bible or a copy of the Catechism.</p><p class="review">Original educational lesson · Version {{article().revision.version}} · {{article().revision.date}}<br>{{reviewLabel(article())}}. No ecclesiastical approval is claimed.</p></section></div></article>`})
export class FamilyLesson {
 readonly reviewLabel = reviewStatusLabel;
 readonly article = input.required<Article>();
 readonly sections = computed(() => this.article().sections.map(section =>
   section.familyParagraphs ? {...section, paragraphs: section.familyParagraphs} : section
 ));
 source(id:string){return this.article().sources.find(s=>s.id===id);} host(url:string){return new URL(url).hostname;}}

@Component({imports:[RouterLink,Explanation,FamilyLesson,ColoringPage,CurriculumPosition,CurriculumNavigation],template:`@if(article; as a) {<div class="reading-layout" [class.lesson-layout]="isLesson" [class.print-coloring]="printMode() === 'coloring'" [class.print-both]="printMode() === 'both'"><nav class="breadcrumbs screen-only" aria-label="Breadcrumb"><a routerLink="/">Library</a><span aria-hidden="true">/</span>@if(area; as group) {<a [routerLink]="group.path">{{group.title}}</a><span aria-hidden="true">/</span>}@if(topic; as group) {@if(group.path !== area?.path) {<a [routerLink]="group.path">{{group.title}}</a><span aria-hidden="true">/</span>}}@if(isLesson) {<a [routerLink]="['/articles',a.slug]">{{a.title}}</a><span aria-hidden="true">/</span><span aria-current="page">Family lesson</span>} @else {<span aria-current="page">{{a.title}}</span>}</nav><nt-curriculum-position [slug]="a.slug"/>@if(isLesson) {
<section #printPanel class="lesson-toolbar screen-only" aria-labelledby="family-print-heading" (keydown.escape)="closePrintOptions(printToggle)">
  <h2 id="family-print-heading" class="family-print-heading">
    <button #printToggle type="button" class="family-print-toggle" aria-controls="family-print-options" [attr.aria-expanded]="printOptionsOpen()" (click)="printOptionsOpen.set(!printOptionsOpen())">
    <svg class="print-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8V3h12v5M6 17H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v7H6zM17 11h2"/></svg>
      <span>Print your family lesson</span>
      <span class="family-print-chevron" aria-hidden="true"></span>
    </button>
  </h2>
  <div id="family-print-options" [hidden]="!printOptionsOpen()">
  <p class="family-print-intro">Choose what you'd like to include in your printable lesson.</p>
  <fieldset class="family-print-options" aria-label="Pages to include" [disabled]="printing()">
    @for (option of printOptions; track option.mode) {
      @if (option.mode === 'lesson' || coloring) {
        <label class="family-print-option">
          <svg class="print-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            @switch (option.mode) {
              @case ('lesson') { <path d="M12 5.5C9 3.5 5.5 3 2.5 4v14.5c3-1 6.5-.5 9.5 1.5 3-2 6.5-2.5 9.5-1.5V4c-3-1-6.5-.5-9.5 1.5zM12 5.5V20"/> }
              @case ('both') { <path d="M12 3a9 9 0 1 0 0 18h1.4a1.8 1.8 0 0 0 1.4-3l-.4-.5a1.2 1.2 0 0 1 1-2h2.2A3.4 3.4 0 0 0 21 12a9 9 0 0 0-9-9zM7.5 12h.01M9 7.5h.01M14 7h.01M17.5 10.5h.01"/> }
              @case ('coloring') { <path d="m4 16 11-11 4 4L8 20l-5 1 1-5zM13 7l4 4m-13 5 4 4m7-15 1.5-1.5a1.4 1.4 0 0 1 2 0l2 2a1.4 1.4 0 0 1 0 2L19 9"/> }
            }
          </svg>
          <span class="family-print-option-copy">
            <strong [id]="'print-title-' + option.mode">{{option.title}}</strong>
            <span [id]="'print-description-' + option.mode">{{option.description}}</span>
          </span>
          <input type="radio" name="family-print-content" [value]="option.mode"
            [checked]="printMode() === option.mode" (change)="setPrintMode(option.mode)"
            [attr.aria-labelledby]="'print-title-' + option.mode"
            [attr.aria-describedby]="'print-description-' + option.mode">
        </label>
      }
    }
  </fieldset>
  <button type="button" class="button family-print-button" [disabled]="printing()" (click)="print(printToggle)">
    <svg class="print-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8V3h12v5M6 17H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v7H6zM17 11h2"/></svg>
    Print selected pages
  </button>
  <p class="family-print-note">Preview the selection before printing.</p>
  </div>
  @if (printError()) { <p class="print-error" role="alert">{{printError()}}</p> }
</section>
<nt-family-lesson [article]="a" />
@if(coloring) {
  <details class="coloring-preview screen-only">
    <summary>Preview this lesson’s coloring page</summary>
    <nt-coloring-page [article]="a"/>
  </details>
  <nt-coloring-page class="print-coloring-page" [article]="a"/>
}} @else {<header class="article-header"><p class="eyebrow">{{area?.title}} · {{topic?.title}}</p><h1>{{a.title}}</h1><p class="lede">{{a.summary}}</p><div class="article-meta"><span>{{a.readMinutes}} minute read · For curious hearts of all ages</span><span>{{reviewLabel(a)}}</span></div></header><div class="article-body-layout"><article class="article-prose"><nt-explanation [article]="a" [sections]="a.sections"/><aside class="remember"><p class="eyebrow">One thing to remember</p><p>{{a.lesson.remember}}</p></aside>@if(a.level2; as sections) {<h2>Learn more</h2><nt-explanation [article]="a" [sections]="sections"/>}@if(a.level3; as sections) {<h2>Go deeper</h2><nt-explanation [article]="a" [sections]="sections"/>}@if(a.discussionQuestion) {<aside class="remember talk-together"><h2>Talk About It Together</h2><p>{{a.discussionQuestion}}</p></aside>}@if(relatedGestures.length) {<section aria-label="Related gestures"><h2>Related gestures</h2><ul>@for(gesture of relatedGestures; track gesture.slug) {<li><a [routerLink]="['/articles',gesture.slug]">{{gesture.title}}</a></li>}</ul></section>}<p class="review">Original explanation · Revised {{a.revision.date}} · Version {{a.revision.version}}. {{reviewLabel(a)}}. References support the explanation; they do not indicate ecclesiastical approval.</p>@if(chapter; as overview) {<section aria-label="Lessons in this chapter"><h2>Lessons in this chapter</h2><ol>@for(slug of overview.published; track slug) {<li><a [routerLink]="['/articles',slug]">{{library.find(slug)?.title}}</a></li>}</ol></section>}</article><aside class="article-sidebar"><p class="eyebrow">Bring it home</p><h2>A little lesson.<br>A meaningful moment.</h2><p>Read together, ask three questions, practice, and pray. No preparation needed.</p><a class="button" [routerLink]="['/articles',a.slug,'family-lesson']">Learn as a family →</a><p class="small">Read, discuss, pray, and print.<br>Free. No account needed.</p></aside></div>}<nt-curriculum-navigation [slug]="a.slug" [family]="isLesson"/></div>} @else {<section class="not-found"><p class="eyebrow">Let’s find your way</p><h1>We couldn’t find that question.</h1><a routerLink="/" class="button">Explore the answers →</a></section>}`})
export class ArticlePage {
 readonly printMode = signal<'lesson' | 'coloring' | 'both'>('lesson');
 readonly printOptions = [
   { mode: 'lesson', title: 'Lesson only', description: 'Family teaching and discussion' },
   { mode: 'both', title: 'Lesson + coloring page', description: 'Include a fun activity for little learners' },
   { mode: 'coloring', title: 'Coloring page only', description: 'Just the printable activity sheet' }
 ] as const;
 readonly printing = signal(false);
 readonly printError = signal('');
 readonly printOptionsOpen = signal(false);
 @ViewChild('printPanel') private printPanel?: ElementRef<HTMLElement>;
 get coloring(){return this.article && coloringPages[this.article.slug];}
 readonly reviewLabel=reviewStatusLabel;
 readonly library=inject(ContentLibrary); private route=inject(ActivatedRoute); private doc=inject(DOCUMENT); private title=inject(Title); private meta=inject(Meta);
 article=this.library.find(this.route.snapshot.paramMap.get('slug') ?? '');
 get relatedGestures(){return (massGestureLinks[this.article?.slug ?? ''] ?? []).flatMap(slug => {const article = this.library.find(slug); return article ? [article] : [];});}
 get chapter(){return curricula[0].phases.find(phase => phase.anchor && phase.anchor === this.article?.slug);}
 get topic(){return this.article && this.library.topic(this.article.topicId);}
 get area(){return this.topic && this.library.area(this.topic.areaId);} isLesson=this.route.snapshot.data['lesson']===true;
 constructor(){this.route.paramMap.pipe(takeUntilDestroyed()).subscribe(params=>{this.article=this.library.find(params.get('slug')??'');this.printOptionsOpen.set(false);this.printMode.set(this.coloring ? 'both' : 'lesson');this.printError.set('');this.title.setTitle(this.article ? (this.isLesson?'Family lesson: ':'')+this.article.title+' | nuancedTheology' : 'Lesson not found | nuancedTheology');this.meta.updateTag({name:'description',content:this.article?.summary??'Find an accessible Catholic lesson in the nuancedTheology learning library.'});});}
 setPrintMode(mode: string) {
   if (mode === 'lesson' || (this.coloring && (mode === 'coloring' || mode === 'both'))) {
     this.printMode.set(mode);
     this.printError.set('');
   }
 }
 @HostListener('document:click', ['$event'])
 dismissPrintOptions(event: MouseEvent) {
   const panel = this.printPanel?.nativeElement;
   if (this.printOptionsOpen() && panel && !event.composedPath().includes(panel)) {
     this.printOptionsOpen.set(false);
   }
 }
 closePrintOptions(toggle: HTMLButtonElement) {
   if (!this.printOptionsOpen()) return;
   this.printOptionsOpen.set(false);
   toggle.focus();
 }
 async print(toggle: HTMLButtonElement) {
   if (this.printing()) return;
   this.closePrintOptions(toggle);
   const slug = this.article?.slug;
   this.printing.set(true);
   this.printError.set('');
   try {
     if (this.printMode() !== 'lesson') {
       const image = this.doc.querySelector<HTMLImageElement>('.print-coloring-page img');
       if (!image) throw new Error('Missing coloring artwork');
       await image.decode();
     }
     if (this.article?.slug === slug && this.isLesson) this.doc.defaultView?.print();
   } catch {
     this.printError.set('The coloring page could not load. Please reload this page and try again.');
   } finally {
     this.printing.set(false);
   }
 }
}
@Component({imports:[RouterLink],template:`<section class="not-found"><p class="eyebrow">A small detour</p><h1>This page isn’t here.</h1><p>Let’s get you back to a good question.</p><a routerLink="/" class="button">Explore the answers →</a></section>`})
export class NotFound {}
const routes: Routes=[{path:'first-visit-to-mass',component:FirstVisitGuide,title:'First time at Mass? | nuancedTheology'},{path:'know-the-faith/the-creed',redirectTo:'/know-the-faith/gods-plan-of-salvation',pathMatch:'full'},...collectionRedirects,...collectionRoutes.map(route=>({...route,component:CollectionPage})),{path:'family-lessons',component:CollectionPage,data:{collection:'family'}},{path:'',component:Home,title:'nuancedTheology | Catholic faith, made understandable'},{path:'articles/:slug/family-lesson',component:ArticlePage,data:{lesson:true}},{path:'articles/:slug',component:ArticlePage},{path:'**',component:NotFound,title:'Page not found | nuancedTheology'}];
@Component({selector:'app-root',imports:[RouterLink,RouterOutlet,LibraryNav,ThemeToggle],templateUrl:'./app-shell.html'})
export class App {
 readonly theme = inject(SiteTheme);
 private readonly router=inject(Router);
 private readonly doc=inject(DOCUMENT);
 private readonly meta=inject(Meta);
 @ViewChild('drawer') private drawer?: ElementRef<HTMLDialogElement>;
 readonly drawerOpen=signal(false);
 skipTarget(){return this.router.url.split('#')[0]+'#main';}
 openDrawer(){this.drawer?.nativeElement.showModal();this.drawerOpen.set(true);}
 closeDrawer(){if(this.drawerOpen())this.drawer?.nativeElement.close();this.drawerOpen.set(false);}
 closeOnBackdrop(event:MouseEvent){if(event.target===this.drawer?.nativeElement)this.closeDrawer();}
 @HostListener('window:resize') onResize(){if((this.doc.defaultView?.innerWidth??0)>=1024&&this.drawerOpen()){this.closeDrawer();this.doc.getElementById('main')?.focus({preventScroll:true});}}
 constructor(){this.router.events.pipe(takeUntilDestroyed()).subscribe(event=>{if(event instanceof NavigationEnd){this.closeDrawer();if(event.urlAfterRedirects==='/'||event.urlAfterRedirects.startsWith('/#'))this.meta.updateTag({name:'description',content:'Helping Catholic families understand what we believe, why we worship, and how we live our faith together. A welcoming learning library for every curious reader.'});if(!event.urlAfterRedirects.includes('#'))this.doc.getElementById('main')?.focus({preventScroll:true});}});}
}
export const config:ApplicationConfig={providers:[provideZonelessChangeDetection(),provideRouter(routes,withInMemoryScrolling({scrollPositionRestoration:'enabled',anchorScrolling:'enabled'})),provideClientHydration(withEventReplay())]};
