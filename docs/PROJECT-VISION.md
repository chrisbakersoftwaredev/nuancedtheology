# nuancedTheology — Updated Project Vision and Development Instructions

## 1. Project context

I am developing an existing Angular website called **nuancedTheology**.

The MVP is already underway, and meaningful development has been completed. **Before making changes, inspect the existing project, understand what has been implemented, and preserve everything that still serves the updated vision.**

This is an evolution of the project, not a request to rebuild it from scratch.

I have approximately seven years of professional software engineering experience, primarily working with Java, Spring Boot, Angular, TypeScript, and relational databases. I also hold a B.A. in Bible & Theology.

I want this project to serve as both a genuine Catholic educational ministry and, potentially, a professional portfolio for future opportunities with organizations such as Ascension Press, Augustine Institute, or similar Catholic apostolates.

However, **the educational mission takes precedence over showcasing technical sophistication.**

---

## 2. Our guiding mission

**nuancedTheology exists to make the Catholic faith understandable and accessible to individuals and families—whether they're encountering it for the first time, preparing to enter the Church, or seeking to grow in a faith they've practiced their entire lives.**

I want to build the resource I wish I'd had when I was first learning about Catholicism.

Our guiding principles are:

- Simple explanations without sacrificing theological accuracy.
- Faithfulness to the Catholic Magisterium.
- A welcoming, thoughtful, and charitable tone.
- Intellectual honesty about theological distinctions and historical evidence.
- Resources that parents can confidently share with their children.
- Accessibility for people without theological education.
- Opportunities for deeper learning without overwhelming beginners.
- Free access without subscriptions or mandatory accounts.

**Nuance does not require complexity. It requires precision.**

We should explain Catholic teaching as clearly as possible while preserving distinctions that materially affect its meaning.

The website should not become a polemical apologetics platform, an academic encyclopedia, or a collection of unnecessarily complicated theological discussions.

Our primary goal is helping ordinary people understand their faith.

---

## 3. Updated website navigation

I want to move away from the current predominantly Catholic Answers-style question-and-answer presentation toward a more structured Catholic learning library.

Questions can remain article titles, but they should fit into organized categories and learning pathways.

### Primary navigation

Use a left-hand navigation sidebar on desktop, with a clean collapsible navigation drawer on mobile.

The proposed structure is:

**Know the Mass**

- Entering the Church
- Introductory Rites
- Liturgy of the Word
- Liturgy of the Eucharist
- Concluding Rites
- Other Liturgical Elements and Practices

**Know the Faith**

Organize foundational Catholic teaching roughly around the four pillars of the Catechism:

- The Creed
- The Sacraments
- The Christian Life
- Prayer

**Apologetics**

Organize around common theological questions, not around specific religions or denominations.

Possible categories:

- God and the Trinity
- Mary and the Saints
- Scripture and Tradition
- Salvation and Grace
- The Church and the Papacy
- The Sacraments

### Guided learning and supplemental resources

**OCIA Companion**

A guided collection of existing lessons for people exploring or entering the Catholic Church and their families.

**Family Lessons**

A central place to browse and print family-oriented catechetical lessons.

**Theological Reflections**

A distinct area for personal essays, theological questions, biblical reflections, and exploratory writing.

### Important architectural principle

Avoid unnecessarily duplicating content.

An article about baptism may appear in Know the Faith, an OCIA learning path, and the Family Lessons directory while remaining one canonical article.

Use categories, tags, relationships, or learning-path references as appropriate.

Do not create empty navigation sections merely to match the proposed hierarchy. Future sections can remain unpublished until useful content exists.

---

## 4. The MVP remains Level 1

**This is the project's highest priority.**

Each foundational article needs one complete, polished, accessible explanation.

### Level 1 — Simple Explanation

Each article should:

- Answer a specific question about Catholic belief or practice.
- Be understandable to a child approximately 7–10 years old.
- Remain useful and respectful to adult beginners.
- Take approximately 2–4 minutes to read.
- Use warm, conversational language.
- Explain important unfamiliar terms.
- Include appropriate Scripture and Catechism references.
- Explain not just what Catholics do or believe, but why.
- Be theologically careful without becoming unnecessarily qualified or academic.

Level 1 should be a complete educational resource, not a teaser for more advanced material.

### Level 2 — Learn More

This is not a major MVP development priority.

For now, provide one or two verified references for readers interested in deeper explanations.

