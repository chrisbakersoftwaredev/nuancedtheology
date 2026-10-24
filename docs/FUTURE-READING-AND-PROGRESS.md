# Future reading panes and completion tracking

Planning only. No pane, iframe, storage, account, database, or dependency is implemented by this update.

## Existing source architecture

Article records already separate Section paragraphs from Article.sources. Each source has an article-local id, label, HTTPS URL, and explanation of relevance. Sections and parent guidance reference source ids; deeperResources references the same records by id. The shared Explanation component renders both the article and family explanation. Sources and further reading are currently inline at the end, while the sidebar offers the family lesson. Some collection transition references live in the curriculum registry rather than article records; preserve that distinction.

Keep this model. Do not embed source HTML in paragraphs or duplicate references in a pane. Source ids are scoped to their article: use article slug plus source id to select a resource. Existing ids such as catechism and missal are intentionally reused across articles. Optional future fields could include kind, locator (verses or paragraph numbers), publisher, and embedding policy (external-only by default). Store plain metadata, not trusted third-party HTML. Keep the reference list as a usable baseline when JavaScript or embedding is unavailable.

## Proposed desktop and mobile behavior

Desktop: lesson in the main reading region, optional named Sources region alongside it. Clicking a section reference selects the matching source card; preserve its real external href and existing fragment URL. Show label, locator, relevance note, and an ordinary Open original link. Loading an embedded page would require a separate user action. Keep the family lesson CTA distinct from supporting references. Avoid competing sticky controls or inaccessible nested scrolling.

Mobile: use a single-column disclosure or a Sources tab with accessible tab semantics if tabs are chosen later. Maintain reading position, visible focus, and a clear return to the lesson. Do not force two narrow columns. Embedded resources need a descriptive iframe title; keyboard users must be able to leave the frame. Screen readers need a named region, understandable controls, and announcement of a changed source without repeatedly reading the article. Print the current reference list and family material, excluding pane controls.

## Embedding, accessibility, and privacy

An external publisher may block frames through [CSP frame-ancestors](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) or [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options). Respect those policies; do not proxy, strip headers, or rehost copyrighted text to bypass them. Always provide a visible external link, even when a frame appears to load. Cross-origin restrictions prevent reliable inspection of the external document, so an iframe load event alone does not establish successful access.

Do not load third-party frames automatically: doing so can send visitor information to that publisher and load cookies or scripts. Use an explicit allowlist, HTTPS, a considered referrer policy, and minimal sandbox permissions if framing is eventually approved. No arbitrary user-supplied embed URLs. Check each publisher’s current behavior and terms before enabling embedding. Keep external links usable with blocked frames, content blockers, no cookies, and keyboard navigation. No embedding eligibility is claimed for the current Catholic sources.

## Optional local progress

Use stable article slugs as lesson identifiers; never use index, lesson number, title, or chapter position. Family and article views refer to one completion record. Preserve slugs; if a future rename is unavoidable, maintain a migration alias alongside the route redirect.

Suggested storage shape (design only): key nuancedTheology.progress.v1, value {schemaVersion: 1, completed: {articleSlug: {completedAt: ISODate}}, lastVisited: articleSlug}. Track only what the visitor explicitly marks complete. Visiting, printing, and pressing Next must not silently mark completion. Compute chapter and part totals from the current published registry, excluding planned entries and duplicate family views. Reordering must not lose saved marks; new articles should change the denominator predictably. Continue Learning should select the next uncompleted published lesson in the guided itinerary and explain when no published lessons remain.

Access storage only in the browser, after hydration, with try/catch for unavailable storage, security errors, quota limits, and malformed JSON. Validate schema, allowed slugs, dates, and payload size; ignore unknown records safely. Listen for storage changes if supporting multiple tabs. Provide a clearly labeled reset action with a recoverable or confirmed interaction, plus optional export/import only if later requested. No analytics transmission or cross-device synchronization by default.

[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) is origin-specific and can be unavailable or cleared, including in private browsing. Explain device/browser scope and avoid implying durable backup. Completion is a reading aid, not evidence of comprehension, sacramental readiness, or spiritual achievement. Do not conflate completion with the site’s editorial or theological review statuses.

## Future acceptance tests

- [ ] External links work even when framing is denied or unavailable.
- [ ] Source selection preserves the correct article-local id and reading position.
- [ ] Keyboard, screen-reader, mobile, and print behavior remain usable.
- [ ] No third-party frame loads before an explicit action.
- [ ] Reordering lessons preserves saved completion marks.
- [ ] Family and article views share completion without double counting.
- [ ] New, retired, and renamed slugs have defined migration behavior.
- [ ] Malformed, blocked, or unavailable storage causes no page failure.
- [ ] SSR and hydration work without accessing browser storage on the server.
