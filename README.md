# nuancedTheology

A free Catholic learning resource for curious readers and families. The Angular application lives in `app/`; the original landing page remains at the repository root as a historical placeholder. The Angular homepage is `app/src/app/app.ts`, not the old root index.html.

## Run locally

Requires Node 22.12 or later in the Node 22 series (this project was built with Node 22.15), and npm.

Open a terminal in D:\Projects\nuancedTheology\app:

    npm ci
    npm start

Visit http://127.0.0.1:4200/ in Edge or Chrome. For a production build:

    npm run build

The static website is emitted to `app/dist/nuanced-theology/browser/`. All six published routes are prerendered. A future static host must serve those route directories, and fall back to index.html for unknown paths so the application can show its not-found page. No deployment or DNS changes have been made.

## First lesson

- `/articles/sign-of-the-cross`
- `/articles/sign-of-the-cross/family-lesson`

Open the family lesson in a regular browser and choose Print Family Lesson. Select US Letter, 100% scale, and disable browser headers/footers. Save as PDF is provided by the browser. The print stylesheet targets a two-page lesson; pagination remains to be confirmed in a regular browser because printing stalled the embedded Codex preview.

## Add content

Add an Article object to `app/src/app/content.ts`. The list, search, article page, family lesson, and prerender parameters all use this collection. Article prose is shared with the family lesson. Optional Level 2 and 3 original sections are supported without displaying empty tabs. Keep citations attached to the relevant sections.

Review source relevance, links, age appropriateness, and actual printing for each article. Set revision details honestly. Current content is awaiting theological review and has no claimed ecclesiastical approval.

## Local files

Project, dependency cache, and build output are on D:. `.npm-cache`, `node_modules`, `.angular`, build output, and local verification work are ignored by Git. The repository's CNAME is copied to the app's public output. Use `docs/MVP-PLAN.md` for scope and `docs/EDITORIAL-NOTES.md` for source checks.

## Learning library update

The current organization is documented in docs/LIBRARY-MVP.md and the complete updated brief in docs/PROJECT-VISION.md. The homepage now presents a learning library with a desktop sidebar and mobile drawer. Know the Mass > Introductory Rites and the central Family Lessons directory reference the same canonical article; existing article and lesson URLs remain unchanged.

Content access is centralized in app/src/app/library.ts. Register meaningful areas/topics there and use topicId in article content. Add matching collection routes in app.ts and prerender entries in main.server.ts when publishing a new area or topic. Only populated groups appear in navigation. Keep future OCIA sequences as article references, and personal reflections separate from instructional articles.

After building, run npm test from app/ to check all six prerendered pages and the preserved article/lesson contracts. Actual printer pagination remains a manual check in a regular browser.