Suitable resources may include the Catechism, official Church documents, and reputable Catholic educational resources.

### Level 3 — Go Deeper

Also a future content priority.

For now, provide carefully chosen references for advanced theological, historical, biblical, or patristic study where appropriate.

Eventually, we may write original Level 2 and Level 3 material.

The content architecture should support this without requiring significant restructuring.

**Do not spend substantial development time building elaborate features around content that does not yet exist.**

---

## 5. Printable Family Lessons — Essential Feature

Every foundational Level 1 article should have a corresponding printable family lesson.

This is one of nuancedTheology's defining features.

I want a parent to be able to find an article, click "Print Family Lesson," take the printed pages to the dinner table, and teach the subject to their children without needing theological training or additional preparation.

The parent might be learning the material for the first time too.

### Standard printable lesson

**Title**

A clear question such as "Why Do Catholics Make the Sign of the Cross?"

**Let's Learn**

A natural, read-aloud explanation taking approximately 3–5 minutes.

Use language that sounds good when spoken, not just when silently read.

**Let's Talk**

Three discussion questions suitable for children and families.

Include brief suggested answers or parent guidance.

**Let's Remember**

One memorable sentence communicating the main lesson.

**Let's Practice**

A small practical activity or observation where appropriate.

**Let's Pray**

A short, Catholic, age-appropriate closing prayer.

**For Parents**

Relevant Scripture passages, Catechism references, and optional additional reading.

### Printable design requirements

- Optimized for US Letter paper.
- Ideally one or two pages.
- Readable typography and clear sections.
- Black-and-white printer friendly.
- Minimal unnecessary decoration.
- No navigation bars, buttons, advertisements, or other website UI.
- Works offline after printing.
- Includes the article title and nuancedTheology identification.
- Allows printing or saving as PDF through the browser.
- Does not require an account.

Prefer reusable Angular components and print-specific CSS over a custom server-side PDF system.

Maintain a single authoritative explanation where practical, rather than creating two independently maintained theological treatments that could contradict each other.

**The defining question is: Could a parent print this and confidently teach it tonight?**

---

## 6. OCIA Companion — Converts and Their Families

I want an OCIA-focused area, but it should not become a completely separate theological curriculum duplicating our existing articles.

The purpose is to guide people exploring or entering the Catholic Church through foundational topics.

**Importantly, this resource should also serve their families.**

A person entering the Church may have:

- A Catholic spouse.
- A Protestant or non-Catholic spouse.
- Children learning about Catholicism for the first time.
- Parents or relatives curious about their conversion.
- A sponsor who wants to discuss important teachings with them.

The content should be accessible to all of them.

Do not presume that every family member is Catholic, agrees with Catholic teaching, or intends to convert.

### Proposed OCIA learning pathway

1. Exploring Catholicism — Jesus Christ, the Gospel, the Church, and an introduction to the Mass.
2. Learning the Faith — the Creed, Scripture, prayer, morality, and sacraments.
3. Preparing for Christian Initiation — sacramental theology, conversion, and preparation for entering the Church.
4. Living the Catholic Faith — prayer, Confession, Sunday Mass, holiness, community, and ongoing formation.

This is an illustrative educational pathway, not a replacement for or redefinition of the Church's formal OCIA periods and rites.

The website must clearly explain that it **supplements rather than replaces parish OCIA formation**, pastoral guidance, the liturgical rites, and participation in parish life.

### OCIA MVP scope

Do not build a complex course-management system yet.

Initially:

- Provide a simple pathway using existing articles.
- Organize them into a suggested sequence.
- Include relevant family printables.
- Offer optional discussion prompts for sponsors and family members.
- Reuse the existing content architecture.

Avoid accounts, quizzes, completion tracking, or progress databases for now.

---

## 7. Apologetics — Foundational Defense, Not Advanced Debate

I want an apologetics section, but its scope is intentionally modest.

**We are not trying to become Jimmy Akin, Trent Horn, Catholic Answers, or a comprehensive apologetics ministry.**

The goal is to give ordinary Catholics enough understanding to respond confidently and charitably to common objections.

Examples include:

- Do Catholics worship Mary?
- Is the Trinity biblical?
- Why do Catholics pray to saints?
- Why do Catholics baptize infants?
- Why confess sins to a priest?
- Do Catholics believe salvation can be earned?
- Why does the Catholic Bible contain 73 books?
- Why do Catholics believe in the Real Presence?
- Why do Catholics believe the pope has authority?

