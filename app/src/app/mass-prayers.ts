const missal = 'https://liturgyoffice.org/Missal/Text/MCAL.pdf';

export const massPrayerQuery = {from: 'prayers-at-mass'};
export const massPrayersPath = '/know-the-mass/prayers-at-mass';

export interface MassPrayer {
  title: string;
  slug: string;
  wordsUrl: string;
  wordsLabel?: string;
  alternate?: {label: string; url: string};
  listen: string;
  question: string;
  wordsContext: string;
  text?: string;
  speaker?: string;
  language?: string;
}

export const massPrayers: readonly MassPrayer[] = [
  {title:'Penitential Act', slug:'penitential-act', wordsUrl:missal + '#page=1', wordsContext:"The priest invites everyone to pray. The source shows all three approved forms and the Kyrie when it follows separately.", listen:'Lord, have mercy.', question:'What is one thing we could ask God to help us put right?'},
  {title:'Gloria', slug:'gloria-and-collect', wordsUrl:missal + '#page=1', wordsContext:"The priest, cantor, or choir may begin. The hymn may be sung by everyone, alternately with the choir, or by the choir alone.", listen:'Glory to God in the highest.', question:'What could we praise God for today?'},
  {title:'Gospel Acclamation', slug:'standing-for-the-gospel', wordsUrl:'https://bible.usccb.org/readings/calendar', wordsLabel:'Read the acclamation for your Mass date', wordsContext:"The cantor or choir leads the acclamation. Choose your Mass date and look for Alleluia or Verse Before the Gospel.", listen:'Alleluia, or the verse before the Gospel in Lent.', question:'What did the verse help you notice about Jesus before the Gospel?'},
  {title:'Nicene Creed', slug:'nicene-creed', wordsUrl:'https://www.usccb.org/beliefs-and-teachings/what-we-believe', alternate:{label:'Read the Apostles’ Creed', url:missal + '#page=2'}, wordsContext:"The priest and the people profess the Creed together. Both approved Creeds are linked below.", listen:'I believe in one God.', question:'Which line names something God has done for us?'},
  {title:'Lift up your hearts', slug:'lift-up-your-hearts', wordsUrl:missal + '#page=3', wordsContext:"The priest speaks or sings the opening dialogue of the Eucharistic Prayer, and the people answer each invitation.", listen:'Lift up your hearts.', question:'What is one gift you could thank God for when you hear this invitation?'},
  {title:'Sanctus (Holy, Holy, Holy)', slug:'sanctus', wordsUrl:missal + '#page=3', wordsContext:"The priest and the people join in the Sanctus at the end of the Preface.", listen:'Hosanna in the highest.', question:'What did the people put on the road as they welcomed Jesus?'},
  {title:'The Mystery of Faith', slug:'mystery-of-faith', wordsUrl:'https://www.usccb.org/committees/divine-worship/policies/mass-settings-texts#:~:text=The%20mystery%20of%20faith', wordsLabel:'USCCB · All three Memorial Acclamations', wordsContext:"After the consecration, the priest gives the invitation and the people answer with one of the three approved Memorial Acclamations.", listen:'The mystery of faith.', question:'What did the response you heard say about Jesus?'},
  {title:'The Great Amen', slug:'great-amen', wordsUrl:missal + '#page=3', speaker:'People', text:'Amen.', wordsContext:"The priest says the closing prayer of praise to the Father. The people give the response below. The source includes the priest’s full prayer.", listen:'Amen, after the priest’s closing praise.', question:'What part of the Eucharistic Prayer would you like to say yes to today?'},
  {title:'The Our Father', slug:'prayer-peace-and-lamb-of-god', wordsUrl:missal + '#page=3', speaker:'Priest and people', text:'Our Father, who art in heaven,\nhallowed be thy name;\nthy kingdom come,\nthy will be done\non earth as it is in heaven.\nGive us this day our daily bread,\nand forgive us our trespasses,\nas we forgive those who trespass against us;\nand lead us not into temptation,\nbut deliver us from evil.', wordsContext:"After the priest’s invitation, the priest and the people pray together.", listen:'Our Father, who art in heaven.', question:'What is one thing we ask our Father for in this prayer?'},
  {title:'Agnus Dei (Lamb of God)', slug:'prayer-peace-and-lamb-of-god', wordsUrl:missal + '#page=4', speaker:'Choir or cantor and people · Latin', language:'la', text:'Agnus Dei, qui tollis peccata mundi, miserere nobis.\nAgnus Dei, qui tollis peccata mundi, miserere nobis.\nAgnus Dei, qui tollis peccata mundi, dona nobis pacem.', wordsLabel:'Read the complete English words', wordsContext:"The choir or cantor leads and the people respond. The final invocation asks for peace.", listen:'Agnus Dei or Lamb of God.', question:'What does the chant ask Jesus to give us in its last line?'},
  {title:'Lord, I am not worthy', slug:'lord-i-am-not-worthy', wordsUrl:missal + '#page=4', wordsContext:"The priest invites the people to Communion. Then the priest and the people say the response together.", listen:'Lord, I am not worthy.', question:'What did the centurion trust Jesus to do with a word?'},
];

