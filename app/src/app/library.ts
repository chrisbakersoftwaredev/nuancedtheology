import { chapterSummaries } from './chapter-summaries';
import { computed, Injectable, signal } from '@angular/core';
import { Article, articles } from './content';
import { orderArticles } from './curriculum';

export interface LibraryArea {
  id: string;
  title: string;
  path: string;
  introduction: string;
}

export interface LibraryTopic {
  summary?: string;
  summaryTitle?: string;
  id: string;
  areaId: string;
  title: string;
  path: string;
  introduction: string;
}

// Register topics as useful articles are published. Empty areas stay out of navigation.
const massArea: LibraryArea = {
  id: 'mass', title: 'Understanding the Mass', path: '/know-the-mass',
  introduction: 'What happens during Mass, and why? Learn the words, gestures, and prayers of Catholic worship together.'
};
const faithArea: LibraryArea = {
  id: 'faith', title: 'God’s Plan of Salvation', path: '/know-the-faith/gods-plan-of-salvation',
  introduction: 'What does the Church teach, and why? Follow God’s saving work and meet the Church that Jesus gathers.'
};
const livingArea: LibraryArea = {
  id: 'living', title: 'Living the Faith', path: '/know-the-faith/living-the-faith',
  introduction: 'How does Christ call us to live? Begin with the Beatitudes, then grow in prayer, mercy, and everyday choices through his grace.'
};
const sacramentsArea: LibraryArea = {
  id: 'sacraments', title: 'Sacraments', path: '/sacraments',
  introduction: 'Discover the seven sacraments and the gifts Christ gives us through them.'
};
export const areas: readonly LibraryArea[] = [faithArea, massArea, sacramentsArea, livingArea];
export const topics: readonly LibraryTopic[] = [{
  summary: 'Before Mass, we can take a little time to turn our attention toward God. Holy water reminds us of Baptism, and a quiet visit helps us notice where the Eucharist is reserved. When we kneel on one knee before the Blessed Sacrament, we honor Jesus himself. The altar, the priest’s clothing, and the colors also help us understand the worship we are about to join. These lessons explain those signs and offer simple ways to prepare as a family.',
  id: 'entering-church', areaId: 'mass', title: 'Before Mass Begins', path: '/know-the-mass/entering-church',
  introduction: 'Get ready for Mass and explore the church, its furnishings, and gestures of prayer. These lessons describe preparation and background, not extra parts of the ceremony.'
}, {
  id: 'gestures-and-postures', areaId: 'mass', title: 'Gestures and Postures at Mass', path: '/know-the-mass/gestures-and-postures',
  introduction: 'Learn the gestures you will see and make as you pray at Mass.',
  summary: 'We pray with our bodies as well as our voices. The Sign of the Cross recalls our Baptism and Christ’s love. Three small crosses prepare us to hear the Gospel. Raised hands, kneeling, genuflecting, and bowing help us express prayer, adoration, and reverence.'
}, {
  summary: 'The beginning of Mass gathers us into one prayer. The ministers enter, we make the Sign of the Cross, and the priest greets us. We ask God for mercy, praise him in the Gloria when it is called for, and join the opening prayer. The Church calls these actions the Introductory Rites. They help us bring our real lives before God and become ready to listen to his Word.',
  id: 'introductory-rites', areaId: 'mass', title: 'The Beginning of Mass', path: '/know-the-mass/introductory-rites',
  introduction: 'Follow the opening prayers and actions that gather us to worship. Inside the lessons, learn why the Church calls them the Introductory Rites.'
}, {
  summary: 'During the Bible readings, we listen to God’s Word and answer in prayer. The Psalm gives us words to pray, and we stand to honor the Gospel, the good news of Jesus. A priest or deacon helps explain what we have heard in the homily. When the Creed is used, we profess our faith together, and we pray for the needs of others. The Church calls this part of Mass the Liturgy of the Word.',
  id: 'liturgy-of-the-word', areaId: 'mass', title: 'Bible Readings', path: '/know-the-mass/liturgy-of-the-word',
  introduction: 'Listen to the Bible, discover its meaning, and respond with faith and prayer. This part of Mass is called the Liturgy of the Word.'
}, {
  summary: 'Eucharist means thanksgiving. Bread and wine are brought to the altar, and the priest leads the Eucharistic Prayer. Through Christ’s words and the Holy Spirit’s action, they become his Body and Blood; Jesus gives us himself, and his one sacrifice is made present. We then pray the Our Father, ask for mercy and peace, and prepare for Holy Communion. Those receiving Communion approach with faith and reverence, and the Church gives thanks for Christ’s gift.',
  id: 'liturgy-of-the-eucharist', areaId: 'mass', title: 'The Eucharist', path: '/know-the-mass/liturgy-of-the-eucharist',
  introduction: 'Eucharist means thanksgiving. Discover Christ’s gift of himself: the preparation of bread and wine, the Eucharistic Prayer, Holy Communion, and thanksgiving. The Church calls this the Liturgy of the Eucharist; it includes the Communion Rite.'
}, {
  summary: 'At the end of Mass, we receive God’s blessing and are sent out to live what we have received. The dismissal is more than permission to leave: it calls us to carry Christ’s love into our homes, schools, work, and friendships. A simple act of patience, mercy, or service can be part of that response. The Church calls these final actions the Concluding Rites.',
  id: 'concluding-rites', areaId: 'mass', title: 'The End of Mass', path: '/know-the-mass/concluding-rites',
  introduction: 'Receive the final blessing and discover how being sent out at Mass calls us to love and serve. The Church calls these final actions the Concluding Rites.'
}, {
  id: 'gods-plan-of-salvation', areaId: 'faith', title: 'God’s Plan of Salvation', path: '/know-the-faith/gods-plan-of-salvation',
  summaryTitle: 'The Gospel in a few words',
  summary: 'Gospel means good news. It is the good news of Jesus Christ and the salvation he brings. God made us for friendship with him, but sin wounded that friendship. He did not abandon us. He prepared his people through promises and covenants, then sent his Son, Jesus, who became human, died for our sins, and rose from the dead. Through Jesus, God offers forgiveness, freedom from sin, and new life with him. This is salvation, God rescuing us and drawing us into his life. It is a gift of grace that we are invited to receive through faith, Baptism, and a life of love. The lessons below follow this story, from creation to the Church Jesus gathers to share his good news.',

  introduction: 'Follow God’s saving work from creation and the Fall, through the covenants and prophets, to Jesus Christ and the sending of the Holy Spirit.'
}, {
  ...sacramentsArea, areaId: 'sacraments'
}, {
  id: 'beatitudes', areaId: 'living', title: 'The Beatitudes', path: '/know-the-faith/living-the-faith/beatitudes',
  introduction: 'Eight promises of the Kingdom and eight ways Jesus invites us to share his life.',
  summary: 'The Beatitudes in Matthew 5:3–12 show us the heart of Jesus. He is humble, merciful, pure of heart, and the giver of peace. He calls us to follow him, sustained by grace, and promises the happiness of his Kingdom. Each lesson helps parents and children listen to Scripture, understand the Church’s teaching, and practice one step of love together.'
}, {
  id: 'living-the-faith', areaId: 'living', title: 'Everyday Christian Life', path: '/know-the-faith/living-the-faith/everyday-life',
  introduction: 'Explore how God’s grace enables our response through faith, Baptism, prayer, and choices shaped by love.'
}];