These are examples of foundational questions that may arise in conversations with Protestants, Jehovah's Witnesses, Latter-day Saints, or other people.

**Do not organize the section around attacking or rebutting particular religious groups.**

Organize it by topic and question.

### Standard apologetics article structure

**The Short Answer**

A concise response in plain English.

**What Catholics Believe**

A simple explanation of the relevant Catholic teaching.

**Why Catholics Believe It**

One or two primary biblical, historical, or catechetical foundations.

**Understanding the Objection**

Briefly and fairly acknowledge why someone might disagree or misunderstand.

**Learn More**

One or two reputable resources for readers seeking more comprehensive treatments.

We should not pretend that every difficult theological disagreement can be resolved in a short article.

When an objection requires extensive treatment, provide the introductory answer and direct readers toward capable specialists.

The tone should be charitable, calm, precise, and noncombative.

The goal is confidence through understanding, not winning arguments.

---

## 8. Personal Theological Reflections

I also want to preserve room for my own theological writing.

This may include difficult biblical passages, historical questions, speculative theological considerations, or reflections on Catholic doctrine.

For example, I might explore the morality of God's command to Abraham concerning Isaac in Genesis 22 and how the Christian reading through Christ's sacrifice affects our interpretation.

Other essays might address philosophical questions about divine immutability, suffering, sacrifice, or the development of doctrine.

This section is **not the same as our catechetical content**.

### Requirements

- Clearly distinguish personal theological reflections from formal Catholic instructional material.
- Explain that these essays represent my own explorations and have not necessarily received ecclesiastical review.
- Distinguish defined doctrine from speculative interpretations and personal conclusions.
- Do not present personal opinions as official Church teaching.
- Remain respectful of the Catholic Magisterium while allowing honest exploration of difficult questions.
- Do not imply diocesan approval of these essays.

Eventually, I may seek review or approval for specific catechetical materials through the Diocese of Des Moines.

Our architecture and editorial presentation should make it possible to distinguish reviewed instructional resources from unreviewed personal writing.

Do not allow the reflections section to dominate the site's homepage or distract from its educational mission.

---

## 9. Editorial and theological standards

I want theological accuracy to be one of nuancedTheology's defining strengths.

Our explanations should distinguish:

- Defined dogma and doctrine.
- Other authoritative Catholic teaching.
- Church disciplines and liturgical regulations.
- Devotional practices and local customs.
- Historical evidence and scholarly interpretation.
- Legitimate theological opinion and speculation.

Use authoritative Catholic sources appropriate to each topic, including:

- Sacred Scripture.
- The Catechism of the Catholic Church.
- The General Instruction of the Roman Missal.
- Relevant Vatican and USCCB documents.
- Councils and Church Fathers when appropriate.
- Reputable Catholic scholarship.

Do not fabricate quotations, citations, or source links.

Do not use historical claims merely because they sound compelling or support a particular theological conclusion.

Avoid polemical language, misleading simplifications, and caricatures of other religious traditions.

Maintain a distinction between our site's editorial review and formal ecclesiastical approval. Only describe content as approved, reviewed, or endorsed when that statement is demonstrably accurate and appropriately scoped.

The long-term goal is to create material a qualified catechist, priest, or diocese could confidently evaluate and potentially recommend.

---

## 10. Initial content focus — Understanding the Mass

The initial priority remains **Know the Mass**.

I own a Kindle edition of *A Pocket Guide to the Mass*, which I would like to use as a guide for identifying topics and understanding the structure of the liturgy.

I can provide the table of contents, personal notes, or permitted excerpts.

Do not assume access to the complete copyrighted work or copy its distinctive explanations.

Our articles should be independently researched and originally written.

Potential initial subjects include:

1. Why do Catholics make the Sign of the Cross?
2. Why is there holy water at the entrance of a church?
3. Why do Catholics genuflect?
4. What is the tabernacle?
5. What is the altar?
6. Why does the priest wear vestments?
7. Why do liturgical colors change?
8. What happens during the entrance procession?
9. Why do Catholics confess their sins at the beginning of Mass?
10. What is the Gloria?
11. Why do Catholics stand for the Gospel?
12. What is the homily?
13. What happens during the Liturgy of the Eucharist?
14. Why do Catholics believe Jesus is truly present in the Eucharist?
15. What does the dismissal at the end of Mass mean?

