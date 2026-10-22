import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { mergeApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes, RenderMode, ServerRoute, PrerenderFallback } from '@angular/ssr';
import { App, config } from './app/app';
import { articles } from './app/content';
import { collectionRoutes } from './app/library';
const params = async () => articles.map(article => ({ slug: article.slug }));
const serverRoutes: ServerRoute[] = [
 { path: '', renderMode: RenderMode.Prerender },
 { path: 'know-the-faith/the-creed', renderMode: RenderMode.Prerender },
 ...collectionRoutes.map((route): ServerRoute => ({path: route.path, renderMode: RenderMode.Prerender})),
 { path: 'family-lessons', renderMode: RenderMode.Prerender },
 { path: 'articles/:slug/family-lesson', renderMode: RenderMode.Prerender, getPrerenderParams: params, fallback: PrerenderFallback.Client },
 { path: 'articles/:slug', renderMode: RenderMode.Prerender, getPrerenderParams: params, fallback: PrerenderFallback.Client },
 { path: '**', renderMode: RenderMode.Client }
];
export default (context: BootstrapContext) => bootstrapApplication(App, mergeApplicationConfig(config, { providers: [provideServerRendering(withRoutes(serverRoutes))] }), context);
