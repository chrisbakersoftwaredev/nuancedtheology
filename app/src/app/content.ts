import { faithFoundations } from './faith-foundations';
import { massFoundations } from './mass-foundations';
import { massArticles } from './mass-articles';
import { faithArticles } from './faith-articles';

export interface Section { title: string; paragraphs: string[]; sourceIds: string[]; }
export interface Source { id: string; label: string; url: string; note: string; }
export type ReviewStage = 'Drafted' | 'Editorially Reviewed' | 'Theologically Reviewed' | 'Externally Reviewed';
export type ReviewRecord = {status: 'Drafted'} | {
  status: Exclude<ReviewStage, 'Drafted'>; reviewer: string; reviewedOn: string;
  reviewedVersion: number; note: string;
};
export interface Article {
  slug: string; title: string; summary: string; topicId: string; keywords: string[];
  readMinutes: number; sections: Section[]; sources: Source[];
  deeperResources: { level: 2 | 3; sourceId: string; description: string }[];
  level2?: Section[]; level3?: Section[];
  revision: { date: string; version: number } & ReviewRecord;
  lesson: { parentSourceIds: string[]; parentGuidance: string; questions: { question: string; guidance: string }[]; remember: string; practice: string; prayer: string };
}
const vatican = 'https://www.vatican.va/content/catechism/en/';
export const articles: Article[] = [{
 slug: 'sign-of-the-cross', title: 'Why do Catholics make the Sign of the Cross?',
 summary: 'A little gesture with a big meaning: a prayer that reminds us who God is and how much Jesus loves us.',
 topicId: 'introductory-rites', keywords: ['prayer', 'Trinity', 'Baptism', 'cross', 'gesture', 'Jesus'], readMinutes: 4,
 revision: { date: '2026-10-18', version: 2, status: 'Drafted' },
 sections: [
  { title: 'A prayer you can see', sourceIds: ['daily'], paragraphs: [
   'Have you ever watched someone touch their forehead, chest, and shoulders before praying? They are making the Sign of the Cross. You may see people do it at Mass, before a meal, or at bedtime. It is a short prayer we say with both our words and our bodies.',
   'We pray, “In the name of the Father, and of the Son, and of the Holy Spirit. Amen.” We are turning our attention to God and asking for his help. Even this small moment can help us pause and remember that we belong to him.'
  ] },
  { title: 'One God: Father, Son, and Holy Spirit', sourceIds: ['trinity', 'scripture'], paragraphs: [
   'The words of this prayer name the Holy Trinity. Trinity means that the one God is three distinct Persons: the Father, the Son, and the Holy Spirit. They are not three gods, and they are not three parts of God. Each Person is fully God. We cannot understand everything about God, but we can trust what he has shown us about himself.',
   'After rising from the dead, Jesus told his disciples to baptize people in the name of the Father, the Son, and the Holy Spirit. You can find this in Matthew 28:19. When we make the Sign of the Cross, we speak the same names used at Baptism.'
  ] },
  { title: 'Why the shape of a cross?', sourceIds: ['baptism', 'audience'], paragraphs: [
   'Jesus, the Son of God, became human to save us. He died on a cross and rose from the dead. The cross reminds us of his love and the rescue from sin he won for us. Sin is turning away from God by choosing what is wrong. Jesus invites us to turn back to God and live with him.',
   'At the beginning of a Catholic Baptism, the person being baptized is marked with a small cross. That sign points to Jesus and the salvation he gives. Making the Sign of the Cross later can help a baptized person remember: I belong to Christ. If you are learning about the faith and are not baptized, you can still learn and pray this prayer.'
  ] },
  { title: 'A reminder that you matter', sourceIds: ['dignity', 'redeeming-love', 'romans'], paragraphs: [
   'You matter to God. He made you in his image, and he loves you. Your worth does not depend on getting the best grades, winning a game, or being noticed by other people. Every person has a dignity — a God-given worth — that calls for love and respect.',
   'The cross can help us remember how deeply we are loved: Jesus freely gave his life for us. Romans 5:8 tells us that Christ died for us while we were still sinners. We do not have to earn God’s love. When you make the Sign of the Cross, you can remember: Jesus loves me and died for me. With his help, I can turn away from sin and share his love with others.'
  ] },
  { title: 'Try it slowly', sourceIds: ['gesture', 'eastern'], paragraphs: [
   'In the Latin Catholic Church, we usually use our right hand. Touch your forehead as you say “In the name of the Father,” your chest as you say “and of the Son,” then your left shoulder and your right shoulder as you say “and of the Holy Spirit.” Finish with “Amen.” Amen expresses our agreement with the prayer.',
   'Some Eastern Catholics move from the right shoulder to the left. That is a different Catholic tradition, too. The important thing is to pray with care. You can make the Sign of the Cross when you wake up, begin a prayer, or need courage. Take your time. Remember who you are speaking to, and let this small prayer help you trust God today.'
  ] }
 ],
 sources: [
  { id: 'dignity', label: 'Catechism 1701–1703', url: vatican + 'part_three/section_one/chapter_one/article_1/man_the_image_of_god.html', note: 'Every human person bears God’s image and is willed by God for their own sake.' },
  { id: 'redeeming-love', label: 'Catechism 604–605, 609', url: vatican + 'part_one/section_two/chapter_two/article_4/paragraph_2_jesus_died_crucified.html', note: 'God loves us before we earn anything; Christ freely died for all people without exception.' },
  { id: 'romans', label: 'Romans 5:8', url: 'https://bible.usccb.org/bible/romans/5', note: 'Christ died for us while we were still sinners: the Cross reveals God’s love.' },
  { id: 'scripture', label: 'Matthew 28:18–20', url: 'https://bible.usccb.org/bible/matthew/28', note: 'Jesus sends his disciples to baptize in the name of the Father, Son, and Holy Spirit.' },
  { id: 'trinity', label: 'Catechism 232–234, 253–255', url: vatican + 'part_one/section_two/chapter_one/article_1/paragraph_2_the_father.html', note: 'One God in three distinct Persons; the central mystery of Christian faith.' },
  { id: 'baptism', label: 'Catechism 1235', url: vatican + 'part_two/section_two/chapter_one/article_1/iii_how_is_the_sacrament_of_baptism_celebrated.html', note: 'The baptismal Sign of the Cross points to belonging to Christ and his saving Cross.' },
  { id: 'daily', label: 'Catechism 2157', url: vatican + 'part_three/section_two/chapter_one/article_2/iii_the_christian_name.html', note: 'The Sign of the Cross in daily life and prayer.' },
  { id: 'audience', label: 'Pope Francis · April 18, 2018', url: 'https://www.vatican.va/content/francesco/en/audiences/2018/documents/papa-francesco_20180418_udienza-generale.html', note: 'A reflection on Baptism, the Cross, and teaching children to pray.' },
  { id: 'gesture', label: 'Notre Dame · The Sign of the Cross', url: 'https://churchlifejournal.nd.edu/articles/the-mass-for-millennials-sign-of-the-cross/', note: 'The customary Latin Catholic gesture, described by Notre Dame’s Church Life Journal.' },
  { id: 'eastern', label: 'Metropolitan Cantor Institute · The Body in Worship', url: 'https://mci.archpitt.org/liturgy/Actions.html', note: 'The Byzantine Catholic tradition of crossing from right to left.' }
 ],
 deeperResources: [
  { level: 2, sourceId: 'audience', description: 'Learn more: a short papal reflection on Baptism and the Sign of the Cross.' },
  { level: 3, sourceId: 'trinity', description: 'Go deeper: the Catechism on the Father, Son, and Holy Spirit.' }
 ],
 lesson: {
  parentSourceIds: ['scripture', 'trinity', 'baptism', 'daily', 'dignity', 'redeeming-love', 'romans'],
  parentGuidance: 'These references explain the Trinity, Baptism, daily prayer, human dignity, and Christ’s love for every person. Remembering our worth when crossing ourselves is a reflection grounded in these teachings. The shoulder order is a tradition that varies among Catholic Churches.',
  questions: [
   { question: 'Whom do we name when we make the Sign of the Cross?', guidance: 'The Father, the Son, and the Holy Spirit. Explain that there is one God in three distinct Persons, not three gods.' },
   { question: 'What can the cross remind you when you feel unimportant?', guidance: 'You are made in God’s image and deeply loved. Jesus, through whom the whole world was made, died for you and rose from the dead. His love is a gift, not a prize for being perfect. Welcome a simple answer in your child’s own words.' },
   { question: 'When could our family pray this prayer together?', guidance: 'Invite a practical choice: at breakfast, before school, at bedtime, or when someone needs courage.' }
  ],
  remember: 'The Sign of the Cross reminds us that we belong to God, who is Father, Son, and Holy Spirit.',
  practice: 'Make the Sign of the Cross slowly together. A parent can stand beside a child to demonstrate without reversing the movement like a mirror. Then choose one moment tomorrow to pray it as a family. If the movement is difficult for someone, help them participate in a way they can.',
  prayer: 'Loving God, Father, Son, and Holy Spirit, thank you for loving us. Help us remember Jesus’ Cross and Resurrection. Teach our family to pray with care and to show your love to others. Amen.'
 }
}, ...massArticles, ...faithArticles, ...faithFoundations, ...massFoundations];
