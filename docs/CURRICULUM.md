# Guided curriculum

October 21, 2026. Incremental navigation update; existing article prose, sources, family explanations, and URLs are unchanged.

## Single source of order

`app/src/app/curriculum.ts` defines curricula, phases, published article slugs, and planned lessons. The library sorts article listings from this registry; position indicators, numbered collection cards, collection outlines, Start Learning, and Next all use it. Neither file order nor publication date defines the journey. Future Know the Faith collections can register their own sequence without becoming part of God’s Plan of Salvation.

Only published articles receive numbers or links. The position text explicitly counts published lessons. Planned items have titles and notes, without routes. Adding a lesson requires registering its slug in the appropriate phase and removing its corresponding planned item once developed.

## Published order

God’s Plan of Salvation:

1. Overview: the whole story
2. Creation and God’s friendship (includes the Fall)
3. Noah
4. Abraham
5. Moses and Sinai
6. David
7. Prophets and promises pointing to Jesus
8. Jesus’ life (includes the Incarnation)
9. The New Covenant in Jesus
10. Jesus’ death, burial, and Resurrection
11. New life in Christ

Know the Mass:

1. Holy water
2. The tabernacle
3. Genuflection
4. The altar
5. Vestments
6. Liturgical colors
7. The Sign of the Cross
8. The Penitential Act
9. Standing for the Gospel
10. The Real Presence in the Eucharist
11. The dismissal

The first six Mass lessons are preparation and background, not a claim that vestments or colors are additional ritual actions. Introductory Rites, Word, Eucharist, Communion, and Concluding Rites remain distinct phases. The Communion phase is visible as planned rather than silently folded into the Real Presence article. The structural reference is [GIRM chapter II, especially 27–28, 46–90](https://www.usccb.org/prayer-and-worship/the-mass/general-instruction-of-the-roman-missal/girm-chapter-2).

## Gaps and future development

Faith priorities:

- A dedicated Fall and need-for-a-Savior lesson; the existing creation article already introduces this.
- A dedicated Incarnation lesson; the existing life-of-Jesus article introduces it.
- Christ establishes his Church and entrusts the apostolic mission.
- Pentecost and the Holy Spirit.
- The Church as the Body of Christ, her sacramental life, and her mission: the intended conclusion and bridge to the Mass.

Jesus’ Passion, burial, and Resurrection already have a combined published article; no placeholder duplicates it.

Mass priorities:

- Preparing our hearts for Mass.
- Entrance, greeting, Gloria, and Collect.
- Readings, Psalm, homily, Creed, and Universal Prayer.
- Preparation of the gifts, Eucharistic Prayer, and Christ’s one sacrifice.
- Communion Rite: Lord’s Prayer, peace, Lamb of God, preparation/reception of Holy Communion, and thanksgiving.
- The final blessing.

No new full theological lessons were generated for these gaps. The phases list them visibly on the main collection pages. Notices also appear when Next advances across a phase with missing lessons.

## Temporary Faith-to-Mass transition

The published Faith sequence ends at New Life in Christ. A notice there explicitly says that the Church and Pentecost material is still planned and that the published sequence does not complete the journey through the Church. Next currently opens Holy Water, the first available Mass lesson. A brief transition refers to the Word, the Holy Sacrifice of the Mass, and Christ’s real Eucharistic presence, citing GIRM 27–28.

When the Church conclusion is written and reviewed, append it to the Faith sequence, remove the temporary gap notice, and retain the link to the first Mass lesson. The current transition is a transparent way to keep browsing published lessons, not a substitute for that missing Church lesson.

## Navigation and printing

Each primary article has a position indicator after its breadcrumb and a Next link after all article sources and resources. Each family view has the same position and a Next link after the entire family sheet, activities, prayer, and parent references. Family Next opens the next article’s family view; family views are not additional numbered steps. The final dismissal view offers an end-of-published-journey message and collection link, rather than an inactive Next button.

All curriculum navigation is `screen-only` and additionally hidden by print rules targeting the reusable component hosts. The existing print handler, family sheet, Letter styling, and metadata are preserved. No accounts, databases, persistent tracking, or dependencies were added.

## Verification

The production build prerenders 56 routes. All 51 automated checks pass, including every article/family Next destination and position, cross-collection transition, terminal state, link placement after references, explicit registry coverage, independence from source-file order, collection ordering, planned items without links, old collection redirect, and original shared explanations.

Browser checks verified Start Learning, repeated Next navigation with live article/title/position updates, keyboard Enter, browser Back, family-mode continuity, the Faith-to-Mass transition, and dismissal completion. A 390-pixel mobile viewport showed no horizontal overflow and a readable Next control after parent references. Actual printer/PDF pagination was not reverified; the navigation’s print exclusion and unchanged print handler were checked in source.
