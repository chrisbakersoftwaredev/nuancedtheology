# Learning library MVP: assessment, changes, and next steps

Date: October 19, 2026. Workspace: D:\Projects\nuancedTheology.
This document supersedes the navigation recommendations in MVP-PLAN.md. The user's complete updated brief is preserved in PROJECT-VISION.md.

## What existed and was inspected

The Angular application is in app/. The repository root still has its original static placeholder index.html and CNAME. The built Angular site uses app/src/index.html, not that placeholder.

The app already used Angular 21 standalone components, zoneless change detection, client hydration, and static prerendering. Its single published article is Why do Catholics make the Sign of the Cross? The complete explanation includes the human dignity section, and the printable retains the parent's requested wording about Jesus through whom the world was made. All content lives in one TypeScript Article record.

Working features before this pass: searchable article discovery, article and lesson routes, reusable explanation and family lesson components, section-level source references, two optional deeper resources, review/version metadata, print-specific Letter CSS, page titles/descriptions, mobile layout, visible focus, skip link, and missing-page handling. The six family lesson sections and three guided questions were already present. There was no CMS, backend, or test script in package.json; work/check-build.cjs provided a local prerender smoke check.

The old navigation was a top bar with homepage anchors and a direct link to one printable. The homepage emphasized isolated questions. Article breadcrumbs and some category labels were hardcoded to the current subject. The article array was accessed directly by both discovery and reading code.

## Smallest coherent changes implemented

- Added a persistent desktop learning-library sidebar and a mobile navigation drawer using a native modal dialog. The drawer has a named heading, close control, Escape dismissal, modal background behavior, and closes on navigation or desktop resize.
- Preserved the existing warm paper/green palette, serif headings, reading layout, and print styles. Added library-specific layout rules rather than replacing the full stylesheet.
- Reoriented the homepage around organized learning, a topic collection, and search. Included the updated mission and clear statements about free access and current review status.
- Published only useful navigation: Library home, Know the Mass, Introductory Rites, Family Lessons, and Our mission. Empty sections are not shown.
- Added /know-the-mass, /know-the-mass/introductory-rites, and /family-lessons, all prerendered with useful metadata.
- Preserved /articles/sign-of-the-cross and /articles/sign-of-the-cross/family-lesson exactly.
- Replaced the article's loose category label with topicId: introductory-rites. Its primary location is Know the Mass > Introductory Rites. Breadcrumbs derive from this relationship and use the actual article title.
- Added a small ContentLibrary service as the content-access boundary. Search, directory cards, and readers use the same records. Navigation includes only areas/topics containing published articles.
- Added shared article cards and a reusable collection page. The Family Lessons directory links to the existing canonical article and its derived printable.
- Preserved all theological prose, sources, parent prompts, revision status, and lesson content. This was an organizational change, not a new theological revision.
- Added eight built-output regression checks and npm test. Fixed article lookup to follow route parameter changes and show an appropriate title for unknown articles.

## Content organization without duplication

Current model:

    LibraryArea -> LibraryTopic <- Article.topicId
    Article.slug -> canonical article route
    Article.lesson + Article.sections -> derived family lesson

areas and topics are small registries in app/src/app/library.ts. Articles remain in app/src/app/content.ts. ContentLibrary centralizes access to the records, searches topic and area names as well as titles/summaries/keywords, and hides empty taxonomy entries. Its signal-backed records can eventually be loaded from a REST service without making views fetch independently. No REST client, server, or database is needed now.

A future cross-listed article should keep one primary topic for its breadcrumb. Add secondary topic references only when there is an actual cross-listing requirement; do not copy its prose into another article. Existing keywords can support search across subjects.

When sufficient content exists, define a small LearningPath record with slug, title, introduction, and an ordered array of articleSlug references plus optional sponsor/family prompts. An OCIA path should link to the same canonical articles and their family lesson URLs. A path's educational grouping must be explicitly distinguished from the Church's formal periods and rites, and its introduction must state that it supplements parish OCIA and pastoral guidance. Do not create a one-article OCIA course now.

Personal reflections should use a separate Reflection type/collection with author, source notes, and a prominent personal-exploration label. Do not silently reuse the catechetical Article template or its family lesson promise for speculative essays. Apologetics can reuse the source/review primitives while giving its sections the five headings specified in the vision. Neither needs a new public route until a complete piece is ready.

For future review metadata, keep editorial checks, qualified theological review, and formal ecclesiastical approval distinct. Record reviewer identity and review date only when review has happened. Any actual ecclesiastical approval needs its authority, scope, date, and reference; never derive approval from a general reviewed flag. Existing material remains explicitly awaiting theological review.

## Current MVP versus deferred work

Now: working library shell, useful topic pages, searchable canonical articles, family lesson directory, preserved citations/print output, and understandable review labels.

Next: confirm actual Letter print pagination in regular Edge/Chrome; get parent feedback on the existing lesson; improve any clarity issues discovered in use; then add a small number of thoroughly researched Know the Mass articles and their lessons.

Publish Entering the Church when a complete holy-water, genuflection, or tabernacle lesson exists. Publish additional Mass topic groups when they contain useful content. The proposed future groups are Entering the Church; Introductory Rites; Liturgy of the Word; Liturgy of the Eucharist; Concluding Rites; Other Liturgical Elements and Practices.

Later: Know the Faith's Creed, Sacraments, Christian Life, and Prayer collections; topic-based introductory apologetics; a genuinely useful OCIA companion assembled from existing articles; separately labelled personal reflections; original Level 2/3 texts.

Deferred: backend/CMS, authentication, tracking, quizzes, advanced course features, custom PDF service, comprehensive apologetics, and a full three-level encyclopedia. The project remains a small static Angular resource.

## Validation and limits

- Production build passes and generates six static routes.
- npm test passes all eight checks: each route's main heading/metadata/navigation; exclusion of unpublished sections; canonical article/print links across directories; preservation of shared explanation, three parent questions, section source anchors, and review labels.
- Browser checks: keyword search and empty results; area/topic/article navigation; Family Lessons directory; updated breadcrumbs; mobile drawer opening and Escape/focus restoration; drawer closing after navigation; phone layout without horizontal overflow on the checked collection page; existing article and family lesson routes.
- Print CSS explicitly hides the new sidebar, mobile header, and drawer, and resets the content frame's left margin. Actual printed pagination and Save as PDF remain unverified: the embedded preview previously stalled on window.print(). This pass preserves that known limitation and does not claim a verified two-page output.
- One Windows EPERM directory-creation error interrupted a build; a normal retry completed successfully. No special permanent workaround or dependency changes were introduced.
- Sources were preserved, not newly researched in this navigation pass. No theological review or ecclesiastical approval occurred.
- No GitHub push, deployment, DNS change, new dependencies, or backend was introduced.

## Local use

Double-click Start-nuancedTheology.cmd, then open http://127.0.0.1:4200/. For checks, open a terminal in app/, run npm run build, then npm test. The tests read the current production output, so build first.

When publishing a new collection, register its route in app/src/app/app.ts and its prerender route in app/src/main.server.ts as well as its taxonomy entry. Update the built-output tests for the new public route.

## Navigation simplification

Family printables are accessed through a Print Family Lesson button on each lesson card and within its article, rather than a separate Learn together sidebar section. Removed the dedicated homepage family-directory promotion as well. The existing /family-lessons route is retained for URL compatibility but is no longer a primary navigation destination. The same shared card/button will apply to Know the Faith when that collection is published.
