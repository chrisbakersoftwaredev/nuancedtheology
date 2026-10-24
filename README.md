# nuancedTheology

A free Catholic learning resource for curious readers and families. The Angular application lives in `app/`; the original landing page remains at the repository root as a historical placeholder. The Angular homepage is `app/src/app/app.ts`, not the old root index.html.

## Run locally

Requires Node 22.12 or later in the Node 22 series (this project was built with Node 22.15), and npm.

Open a terminal in D:\Projects\nuancedTheology\app:

    npm ci
    npm start

Visit http://127.0.0.1:4200/ in Edge or Chrome. For a production build:

    npm run build

The static website is emitted to `app/dist/nuanced-theology/browser/`. Published articles, family lessons, and collections are prerendered. `.github/workflows/deploy.yml` builds and tests pull requests and deploys merged main-branch changes to GitHub Pages at https://nuancedtheology.com/. It publishes the browser output and a client-side 404 fallback.

## First lesson

- `/articles/sign-of-the-cross`
- `/articles/sign-of-the-cross/family-lesson`

Open the family lesson in a regular browser and choose Print Family Lesson. Select US Letter, 100% scale, and disable browser headers/footers. Save as PDF is provided by the browser. The print stylesheet targets a two-page lesson; pagination remains to be confirmed in a regular browser because printing stalled the embedded Codex preview.

## Add content

The canonical collection in `app/src/app/content.ts` combines the original lesson with `mass-articles.ts`, `faith-articles.ts`, `faith-foundations.ts`, and `mass-foundations.ts`. New lessons use the typed `lesson-builder.ts` helper for shared metadata and the printable structure; explanations and family prompts are authored per topic. The list, search, article page, family lesson, and prerender parameters all use this collection. Optional Level 2 and 3 original sections are supported without displaying empty tabs. Keep citations attached to the relevant sections.

Review source relevance, links, age appropriateness, and actual printing for each article. Set revision details honestly. Current content is awaiting theological review and has no claimed ecclesiastical approval.

## Local files

Project, dependency cache, and build output are on D:. `.npm-cache`, `node_modules`, `.angular`, build output, and local verification work are ignored by Git. The repository's CNAME is copied to the app's public output. Use `docs/MVP-PLAN.md` for scope and `docs/EDITORIAL-NOTES.md` for source checks.

## Learning library update

The guided learning order and planned gaps are documented in [CURRICULUM.md](docs/CURRICULUM.md). Register each published article once in `app/src/app/curriculum.ts`; this drives listing order, numbering, Start Learning, and Next in both article and family views. Planned lessons have no live links. The Church/Pentecost bridge and the Communion Rite are explicitly marked as unfinished.

The current organization is documented in docs/LIBRARY-MVP.md and the complete updated brief in docs/PROJECT-VISION.md. The homepage presents a learning library with a desktop sidebar and mobile drawer. There are 11 Know the Mass articles, including the original Sign of the Cross, and 11 Know the Faith articles under God’s Plan of Salvation, including a one-paragraph overview. Know the Faith appears first in navigation and on the homepage. Each card offers Read this article and Learn as a family; the family view retains its Print Family Lesson button. The older family directory URL is retained without a separate navigation section.

Content access is centralized in app/src/app/library.ts. Register meaningful areas/topics there and use topicId in article content. The populated collection registry supplies both browser routes and server prerender entries. Only populated groups appear in navigation. Keep future OCIA sequences as article references, and personal reflections separate from instructional articles.

After building, run `npm test` from `app/` to check the complete batch, prerendered pages, references, and article/lesson contracts. See [the batch review guide](docs/TWENTY-LESSON-BATCH.md) for the inventory and editorial review priorities. Actual printer pagination remains a manual check in a regular browser.

## Quality and review

Use `docs/QUALITY-ASSURANCE.md` before each merge. `docs/CURRICULUM.md` records the current hierarchy and lesson order. `docs/ARTICLE-REVIEW.md` contains the article queue and review checklist; all current articles are Drafted, awaiting theological review. `docs/FUTURE-READING-AND-PROGRESS.md` plans optional source panes and browser-local completion tracking without implementing them.

See `docs/FAMILY-MASS-UPDATE.md` for the five-section family-oriented Mass curriculum, retained routes, revised titles, and source checks.

See `docs/LIVING-FAITH-UPDATE.md` for the Ascension and the published Living the Faith chapters, sources, and the next Part 3 work.