// Preserve bookmarked topic URLs after grouping the curriculum into five sections.
export const collectionRedirects = [
  {path: 'articles/preparing-for-mass', redirectTo: '/know-the-mass/entering-church', pathMatch: 'full' as const},
  {path: 'articles/preparing-for-mass/family-lesson', redirectTo: '/know-the-mass/entering-church', pathMatch: 'full' as const},
  {path: 'know-the-faith', redirectTo: faithArea.path, pathMatch: 'full' as const},
  {path: 'know-the-faith/the-church', redirectTo: '/know-the-faith/gods-plan-of-salvation', pathMatch: 'full' as const},
  {path: 'know-the-mass/liturgical-signs', redirectTo: '/know-the-mass/entering-church', pathMatch: 'full' as const},
  {path: 'know-the-mass/communion-rite', redirectTo: '/know-the-mass/liturgy-of-the-eucharist', pathMatch: 'full' as const}
];
export const collectionRoutes = [
  ...areas.filter(area => !topics.some(topic => topic.path === area.path) && topics.some(topic => topic.areaId === area.id && articles.some(article => article.topicId === topic.id)))
    .map(area => ({path: area.path.slice(1), data: {area: area.id}})),
  ...topics.filter(topic => articles.some(article => article.topicId === topic.id))
    .map(topic => ({path: topic.path.slice(1), data: {topic: topic.id}}))
];

// One content access boundary for discovery and readers. A future API can populate
// this signal without duplicating article records across directories or pathways.
@Injectable({ providedIn: 'root' })
export class ContentLibrary {
  private readonly records = signal<readonly Article[]>(articles);
  readonly articles = computed(() => orderArticles(this.records()));
  readonly topics = computed(() => topics.filter(topic => this.articles().some(a => a.topicId === topic.id))
    .sort((a, b) => this.articles().findIndex(article => article.topicId === a.id) - this.articles().findIndex(article => article.topicId === b.id)));
  readonly areas = computed(() => areas.filter(area => this.topics().some(t => t.areaId === area.id)));

  find(slug: string) { return this.articles().find(article => article.slug === slug) ?? chapterSummaries.find(chapter => chapter.slug === slug); }
  topic(id: string) { return topics.find(topic => topic.id === id); }
  area(id: string) { return areas.find(area => area.id === id); }
  inTopic(id: string) { return this.articles().filter(article => article.topicId === id); }
  inArea(id: string) { return this.articles().filter(article => this.topic(article.topicId)?.areaId === id); }
  search(query: string, entries = this.articles()) {
    const needle = query.trim().toLocaleLowerCase();
    return entries.filter(article => {
      const topic = this.topic(article.topicId);
      const area = topic && this.area(topic.areaId);
      return [article.title, article.summary, topic?.title, area?.title, ...article.keywords]
        .join(' ').toLocaleLowerCase().includes(needle);
    });
  }
}
