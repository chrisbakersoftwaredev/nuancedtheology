import type { Source } from './content';

export interface FamilyReading {
  reference: string;
  introduction: string;
  question: string;
  scriptureNote?: string;
  longer?: Source;
}

// Each selection is read within its biblical setting before the lesson explanation.
export const familyReadings: Readonly<Partial<Record<string, FamilyReading>>> = {
  "creation-and-the-fall": {
    "reference": "Genesis 3:8–15",
    "introduction": "Listen for God calling to the people who have hidden from him. Notice that the story continues even after they have disobeyed.",
    "question": "What do you notice God doing when the people hide?",
    "longer": {
      "id": "family-reading",
      "label": "Genesis 3:1–15",
      "url": "https://bible.usccb.org/bible/genesis/3",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "creation-and-gods-friendship": {
    "reference": "Genesis 1:26–31",
    "introduction": "We are hearing the end of the creation story. Listen for what God says about people and about what he has made.",
    "question": "What is one good thing God made that you want to thank him for?"
  },
  "the-fall-and-our-savior": {
    "reference": "Genesis 3:8–15",
    "introduction": "After the first disobedience, God comes looking for the people. Listen for the questions he asks and for hope in his words about the serpent.",
    "question": "What would you like to say to God when you have done something wrong?",
    "longer": {
      "id": "family-reading",
      "label": "Genesis 3:1–15",
      "url": "https://bible.usccb.org/bible/genesis/3",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "gods-plan-of-salvation-overview": {
    "reference": "Ephesians 2:4–10",
    "introduction": "Paul is writing to Christians about the new life God gives. Listen for how God loves us and what that love helps us do.",
    "question": "What good thing could we do with God’s help today?"
  },
  "covenants-and-israel": {
    "reference": "Genesis 12:1–4",
    "introduction": "God calls Abram, who will later be called Abraham, to leave home. Listen for whom God wants to bless through him.",
    "question": "Who will receive a blessing through Abram?",
    "longer": {
      "id": "family-reading",
      "label": "Genesis 12:1–9",
      "url": "https://bible.usccb.org/bible/genesis/12",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "covenant-with-noah": {
    "reference": "Genesis 9:8–13",
    "introduction": "The flood is over, and God speaks to Noah and his sons. Listen for the people and living creatures included in God’s promise.",
    "question": "What sign helps Noah remember God’s promise?",
    "longer": {
      "id": "family-reading",
      "label": "Genesis 9:8–17",
      "url": "https://bible.usccb.org/bible/genesis/9",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "covenant-with-abraham": {
    "reference": "Genesis 12:1–4",
    "introduction": "Abram is being asked to start a journey. Listen for what God promises and how Abram responds.",
    "question": "What might help you trust God when something is new?",
    "longer": {
      "id": "family-reading",
      "label": "Genesis 17:1–8",
      "url": "https://bible.usccb.org/bible/genesis/17",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "covenant-with-moses": {
    "reference": "Exodus 19:3–8",
    "introduction": "God has brought Israel out of slavery in Egypt. Now listen as he calls them to live as his people.",
    "question": "How do the people answer God’s invitation?",
    "longer": {
      "id": "family-reading",
      "label": "Exodus 20:1–17",
      "url": "https://bible.usccb.org/bible/exodus/20",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "covenant-with-david": {
    "reference": "2 Samuel 7:12–16",
    "introduction": "The prophet Nathan brings God’s promise to David. Listen for what God promises about David’s family and kingdom.",
    "question": "What part of God’s promise sounds full of hope?",
    "longer": {
      "id": "family-reading",
      "label": "2 Samuel 7:8–16",
      "url": "https://bible.usccb.org/bible/2samuel/7",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "prophets-and-jesus-christ": {
    "reference": "Luke 4:16–21",
    "introduction": "Jesus is in the synagogue in his hometown. Listen to the words he reads from the prophet Isaiah and what he says afterward.",
    "question": "Whom does Jesus say he has come to help?"
  },
  "promises-pointing-to-jesus": {
    "reference": "Luke 24:25–27",
    "introduction": "Two disciples are walking after Jesus’ death. The risen Jesus joins them, though they do not yet recognize him. Listen for how he helps them understand Scripture.",
    "question": "What does Jesus use to help the disciples understand?",
    "longer": {
      "id": "family-reading",
      "label": "Luke 24:13–35",
      "url": "https://bible.usccb.org/bible/luke/24",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "the-incarnation": {
    "reference": "John 1:14–18",
    "introduction": "John calls the Son of God the Word. Listen for what happens when the Word comes to live among us.",
    "question": "What helps us know what God is like?",
    "longer": {
      "id": "family-reading",
      "label": "John 1:1–18",
      "url": "https://bible.usccb.org/bible/john/1",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "life-of-jesus": {
    "reference": "Mark 1:14–20",
    "introduction": "Jesus begins announcing God’s good news and calls his first followers. Listen for his invitation.",
    "question": "What do the fishermen do when Jesus calls them?",
    "longer": {
      "id": "family-reading",
      "label": "Mark 1:29–39",
      "url": "https://bible.usccb.org/bible/mark/1",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "salvation-through-christ": {
    "reference": "1 Corinthians 15:3–8",
    "introduction": "Paul reminds the Christians in Corinth of the good news he received and shared. Listen for what happened to Jesus and who saw him alive.",
    "question": "What part of this good news gives you hope?",
    "longer": {
      "id": "family-reading",
      "label": "1 Corinthians 15:20–28",
      "url": "https://bible.usccb.org/bible/1corinthians/15",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "new-covenant-in-jesus": {
    "reference": "Luke 22:14–20",
    "introduction": "Jesus shares a meal with his apostles before his death. Listen to what he says as he gives them the bread and the cup.",
    "question": "What does Jesus ask his friends to remember?"
  },
  "death-burial-and-resurrection": {
    "reference": "Luke 24:1–8",
    "introduction": "Some women go to Jesus’ tomb early in the morning. Listen for what they find and what they are told to remember.",
    "question": "What surprising news do the women hear?",
    "longer": {
      "id": "family-reading",
      "label": "Luke 24:1–12",
      "url": "https://bible.usccb.org/bible/luke/24",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "the-ascension-of-jesus": {
    "reference": "Acts 1:6–11",
    "introduction": "The risen Jesus speaks to his disciples before he is taken up into heaven. Listen for the help he promises and the work he gives them.",
    "question": "What does Jesus ask his disciples to do?",
    "longer": {
      "id": "family-reading",
      "label": "Acts 1:1–14",
      "url": "https://bible.usccb.org/bible/acts/1",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "a-first-look-at-the-church": {
    "reference": "Acts 2:42–47",
    "introduction": "After Pentecost, the first Christians begin living as a community. Notice how they pray, learn, and care for one another.",
    "question": "What is one way this community shares with others?",
    "longer": {
      "id": "family-reading",
      "label": "Acts 2:37–47",
      "url": "https://bible.usccb.org/bible/acts/2",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "christ-establishes-his-church": {
    "reference": "Matthew 16:13–19",
    "introduction": "Jesus asks his disciples who they say he is. Listen to Peter’s answer and to what Jesus entrusts to him.",
    "question": "What does Peter say about Jesus?",
    "longer": {
      "id": "family-reading",
      "label": "Matthew 28:16–20",
      "url": "https://bible.usccb.org/bible/matthew/28",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "pentecost-and-the-holy-spirit": {
    "reference": "Acts 2:1–8",
    "introduction": "Jesus’ followers are gathered when the Holy Spirit comes. Listen for what they hear and what the Spirit helps them do.",
    "question": "How does the Holy Spirit help people hear the good news?",
    "longer": {
      "id": "family-reading",
      "label": "Acts 2:1–11",
      "url": "https://bible.usccb.org/bible/acts/2",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "church-body-of-christ": {
    "reference": "1 Corinthians 12:12–18",
    "introduction": "Paul compares the Church to a body. Listen for why different members all belong.",
    "question": "How could someone with a different gift help our family or parish?",
    "longer": {
      "id": "family-reading",
      "label": "1 Corinthians 12:12–27",
      "url": "https://bible.usccb.org/bible/1corinthians/12",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "holy-water": {
    "reference": "Romans 6:3–6",
    "introduction": "Paul reminds baptized Christians that their lives are joined to Jesus. Listen for the new life he describes.",
    "question": "What kind of new life does Jesus share with us?",
    "longer": {
      "id": "family-reading",
      "label": "Romans 6:3–11",
      "url": "https://bible.usccb.org/bible/romans/6",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "tabernacle": {
    "reference": "John 6:51–58",
    "introduction": "Jesus is teaching a crowd about the bread of life. Listen for his promise to those who receive him. The lesson will help us connect this promise with reverence for the Eucharist.",
    "question": "What does Jesus promise to share with us?",
    "longer": {
      "id": "family-reading",
      "label": "John 6:25–70",
      "url": "https://bible.usccb.org/bible/john/6",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "altar": {
    "reference": "1 Corinthians 11:23–26",
    "introduction": "Paul passes on the account of Jesus’ last meal with his disciples. Listen for the words and actions we remember at Mass.",
    "question": "What do you recognize from the prayers at Mass?",
    "longer": {
      "id": "family-reading",
      "label": "Luke 22:14–20",
      "url": "https://bible.usccb.org/bible/luke/22",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "vestments": {
    "reference": "Galatians 3:26–28",
    "introduction": "Paul says that when we are baptized, we put on Christ like a garment. Listen for what he says about who we become together in Jesus.",
    "question": "What does Paul say we put on when we are baptized?",
    "longer": {
      "id": "family-reading",
      "label": "Colossians 3:12–17",
      "url": "https://bible.usccb.org/bible/colossians/3",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "liturgical-colors": {
    "reference": "Romans 8:24–25",
    "introduction": "When we see violet in Advent, it can remind us that we’re waiting with hope for Jesus.",
    "question": "What helps you wait with hope?"
  },
  "sign-of-the-cross": {
    "reference": "Matthew 28:16–20",
    "introduction": "The risen Jesus meets his disciples and sends them out. Listen for whose name is spoken when people are baptized.",
    "question": "Whom do we name when we make the Sign of the Cross?",
    "scriptureNote": "In the Douay-Rheims Bible, Holy Ghost means Holy Spirit."
  },
  "small-crosses-before-the-gospel": {
    "reference": "Luke 8:11–15",
    "introduction": "Jesus is explaining his story about a farmer scattering seed. Listen for how he describes people who hear God’s word and hold on to it.",
    "question": "What could help us keep something Jesus says in our hearts?",
    "longer": {
      "id": "family-reading",
      "label": "Luke 8:4–15",
      "url": "https://bible.usccb.org/bible/luke/8",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "raised-hands-in-prayer": {
    "reference": "1 Timothy 2:1–8",
    "introduction": "Paul asks us to pray for everyone. Listen for what he says about lifting up our hands and how he wants us to pray.",
    "question": "What does Paul say about our hands and our hearts when we pray?"
  },
  "genuflection": {
    "reference": "Philippians 2:9–11",
    "introduction": "Paul has just told how Jesus humbled himself and gave his life. Listen to how creation honors the risen Lord.",
    "question": "What do these words tell us about whom we honor?",
    "longer": {
      "id": "family-reading",
      "label": "Philippians 2:5–11",
      "url": "https://bible.usccb.org/bible/philippians/2",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "bowing-at-mass": {
    "reference": "Philippians 2:5–11",
    "introduction": "Listen to the story of Jesus’ humility and glory. As we learn about bowing, think about how our gestures can express honor and love.",
    "question": "What does Jesus’ example teach us about being humble?"
  },
  "entrance-and-greeting": {
    "reference": "Matthew 18:18–20",
    "introduction": "Jesus is teaching his followers about life together. Listen to his promise about people gathered in his name.",
    "question": "What does Jesus promise to people who gather in his name?",
    "longer": {
      "id": "family-reading",
      "label": "Matthew 18:15–20",
      "url": "https://bible.usccb.org/bible/matthew/18",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "penitential-act": {
    "reference": "Luke 18:9–14",
    "introduction": "Jesus tells a story about two people praying. Listen for how each person speaks to God and which prayer Jesus commends.",
    "question": "What could we learn from the person who asks for mercy?"
  },
  "gloria-and-collect": {
    "reference": "Luke 2:8–14",
    "introduction": "Shepherds are keeping watch at night when an angel brings news. Listen for the good news and the praise that follows.",
    "question": "Why are the angels praising God?",
    "longer": {
      "id": "family-reading",
      "label": "Luke 2:8–20",
      "url": "https://bible.usccb.org/bible/luke/2",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "readings-and-psalm": {
    "reference": "Nehemiah 8:1–3",
    "introduction": "God’s people gather to hear the book of the law read aloud. Listen for what the people ask for and how they listen.",
    "question": "What might help us listen when Scripture is read?",
    "longer": {
      "id": "family-reading",
      "label": "Nehemiah 8:1–12",
      "url": "https://bible.usccb.org/bible/nehemiah/8",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "standing-for-the-gospel": {
    "reference": "Luke 4:16–21",
    "introduction": "Jesus stands to read Scripture in the synagogue. Listen for the good news he announces. This story helps us value God’s word as we learn the gestures used for the Gospel at Mass.",
    "question": "What good news do you hear in Jesus’ reading?"
  },
  "homily-creed-and-prayers": {
    "reference": "Luke 24:27–32",
    "introduction": "The risen Jesus helps two disciples understand Scripture and shares a meal with them. Listen for how they describe what happened in their hearts.",
    "question": "How did the disciples feel as Jesus helped them understand?",
    "longer": {
      "id": "family-reading",
      "label": "Luke 24:13–35",
      "url": "https://bible.usccb.org/bible/luke/24",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "nicene-creed": {
    "reference": "1 Corinthians 15:3–8",
    "introduction": "Paul shares a short account of the good news Christians received. Listen for parts of Jesus’ story that you recognize from the Creed.",
    "question": "Which part of Jesus’ story do you recognize?",
    "longer": {
      "id": "family-reading",
      "label": "John 1:1–18",
      "url": "https://bible.usccb.org/bible/john/1",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "preparation-of-the-gifts": {
    "reference": "Romans 12:1–5",
    "introduction": "Paul asks Christians to offer their whole lives to God and care for one another. Listen for how everyday life can become a response to God’s mercy.",
    "question": "What part of our week could we offer to God?",
    "longer": {
      "id": "family-reading",
      "label": "Romans 12:1–8",
      "url": "https://bible.usccb.org/bible/romans/12",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "the-eucharistic-prayer": {
    "reference": "Luke 22:14–20",
    "introduction": "At supper, Jesus gives thanks and shares bread and a cup with his apostles. Listen for his gift and the words he asks them to remember.",
    "question": "What does Jesus give his friends?"
  },
  "eucharist-real-presence": {
    "reference": "John 6:51–56",
    "introduction": "Jesus speaks about giving himself for the life of the world. Listen carefully to what he says about his flesh and blood.",
    "question": "What does Jesus promise to people who receive him?",
    "longer": {
      "id": "family-reading",
      "label": "John 6:48–58",
      "url": "https://bible.usccb.org/bible/john/6",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "prayer-peace-and-lamb-of-god": {
    "reference": "Matthew 6:9–13",
    "introduction": "Jesus teaches his disciples to pray to the Father. Listen for the needs we bring to God and the words about forgiveness.",
    "question": "Which request would you like to pray slowly today?",
    "longer": {
      "id": "family-reading",
      "label": "Matthew 6:5–15",
      "url": "https://bible.usccb.org/bible/matthew/6",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "holy-communion-and-thanksgiving": {
    "reference": "1 Corinthians 11:23–26",
    "introduction": "Paul reminds the Church of Jesus’ words at the Last Supper. Listen for why this meal is remembered and shared.",
    "question": "What would you like to thank Jesus for?",
    "longer": {
      "id": "family-reading",
      "label": "1 Corinthians 11:23–29",
      "url": "https://bible.usccb.org/bible/1corinthians/11",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "final-blessing": {
    "reference": "Numbers 6:22–27",
    "introduction": "God teaches Aaron and his sons words for blessing the people. Listen for the gifts they ask God to give.",
    "question": "Which gift in this blessing would you ask for today?"
  },
  "dismissal": {
    "reference": "Matthew 5:14–16",
    "introduction": "Jesus tells his disciples that their lives can shine like a light. Listen for whom people are invited to praise when they see our good works.",
    "question": "What small act of kindness could be a light this week?",
    "longer": {
      "id": "family-reading",
      "label": "Matthew 5:13–16",
      "url": "https://bible.usccb.org/bible/matthew/5",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "what-is-a-sacrament": {
    "reference": "John 9:1–7",
    "introduction": "Jesus meets a man who has been blind from birth. Notice how he uses actions, words, and washing as he heals. This story helps us notice how God can work through visible things.",
    "question": "What actions do you notice Jesus asking the man to do?"
  },
  "sacrament-of-baptism": {
    "reference": "Romans 6:3–6",
    "introduction": "Paul speaks to baptized Christians about their life with Jesus. Listen for how Baptism joins us to his death and new life.",
    "question": "What new life does Jesus invite us to share?",
    "longer": {
      "id": "family-reading",
      "label": "Romans 6:3–11",
      "url": "https://bible.usccb.org/bible/romans/6",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "sacrament-of-confirmation": {
    "reference": "Acts 8:14–17",
    "introduction": "People in Samaria have heard the good news and been baptized. Listen for what Peter and John do when they visit them.",
    "question": "What do the apostles ask God to give the people?",
    "longer": {
      "id": "family-reading",
      "label": "Acts 8:5–17",
      "url": "https://bible.usccb.org/bible/acts/8",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "sacrament-of-the-eucharist": {
    "reference": "Luke 22:14–20",
    "introduction": "Jesus gathers his apostles for the Passover meal before his death. Listen to what he says as he shares the bread and cup.",
    "question": "What does Jesus ask his friends to do in his memory?"
  },
  "sacrament-of-reconciliation": {
    "reference": "John 20:19–23",
    "introduction": "The risen Jesus comes to frightened disciples. Listen for his greeting and the mission of forgiveness he entrusts to them.",
    "question": "What does Jesus offer his friends when they are afraid?"
  },
  "sacrament-of-anointing": {
    "reference": "James 5:13–16",
    "introduction": "James teaches a Christian community to care for people who suffer or are sick. Listen for prayer, anointing, and support from others.",
    "question": "How does the community help someone who is sick?"
  },
  "sacrament-of-holy-orders": {
    "reference": "2 Timothy 1:6–10",
    "introduction": "Paul encourages Timothy to use the gift he received through the laying on of hands. Listen for the courage and love God gives for service.",
    "question": "What kind of strength does God give Timothy?",
    "longer": {
      "id": "family-reading",
      "label": "2 Timothy 1:1–14",
      "url": "https://bible.usccb.org/bible/2timothy/1",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "sacrament-of-matrimony": {
    "reference": "Mark 10:6–9",
    "introduction": "Jesus answers a question about marriage by looking back to God’s work of creation. Listen for how he describes husband and wife belonging together.",
    "question": "What do Jesus’ words tell us about a couple’s promise?",
    "longer": {
      "id": "family-reading",
      "label": "Ephesians 5:25–32",
      "url": "https://bible.usccb.org/bible/ephesians/5",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "new-life-in-christ": {
    "reference": "Ephesians 2:4–10",
    "introduction": "Paul reminds Christians that God loved them before they could earn anything. Listen for the gift he gives and the good work that follows.",
    "question": "What good thing could we do in response to God’s love?"
  },
  "faith-works-and-repentance": {
    "reference": "James 2:14–18",
    "introduction": "James asks whether words alone help a person who needs food or clothing. Listen for how faith becomes visible in care for others.",
    "question": "What could we do for someone who needs help?",
    "longer": {
      "id": "family-reading",
      "label": "Luke 19:1–10",
      "url": "https://bible.usccb.org/bible/luke/19",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "baptism-and-sanctifying-grace": {
    "reference": "Romans 6:3–6",
    "introduction": "Listen as Paul describes Baptism as sharing in Jesus’ death and rising to new life. God invites baptized people to live that gift each day.",
    "question": "What might walking in new life look like at home?",
    "longer": {
      "id": "family-reading",
      "label": "Romans 6:3–11",
      "url": "https://bible.usccb.org/bible/romans/6",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "prayer-faith-hope-and-love": {
    "reference": "Matthew 6:5–10",
    "introduction": "Jesus teaches his disciples how to pray. Listen for how he invites us to speak to the Father.",
    "question": "What would you like to tell our Father today?",
    "longer": {
      "id": "family-reading",
      "label": "Matthew 6:5–15",
      "url": "https://bible.usccb.org/bible/matthew/6",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "following-christ-in-daily-choices": {
    "reference": "Matthew 22:34–40",
    "introduction": "Jesus is asked which commandment matters most. Listen for the two kinds of love he brings together.",
    "question": "How could we show love for God and a neighbor today?",
    "longer": {
      "id": "family-reading",
      "label": "Luke 10:25–37",
      "url": "https://bible.usccb.org/bible/luke/10",
      "note": "Selected family reading from the Douay-Rheims Bible."
    }
  },
  "beatitude-poor-in-spirit": {
    "reference": "Matthew 5:1–5",
    "introduction": "Jesus begins teaching his disciples about the Kingdom. Listen for whom he calls blessed and what he promises.",
    "question": "What does Jesus promise to the poor in spirit?",
    "longer": {
      "id": "longer-reading",
      "label": "Luke 18:9–14",
      "url": "https://bible.usccb.org/bible/luke/18",
      "note": "Optional reading for the family."
    }
  },
  "beatitude-those-who-mourn": {
    "reference": "John 11:32–36",
    "introduction": "Mary has lost her brother Lazarus. Listen to how Jesus responds when he sees her tears.",
    "question": "What does Jesus do when his friends are sad?",
    "longer": {
      "id": "longer-reading",
      "label": "John 11:32–44",
      "url": "https://bible.usccb.org/bible/john/11",
      "note": "Optional reading for the family."
    }
  },
  "beatitude-the-meek": {
    "reference": "Matthew 11:28–30",
    "introduction": "Jesus speaks to people who are tired and burdened. Listen to what he offers and what he says about his heart.",
    "question": "What does Jesus invite us to learn from him?",
    "longer": {
      "id": "longer-reading",
      "label": "Matthew 5:1–12",
      "url": "https://bible.usccb.org/bible/matthew/5",
      "note": "Optional reading for the family."
    }
  },
  "beatitude-hunger-for-righteousness": {
    "reference": "Matthew 5:3–8",
    "introduction": "Listen to the different people Jesus calls blessed. Notice the promise to those who hunger and thirst for justice.",
    "question": "What good thing could our family long for and work toward?",
    "longer": {
      "id": "longer-reading",
      "label": "Matthew 6:25–34",
      "url": "https://bible.usccb.org/bible/matthew/6",
      "note": "Optional reading for the family."
    }
  },
  "beatitude-the-merciful": {
    "reference": "Luke 10:33–37",
    "introduction": "A wounded traveler has been left by the road. Listen to how the Samaritan responds when he sees him.",
    "question": "What is one thing the Samaritan does to help?",
    "longer": {
      "id": "longer-reading",
      "label": "Luke 10:25–37",
      "url": "https://bible.usccb.org/bible/luke/10",
      "note": "Optional reading for the family."
    }
  },
  "beatitude-pure-in-heart": {
    "reference": "Matthew 6:19–23",
    "introduction": "Jesus asks us to think about our treasure. Listen for what he says about our hearts.",
    "question": "What is something worth loving more than possessions?",
    "longer": {
      "id": "longer-reading",
      "label": "Matthew 5:3–12",
      "url": "https://bible.usccb.org/bible/matthew/5",
      "note": "Optional reading for the family."
    }
  },
  "beatitude-peacemakers": {
    "reference": "Matthew 5:23–26",
    "introduction": "Jesus is teaching about relationships and worship. Listen for what he asks someone to do when a relationship needs repair.",
    "question": "What is one step we can take to make things right?",
    "longer": {
      "id": "longer-reading",
      "label": "Romans 12:14–21",
      "url": "https://bible.usccb.org/bible/romans/12",
      "note": "Optional reading for the family."
    }
  },
  "beatitude-persecuted-for-righteousness": {
    "reference": "Matthew 5:10–12",
    "introduction": "Jesus speaks to people who face mistreatment because they follow him. Listen for the hope he promises.",
    "question": "What promise can help us when following Jesus is difficult?",
    "longer": {
      "id": "longer-reading",
      "label": "Matthew 5:1–12",
      "url": "https://bible.usccb.org/bible/matthew/5",
      "note": "Optional reading for the family."
    }
  },
  "lift-up-your-hearts": {
    "reference": "Luke 22:14–20",
    "introduction": "Listen for what Jesus does before he shares the cup and the bread at the Last Supper.",
    "question": "What does Jesus do before he gives the bread to his friends?"
  },
  "sanctus": {
    "reference": "Mark 11:7–10",
    "introduction": "Picture Jesus riding into Jerusalem. Listen for what the crowd does and calls out to welcome him.",
    "question": "What did people do to welcome Jesus on the road?"
  },
  "mystery-of-faith": {
    "reference": "1 Corinthians 11:23–26",
    "introduction": "Paul tells the Church what he received about the Last Supper. Listen for what he says we proclaim when we share in the Eucharist.",
    "question": "What does Paul say we proclaim until Jesus comes?"
  },
  "great-amen": {
    "reference": "2 Corinthians 1:18–22",
    "introduction": "Paul says that God keeps his promises in Jesus. Listen for the word we say to God through Jesus.",
    "question": "What word does Paul say we can say through Jesus?"
  },
  "lord-i-am-not-worthy": {
    "reference": "Matthew 8:5–13",
    "introduction": "A Roman officer asks Jesus to help his servant. Listen for what he trusts Jesus can do without coming into his home.",
    "question": "What did the centurion trust Jesus could do just by speaking?"
  }
};
