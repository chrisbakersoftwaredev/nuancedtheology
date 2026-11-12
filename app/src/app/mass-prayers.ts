const missal = 'https://liturgyoffice.org/Missal/Text/MCAL.pdf';

export const massPrayerQuery = {from: 'prayers-at-mass'};
export const massPrayersPath = '/know-the-mass/prayers-at-mass';

interface MassPrayer {
  title: string;
  slug: string;
  wordsUrl: string;
  wordsLabel?: string;
  alternate?: {label: string; url: string};
  listen: string;
  question: string;
  text?: string;
}

export const massPrayers: readonly MassPrayer[] = [
  {title:'Penitential Act', slug:'penitential-act', wordsUrl:missal + '#page=1', listen:'Lord, have mercy.', question:'What is one thing we could ask God to help us put right?'},
  {title:'Gloria', slug:'gloria-and-collect', wordsUrl:missal + '#page=1', listen:'Glory to God in the highest.', question:'What could we praise God for today?'},
  {title:'Gospel Acclamation', slug:'standing-for-the-gospel', wordsUrl:'https://bible.usccb.org/readings/calendar', wordsLabel:'Read the acclamation for your Mass date', listen:'Alleluia, or the verse before the Gospel in Lent.', question:'What did the verse help you notice about Jesus before the Gospel?'},
  {title:'Nicene Creed', slug:'nicene-creed', wordsUrl:'https://www.usccb.org/beliefs-and-teachings/what-we-believe', alternate:{label:'Read the Apostles’ Creed', url:missal + '#page=2'}, listen:'I believe in one God.', question:'Which line names something God has done for us?'},
  {title:'Lift up your hearts', slug:'lift-up-your-hearts', wordsUrl:missal + '#page=3', listen:'Lift up your hearts.', question:'What is one gift you could thank God for when you hear this invitation?'},
  {title:'Sanctus (Holy, Holy, Holy)', slug:'sanctus', wordsUrl:missal + '#page=3', listen:'Hosanna in the highest.', question:'What did the people put on the road as they welcomed Jesus?'},
  {title:'The Mystery of Faith', slug:'mystery-of-faith', wordsUrl:missal + '#page=3', listen:'The mystery of faith.', question:'What did the response you heard say about Jesus?'},
  {title:'The Great Amen', slug:'great-amen', wordsUrl:missal + '#page=3', text:'Amen.', listen:'Amen, after the priest’s closing praise.', question:'What part of the Eucharistic Prayer would you like to say yes to today?'},
  {title:'The Our Father', slug:'prayer-peace-and-lamb-of-god', wordsUrl:missal + '#page=3', text:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil.', listen:'Our Father, who art in heaven.', question:'What is one thing we ask our Father for in this prayer?'},
  {title:'Agnus Dei (Lamb of God)', slug:'prayer-peace-and-lamb-of-god', wordsUrl:missal + '#page=4', text:'Agnus Dei, qui tollis peccata mundi, miserere nobis.\nAgnus Dei, qui tollis peccata mundi, miserere nobis.\nAgnus Dei, qui tollis peccata mundi, dona nobis pacem.', wordsLabel:'Read the complete English words', listen:'Agnus Dei or Lamb of God.', question:'What does the chant ask Jesus to give us in its last line?'},
  {title:'Lord, I am not worthy', slug:'lord-i-am-not-worthy', wordsUrl:missal + '#page=4', listen:'Lord, I am not worthy.', question:'What did the centurion trust Jesus to do with a word?'},
];

