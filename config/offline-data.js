export const LESSON_LIST = [
  {
    id: 1,
    lessonTitle: 'Introduction to Shāradā Script',
  },
  {
    id: 2,
    lessonTitle: 'Shāradā Vowels',
  },
  {
    id: 3,
    lessonTitle: 'Shāradā Consonants',
  },
  {
    id: 4,
    lessonTitle: 'Shāradā Numbers',
  },
  {
    id: 5,
    lessonTitle: 'Special Matra and conjuncts',
  },
  {
    id: 6,
    lessonTitle: 'Conjunct Forms',
  },
  {
    id: 7,
    lessonTitle: 'Typical Conjunct Forms',
  },
  {
    id: 8,
    lessonTitle: 'Conjunct Forms Examples',
  },
];

export const LINKS_DATA = [
  {
    linkText: "Karan's GitHub App",
    linkUrl: 'https://karankraina.github.io/',
  },
  {
    linkText: 'Matrika June Edition',
    linkUrl: 'https://karankraina.github.io/',
  },
  {
    linkText: 'Link to Document 1',
    linkUrl: 'https://karankraina.github.io/',
  },
  {
    linkText: 'Link to Document 2',
    linkUrl: 'https://karankraina.github.io/',
  },
  {
    linkText: 'Android Keyboard Link',
    linkUrl: 'https://karankraina.github.io/',
  },
  {
    linkText: "Karan's GitHub App",
    linkUrl: 'https://karankraina.github.io/',
  },
  {
    linkText: 'Matrika June Edition',
    linkUrl: 'https://karankraina.github.io/',
  },
  {
    linkText: 'Link to Document 1',
    linkUrl: 'https://karankraina.github.io/',
  },
  {
    linkText: 'Link to Document 2',
    linkUrl: 'https://karankraina.github.io/',
  },
  {
    linkText: 'Android Keyboard Link',
    linkUrl: 'https://karankraina.github.io/',
  },
];
const generateListSection = ({ title, listItems }) => `
  <p><b>${title}</b></p>
    <ol>
    ${listItems.map(text => `<li>${text}</li>`).join('')}
    </ol>
  `;
