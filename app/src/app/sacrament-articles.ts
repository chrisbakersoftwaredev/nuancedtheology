import { bible, lesson } from './lesson-builder';

const compendium = (numbers: string, section: string) => ({
  id: 'catechism',
  label: 'Compendium of the Catechism ' + numbers,
  url: 'https://www.vatican.va/archive/compendium_ccc/documents/archive_2005_compendium-ccc_en.html#' + encodeURIComponent(section),
  note: 'The Church’s teaching in question-and-answer form.'
});

const seeds: Omit<Parameters<typeof lesson>[0], 'topicId'>[] = [
  {
    slug: 'what-is-a-sacrament',
    title: 'What is a sacrament?',
    summary: 'Jesus gives us seven sacraments through which we receive his grace at different moments in Christian life.',
    keywords: ['sacraments', 'grace', 'seven sacraments'],
    sources: [compendium('224–231', 'The Paschal Mystery in the Age of the Church'), {id:'seven',label:'Catechism 1210–1211',url:'https://www.usccb.org/catechism/pt2sect2',note:'The seven sacraments and their three groups.'}],
    sections: [
      ['A sign that gives what it shows', ['Jesus gave the Church the sacraments so we could receive his grace, the gift of sharing in God’s life. We see and hear things such as water being poured or words spoken. Through the sacrament Christ acts and gives the grace the sign points to.'], ['catechism']],
      ['Seven gifts for the Christian life', ['Baptism, Confirmation, and the Eucharist begin and nourish Christian life. Reconciliation and Anointing of the Sick bring healing. Holy Orders and Matrimony help people serve others through particular vocations, or callings.'], ['seven']],
      ['Notice what happens', ['Think back to the Mass lessons. There you saw the Eucharist celebrated in a community gathered for worship. As you learn each of the seven sacraments, ask what we can see and hear, what Christ gives, and how that gift helps us love God and others.'], ['catechism', 'seven']]
    ],
    questions: [['Who gave us the sacraments?', 'Jesus entrusted them to his Church.'], ['What is one sign we can see?', 'Water at Baptism is one example.'], ['Can you name a sacrament of healing?', 'Reconciliation and Anointing of the Sick are both examples.']],
    remember: 'In the sacraments, Jesus acts through signs we can see and hear.',
    practice: 'Look at a family photo from a sacramental celebration and name one sign you notice.',
    prayer: 'Jesus, thank you for the sacraments. Help us receive your gifts with grateful hearts. Amen.',
    parentGuidance: 'Let your child name a sacrament they have seen and ask what surprised them.'
  },
  {
    slug: 'sacrament-of-baptism',
    title: 'Baptism: How do we begin life with Christ?',
    summary: 'Through water and the words of Baptism, Christ forgives sin and brings us into his Church.',
    keywords: ['Baptism', 'water', 'new life'],
    sources: [compendium('251–264', 'The sacraments of Christian initiation'), bible('matthew', 28, '18–20', 'Jesus sends the disciples to baptize in the name of the Trinity.')],
    sections: [
      ['Born into a new life', ['In Baptism we are united to Jesus in his death and Resurrection. God washes away original sin and any personal sins, gives us new life, and makes us members of the Church. This is the beginning of a life we keep growing into.'], ['catechism']],
      ['Water and the name of God', ['The person is immersed in water or has water poured over them as the minister baptizes in the name of the Father, the Son, and the Holy Spirit. Water helps us see both cleansing and new life. Jesus gave his disciples this mission before they went out to teach.'], ['catechism', 'matthew-28']],
      ['A gift to remember', ['Baptism leaves a lasting mark and is received only once. When we use holy water at church, we can remember that we belong to Christ. Families can also celebrate a baptism anniversary with a prayer of thanks.'], ['catechism']]
    ],
    questions: [['What sign do we see at Baptism?', 'Water being poured or a person being immersed.'], ['Whose name is spoken?', 'The Father, the Son, and the Holy Spirit.'], ['What does Baptism begin?', 'A new life with Christ in his Church.']],
    remember: 'In Baptism, Jesus gives us new life and makes us part of his Church.',
    practice: 'Find out the date of a family baptism and mark it on your calendar.',
    prayer: 'Father, thank you for calling us by name. Help us live as your children. Amen.',
    parentGuidance: 'If someone in the family is preparing for Baptism, invite them to share what they are looking forward to.'
  },
  {
    slug: 'sacrament-of-confirmation',
    title: 'Confirmation: How does the Holy Spirit strengthen us?',
    summary: 'The Holy Spirit strengthens the grace of Baptism so we can live and share our faith with courage.',
    keywords: ['Confirmation', 'Holy Spirit', 'chrism'],
    sources: [compendium('265–270', 'The sacraments of Christian initiation'), bible('acts', 8, '14–17', 'The apostles pray and lay hands on the baptized.')],
    sections: [
      ['Strength for a life already begun', ['The Holy Spirit is already at work in Baptism. In Confirmation the Spirit strengthens baptismal grace, deepens our bond with the Church, and gives us strength to speak and act as witnesses to Christ. This gift is for the whole of Christian life.'], ['catechism', 'acts-8']],
      ['The sign of chrism', ['The minister anoints with sacred chrism, a perfumed oil blessed by a bishop. In the Latin Church this anointing is on the forehead and is accompanied by words about the gift of the Holy Spirit. The bishop is the ordinary minister in the Latin Church, and priests also confirm in certain circumstances.'], ['catechism']],
      ['Courage in ordinary life', ['A witness can tell the truth when it costs something, stand with someone left out, or explain why they pray. Confirmation strengthens us for choices like these. We can ask the Holy Spirit for help whenever we find them hard.'], ['catechism']]
    ],
    questions: [['Who strengthens us in Confirmation?', 'The Holy Spirit.'], ['What is chrism?', 'Sacred perfumed oil used in the anointing.'], ['How could we be a witness this week?', 'Think of a concrete choice that shows Christ’s love.']],
    remember: 'The Holy Spirit strengthens us to live and share our faith.',
    practice: 'Choose one person to encourage and ask the Holy Spirit for courage before you act.',
    prayer: 'Come, Holy Spirit. Help us speak the truth kindly and live with courage. Amen.',
    parentGuidance: 'The age and order of celebrating Confirmation vary. Ask your parish about its practice if your child is preparing.'
  },
  {
    slug: 'sacrament-of-the-eucharist',
    title: 'The Eucharist: How does Jesus give us himself?',
    summary: 'At Mass, Christ’s one sacrifice is made present, and in Holy Communion he gives us himself.',
    keywords: ['Eucharist', 'Mass', 'Holy Communion', 'Real Presence'],
    sources: [compendium('271–294', 'The sacraments of Christian initiation'), bible('1corinthians', 11, '23–26', 'Saint Paul passes on what Jesus did at the Last Supper.')],
    sections: [
      ['The gift Jesus gave at supper', ['At the Last Supper, Jesus took bread and wine and gave them to his disciples as his Body and Blood. He told them to do this in memory of him. At Mass the Church gives thanks and celebrates this gift in the Eucharist.'], ['catechism', '1corinthians-11']],
      ['One sacrifice made present', ['Christ’s sacrifice on the Cross is made sacramentally present at Mass. During the Eucharistic Prayer, through Christ’s words and the action of the Holy Spirit, the bread and wine become Christ’s Body and Blood. Their appearances remain, and Christ is truly present.'], ['catechism']],
      ['Receiving Christ with gratitude', ['In Holy Communion, those prepared to receive are united more deeply with Jesus and with his Church. Everyone can pray and give thanks at Mass. A child preparing for First Communion can begin by noticing the altar and listening for the words Jesus gave us.'], ['catechism']]
    ],
    questions: [['When did Jesus give us the Eucharist?', 'At the Last Supper.'], ['Who is truly present in the Eucharist?', 'Jesus Christ.'], ['How can everyone give thanks at Mass?', 'Each person can pray and join in the Church’s worship.']],
    remember: 'Jesus gives us himself in the Eucharist.',
    practice: 'After Mass, each person can name one thing for which they want to thank Jesus.',
    prayer: 'Jesus, thank you for giving yourself to us. Teach us to give ourselves in love. Amen.',
    parentGuidance: 'Use the Know the Mass Eucharist lessons for the celebration itself. This lesson introduces the gift Christ gives.'
  },
  {
    slug: 'sacrament-of-reconciliation',
    title: 'Reconciliation: How does Jesus forgive us?',
    summary: 'In Confession, Christ forgives sins committed after Baptism and restores our relationship with God and the Church.',
    keywords: ['Reconciliation', 'Confession', 'Penance', 'forgiveness'],
    sources: [compendium('295–312', 'The Sacraments of Healing'), bible('john', 20, '19–23', 'The risen Jesus entrusts his apostles with the forgiveness of sins.')],
    sections: [
      ['Jesus opens a way home', ['Jesus knows that we sometimes turn away from God even after Baptism. In Reconciliation, also called Penance or Confession, we come to him honestly. He forgives us through the ministry of the priest and reconciles us with God and the Church.'], ['catechism', 'john-20']],
      ['What happens in Confession?', ['We think about our choices, are sorry for our sins, and intend to change. We confess our sins to a priest. He gives us a penance and speaks the words of absolution, through which Christ forgives us. We then carry out the penance as part of making things right.'], ['catechism']],
      ['Starting again', ['A child may worry about finding the right words. The priest can help them through the steps. Reconciliation teaches us to name what we have done, receive mercy, and take a next step toward loving God and the people we may have hurt.'], ['catechism']]
    ],
    questions: [['Who forgives us in this sacrament?', 'Jesus forgives us through the ministry of the priest.'], ['What is absolution?', 'The sacramental words by which the priest grants forgiveness in Christ’s name.'], ['How can we make a fresh start?', 'Name a general way to apologize, repair harm, or choose differently.']],
    remember: 'Jesus offers forgiveness and helps us begin again.',
    practice: 'Practice an everyday apology using an imagined example. Say what happened and what you would do differently.',
    prayer: 'Jesus, thank you for your mercy. Help us tell the truth, ask forgiveness, and try again. Amen.',
    parentGuidance: 'Use imagined examples. A child’s actual confession is private.'
  },
  {
    slug: 'sacrament-of-anointing',
    title: 'Anointing of the Sick: How does Christ care for the seriously ill?',
    summary: 'Through the prayer of a priest and anointing with oil, Christ strengthens people facing serious illness or the frailty of old age.',
    keywords: ['Anointing of the Sick', 'healing', 'illness'],
    sources: [compendium('313–320', 'The Sacraments of Healing'), bible('james', 5, '14–16', 'James calls the sick to ask the Church’s elders to pray and anoint them.')],
    sections: [
      ['When someone is seriously ill', ['Anointing of the Sick is for someone facing serious illness or the frailty of old age. Families can ask for it before the last moments of life. It can be received again if a person becomes seriously ill again or the same illness grows worse.'], ['catechism']],
      ['Prayer and oil', ['A priest prays with the sick person and anoints them with blessed oil. Christ gives strength, peace, and courage. The sacrament can bring forgiveness if the person cannot receive Reconciliation, and bodily healing if it serves their salvation.'], ['catechism', 'james-5']],
      ['Stay close to people who suffer', ['Being sick can make a person feel alone. The Church prays with them and helps them join their suffering to Christ. Families can ask the parish for help, offer a visit if welcome, or bring food and a kind message.'], ['catechism']]
    ],
    questions: [['Who can receive this sacrament?', 'Someone facing serious illness or the frailty of old age.'], ['What signs might we see or hear?', 'The priest prays and anoints with blessed oil.'], ['How can we care for someone who is sick?', 'Choose a practical act of kindness that respects their needs.']],
    remember: 'Christ stays close to people who are seriously ill.',
    practice: 'Make a card or offer a short prayer for someone who is sick.',
    prayer: 'Jesus, stay close to people who are sick. Give them strength and help us care for them. Amen.',
    parentGuidance: 'Explain that the sacrament gives spiritual help even when an illness continues.'
  },
  {
    slug: 'sacrament-of-holy-orders',
    title: 'Holy Orders: How are ministers ordained to serve?',
    summary: 'Through ordination, bishops, priests, and deacons receive a lasting mission of service in the Church.',
    keywords: ['Holy Orders', 'ordination', 'bishop', 'priest', 'deacon'],
    sources: [compendium('322–336', 'The Sacraments at the Service of Communion and Mission'), bible('acts', 6, '1–6', 'The apostles pray and lay hands on those chosen for service.')],
    sections: [
      ['A sacrament for service', ['Christ calls the whole Church to serve. Through Holy Orders, he gives bishops, priests, and deacons a particular mission to serve the people of God. We call receiving this sacrament ordination. Each degree has its own responsibilities.'], ['catechism']],
      ['Three degrees', ['Bishops shepherd local Churches and carry on the mission of the apostles. Priests serve with their bishops by preaching, celebrating the Eucharist, and caring for the faithful. Deacons serve through the Word, the liturgy, and works of charity. At Mass, you may see a deacon proclaim the Gospel.'], ['catechism']],
      ['The sign of laying on hands', ['In ordination a bishop lays hands on the candidate and prays the prayer of ordination. That gesture helps us see that ministry is a gift received for others. The early Church also used prayer and laying on of hands when entrusting people with service.'], ['catechism', 'acts-6']]
    ],
    questions: [['What are the three degrees of Holy Orders?', 'Bishop, priest, and deacon.'], ['What happens at ordination?', 'A bishop lays hands on the candidate and prays.'], ['What is one way an ordained minister serves?', 'Think of something you have seen in your parish.']],
    remember: 'Christ gives ordained ministers a mission to serve his people.',
    practice: 'Pray by name for a bishop, priest, or deacon and thank someone who serves your parish.',
    prayer: 'Jesus, bless those you call to serve your Church. Help all of us care for one another. Amen.',
    parentGuidance: 'Invite children to notice the different roles at Mass and ask about the service they see.'
  },
  {
    slug: 'sacrament-of-matrimony',
    title: 'Matrimony: How does Christ strengthen married love?',
    summary: 'In sacramental marriage, Christ gives a husband and wife grace to live their lifelong covenant of faithful love.',
    keywords: ['Matrimony', 'Marriage', 'covenant', 'vocation'],
    sources: [compendium('337–350', 'The Sacraments at the Service of Communion and Mission'), bible('mark', 10, '6–9', 'Jesus teaches that husband and wife become one and are joined by God.')],
    sections: [
      ['A lifelong covenant', ['In marriage, a man and a woman freely give themselves to each other in a lifelong covenant. Marriage is ordered to the good of the spouses and to welcoming and raising children. Between baptized spouses, a valid marriage is a sacrament.'], ['catechism', 'mark-10']],
      ['Promises and grace', ['At a Catholic wedding, the couple express their consent, their free promise to marry. Christ gives spouses grace to love faithfully and help each other grow in holiness. That love takes shape in ordinary acts such as listening, forgiving, keeping promises, and caring for family members.'], ['catechism']],
      ['Faith at home', ['The Church calls the Christian home a domestic church because it is a place where people can learn to pray, serve, and pass on the faith. Children can practice these habits wherever they live and with the people who care for them.'], ['catechism']]
    ],
    questions: [['What do spouses promise?', 'To give themselves faithfully to each other for life.'], ['How does Christ help a married couple?', 'He gives them grace to live their promises and grow in love.'], ['How can faith grow at home?', 'Think of a short prayer or act of care you can do together.']],
    remember: 'Christ helps spouses live their promise of faithful love.',
    practice: 'Choose one way to make home a place of welcome, prayer, or service today.',
    prayer: 'Jesus, bless married couples and all our families. Teach us to keep our promises and love with patience. Amen.',
    parentGuidance: 'Teach the sacrament with care for children in different family circumstances. Invite them to talk about people who care for them.'
  }
];

export const sacramentArticles = seeds.map(seed => ({
  ...lesson({...seed, topicId: 'sacraments', discussionQuestion: seed.questions[2][0]}),
  revision: {date: '2026-11-08', version: 1, status: 'Drafted' as const}
}));
