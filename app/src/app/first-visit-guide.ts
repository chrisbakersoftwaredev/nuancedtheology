import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReferenceLink } from './reference-link';
import { bible } from './lesson-builder';

@Component({
  imports: [RouterLink, ReferenceLink],
  template: `
    <article class="reading-layout first-visit">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><a routerLink="/">Library home</a></nav>
      <header class="article-header">
        <p class="eyebrow">A quick guide for visitors</p>
        <h1>First time at Mass?</h1>
        <p class="lede">You’re welcome here. Whether you’re coming with family or just curious, you can take it in at your own pace.</p>
      </header>
      <div class="article-prose">
        <h2>Follow along as you feel comfortable</h2>
        <p>People stand, sit, and kneel at different times. You’re welcome to stand or kneel with the congregation if you feel comfortable and are able. It’s also fine to sit quietly, watch, and listen. You can join a prayer or song if you know it, or simply listen to the words.</p>
        <h2>Children are welcome at Mass</h2>
        <p>Jesus said, “And he that shall receive one such little child in my name, receiveth me.” <nt-reference [reference]="childrenReference"/>. Welcoming children at Mass is one way we welcome Jesus himself.</p>
        <p>Babies cry, toddlers wiggle, and children learn how to take part in Mass by coming with you. There’s an old saying, “If the church isn’t crying, it’s dying.” A little noise is part of having children with us, and we’re glad they’re here.</p>
        <p>If your child cries, take a breath. You can comfort them right where you are. If you’d rather step into the lobby for a moment, that’s fine too. Come back whenever you’re ready. An usher can point you toward a family room if the parish has one.</p>
        <h2>Notice what everything is for</h2>
        <p>Mass is the Church’s worship of God. We gather to listen to Scripture and respond in prayer. Then, in the Eucharistic Prayer, the Church gives thanks to the Father through Jesus Christ. The readings, songs, gestures, and quiet moments all help turn our attention toward God.</p>
        <p>If you’re wondering what to pay attention to, start with one thing. Listen for a phrase that stays with you in the readings, or watch what happens at the altar. If you feel comfortable joining a response or a song, you’re welcome to. You can also sit quietly and listen. There’s no need to know the words or follow every gesture on your first visit.</p>
        <p>A note from the person who made this site: I’ve been going to Mass for about a year, and I’d put my “remembered to genuflect before getting into the pew” rate at about 60%. Plenty of us are still learning what happens at Mass. Even when we know what to do, we sometimes forget.</p>
        <p>Questions are welcome. If something makes you curious, bring it up after Mass with the person you came with, or ask the priest or an usher when they’re free.</p>
        <h2>When people go up for Communion</h2>
        <p>The Eucharist is at the heart of Mass. Catholics believe that Jesus’ one sacrifice is made present and that the bread and wine truly become his Body and Blood. Holy Communion expresses unity in the Catholic faith. If you’re visiting and aren’t prepared to receive Holy Communion, or you’re unsure whether to receive, please refrain from receiving the host or the chalice. You’re welcome to stay in your seat for quiet reflection or prayer.</p>
        <p>Some parishes invite people who aren’t receiving Communion to come forward for a blessing. If the parish offers this, you can approach the priest with your arms crossed over your chest to signal that you’re asking for a blessing. If you’re unsure what the parish does, feel free to ask before Mass or stay in your seat. Everyone can receive the blessing at the end of Mass.</p>
        <p class="section-sources">References:
          <a href="https://www.usccb.org/offices/public-affairs/structure-and-meaning-mass" target="_blank" rel="noopener">The structure and meaning of the Mass</a> ·
          <a href="https://www.usccb.org/prayer-and-worship/the-mass/order-of-mass/liturgy-of-the-eucharist/guidelines-for-the-reception-of-communion" target="_blank" rel="noopener">Guidelines for receiving Communion</a>
        </p>
        <a class="button secondary" routerLink="/know-the-mass">Explore Know the Mass →</a>
      </div>
    </article>
  `
})
export class FirstVisitGuide {
  readonly childrenReference = bible('matthew', 18, '5', 'Jesus teaches us to receive children in his name.');
}
