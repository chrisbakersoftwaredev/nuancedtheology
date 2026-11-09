import { bible, girm, lesson } from './lesson-builder';

const topicId = 'gestures-and-postures';

export const massGestureArticles = [
  lesson({
    slug: 'small-crosses-before-the-gospel',
    title: 'Why do Catholics cross their forehead, lips, and heart?',
    topicId,
    summary: 'The three small crosses before the Gospel help us receive Jesus’ words and carry them into daily life.',
    keywords: ['Gospel', 'small crosses', 'forehead', 'lips', 'heart'],
    discussionQuestion: 'What is one word from the Gospel you would like to remember this week?',
    sources: [girm(4, '134, 175', 'The three small signs of the cross at the Gospel announcement.'), bible('luke', 8, '4–15', 'Jesus speaks about hearing the word and holding it in a good heart.')],
    sections: [
      ['Three small crosses', ['When the priest or deacon announces the Gospel, the minister makes a small cross on the book and then on the forehead, mouth, and breast. The people make the three crosses on themselves. You can use your thumb to trace them gently on your forehead, lips, and chest. This happens before we listen to the Gospel.'], ['missal']],
      ['Mind, lips, and heart', ['A simple way to pray with this gesture is to ask that Jesus’ words take root in our minds, be spoken with our lips, and stay in our hearts. The forehead reminds us to pay attention and understand. The lips remind us that the good news is worth sharing. The heart reminds us to hold on to what we hear and let it shape how we act.'], ['missal','luke-8']],
      ['Carry one word home', ['Even when the reading is difficult, a child can listen for one word, action, or person in the story. After Mass, ask what they noticed. If Jesus welcomed someone, think of one person your family could welcome. This gives the small gesture a connection to the rest of the week.'], ['luke-8']]
    ],
    questions: [['When do we make the three crosses?', 'As the Gospel is announced.'], ['What can the cross on our lips remind us to do?', 'Speak the good news and use our words with love.'], ['How can we keep the Gospel in our hearts?', 'Remember something Jesus said or did and let it guide a choice.']],
    remember: 'Receive Jesus’ words, speak them with love, and live them.',
    practice: 'Practice the three small crosses at home. At Mass, listen for one thing Jesus says or does.',
    prayer: 'Jesus, help us listen to your words, speak with kindness, and keep your teaching in our hearts. Amen.',
    parentGuidance: 'Explain the mind, lips, and heart as a way to pray with the gesture. Children can learn it by watching you.'
  }),
  lesson({
    slug: 'raised-hands-in-prayer',
    title: 'Why do Catholics raise their hands during prayer?',
    topicId,
    summary: 'Raised hands are an ancient way of praying. At Mass, the priest and congregation have different directions for their gestures.',
    keywords: ['orans', 'raised hands', 'Our Father', 'Lord’s Prayer'],
    discussionQuestion: 'What might open hands express when someone prays?',
    sources: [bible('1timothy', 2, '8', 'Saint Paul mentions praying with raised hands.'), girm(4, '152', 'The priest extends his hands while praying the Lord’s Prayer with the people.'), {id:'posture',label:'USCCB · Posture During the Our Father',url:'https://www.usccb.org/prayer-and-worship/the-mass/order-of-mass/liturgy-of-the-eucharist/posture-during-the-eucharistic-prayer-and-our-father',note:'The Roman Missal does not prescribe an assembly hand gesture during the Lord’s Prayer.'}],
    sections: [
      ['An ancient way to pray', ['You may see the priest pray with his arms open and hands raised. This posture is often called orans, a Latin word meaning praying. Raised hands appear in Scripture too. Saint Paul speaks of lifting hands in prayer and connects that gesture with a life free of anger and quarrels. Open hands can help us express that we are turning to God with trust.'], ['1timothy-2']],
      ['Different roles, one prayer', ['During the Our Father at Mass the priest extends his hands as the Missal directs, and the congregation prays the words with him. The Roman Missal does not prescribe a hand gesture for the congregation during the Lord’s Prayer. A child may notice that people hold their hands differently. Everyone can join the same prayer without feeling pressure to copy a neighbor’s hands.'], ['missal','posture']],
      ['Listen to what we are asking', ['The next time you pray the Our Father, listen for a request such as asking for daily bread or for help forgiving others. The gestures we see can draw our attention to the prayer. At home, you might talk about why we call God Father and name one need your family wants to bring to him.'], ['posture','1timothy-2']]
    ],
    questions: [['What is orans?', 'A prayer posture with open, raised hands.'], ['What gesture does the priest make during the Our Father?', 'He extends his hands as the Missal directs.'], ['What can we listen for in the Our Father?', 'Choose one request such as daily bread or forgiveness.']],
    remember: 'We pray the Our Father together as God’s family.',
    practice: 'Pray the Our Father slowly together and pause to name one person who needs prayer.',
    prayer: 'Father, teach us to trust you and forgive one another. Amen.',
    parentGuidance: 'Explain the priest’s prescribed gesture and the absence of a prescribed assembly hand gesture without judging other families.'
  }),
  lesson({
    slug: 'bowing-at-mass',
    title: 'Why do Catholics bow during Mass?',
    topicId,
    summary: 'A bow is a sign of reverence. The Church asks for different bows at particular moments in Mass.',
    keywords: ['bow', 'reverence', 'Creed', 'Communion', 'Incarnation'],
    discussionQuestion: 'How can a quiet bow help us pay attention to whom we honor?',
    sources: [girm(4, '137, 275', 'Bows of the head and body, and the gesture at the words of the Incarnation in the Creed.'), {id:'communion',label:'General Instruction of the Roman Missal 160',url:'https://www.usccb.org/prayer-and-worship/the-mass/general-instruction-of-the-roman-missal/girm-chapter-4',note:'In the United States, those receiving Communion bow their heads before the Sacrament.'}, bible('john', 1, '14', 'The Word became flesh and dwelt among us.')],
    sections: [
      ['A bow of the head and a bow of the body', ['A bow expresses reverence, which means showing honor and respect. A head bow is a small lowering of the head. A profound bow is a deeper bend from the waist. The Missal directs a head bow when the three divine Persons are named together and at the names of Jesus, Mary, and the saint honored at that Mass. The altar receives a profound bow as directed by the liturgy.'], ['missal']],
      ['Bowing when we profess the Incarnation', ['During the Creed we make a profound bow at the words about the Son of God becoming human. That moment draws our attention to the Incarnation, when the eternal Son took on our human nature. On Christmas and the Annunciation the liturgy calls for genuflecting at those words. A parent can point out the place in the Creed before Mass.'], ['missal','john-1']],
      ['Before receiving Communion', ['In the United States, the faithful who receive Communion bow their heads before the Sacrament as a sign of reverence. We honor Jesus present in the Eucharist. If a child is learning the gestures, begin by noticing one bow at Mass and talking afterward about why it happens.'], ['communion']]
    ],
    questions: [['What does a bow express?', 'Reverence or honor.'], ['Why do we bow during the Creed?', 'We honor the mystery of the Son of God becoming human.'], ['Whom do we honor before receiving Communion?', 'Jesus present in the Eucharist.']],
    remember: 'A bow helps our bodies express the reverence in our hearts.',
    practice: 'Before Mass, find the words about Jesus becoming human in the Creed. Listen for them together.',
    prayer: 'Jesus, help us notice your gifts and honor you with our hearts and bodies. Amen.',
    parentGuidance: 'Teach one bow at a time. People with limited mobility can participate reverently within their abilities.'
  })
].map(article => ({...article, revision: {...article.revision, date: '2026-11-08'}}));

export const massGestureLinks: Partial<Record<string, readonly string[]>> = {
  'preparing-for-mass': ['genuflection'],
  'tabernacle': ['genuflection'],
  'entrance-and-greeting': ['sign-of-the-cross', 'bowing-at-mass'],
  'standing-for-the-gospel': ['small-crosses-before-the-gospel'],
  'nicene-creed': ['bowing-at-mass'],
  'prayer-peace-and-lamb-of-god': ['raised-hands-in-prayer'],
  'holy-communion-and-thanksgiving': ['bowing-at-mass']
};
