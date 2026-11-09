import { bible, lesson } from './lesson-builder';

const topicId = 'gods-plan-of-salvation';
const summaries = [
  {
    slug: 'creation-and-the-fall',
    title: 'Creation and the Fall',
    summary: 'God made us for friendship with him. Sin wounded that friendship, and God began the work of bringing us home.',
    sources: [
      bible('genesis', 1, '26–31', 'God makes human beings in his image.'),
      bible('genesis', 3, '1–15', 'The first disobedience and the promise of victory over evil.')
    ],
    sections: [
      ['Made for friendship with God', ['God made the world good and made every person in his image. Our worth begins with God’s love. He made us to know him, love him, and care for what he has made.'], ['genesis-1']],
      ['Sin and the promise of a Savior', ['Our first parents chose to distrust God. Their sin wounded human friendship with God and helps explain why we need a Savior. God did not abandon humanity. The rest of the story follows his promise of rescue, which Christians see fulfilled in Jesus.'], ['genesis-3']]
    ],
    questions: [
      ['What does being made in God’s image tell us about each person?', 'Each person has worth and deserves care.'],
      ['What choice damaged our first parents’ friendship with God?', 'They chose to distrust and disobey him.'],
      ['What did God do after people turned away?', 'He stayed faithful and began preparing the way for a Savior.']
    ],
    remember: 'God made us for friendship with him, and he comes to rescue us.',
    practice: 'Name something good God made and choose one way to care for it this week.',
    prayer: 'Father, thank you for making us and loving us. Help us trust you when we have a hard choice. Amen.',
    parentGuidance: 'Connect the story to trust and forgiveness. Give children room to ask why people sometimes make hurtful choices.'
  },
  {
    slug: 'covenants-and-israel',
    title: 'God’s Covenants and Israel',
    summary: 'God builds a relationship with his people through promises to Noah, Abraham, Israel through Moses, and David.',
    sources: [
      bible('genesis', 9, '8–17', 'God gives the rainbow as the sign of his covenant with Noah.'),
      bible('genesis', 12, '1–3', 'God promises to bless all families through Abraham.'),
      bible('exodus', 19, '3–8', 'God calls Israel to be his covenant people.'),
      bible('2samuel', 7, '8–16', 'God promises David an enduring royal house.')
    ],
    sections: [
      ['Noah and Abraham', ['A covenant is a bond God establishes with his people. God promises Noah that a flood will never again destroy all flesh and gives the rainbow as a sign. He calls Abraham to leave home and promises that through him all families of the earth will be blessed.'], ['genesis-9', 'genesis-12']],
      ['Moses and David', ['After freeing Israel from slavery, God makes a covenant with his people at Sinai and teaches them how to live with him. Later he promises David a royal house that will endure. Christians recognize Jesus as David’s promised heir and see God’s blessing reaching all peoples through him.'], ['exodus-19', '2samuel-7', 'genesis-12']]
    ],
    questions: [
      ['Which promise goes with the rainbow?', 'God’s promise to Noah after the flood.'],
      ['Who received God’s covenant at Sinai?', 'Israel received it through Moses after God freed them.'],
      ['What do the promises tell us about God?', 'God is faithful and wants people to live in friendship with him.']
    ],
    remember: 'God keeps his promises and gathers a people to belong to him.',
    practice: 'Draw a rainbow, a tent, a mountain, and a crown. Match each picture to Noah, Abraham, Moses, or David.',
    prayer: 'Faithful God, thank you for keeping your promises. Help our family keep our promises too. Amen.',
    parentGuidance: 'Let children retell one covenant before asking them to connect all four.'
  },
  {
    slug: 'prophets-and-jesus-christ',
    title: 'The Prophets and Jesus Christ',
    summary: 'The prophets prepared people to recognize God’s saving work. In Jesus, God comes close and shows us how to live.',
    sources: [
      bible('isaiah', 9, '1–6', 'Isaiah speaks of light and a king whose reign brings peace.'),
      bible('john', 1, '1–14', 'The eternal Word became flesh.'),
      bible('luke', 4, '16–21', 'Jesus reads Isaiah and announces fulfillment.')
    ],
    sections: [
      ['God prepares his people', ['The prophets called people back to God and gave them hope. Isaiah spoke of light for people in darkness and a king who would bring peace. Jesus read from Isaiah and told his listeners that the words were being fulfilled as they heard him.'], ['isaiah-9', 'luke-4']],
      ['God comes close in Jesus', ['The Son of God truly became human. We call this the Incarnation. Jesus announced good news, welcomed people, and healed those who suffered. His words and actions show us what God’s love looks like in a human life.'], ['john-1', 'luke-4']]
    ],
    questions: [
      ['What did the prophets help people do?', 'They called people back to God and helped them hope in his promises.'],
      ['What does Incarnation mean?', 'The Son of God truly became human.'],
      ['What does Jesus show us about God?', 'Invite your child to name one way Jesus shows God’s care.']
    ],
    remember: 'God kept his promises and came close to us in Jesus.',
    practice: 'Read Luke 4:16–21 together and name one way to bring good news to someone this week.',
    prayer: 'Jesus, thank you for coming close to us. Help us hear your words and care for people as you do. Amen.',
    parentGuidance: 'Explain that prophets speak God’s message to their own listeners. Christians also read their words in the light of Jesus.'
  },
  {
    slug: 'salvation-through-christ',
    title: 'Salvation Through Christ',
    summary: 'Jesus gives himself for us, rises from the dead, and ascends to the Father. His saving work gives us hope and new life.',
    sources: [
      bible('luke', 22, '14–20', 'Jesus speaks of the New Covenant at the Last Supper.'),
      bible('1corinthians', 15, '3–8, 20–22', 'Christ died for our sins, was buried, and rose.'),
      bible('acts', 1, '6–11', 'The disciples witness Jesus’ Ascension.')
    ],
    sections: [
      ['The New Covenant, Cross, and Resurrection', ['At the Last Supper, Jesus spoke of the New Covenant in his blood. He freely gave his life for us on the Cross. He truly died and was buried, and on the third day he rose. Because Jesus lives, we have hope of forgiveness and life with God.'], ['luke-22', '1corinthians-15']],
      ['Jesus ascends to the Father', ['The risen Jesus ascended into heaven. He reigns with the Father, and he sent his disciples to be his witnesses. The story continues as the Holy Spirit gives the Church courage to share the good news.'], ['acts-1']]
    ],
    questions: [
      ['What did Jesus call the covenant at the Last Supper?', 'The New Covenant in his blood.'],
      ['What happened after Jesus was buried?', 'God raised him from the dead on the third day.'],
      ['What job did Jesus give his disciples?', 'To tell others what they had seen and heard about him.']
    ],
    remember: 'Jesus died for us, rose again, and calls us to share his new life.',
    practice: 'Retell the story in four moments: supper, Cross, empty tomb, and Ascension.',
    prayer: 'Jesus, thank you for giving yourself for us. Give us hope in your Resurrection and courage to share your love. Amen.',
    parentGuidance: 'Use gentle, simple language about the Cross and make room for children to ask about death and hope.'
  },
  {
    slug: 'a-first-look-at-the-church',
    title: 'A First Look at the Church',
    summary: 'Jesus gathers a people, gives them the Holy Spirit, and draws them together to worship and serve.',
    sources: [
      bible('matthew', 16, '13–19', 'Jesus speaks to Peter about building his Church.'),
      bible('acts', 2, '1–11, 42–47', 'The Holy Spirit comes and the first Christians pray and break bread together.'),
      bible('1corinthians', 12, '12–27', 'Saint Paul describes the Church as Christ’s Body.')
    ],
    sections: [
      ['Jesus gathers his people', ['Jesus called disciples and entrusted them with a mission. At Pentecost the Holy Spirit gave them courage to speak about him. The first Christians learned from the apostles, prayed together, shared what they had, and broke bread.'], ['matthew-16', 'acts-2']],
      ['One Body with many gifts', ['Saint Paul calls the Church Christ’s Body. Each person has a place, and people with different gifts help one another. At Mass, Christ gathers us to hear God’s Word and celebrate the Eucharist. That is where our next set of lessons begins.'], ['1corinthians-12', 'acts-2']]
    ],
    questions: [
      ['Who helped the disciples speak bravely at Pentecost?', 'The Holy Spirit.'],
      ['Why does Saint Paul compare the Church to a body?', 'Many different members belong together and care for one another.'],
      ['What do we do together at Mass?', 'We listen to God’s Word, pray, and celebrate the Eucharist.']
    ],
    remember: 'Jesus gathers us as his people and gives us gifts to share.',
    practice: 'At your next Mass, notice one way someone helps the community pray or feel welcome.',
    prayer: 'Holy Spirit, help us use our gifts to serve. Draw our family closer to Jesus and to his people. Amen.',
    parentGuidance: 'Connect the reading to real people your child sees at Mass, such as readers, singers, and people who welcome others.'
  }
] satisfies Omit<Parameters<typeof lesson>[0], 'topicId' | 'keywords'>[];

export const chapterSummaries = summaries.map(summary => ({
  ...lesson({...summary, topicId, keywords: [summary.title, 'salvation']}),
  revision: {date: '2026-11-08', version: 1, status: 'Drafted' as const}
}));
