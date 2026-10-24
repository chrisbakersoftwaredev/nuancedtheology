# Know the Mass for families

Updated October 24, 2026. An incremental language and organization update, not a replacement curriculum or redesign. No new articles, dependencies, storage, or embedded websites were introduced. All 21 Mass article identifiers and family URLs remain stable; the 16 Faith article records and Faith sequence are unchanged.

## Infrastructure reviewed

The article registry combines content.ts, mass-articles.ts, and mass-foundations.ts with the Faith files. The lesson builder supplies typed sections, references, family questions, and draft metadata. ContentLibrary generates discovery/search, collectionRoutes generates browser and prerender collections, and curriculum.ts controls order, numbers, and Next. Shared article and family components render the same educational paragraphs. Family print controls, source lists, further-reading records, and the simplified shared desktop/mobile navigation are reused.

## Five sections

1. Before Mass Begins: preparation, holy water, the tabernacle, kneeling on one knee, altar, vestments, and colors. Furnishings and clothing are background, not added ritual actions.
2. The Beginning of Mass: entrance and greeting, Sign of the Cross, asking for mercy, praise and the opening prayer. Teach Introductory Rites, Gloria, Penitential Act, Kyrie, and Collect in the articles.
3. Bible Readings: readings and Psalms, the Gospel, explanation of the readings, Creed, and prayer for others. Teach Liturgy of the Word, Responsorial Psalm, homily, and Universal Prayer in context.
4. The Eucharist: gifts, Eucharistic Prayer, Real Presence, preparation for Communion, reception and thanksgiving. Explain immediately that Eucharist means thanksgiving. Retain the Communion Rite as the Church’s name within this larger section rather than a sixth navigation category.
5. The End of Mass: blessing, dismissal, and love and service afterward. Introduce Concluding Rites in the lesson and section explanation.

Keep combined existing articles where they teach naturally together; do not generate separate versions of the procession/greeting, Gloria/opening prayer, readings/Psalm, homily/Creed/intercessions, or Communion prayers solely to fill the proposed title list. Why we go to Mass and how we prepare are introduced in the existing preparation article. A deeper Sunday obligation lesson is outside this update.

## Language and family changes

Existing accurate paragraphs are retained with targeted definitions, shorter explanations, and liturgical qualifications. Ordinary language leads; official names remain in the instructional text and search keywords. The main article gains one open conversation prompt, Talk About It Together. The existing three family discussion questions, remember/practice/prayer material, and parent guidance are preserved. Main explanations continue to appear verbatim in each corresponding family lesson.

Changed records remain Drafted. Their version/date reflect this update; no personal, qualified theological, external, diocesan, or ecclesiastical review is claimed. Existing source URLs and existing further-reading entries are retained; specific new references are appended where the clarified wording needs them.

## Sources actually consulted

- [GIRM chapter II](https://www.usccb.org/prayer-and-worship/the-mass/general-instruction-of-the-roman-missal/girm-chapter-2): Mass structure and preparation; 51–54 on mercy, Gloria, and opening prayer; 65–71 on explanation, Creed, and prayer for others.
- [GIRM chapter IV](https://www.usccb.org/prayer-and-worship/the-mass/general-instruction-of-the-roman-missal/girm-chapter-4): 154 on the invitation to exchange peace; 166–168 on concluding actions; 274–275 on genuflections and bows.
- [USCCB opening rites guide](https://www.usccb.org/prayer-and-worship/the-mass/order-of-mass/introductory-rites): opening actions and prayer.
- [USCCB Bible readings guide](https://www.usccb.org/prayer-and-worship/the-mass/order-of-mass/liturgy-of-the-word): normal Sunday readings, Easter reading from Acts, Psalm, Gospel, and response.
- [USCCB Eucharistic guide](https://www.usccb.org/prayer-and-worship/the-mass/order-of-mass/liturgy-of-the-eucharist): Eucharistic Prayer, Communion prayers, reception, thanksgiving, and final Communion prayer.
- [Catechism 1360, 1374–1379](https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/v_the_sacramental_sacrifice_thanksgiving_memorial_presence.html): thanksgiving, conversion of bread and wine, Christ’s presence, and reservation.
- [Catechism 232–234, 253–255](https://www.vatican.va/content/catechism/en/part_one/section_two/chapter_one/article_1/paragraph_2_the_father.html): the one God in three Persons.

The targeted source check clarifies variation without treating a particular family custom as universal. It does not constitute a complete doctrinal review of every article. Communion preparation and exceptional circumstances still need parish guidance; this site is not a complete disciplinary manual. Continue to review analogies and definitions for both readability and precision.

## Stable routes and verification

Existing canonical topic URLs retain their paths with simpler display titles. /know-the-mass/liturgical-signs redirects to /know-the-mass/entering-church. /know-the-mass/communion-rite redirects to /know-the-mass/liturgy-of-the-eucharist. Both redirects are absolute and prerendered. Every article and family route remains unchanged, and the independent expected Next itinerary remains the same.

Production build: 89 routes. All 91 automated tests pass, including the five sections, inline definitions, varying practices, legacy topic redirects, shared family prose, source ids, all Next destinations, and internal URL/fragment resolution. The project has no configured lint script or lint target; no separate lint pass is claimed. Angular compilation and git diff --check provide additional syntax/type/whitespace checks.

Browser checks cover desktop section order, updated lesson titles/definitions, mobile width without overflow, keyboard Next, the matching family explanation and print button, both old topic redirects, and searching an official term after a title is simplified. Actual printed pagination and a full assistive-technology audit remain outstanding. Existing print styles are unchanged; longer explanations may span additional pages. Verify the deployed revision after merge.

## Recommended follow-up

1. Owner reads the revised definitions and family prompts, starting with Eucharistic, Communion, and genuflection material.
2. Check real print previews for one short and one long lesson, adjusting only demonstrated layout issues.
3. Ask a qualified Catholic reviewer to review doctrinal and liturgical accuracy before changing the Drafted status.
4. Add new Mass articles only when the combined existing lesson leaves a real educational gap.

## Renamed articles

The following list is generated by comparing the current records with the merged baseline. Slugs remain unchanged.

| Existing title | New title | Stable slug |
| --- | --- | --- |
| Why do Catholics genuflect? | Why do Catholics kneel on one knee? | genuflection |
| What is the tabernacle? | Why is there a special place for the Eucharist? | tabernacle |
| Why do we ask for mercy at the start of Mass? | Asking God for mercy at the start of Mass | penitential-act |
| What does “Go in peace” ask us to do? | Being sent out to love and serve | dismissal |
| How can we prepare our hearts for Mass? | How can our family get ready for Mass? | preparing-for-mass |
| What are the Gloria and the Collect? | Praising God and praying the opening prayer | gloria-and-collect |
| Why do we listen to readings and a Psalm? | Listening to the Bible and praying with the Psalms | readings-and-psalm |
| How do we respond after the Gospel? | Understanding the readings and praying together | homily-creed-and-prayers |
| Why are bread and wine brought to the altar? | Bringing bread and wine to the altar | preparation-of-the-gifts |
| How do we prepare together for Holy Communion? | Preparing for Communion: prayer, peace, and mercy | prayer-peace-and-lamb-of-god |
