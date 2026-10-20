# nuancedTheology: assessment and first MVP

## Repository assessment

The supplied repository is a static placeholder, not an Angular application. It contains index.html, README.md, and CNAME (nuancedtheology.com). No package manifest, Angular configuration, application source, article model, routing, search, printable lessons, or test infrastructure is present.

Preserve the Git history, domain configuration, responsive viewport, and commitment to charity, clear definitions, and transparent citations. Replace the cross-tradition comparison positioning, under-construction copy, inactive Contact link, unrelated demo link, and CDN-based presentation with the Catholic educational mission. The existing dark visual treatment is optional branding, not an architectural constraint.

## Smallest useful release

Publish one finished subject: Why Do Catholics Make the Sign of the Cross? A parent must be able to discover it, read an original simple explanation, open its family lesson, print it, and use the printed lesson without internet access. No unpublished-topic cards or empty depth tabs.

Routes:
- / — mission, featured question, and a simple searchable article list.
- /articles/sign-of-the-cross — complete Level 1 article and optional further reading.
- /articles/sign-of-the-cross/family-lesson — readable lesson preview and Print Family Lesson button.
- An accessible not-found page.

Keep one visible category, Understanding the Mass. Add categories when actual content warrants them. Search title, summary, and keywords; provide a clear empty result message. A one-article collection can use this same small client-side search as it grows.

## Implementation approach

Use an Angular standalone application with routing, TypeScript content objects, local CSS, and no backend. Prefer prerendered public routes for useful page HTML, page-specific titles and descriptions, and static hosting. Verify the chosen Angular version against the installed Node runtime before scaffolding. Keep the existing domain configuration available for the eventual hosting output; do not deploy or change DNS during local setup.

Use a small shared article model: slug, title, summary, category, keywords, Level 1 sections, sources, optional deeper resources, family lesson prompts, revision date, and editorial review status. Sources should have stable IDs, labels, URLs, and paragraph or verse references. Future original Level 2 and Level 3 sections should be optional properties, rendered only when authored. Do not build a CMS or generalized editorial workflow.

Share the article's explanation with the family lesson rather than maintaining duplicate theological prose. The lesson adds parent prompts, a memory sentence, practice, prayer, and references. Keep this content independent of layout components so later articles require content work rather than new templates.

Build a reusable family lesson component and print stylesheet. Use US Letter, black text, white background, readable spacing, and sensible page breaks. Hide navigation and controls when printing. Include title, nuancedTheology, Scripture and Catechism references, and compact source URLs. Aim for two pages with all six lesson sections; validate actual print pagination before claiming the page count. Browser printing supplies Save as PDF without a PDF service.

## First article editorial brief

Target approximately 450–600 words of warm, original Level 1 prose. Read it aloud and simplify sentences for ages 7–10. Explain the gesture as prayer with our bodies, the Trinity as one God in three Persons, Christ's saving Cross, our Baptism, and ordinary occasions for prayer. Teach the common Latin Catholic forehead-to-chest, left-to-right-shoulder practice while acknowledging that some Eastern Catholics cross differently. Do not equate individual touch points with separate divine Persons or invent a historical origin story.

Family lesson:
- Let's Learn: reuse the article, with natural read-aloud transitions.
- Let's Talk: exactly three questions with brief parent guidance.
- Let's Remember: one clear sentence.
- Let's Practice: slowly practice the gesture and choose one daily prayer moment.
- Let's Pray: a short original prayer addressed to God.
- For Parents: printed references and one or two optional resources.

Research candidates to verify in full before publication: Matthew 28:19; Catechism 232–234, 1235, and 2157; Pope Francis's general audience of April 18, 2018 on Baptism. Catechism 2157 has already been located on the Vatican website. Check every remaining source and each link against the final claims. Distinguish Catholic teaching from regional gesture customs. Mark editorial review honestly; do not imply diocesan approval.

## Delivery steps and acceptance checks

1. Establish the Angular shell, content model, navigation, article route, and lesson route.
2. Research and write the first article and lesson; review for clarity and accurate citations.
3. Add the welcoming homepage, article search, responsive styling, metadata, and print CSS.
4. Verify production build, direct route access, keyboard navigation, visible focus, contrast, mobile layout, unknown routes, search empty state, external links, and a two-page Letter print preview. Check that printed references and parent guidance work offline.
5. Ask a parent to use the lesson without preparation, then seek catechetical review before wider parish adoption.

The first release is complete when this one subject works end to end. Expansion to 10–15 articles comes after that standard is accepted. Accounts, subscriptions, quizzes, analytics, AI theology generation, and custom PDF infrastructure are outside this MVP.

## Local workspace

Project files belong in D:\Projects\nuancedTheology. The initial repository copy is preserved here. No GitHub push, live-site replacement, or deployment has been performed.
