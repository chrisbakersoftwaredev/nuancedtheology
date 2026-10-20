# Twenty introductory lessons

October 19, 2026 · Original educational prose · Awaiting theological review.

This batch adds ten Know the Mass lessons and ten Know the Faith lessons. The original Sign of the Cross explanation and its approved parent wording are retained, giving 21 articles in total. Every article has a shared printable explanation, three discussion questions with parent guidance, a memory sentence, an activity, a prayer, and references. No ecclesiastical approval is claimed.

## Review list

The article files contain the full linked sources and section-level references. Scripture links lead to the USCCB Bible; Catechism links lead to the Vatican. Mass discipline is described for the Roman Rite, using the USCCB General Instruction. Catholic Answers supplements the holy water explanation. Activities, analogies, and family applications are original teaching suggestions rather than quotations or additional Church rules.

| Article slug | Main references | Particular point to review |
| --- | --- | --- |
| holy-water | CCC 1667–1670; Romans 6:3–4; Catholic Answers, Why Using Holy Water Isn’t Superstitious | Sacramental, not magic or a second Baptism. |
| genuflection | GIRM 274–275; CCC 1374–1379 | Worship of Christ, distinction from bowing; Good Friday exception; accessibility. |
| tabernacle | CCC 1374–1379; GIRM 314–317 | Reservation of the Eucharist, sanctuary lamp, care of the sick; not the only place God is present. |
| altar | CCC 1182; GIRM 296–299 | Sacrifice and meal together; Christ does not die again. |
| vestments | GIRM 335–340; Galatians 3:26–28 | Alb, stole, chasuble; ministry rather than personal superiority. |
| liturgical-colors | GIRM 345–346; Luke 2:10–11 | Introductory examples, optional rose; not a complete list of permitted colors. |
| penitential-act | GIRM 51–52; Luke 18:9–14 | Does not replace sacramental absolution; no forced family disclosure of sins. |
| standing-for-the-gospel | GIRM 29, 60; Mark 1:14–20 | Honor for the Gospel without diminishing the other readings; physical limitations. |
| eucharist-real-presence | CCC 1374–1379; 1 Corinthians 11:23–29 | Whole Christ, appearances remain; receiving requires Church preparation and guidance. |
| dismissal | GIRM 90; Matthew 5:14–16 | Daily mission and works of love as a response to God. |
| creation-and-gods-friendship | Genesis 1:26–31; 3:1–15; CCC 396–405, 410 | Human dignity, inherited original sin versus personal fault; covenant terminology qualified. |
| covenant-with-noah | Genesis 9:8–17; CCC 56–58 | Scope of the promise, including living creatures; no promise of immunity from disasters. |
| covenant-with-abraham | Genesis 12:1–4; 17:1–8, 15–21; CCC 59–61 | Blessing for all families, Sarah and Isaac, a faithful response. |
| covenant-with-moses | Exodus 20:1–17; 24:3–8; CCC 62–64 | Rescue precedes law; avoid caricaturing Judaism as loveless legalism. |
| covenant-with-david | 2 Samuel 7:8–16; Luke 1:30–33 | House as dynasty; initial promise and fulfillment in Christ distinguished. |
| new-covenant-in-jesus | Jeremiah 31:31–34; Luke 22:14–20; Hebrews 9:11–15 | Jesus’ saving gift fulfills the story; no contempt for Israel or the Old Testament. |
| promises-pointing-to-jesus | Isaiah 9:1–6; 53:1–12; Luke 24:25–27, 44–47 | Original historical setting, messianic reading, and patterns/typology distinguished. |
| life-of-jesus | CCC 456–469; Luke 2:1–20, 51–52; Mark 1:9–20, 29–39 | True God and true man; a short overview rather than an exhaustive biography. |
| death-burial-and-resurrection | 1 Corinthians 15:3–8, 20–22; Luke 24; CCC 638–655; Romans 5:6–8 | Real death and bodily, glorified Resurrection; grief remains valid; no collective Jewish blame. |
| new-life-in-christ | Ephesians 2:4–10; Romans 6:3–11; CCC 1996–2002 | Grace comes first and enables a free response; neither self-salvation nor indifferent behavior. |

## Deliberate limits

The Faith collection sits under The Creed and follows an introductory salvation-history sequence. It does not cover every biblical covenant, every messianic passage, or the whole Creed. The creation lesson explains that Genesis 1–3 does not explicitly use the later covenant formula. No claim that there are exactly six biblical covenants is made.

The sources were researched online against the claims. Some USCCB pages intermittently rejected automated opening, so indexed USCCB excerpts were also used, including GIRM chapter V and several Gospel passages. This is an editorial research pass, not a qualified theological review. Full passages and the family wording should still be read by the owner before marking any article Reviewed.

## Technical verification

The route registry supplies both browser and server collection routes. All 21 articles and their 21 printable views are prerendered, along with the homepage, nine collections, and the retained family directory: 53 routes. Family lessons remain buttons on articles and cards, without a separate navigation section.

The automated checks load the actual TypeScript content records. They check unique slugs, the 10/10 batch count, topic assignment, populated sections and family activities, three questions, source identifiers, citation anchors, shared explanation text, listing links, metadata, prerendered routes, and preservation of the original parent guidance.

Browser checks cover collection navigation, Noah keyword search, article-to-family navigation, and the expanded navigation at desktop and mobile sizes. Production build and tests are required before the PR. The existing Letter print stylesheet is reused; actual printer/PDF pagination is not verified in this environment. The short new explanations are roughly two-minute individual reads and three-minute read-alouds.

On this Windows host the first production build encountered an intermittent EPERM while creating prerender directories after compilation. A repeat build with `node node_modules/@angular/cli/bin/ng.js build --delete-output-path=false` completed successfully. CI uses the standard clean Linux build.

## Publishing

Merge the batch PR when ready to put the articles online. The existing main-branch GitHub Actions workflow builds, tests, and deploys to GitHub Pages. The batch itself does not change hosting settings or merge itself. Subsequent editorial corrections should increment the affected article’s version and date; review status remains Awaiting theological review until a named reviewer signs off.