Review our existing content before creating new articles to avoid duplicates and unnecessary rewriting.

---

## 11. Technical architecture

The project already uses Angular.

Preserve its current architecture wherever practical.

For the MVP, prioritize:

- Structured article content.
- Reusable article presentation components.
- Reusable family lesson templates.
- Clear routing and navigation.
- A responsive sidebar and mobile navigation drawer.
- Accessible typography and controls.
- Search and article discovery.
- Print-specific layouts.
- SEO-friendly article pages.
- Verified citation and external-link handling.

A Java/Spring Boot backend may eventually support content management, article versioning, contributor access, theological review workflows, and publication approval.

However, **do not introduce a backend merely for the sake of having one**.

Where practical, design content access behind an abstraction that could later accommodate a REST API.

Avoid premature microservices, authentication systems, complex databases, or unnecessary infrastructure.

Ensure the architecture can expand without making the current implementation unnecessarily complicated.

---

## 12. Design direction

The current website feels somewhat like Catholic Answers.

I want to consider a more distinctive design emphasizing organized learning rather than isolated question-and-answer articles.

The website should feel like a welcoming, well-organized digital Catholic learning library.

### Desired characteristics

- Left-hand navigation panel on desktop.
- Collapsible navigation drawer on mobile.
- Grouped articles under logical topics.
- Breadcrumbs that communicate where readers are.
- A clean, readable article presentation.
- Prominent but tasteful Print Family Lesson functionality.
- Clearly separated optional deeper-reading links.
- Appropriate navigation between related topics.
- A warm, reverent visual identity that avoids excessive decoration.
- Strong accessibility and usability.

Do not assume that every existing design decision needs to change.

Examine what currently works before proposing modifications.

Avoid making the website resemble a commercial course platform or a cluttered encyclopedia.

Our reader should feel comfortable browsing, reading, and learning.

---

## 13. Priorities and scope management

The MVP is already underway. I do not want this expanded vision to cause endless redesign or feature creep.

Use the following priorities:

**Priority 1 — Preserve and improve what exists**

Inspect the current application, identify completed work, and avoid replacing functional code without good reason.

**Priority 2 — Establish organized navigation**

Introduce the revised information architecture while preserving existing article routes and content where practical.

**Priority 3 — Polish foundational articles**

Ensure current Level 1 articles are clear, theologically accurate, and consistent.

**Priority 4 — Printable family lessons**

Ensure every published foundational article has a reliable, well-designed printable lesson.

**Priority 5 — Expand Know the Mass**

Build enough quality content for the section to become independently useful.

**Priority 6 — Introduce other categories incrementally**

Add foundational Know the Faith and apologetics articles when appropriate.

**Priority 7 — OCIA guided pathway**

Once enough material exists, assemble existing articles into useful learning paths for those entering the Church and their families.

**Priority 8 — Personal reflections and deeper theological levels**

Expand these independently without delaying essential educational features.

Do not build a large administration system, comprehensive OCIA curriculum, advanced apologetics library, or complete three-level theological encyclopedia at this stage.

---

## 14. Immediate instructions for this Work session

Start by inspecting the current nuancedTheology repository and implementation.

Then:

1. Summarize the current state of the project and what has already been completed.
2. Compare the existing implementation with this updated vision.
3. Identify the smallest set of changes needed to establish the revised navigation and content organization.
4. Preserve existing article content, print functionality, routing, and useful design decisions.
5. Recommend how to organize categories, learning paths, and article references without duplicating content.
6. Identify which changes belong in the current MVP and which should be deferred.
7. Implement the smallest coherent set of improvements, where practical, without an unnecessary rewrite.
8. Run relevant checks or tests available in the repository and identify any unresolved issues.
9. Summarize the actual changes and recommended next development priorities.

Do not invent project details, claim to have inspected code you haven't accessed, or assume features are missing before checking.

If existing implementation choices differ from the suggestions here but already serve the mission well, explain the tradeoffs rather than automatically replacing them.

## Final guiding principle

**We're building something a parent can open after dinner, understand without a theology degree, print for their family, and use to teach the Catholic faith with confidence.**

We're also building something a convert can share with a spouse, a sponsor can use during OCIA, a lifelong Catholic can consult, and a parish catechist might eventually recommend.

The website does not need to answer every theological question.

It needs to answer the foundational questions extraordinarily well.

**Build the useful thing first. Make it deeper over time.**