export const LESSON_DATA = [
  {
    lessonId: 1,
    lessonOfflineData: `
    <h1>Welcome to this Online Shāradā Learning Course</h1>
    <img src="https://images.ctfassets.net/1nrffoq757p2/7ApzROHdrubFaUGMlp0ip1/724c969c1431d1d1ec4c2e62cf87b263/C__Users_KARANR_1_AppData_Local_Temp_upload_12cdb41b1c57d1494dda530594ee880c" />
    <h2>Introduction to Shāradā Script !</h2>
    <p>Kashmir the Land of Shāradā considered as Sarvajna Peetha (the seat of all Knowledge) has been always the land of Rishis. As Kashmir has been the land of great  Scholars in the various fields of knowledge. It has even be noted by Hieun Tsnag during his visit in 7th century AD that Sanskrit is been spoken very fluently even by women and Childen of Kashmir like their native language. People used only Shāradā as the main script to write Sanskrit. </p>
    <p>Shāradā script is an writing system based on  Brahmic family of scripts and was  well flourished even in Himachal Pradesh and Punjab  in 13th century AD. Śāradā texts have been widely found in Afghanistan; one of them was engraved on a marble statue of the Indian elephant god Ganesh that was found near Gardez. Another was inscribed on the large Uma Maheshvara from Tepe Skandar, north of Kabul. The Śāradā inscriptions all seem to date to the 8th century CE</p>
    <p>Between 750 and 1000 A.D., the Shahi’s issued silver coins to provide currency for eastern Afghanistan and Gandhara. Most of the coins have an obverse legend in either Spalpati Deva or Samanta Deva, which are Śāradā scripts.Even now the scripts which are well known like Gurumukhi , Takri are derived from Shāradā script.</p>
    <p>New carbon dating research commissioned by the University of Oxford’s Bodleian Libraries into the ancient Indian Bakhshali manuscript, held at the Bodleian, has revealed it to be hundreds of years older than initially thought, making it the world’s oldest recorded origin of the zero symbol that we use today. ‘Determining the date of the Bakhshali manuscript is of vital importance to the history of mathematics and the study of early South Asian culture and these surprising research results testify to the subcontinent’s rich and longstanding scientific tradition. It is to be noted that The Bakhshali manuscript uses an early stage of the Shāradā script.</p>
    <p>Alberuni in his writngs mentioned it as “Sidha Matrik”  since the Alphabets in Shāradā always begins with “; ओम् स्वस्ति सिद्धम्”. (𑆏𑆩𑇀 𑆱𑇀𑆮𑆱𑇀𑆠𑆴 𑆱𑆴𑆢𑇀𑆣𑆩𑇀)</p>
    <p>Birth record and horoscopes etc. were written in this script. During the ceremony of Yajnopavita (Mekhala) the Kulaguru (the family priest) teaches the celibate (Brahmachari) alphabet of Siddha Matrika (old form of Shāradā) on the wooden piece, this tradition is prevalent even today. The Kashmiri translation of Bible was published in 1822 A.D. in the Shāradā script. Then its second edition appeared in Nastalik. The will of saint Maqdoom Sahib written in Shāradā and Persian scripts is enhancing the importance of S.P.S. Museum, Srinagar. It is believed that there is a good haul of Shāradā manuscripts in several places in the country like Nalanda, Hoshiarpur, Madurai, Chennai and Mysore, and in Nepal.  George Buhler, it may be recalled had collected Sanskrit manuscripts from “Kashmir, Rajputana and Central India”, and published his report in 1877.</p>
    
    
    <p><b>A number of Indian and Foreign scholars have done considerable work on Shāradā script:</b></p>
    <ol>
    <li>George Buhler in his memorable work, “Indian Palaeography”</li>
    <li>Leeche in his “Grammar of the Cashmere Language”</li>
    <li>Sir George Grierson in his paper in the “Journal of the Royal Asiatic Society”  and also in his note in the “Linguistic Survey of India”</li>
    <li>Marcus Aurel Stein (Cataloging of Raghunath Temple Library MSS).</li>
    <li>Jean Philippe Vogel’s ‘Antiquities of Chamba State, Vol 1, Calcutta’ (Shāradā Characters).</li>
    <li>Bhushan Kumar Kaul Deambi’s ‘Corpus of Shāradā Inscriptions, Delhi.</li>
    <li>Shrinath Tikoo’s ‘Shāradā Lipi Dipika (Hindi), Rashtriya Sanskrit Sansthan, New Delhi.</li>
    <li>Walter Slaje’s ‘Shāradā Primer in German’.</li>
    <li>Micheal Witzel’s papers on ‘Kashmiri Manuscripts and Pronunciation’ and ‘The Brahmins of Kashmir’</li>
    <li>Takao Hayashi’s ‘The Bakshali Manuscript’, Groningen.</li>
    <li>Bhushan Kumar Kaul Deambi’s ‘Shāradā and Takari Alphabets’, IGNCA, Delhi</li>
    </ol>


    <p><b>How do we contribute:</b></p>
    <ol>
    <li>Join the Shaarda learning sessions conducted by the team</li>
    <li>Practice only one alphabet every day and make it a practice in each and Every house</li>
    <li>Make it as a ritual that when a child is sent to school , he writes first SHĀRADĀ only.Shāradā being the mother of knowledge will bless your child. There are many communities in India who have similar ritual</li>
    <li>Whatever you have learnt share it into all social networks to motivate others',
    'Send greetings like Wohorwod Mubarak etc only in Shāradā.</li>
    <li>Celebrate one day as Shāradā day and motive is to only have debates , discussions related to Shāradā on that day</li>
    <li>Publish articles, facts about this lipi in any publicartions known to you',
    'Communicate with each other in Shāradā when are learnt. Work towards introducing it in our community schools.</li>
    <li>Publish articles, facts about this lipi in any publicartions known to you',
    'Communicate with each other in Shāradā when are learnt. Work towards introducing it in our community schools.</li>
    <li>Encourage fellow members with rewards and recognisations for Shāradā</li>
    <li>Have written and decorated Shāradā  alphabets in every drawing rooms so that you can proudly say to outside guest that THIS IS MY SCRIPT.</li>
    <li>Publish Short stories in every community magazine which is published in various places globally</li>
    <li>Days will not be far when we will have a Shāradā magazine</li>
    </ol>

    <p><b>Few contributions of the team so far are:</b></p>
    <ol>
    <li>Introduced Shāradā Lipi to 600 Students so far</li>
    <li>95 students are part of Core team now who have gained an expertise as Shāradā teachers</li>
    <li>Online training materials in form of YouTube vidoes',
    'Developed Android Keyboard</li>
    <li>Developed Android app for Shaarda learning</li>
    <li>Workshops and seminars related to Shaarda script.</li>
    </ol>
    <p>The sincere attempt is made to bring the script to all community members and since it is based on devnagri and hence is not difficult to learn.</p>
    <h1>May Maa Shāradā show us the right path and we with dedicated efforts revive our Identity soon.</h1>
    `,
  },
  {
    lessonId: 2,
    lessonOfflineData: `
    <h1>Sharda Vowels</h1>
    <img src="https://images.ctfassets.net/1nrffoq757p2/78ZpOHVBlvdRg3t4AyOLEk/9c6aecac6efbd4134ff303cdeb7dad85/C__Users_Karan_AppData_Local_Temp_upload_4a155254fbc4388174c2a2eab6a8272f" />
    `,
  },
  {
    lessonId: 3,
    lessonOfflineData: `
    <h1>Sharda Consonants</h1>
    <img src="https://images.ctfassets.net/1nrffoq757p2/4xdBM7Wg29Jm1Qp4lyFDGa/74e16a3936503272bd49c733923089ea/C__Users_Karan_AppData_Local_Temp_upload_015c528b33c57eebefc19f46015d00ef" />
    <br>
    <h1>Very fine differences in few consonants </h1>
    <img src="https://images.ctfassets.net/1nrffoq757p2/6KIPlpjsJ3y2weNUPpZwYC/64a39fd3f48209934520345e6f4cd130/C__Users_Karan_AppData_Local_Temp_upload_effdfd448a39459fc098a9e586559649" />

    <img src="https://images.ctfassets.net/1nrffoq757p2/69zezQOT5lpeQ3vZPEsCTz/53c72548ea8817929d8a510b556ebdb9/C__Users_Karan_AppData_Local_Temp_upload_2963be015ee40d23cb189623419fc024" />

    <img src="https://images.ctfassets.net/1nrffoq757p2/pvlTOAv2YuimGE7KEK9jH/1e5c1ffb15597e1d4e9798b9bd0b1bb3/C__Users_Karan_AppData_Local_Temp_upload_ff36b0fad1ffba65bebba392c69f9ea0" />

    <img src="https://images.ctfassets.net/1nrffoq757p2/6Yy1xz53DW44IoWW4R6UUS/525d67974d2f7f82a84689a9892cad12/C__Users_Karan_AppData_Local_Temp_upload_263118288fcedaa9a27324a892e0361c" />
    `,
  },
  {
    lessonId: 4,
    lessonOfflineData: `
    <h1>Sharda Numerals</h1>
    <img src="https://images.ctfassets.net/1nrffoq757p2/5nScEkI2tI0CDrwvzRQHqf/fadc8fb24f52f18afd9d0379669b90a4/C__Users_Karan_AppData_Local_Temp_upload_d5caf7d76b02b718090f65094e85b19d"  />
    `,
  },
  {
    lessonId: 5,
    lessonOfflineData: `
    <h1>Special Matra and conjuncts</h1>
    <img src="https://images.ctfassets.net/1nrffoq757p2/1hZpU9poTPCdsrPT0ZKBu4/2ef243c41431e95458548c35652e3c4b/C__Users_Karan_AppData_Local_Temp_upload_7b230fb8d7b9586b0d0eb5fba1689c2c"  />
    <img src="https://images.ctfassets.net/1nrffoq757p2/JEi3b87nKmE0EDuzjLCCB/e8cedff5909640d64c999e5e44089d7b/C__Users_Karan_AppData_Local_Temp_upload_ae79a84263c1eee806b4dd40468f42e6"  />

    <h1>Matra Rule 1</h1>
    <img src="https://images.ctfassets.net/1nrffoq757p2/2Uaq7BicWe7p5utiiFQYFf/ba9bde98df996fc0aee2adea1933c9d4/C__Users_Karan_AppData_Local_Temp_upload_cee5374fd4b58c66007f0c003af32560"  />
    <img src="https://images.ctfassets.net/1nrffoq757p2/lYt95YeGZI84dvWBzDFjm/c9b5144053c7270663fba403c9de3cf6/C__Users_Karan_AppData_Local_Temp_upload_25372976b8bab09b6b89ddf2677d270e"  />

    <h1>Matra Rule 2</h1>
    <img src="https://images.ctfassets.net/1nrffoq757p2/7ywla12vj3hsBuD3ydJMjr/488d7575660e4ce8f44dc50ef09784f2/C__Users_Karan_AppData_Local_Temp_upload_a959a4ab46821601b48c3db9081e5d72"  />

    <h1>Matra Rule 3</h1>
    <img src="https://images.ctfassets.net/1nrffoq757p2/IlNiVqrRvFKea78P3gr0Q/44c245b24e5d14042014e4d7b931f14a/C__Users_Karan_AppData_Local_Temp_upload_baddf7f3d6be881c66e49ad6e602cb2f"  />

    <h1>Matra Rule 4A</h1>
    <img src="https://images.ctfassets.net/1nrffoq757p2/6n8rhPvc7CZXsLxxDi7iQr/c1382c359461f4495499afca7eaa0d2e/C__Users_Karan_AppData_Local_Temp_upload_490c3f9f866176135d707ca99840a0e4"  />

    <h1>Matra Rule 4B</h1>
    <img src="https://images.ctfassets.net/1nrffoq757p2/5vIvCseAdUOuHGK0xVHgIi/3147fb7ab0871def0d9bf2cff5eefc6f/C__Users_Karan_AppData_Local_Temp_upload_01b1afb20f8d6cd68ee89130193a8ff8"  />

    <h1>Matra Rule 5</h1>
    <img src="https://images.ctfassets.net/1nrffoq757p2/6Hxh3x7bozwe3teXcDE2Im/030483049b821b886c60990919669fb8/C__Users_Karan_AppData_Local_Temp_upload_d46cf49f69d3a8a6725dcbc59771559f"  />
    `,
  },
  {
    lessonId: 6,
    lessonOfflineData: `
    <h1>Conjunct Forms</h1>
    <hr>

    <h2>Devnagri ( ् ) = Sharda ( 𑇀 )</h2>

    <p>In sharda, while forming conjunct consonants, the first member is put into dative, governed by tal (below).</p>

    <h1>Hindi</h1><hr><h2>स + ् + म = स्म</h2>

    <h1>Sharda</h1><hr><h2>𑆱 + 𑇀 + 𑆩 = 𑆱𑇀𑆩</h2>
    <br>

    <h2>Conjuncts Rule 1</h2>
    <p>While writing conjuncts (संय्क्त) letters in Sharda, the first letter is written on the top and the subsequent ones sequentially below. For example, in कश्मीर, श will be written on top and म below it. </p>
    <h3 style="color: blue">The general rule for writing conjuncts is explained here. Later, a number of special rules will be introduced.</h3>

    <img src="https://images.ctfassets.net/1nrffoq757p2/E95yAMKonPG8C1E7XR7Ws/567b5ae2eb8b23101d90bbf181f47bc7/C__Users_Karan_AppData_Local_Temp_upload_8d41a2fd5826258fe6b1efacc3b4c137"  />

    <img src="https://images.ctfassets.net/1nrffoq757p2/77CV82KwWhuihp7cHDRRkf/8382c596b12d389401521ae5bbae1538/C__Users_Karan_AppData_Local_Temp_upload_2a7fee5d11176b240a573e18f84352fa"  />


    
    `,
  }
];
export const fetchLessonOffline = _lessonId =>
  LESSON_DATA.find(({ lessonId }) => lessonId === _lessonId);
