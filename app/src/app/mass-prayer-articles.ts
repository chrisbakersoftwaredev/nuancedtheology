import { bible, girm, lesson } from './lesson-builder';

export const massPrayerArticles = [
  lesson({
    slug: 'lift-up-your-hearts', discussionQuestion: 'What helps you turn your attention to God when you pray?', title: 'What does “Lift up your hearts” mean?',
    topicId: 'prayers-at-mass', summary: 'The opening dialogue invites us to turn to God and give thanks together.',
    keywords: ['preface', 'dialogue', 'thanksgiving', 'lift up your hearts'],
    sources: [girm(2, '78–79', 'The Eucharistic Prayer is the Church’s prayer of thanksgiving and sanctification.'),
      bible('luke', 22, '14–20', 'Jesus gives thanks at the Last Supper.')],
    sections: [
      ['Listen at the beginning', ['After the prayer over the offerings, the priest and people exchange a short dialogue. It opens the Eucharistic Prayer, the central prayer of Mass. The invitation to lift our hearts comes before the Preface, when the priest gives thanks to the Father in the name of the whole Church.'], ['missal']],
      ['Turn toward God together', ['To lift our hearts is to turn our attention, our hopes, and our love toward God. You can do this even if you feel tired or distracted. Our response joins us to the prayer the priest leads. We are getting ready to thank God together.'], ['missal']],
      ['Give thanks with Jesus', ['At the Last Supper, Jesus gave thanks before sharing the cup and breaking the bread. At Mass we join his thanksgiving. Bring to mind one gift from God, then listen for what the priest thanks God for in the Preface.'], ['luke-22','missal']]
    ],
    questions: [['When do we lift our hearts?','At the opening of the Eucharistic Prayer.'],['Where are we turning our attention?','Toward the Lord, with the whole Church.'],['What gift could you thank God for?','Think of one thing from today.']],
    remember: 'We turn our hearts to the Lord and give thanks together.',
    practice: 'At Mass, listen for the opening dialogue and quietly thank God for one gift.',
    prayer: 'Father, lift our hearts to you. Thank you for Jesus and for all you give us. Amen.',
    parentGuidance: 'Help children listen for the transition from the gifts to the prayer of thanksgiving.'
  }),
  lesson({
    slug: 'sanctus', discussionQuestion: 'Which words help us welcome Jesus at Mass?', title: 'Why do we sing “Holy, Holy, Holy”?',
    topicId: 'prayers-at-mass', summary: 'The Sanctus joins the angels’ praise with the welcome Jesus received in Jerusalem.',
    keywords: ['Sanctus', 'holy holy holy', 'Hosanna', 'Jerusalem', 'Palm Sunday'],
    sources: [girm(2, '79b', 'The whole assembly joins the heavenly powers in singing the Sanctus.'),
      bible('isaiah', 6, '3', 'Isaiah hears the heavenly cry of praise.'),
      bible('mark', 11, '7–10', 'The crowd welcomes Jesus as he enters Jerusalem.')],
    sections: [
      ['When we sing it', ['The priest begins the Eucharistic Prayer with thanksgiving. At the end of the Preface, everyone joins in the Sanctus. Sanctus is Latin for holy. Even when we say it instead of singing, we join the praise of heaven as one assembly.'], ['missal']],
      ['The angels’ praise', ['Isaiah sees the Lord in a vision and hears the seraphim, heavenly servants, call out that God is holy. The opening of the Sanctus echoes their words. When we praise God’s holiness, we are joining a song that reaches beyond the people we can see in church.'], ['isaiah-6','missal']],
      ['A welcome for Jesus', ['Mark tells how people spread cloaks and branches as Jesus rode into Jerusalem. They cried Hosanna and blessed the one coming in the Lord’s name. The Sanctus takes up their welcome. Listen for the same words when you hear the Jerusalem story and when you hear the chant at Mass.'], ['mark-11','missal']]
    ],
    questions: [['Who sings in Isaiah’s vision?','The seraphim, who praise God’s holiness.'],['What did people spread on the road?','Their cloaks and branches.'],['What word from the crowd do you hear at Mass?','Listen for Hosanna.']],
    remember: 'In the Sanctus we join the angels in praise and welcome Jesus.',
    practice: 'Listen for Hosanna near the beginning of the Eucharistic Prayer.',
    prayer: 'Holy God, we praise you. Jesus, help us welcome you with glad hearts. Amen.',
    parentGuidance: 'Read the Jerusalem scene aloud first so children recognize its words in the chant.'
  }),
  lesson({
    slug: 'mystery-of-faith', discussionQuestion: 'What does the response help us remember about Jesus?', title: 'What do we proclaim at “The mystery of faith”?',
    topicId: 'prayers-at-mass', summary: 'After the consecration, the Church proclaims the saving mystery of Jesus.',
    keywords: ['Memorial Acclamation', 'mystery of faith', 'consecration', 'resurrection'],
    sources: [girm(4, '151', 'The people make the prescribed acclamation after the consecration.'),
      bible('1corinthians', 11, '23–26', 'Paul connects the Eucharist with proclaiming the Lord’s death until he comes.')],
    sections: [
      ['Listen after the consecration', ['After the priest has spoken Christ’s words over the bread and wine and shown the chalice, he invites the people to proclaim the mystery of faith. This is a response by the congregation within the Eucharistic Prayer. It is often sung.'], ['missal']],
      ['Remember what Jesus has done', ['Paul teaches that when the Church eats this bread and drinks this cup, it proclaims the Lord’s death until he comes. Our response remembers Jesus’ saving gift and looks toward his coming. The risen Jesus is the one to whom we speak.'], ['1corinthians-11']],
      ['Recognize different forms', ['The Roman Missal provides three forms of the Memorial Acclamation. One names his death and Resurrection directly, one speaks of eating the bread and drinking the cup, and one calls on the Savior of the world. A parish may sing a different form from the one your family knows.'], ['missal']]
    ],
    questions: [['When do we hear the invitation?','After the consecration.'],['Who gave himself for us?','Jesus, who died and rose.'],['Which idea did your parish’s response express?','Recall one word or phrase together.']],
    remember: 'After the consecration, we proclaim what Jesus has done to save us.',
    practice: 'Listen for the invitation and notice which form the congregation sings or says.',
    prayer: 'Jesus, thank you for saving us. Help us remember your death and rejoice that you are risen. Amen.',
    parentGuidance: 'The response follows the consecration and is distinct from the Amen that concludes the prayer.'
  }),
  lesson({
    slug: 'great-amen', discussionQuestion: 'How could you make your Amen more thoughtful at Mass?', title: 'What are we saying yes to in the Great Amen?',
    topicId: 'prayers-at-mass', summary: 'Our Amen joins us to the whole Eucharistic Prayer as it ends in praise of the Father.',
    keywords: ['Great Amen', 'doxology', 'Eucharistic Prayer', 'through him'],
    sources: [girm(2, '79h', 'The people affirm and conclude the final doxology with their Amen.'),
      {id:'2corinthians-1',label:'2 Corinthians 1:18–22',url:'https://bible.usccb.org/bible/2corinthians/1',note:'God’s promises find their yes in Christ, and through him we say Amen.'}],
    sections: [
      ['The prayer ends in praise', ['At the end of the Eucharistic Prayer, the priest lifts the paten with the host and the chalice, assisted by the deacon when present. He gives glory to the Father through Christ in the unity of the Holy Spirit. This closing praise is called the doxology.'], ['missal']],
      ['A yes from everyone', ['The people answer Amen. Here the short word is a big yes: we join the thanksgiving, prayer, and offering that the priest has led on behalf of the Church. We can sing it with attention even when we are still learning the words of the rest of the prayer.'], ['missal']],
      ['Through Jesus', ['Paul connects our Amen with Jesus, in whom God keeps his promises. At Mass we can think of our Amen as saying that this prayer is ours too, and that we want to offer ourselves to the Father with Jesus.'], ['2corinthians-1','missal']]
    ],
    questions: [['What does the priest lift at the end?','The host on the paten and the chalice.'],['Who answers Amen?','The whole congregation.'],['What are we saying yes to?','The Eucharistic Prayer we have joined.']],
    remember: 'Our Great Amen is our yes to the whole Eucharistic Prayer.',
    practice: 'Listen for the closing praise of the Father, then join the Great Amen.',
    prayer: 'Father, accept our prayer through Jesus. Help our Amen shape how we live. Amen.',
    parentGuidance: 'Point out the closing praise so children can distinguish this Amen from the others at Mass.'
  }),
  lesson({
    slug: 'lord-i-am-not-worthy', discussionQuestion: 'What can we learn about trusting Jesus from the centurion?', title: 'Why do we say “Lord, I am not worthy”?',
    topicId: 'prayers-at-mass', summary: 'Just before Communion, the Church borrows the centurion’s words of humility and trust.',
    keywords: ['Communion', 'centurion', 'worthy', 'roof', 'healing'],
    sources: [girm(4, '157', 'The priest and people say the response together after the invitation to Communion.'),
      bible('matthew', 8, '5–13', 'A centurion trusts Jesus to heal his servant with a word.')],
    sections: [
      ['Hear the invitation', ['After the Lamb of God, the priest shows the consecrated host to the people and invites them to the Lord’s supper. The priest and people answer together. It is a short prayer spoken directly to Jesus just before Holy Communion.'], ['missal']],
      ['Meet the centurion', ['A centurion, an officer in the Roman army, came to Jesus because his servant was suffering. He trusted that Jesus could heal him without even coming into his house. Jesus praised his faith, and his servant was healed. The prayer at Mass echoes what the centurion said.'], ['matthew-8']],
      ['Come with trust', ['We acknowledge that receiving Jesus is a gift we cannot earn. We also ask him to heal us, trusting that his word has power. Whether we receive Communion or remain in prayer, we can turn to Jesus with the centurion’s humble confidence.'], ['missal','matthew-8']]
    ],
    questions: [['Who needed help in the Gospel?','The centurion’s servant.'],['What did the centurion believe Jesus could do?','Heal with a word, even from a distance.'],['What could you ask Jesus to heal?','Let each person name something aloud or quietly.']],
    remember: 'We approach Jesus with humility and trust in his healing word.',
    practice: 'Listen for the congregation’s response just before Communion and remember the centurion.',
    prayer: 'Jesus, we trust your word. Heal what needs healing and teach us to welcome you. Amen.',
    parentGuidance: 'Keep the focus on trusting Jesus. Receiving Communion and staying in prayer are distinct ways to respond.'
  })
];

