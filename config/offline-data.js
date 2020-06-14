export const LESSON_LIST = [
  {
    id: 1,
    lessonTitle: 'Introduction to Sharda Script',
  },
  {
    id: 2,
    lessonTitle: 'Sharda Vowels',
  },
  {
    id: 3,
    lessonTitle: 'Sharda Consonants',
  },
  {
    id: 4,
    lessonTitle: 'Sharda Numbers',
  },
  {
    id: 5,
    lessonTitle: 'Consonants followed by vowels',
  },
  {
    id: 6,
    lessonTitle: 'Exceptions to previous lesson',
  },
  {
    id: 7,
    lessonTitle: 'Non-initials (ु) and (ू)',
  },
  {
    id: 8,
    lessonTitle: 'The Akshara (रु) and (रू)',
  },
  {
    id: 9,
    lessonTitle: 'Conjunct Forms',
  },
  {
    id: 10,
    lessonTitle: 'Typical Conjunct Forms',
  },
  {
    id: 11,
    lessonTitle: 'Conjunct Forms Examples',
  },
];
const generateListSection = ({title, listItems}) => `
  <p><b>${title}</b></p>
    <ol>
    ${listItems.map(text => `<li>${text}</li>`).join('')}
    </ol>
  `;
export const LESSON_DATA = [
  {
    lessonId: 1,
    lessonOfflineData: `
    <h1>Welcome to this Online Sharda Learning Course</h1>
    <img src="https://images.ctfassets.net/1nrffoq757p2/7ApzROHdrubFaUGMlp0ip1/724c969c1431d1d1ec4c2e62cf87b263/C__Users_KARANR_1_AppData_Local_Temp_upload_12cdb41b1c57d1494dda530594ee880c" />
    <h2>Introduction to Sharda Script !</h2>
    <p>Kashmir the Land of Shāradā considered as Sarvajna Peetha (the seat of all Knowledge) has been always the land of Rishis. As Kashmir has been the land of great  Scholars in the various fields of knowledge. It has even be noted by Hieun Tsnag during his visit in 7th century AD that Sanskrit is been spoken very fluently even by women and Childen of Kashmir like their native language. People used only Shāradā as the main script to write Sanskrit. </p>
    <p>Sharada script is an writing system based on  Brahmic family of scripts and was  well flourished even in Himachal Pradesh and Punjab  in 13th century AD. Śāradā texts have been widely found in Afghanistan; one of them was engraved on a marble statue of the Indian elephant god Ganesh that was found near Gardez. Another was inscribed on the large Uma Maheshvara from Tepe Skandar, north of Kabul. The Śāradā inscriptions all seem to date to the 8th century CE</p>
    <p>Between 750 and 1000 A.D., the Shahi’s issued silver coins to provide currency for eastern Afghanistan and Gandhara. Most of the coins have an obverse legend in either Spalpati Deva or Samanta Deva, which are Śāradā scripts.Even now the scripts which are well known like Gurumukhi , Takri are derived from Shāradā script.</p>
    <p>New carbon dating research commissioned by the University of Oxford’s Bodleian Libraries into the ancient Indian Bakhshali manuscript, held at the Bodleian, has revealed it to be hundreds of years older than initially thought, making it the world’s oldest recorded origin of the zero symbol that we use today. ‘Determining the date of the Bakhshali manuscript is of vital importance to the history of mathematics and the study of early South Asian culture and these surprising research results testify to the subcontinent’s rich and longstanding scientific tradition. It is to be noted that The Bakhshali manuscript uses an early stage of the Sharada script.</p>
    <p>Alberuni in his writngs mentioned it as “Sidha Matrik”  since the Alphabets in Shāradā always begins with “; ओम् स्वस्ति सिद्धम्”. (𑆏𑆩𑇀 𑆱𑇀𑆮𑆱𑇀𑆠𑆴 𑆱𑆴𑆢𑇀𑆣𑆩𑇀)</p>
    <p>Birth record and horoscopes etc. were written in this script. During the ceremony of Yajnopavita (Mekhala) the Kulaguru (the family priest) teaches the celibate (Brahmachari) alphabet of Siddha Matrika (old form of Sharda) on the wooden piece, this tradition is prevalent even today. The Kashmiri translation of Bible was published in 1822 A.D. in the Sharda script. Then its second edition appeared in Nastalik. The will of saint Maqdoom Sahib written in Sharda and Persian scripts is enhancing the importance of S.P.S. Museum, Srinagar. It is believed that there is a good haul of Sharada manuscripts in several places in the country like Nalanda, Hoshiarpur, Madurai, Chennai and Mysore, and in Nepal.  George Buhler, it may be recalled had collected Sanskrit manuscripts from “Kashmir, Rajputana and Central India”, and published his report in 1877.</p>
    <p><b>A number of Indian and Foreign scholars have done considerable work on SHARDA script:</b></p>
    <ol>
    <li>George Buhler in his memorable work, “Indian Palaeography”</li>
    <li>Leeche in his “Grammar of the Cashmere Language”</li>
    <li>Sir George Grierson in his paper in the “Journal of the Royal Asiatic Society”  and also in his note in the “Linguistic Survey of India”</li>
    <li>Marcus Aurel Stein (Cataloging of Raghunath Temple Library MSS).</li>
    <li>Jean Philippe Vogel’s ‘Antiquities of Chamba State, Vol 1, Calcutta’ (Sharada Characters).</li>
    <li>Bhushan Kumar Kaul Deambi’s ‘Corpus of Sharada Inscriptions, Delhi.</li>
    <li>Shrinath Tikoo’s ‘Sharada Lipi Dipika (Hindi), Rashtriya Sanskrit Sansthan, New Delhi.</li>
    <li>Walter Slaje’s ‘Sharada Primer in German’.</li>
    <li>Micheal Witzel’s papers on ‘Kashmiri Manuscripts and Pronunciation’ and ‘The Brahmins of Kashmir’</li>
    <li>Takao Hayashi’s ‘The Bakshali Manuscript’, Groningen.</li>
    <li>Bhushan Kumar Kaul Deambi’s ‘Sharada and Takari Alphabets’, IGNCA, Delhi</li>
    </ol>
    ${generateListSection({
      title: 'How do we contribute:',
      listItems: [
        'Join the Shaarda learning sessions conducted by the team',
        'Practice only one alphabet every day and make it a practice in each and Every house',
        'Make it as a ritual that when a child is sent to school , he writes first SHĀRADĀ only.Shāradā being the mother of knowledge will bless your child. There are many communities in India who have similar ritual',
        'Whatever you have learnt share it into all social networks to motivate others',
        'Send greetings like Wohorwod Mubarak etc only in Shāradā.',
        'Celebrate one day as Shāradā day and motive is to only have debates , discussions related to Shāradā on that day',
        'Publish articles, facts about this lipi in any publicartions known to you',
        'Communicate with each other in Shāradā when are learnt. Work towards introducing it in our community schools.',
        'Encourage fellow members with rewards and recognisations for Shāradā',
        'Have written and decorated Shāradā  alphabets in every drawing rooms so that you can proudly say to outside guest that THIS IS MY SCRIPT.',
        'Publish Short stories in every community magazine which is published in various places globally',
        'Days will not be far when we will have a Shāradā magazine',
      ]
    })}
    ${generateListSection({
      title: 'Few contributions of the team so far are:',
      listItems: [
        'Introduced Sharda Lipi to 600 Students so far',
        '95 students are part of Core team now who have gained an expertise as Sharda teachers',
        'Online training materials in form of YouTube vidoes',
        'Developed Android Keyboard',
        'Developed Android app for Shaarda learning',
        'Workshops and seminars related to Shaarda script.',
      ]
    })}
    <p>The sincere attempt is made to bring the script to all community members and since it is based on devnagri and hence is not difficult to learn.</p>
    <h1>May Maa Shāradā show us the right path and we with dedicated efforts revive our Identity soon.</h1>
    `,
  },
];
export const fetchLessonOffline = _lessonId =>
  LESSON_DATA.find(({ lessonId }) => lessonId === _lessonId);


