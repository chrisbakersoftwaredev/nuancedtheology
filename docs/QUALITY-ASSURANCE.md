# Quality assurance and navigation audit

Audit date: October 23, 2026. This records technical checks, not a personal theological review.

## Confirmed problems and fixes

1. Pentecost led to the whole-story overview because the registry put that overview last as a recap. This was a real editorial sequencing issue in the code, not evidence of a stale browser cache. The overview now follows Creation and the Fall as early orientation. Pentecost is lesson 14 of 14 and proceeds directly to New life in Christ in Living the Faith.
2. The legacy Creed redirect was relative. Prerendered output repeated /know-the-faith/ and produced a missing target. It is now absolute and checked against the exact destination, including an HTTP request and browser navigation.
3. Both main menus exposed every Mass topic. The shared menu now shows Know the Faith with its three parts and a separate Know the Mass entry. Detailed Mass categories remain on collection pages. Existing article and topic URLs are preserved.
4. The old generic review label did not distinguish drafting from review. Four typed stages now exist. Every current article is Drafted; no completed content review is claimed. Reviewed stages require version-specific reviewer, date, and notes. A version mismatch falls back to Drafted in the display.
5. Position text now includes the current chapter. One citation display label was corrected from 1timothy to 1 Timothy; its URL and reference are unchanged.

## Verified in this update

- [x] One explicit registry governs all 37 published lessons, numbering, Start Learning, discovery, and Next.
- [x] An independent expected itinerary checks every rendered Next link in article and family views, with no loops or missing destinations.
- [x] Pentecost to Living the Faith, Living the Faith to The Church, and The Church to Know the Mass are verified.
- [x] All 313 internal URL/fragment targets across 89 generated pages resolve over a temporary local HTTP server, including the legacy redirect.
- [x] Three Faith parts appear in order with published material distinct from unlinked planned content.
- [x] Six Mass chapters retain their order, consistent numbering, and Start Learning entry point.
- [x] Existing explanations, family prompts, references, SEO metadata, and URLs are retained.
- [x] The shared main menu is short on desktop and mobile.
- [x] Browser checks verify desktop keyboard Next, mobile Next, the mobile menu, Escape dismissal and restored focus, and no horizontal overflow on the tested mobile page.
- [x] Browser checks verify Pentecost family Next preserves the family view and the old Creed route reaches the correct collection.
- [x] Shared article components keep titles, explanation, citations, reference list, family access, and bottom Next in a consistent order.
- [x] Automated print-rule checks retain the family discussion page break and hide curriculum navigation.
- [x] Production build and all 88 automated tests pass. No dependencies, accounts, database, iframe, or completion tracker added.

## Limitations and remaining concerns

- [ ] Actual printed pagination and PDF clipping need a regular-browser check. Styles and family templates were retained, but longer lessons may span more than two pages. Do not claim every family lesson prints on exactly two sheets.
- [ ] Full assistive-technology testing remains: keyboard basics and accessibility structure were checked, not a comprehensive screen-reader audit.
- [ ] External source availability and doctrinal support need article-by-article review. Internal-link checks do not certify external URLs, interpretation, or accuracy.
- [ ] This audit validates the built changes locally; GitHub Pages deployment and production caches must be checked after merge. The public page could not be inspected through the web-fetch tool during this audit.
- [ ] Parts 2 and 3 each still have one published introduction. The Ascension, apostolic succession, four marks, and fuller Christian-life chapters remain planned.
- [ ] The overview is intentionally an orientation after Creation and the Fall, before the chronological covenant lessons. Its broad scope is preserved rather than rewritten to fit one narrow chapter.

## Repeat before each merge

1. Build with npm run build in app, then run npm test. If Windows reports a transient output-directory EPERM, retry ng build --delete-output-path=false after checking for another writer; do not accept a failed build as passing.
2. If teaching order changes, update the centralized registry and independently review the expected itinerary test. Confirm every destination by title and stable slug rather than merely accepting new snapshots.
3. Open the first lesson, a chapter boundary, each part boundary, Pentecost, and the final dismissal. Test both article and family Next links.
4. Check Start Learning, homepage search, the legacy Creed link, a section-source anchor, and a family CTA. Verify the mobile drawer with keyboard and Escape.
5. Print one short and one long family lesson: US Letter, 100 percent scale, headers and footers disabled. Check headings, blank pages, clipping, and hidden navigation.
6. After merge, verify the GitHub build/deployment and the live Pentecost destination. If production differs from the checked commit, inspect the deployed revision before assuming a cache issue.

## Prioritized next steps

1. Merge and confirm live navigation and redirect behavior.
2. Owner review of the current articles, beginning with the Incarnation, saving work of Christ, grace, Church, and Eucharistic material; use ARTICLE-REVIEW.md.
3. Verify real printed output and adjust only demonstrated pagination problems.
4. Develop and review the missing Ascension and Christian-life/Church chapters in small batches.
5. Consider the optional reading pane and progress features only after the content and print foundation is stable; see FUTURE-READING-AND-PROGRESS.md.
