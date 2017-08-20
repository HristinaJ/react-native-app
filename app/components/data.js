import moment from 'moment';

// Hardcode days for the sake of simplicity
const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];
// Same for times
const times = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];

export const users = [
  {
    name: 'Sara Janeva',
    poster: 'http://i.imgur.com/3YroJ9p.jpg',
    place: 'St.Louis/Maine',
    days,
    times,
  },
  {
    name: 'Janey',
    poster: 'http://imgur.com/ap2LSr6.jpg',
    place: 'Arizona/Lakewood',
    days,
    times,
  },
  {
    name: 'Jackie',
    poster: 'https://i.imgur.com/VqUi1sw.jpg',
    place: 'Minneapolis/South Dakota',
    days,
    times,
  },
  {
    name: 'Lo and Behold Reveries of the Connected World',
    poster: 'https://i.imgur.com/s106X7S.jpg',
    place: 'St.Louis/Maine',
    days,
    times,
  },
  {
    name: '10 Cloverfield Lane',
    poster: 'https://i.imgur.com/kV2BVdH.jpg',
    place: 'Denver/Mississippi',
    days,
    times,
  },
  {
    name: 'Birth of a Nation',
    poster: 'https://i.imgur.com/a6HJj8S.jpg',
    place: 'Albany/Kentucky',
    days,
    times,
  },
  {
    name: 'De Palma',
    poster: 'https://i.imgur.com/oOIa73M.jpg',
    place: 'Denver/Mississippi',
    days,
    times,
  },
  {
    name: 'Doctor Strange',
    poster: 'https://i.imgur.com/kyHDVOk.jpg',
    place: 'Olathe/Oregon',
    days,
    times,
  },
  {
    name: 'Eddie the Eagle',
    poster: 'https://i.imgur.com/GNrdAuF.jpg',
    place: 'Oceanside/Maine',
    days,
    times,
  },
  {
    name: 'Pride and prejudice and zombies',
    poster: 'https://i.imgur.com/KhbG0Lw.jpg',
    place: 'St.Louis/Maine',
    days,
    times,
  },
  {
    name: 'Finding Dory',
    poster: 'https://i.imgur.com/BTexHYJ.jpg',
    place: 'Minneapolis/South Dakota',
    days,
    times,
  },
  {
    name: 'Green Room',
    poster: 'https://i.imgur.com/Q0Ysh7L.jpg',
    place: 'Tulsa/Arkansas',
    days,
    times,
  },
  {
    name: 'Kubo and the Two Strings',
    poster: 'https://i.imgur.com/uTFCKZc.jpg',
    place: 'Hayward/Oklahoma',
    days,
    times,
  },
  {
    name: 'In a Valley of Violence',
    poster: 'https://i.imgur.com/DTtJ62G.jpg',
    place: 'Elk Grove/Washington',
    days,
    times,
  },
  {
    name: 'O.J.: Made in America',
    poster: 'https://i.imgur.com/T8uc6x8.jpg',
    place: 'Orange/Nebraska',
    days,
    times,
  },
  {
    name: 'Rogue One: A Star Wars Story',
    poster: 'https://i.imgur.com/zOF2iYc.jpg',
    place: 'Surrey/New Hampshire"',
    days,
    times,
  },
  {
    name: 'Sing Street',
    poster: 'https://i.imgur.com/C3ExEb6.jpg',
    place: 'Allentown/Maine"',
    days,
    times,
  },
  {
    name: 'Zoolander 2',
    poster: 'https://i.imgur.com/ejlIijD.jpg',
    place: 'Arizona/Lakewood',
    days,
    times,
  },
];

// export default data = [
//   {
//     "gender": "male",
//     "name": {
//       "title": "mr",
//       "first": "Aleksandar",
//       "last": "Jordanov"
//     },
//     "location": {
//       "street": "1446 oak lawn ave",
//       "city": "lakewood",
//       "state": "arizona",
//       "postcode": 60649
//     },
//     "email": "aleksandar.jordanovv@gmail.com",
//     "login": {
//       "username": "aleksandar",
//       "password": "Ace123",
//       "salt": "r5u9JFIh",
//       "md5": "0e2f37c4b8baafacd62562857e9ecda5",
//       "sha1": "e39a1487902ecc6d54287080c26794504348a4de",
//       "sha256": "96220812c203891d9e7fc287e5fa73275ac8159d277ea088b051e80ec43abc99"
//     },
//     "registered": 1056249168,
//     "dob": 1216516975,
//     "phone": "(661)-131-8187",
//     "cell": "(408)-707-4720",
//     "id": {
//       "name": "SSN",
//       "value": "294-55-5909"
//     },
//     "picture": {
//       "large": "https://lh3.googleusercontent.com/-SuesVY-UfEM/VEBAhEvRq3I/AAAAAAAAAB8/eUSJosjm2mcHZq1X-gUEahOUz6IncITlwCEw/w139-h140-p/8491_656557891025831_1795667356_n.jpg",
//       "medium": "https://lh3.googleusercontent.com/-SuesVY-UfEM/VEBAhEvRq3I/AAAAAAAAAB8/eUSJosjm2mcHZq1X-gUEahOUz6IncITlwCEw/w139-h140-p/8491_656557891025831_1795667356_n.jpg",
//       "thumbnail": "https://lh3.googleusercontent.com/-SuesVY-UfEM/VEBAhEvRq3I/AAAAAAAAAB8/eUSJosjm2mcHZq1X-gUEahOUz6IncITlwCEw/w139-h140-p/8491_656557891025831_1795667356_n.jpg"
//     },
//     "nat": "Mk"
//   },
//   {
//     "gender": "male",
//     "name": {
//       "title": "mr",
//       "first": "mario",
//       "last": "walters"
//     },
//     "location": {
//       "street": "8467 preston rd",
//       "city": "allentown",
//       "state": "maine",
//       "postcode": 71108
//     },
//     "email": "mario.walters@example.com",
//     "login": {
//       "username": "tinyrabbit750",
//       "password": "detroit",
//       "salt": "KQ9v0DxF",
//       "md5": "720e03bf546c0e0d52c19cfb395bcb7b",
//       "sha1": "7e01f165e1da1bf643a2a990f3e07a31239712cb",
//       "sha256": "107e1e74180163911ffd09bbb40654e1ccafdcb9f7ed049c5f99b2a2491af631"
//     },
//     "registered": 1011808304,
//     "dob": 381810389,
//     "phone": "(612)-481-1846",
//     "cell": "(213)-966-9760",
//     "id": {
//       "name": "SSN",
//       "value": "501-03-3665"
//     },
//     "picture": {
//       "large": "https://randomuser.me/api/portraits/men/47.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/men/47.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/men/47.jpg"
//     },
//     "nat": "US"
//   },
//   {
//     "gender": "male",
//     "name": {
//       "title": "mr",
//       "first": "joseph",
//       "last": "lambert"
//     },
//     "location": {
//       "street": "2673 w pecan st",
//       "city": "surrey",
//       "state": "new hampshire",
//       "postcode": 12183
//     },
//     "email": "joseph.lambert@example.com",
//     "login": {
//       "username": "silverbear726",
//       "password": "jjjj",
//       "salt": "8vuMdl2K",
//       "md5": "a6c1d76d8ff9ef77c6d8b5731add9b23",
//       "sha1": "f74df6018024f6ddd78ddb9c3b16da6059b4862b",
//       "sha256": "2f2d0ade032e8ff8d9cba2b3355903a307ce0770c6d8668e0b99b0864cfdde79"
//     },
//     "registered": 950430259,
//     "dob": 1070529775,
//     "phone": "(481)-952-7376",
//     "cell": "(249)-044-4521",
//     "id": {
//       "name": "SSN",
//       "value": "842-08-3121"
//     },
//     "picture": {
//       "large": "https://randomuser.me/api/portraits/men/13.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/men/13.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/men/13.jpg"
//     },
//     "nat": "US"
//   },
//   {
//     "gender": "female",
//     "name": {
//       "title": "ms",
//       "first": "tina",
//       "last": "jennings"
//     },
//     "location": {
//       "street": "1123 blossom hill rd",
//       "city": "orange",
//       "state": "nebraska",
//       "postcode": 57791
//     },
//     "email": "tina.jennings@example.com",
//     "login": {
//       "username": "blackfish147",
//       "password": "redsox1",
//       "salt": "jtyqAijG",
//       "md5": "1522a6658018c094c783ffeebd883392",
//       "sha1": "fb31a98536ce48a38c4f9061e7a660cdce02b58a",
//       "sha256": "c4035df9680ccffb460c97b1a0038c64eaf8740131c84916ed2ccd0ddab94f27"
//     },
//     "registered": 1262864619,
//     "dob": 697657761,
//     "phone": "(938)-316-5866",
//     "cell": "(524)-445-7740",
//     "id": {
//       "name": "SSN",
//       "value": "657-93-8860"
//     },
//     "picture": {
//       "large": "https://randomuser.me/api/portraits/women/22.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/women/22.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/women/22.jpg"
//     },
//     "nat": "US"
//   },
//   {
//     "gender": "female",
//     "name": {
//       "title": "miss",
//       "first": "irma",
//       "last": "gibson"
//     },
//     "location": {
//       "street": "9233 karen dr",
//       "city": "elk grove",
//       "state": "washington",
//       "postcode": 93917
//     },
//     "email": "irma.gibson@example.com",
//     "login": {
//       "username": "crazyostrich373",
//       "password": "snapon",
//       "salt": "9wO9IWid",
//       "md5": "0dd18c4c0b857733a74ae763697f953a",
//       "sha1": "df1c6b03d26a5cb685bff8e3a1aa6ac9fb6a2428",
//       "sha256": "c0e5001a3cbf7a4eca566ae2b5c1dffb5922145f2d2e9c571128aad7c68cddef"
//     },
//     "registered": 1255834240,
//     "dob": 1190972313,
//     "phone": "(355)-604-7804",
//     "cell": "(190)-158-3107",
//     "id": {
//       "name": "SSN",
//       "value": "452-39-7067"
//     },
//     "picture": {
//       "large": "https://randomuser.me/api/portraits/women/53.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/women/53.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/women/53.jpg"
//     },
//     "nat": "US"
//   },
//   {
//     "gender": "male",
//     "name": {
//       "title": "mr",
//       "first": "lloyd",
//       "last": "barnett"
//     },
//     "location": {
//       "street": "6462 james st",
//       "city": "hayward",
//       "state": "oklahoma",
//       "postcode": 33461
//     },
//     "email": "lloyd.barnett@example.com",
//     "login": {
//       "username": "heavyrabbit767",
//       "password": "mmmmmmm",
//       "salt": "Z7aNGEtH",
//       "md5": "a486ea2fe2c7c1b8eeb0edc725b3944c",
//       "sha1": "a445fb7f505a503ef7b6268734906e83aa98f871",
//       "sha256": "bae85883e9914a5d12b5916f8ba41eec0b30220c1493a7807d4694738b5e0844"
//     },
//     "registered": 970895622,
//     "dob": 370646603,
//     "phone": "(065)-649-9739",
//     "cell": "(268)-198-8917",
//     "id": {
//       "name": "SSN",
//       "value": "211-86-9164"
//     },
//     "picture": {
//       "large": "https://randomuser.me/api/portraits/men/19.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/men/19.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/men/19.jpg"
//     },
//     "nat": "US"
//   },
//   {
//     "gender": "female",
//     "name": {
//       "title": "mrs",
//       "first": "katherine",
//       "last": "kennedy"
//     },
//     "location": {
//       "street": "1879 lakeview st",
//       "city": "tulsa",
//       "state": "arkansas",
//       "postcode": 70641
//     },
//     "email": "katherine.kennedy@example.com",
//     "login": {
//       "username": "tinyelephant958",
//       "password": "blueeyes",
//       "salt": "3vwj4Gqs",
//       "md5": "59391393f7edf5281b8bab0358ca1517",
//       "sha1": "9af56673c02fb24173a63422903661ece811adc5",
//       "sha256": "5bff5cfef41d82da78a8c43c9494489f0942d1833d9166cfd436a55fcc430f7d"
//     },
//     "registered": 1145107738,
//     "dob": 1252649057,
//     "phone": "(471)-835-0973",
//     "cell": "(531)-658-2168",
//     "id": {
//       "name": "SSN",
//       "value": "461-54-5332"
//     },
//     "picture": {
//       "large": "https://randomuser.me/api/portraits/women/30.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/women/30.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/women/30.jpg"
//     },
//     "nat": "US"
//   },
//   {
//     "gender": "male",
//     "name": {
//       "title": "mr",
//       "first": "derek",
//       "last": "cooper"
//     },
//     "location": {
//       "street": "6380 harrison ct",
//       "city": "minneapolis",
//       "state": "south dakota",
//       "postcode": 75232
//     },
//     "email": "derek.cooper@example.com",
//     "login": {
//       "username": "whitefrog184",
//       "password": "vette",
//       "salt": "Pf99Odqc",
//       "md5": "70cfde16b8f583091d0de8f1546f8606",
//       "sha1": "9b2f3de939d88d817a159ce7c4da948a485c98b2",
//       "sha256": "69f8a058e4d3f0cdcc7c6dcaaaaf89ff8d3a162cdcb5bc3c65ed65d75277ad91"
//     },
//     "registered": 1384279978,
//     "dob": 425185719,
//     "phone": "(031)-916-8541",
//     "cell": "(433)-262-4816",
//     "id": {
//       "name": "SSN",
//       "value": "761-82-1515"
//     },
//     "picture": {
//       "large": "https://randomuser.me/api/portraits/men/95.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/men/95.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/men/95.jpg"
//     },
//     "nat": "US"
//   },
//   {
//     "gender": "female",
//     "name": {
//       "title": "mrs",
//       "first": "janice",
//       "last": "holt"
//     },
//     "location": {
//       "street": "5555 ranchview dr",
//       "city": "st. louis",
//       "state": "maine",
//       "postcode": 37161
//     },
//     "email": "janice.holt@example.com",
//     "login": {
//       "username": "organicduck558",
//       "password": "woodstoc",
//       "salt": "XRjRNmiH",
//       "md5": "c6c1c21db56cf98255c49df6f52df026",
//       "sha1": "b04d4de05d42eacaa18eebbde5aa252d686f3ede",
//       "sha256": "e36b9a74476ba9571fa65db248141a40b8d1169df676739dff07410e2a7aea0e"
//     },
//     "registered": 1406498452,
//     "dob": 401945810,
//     "phone": "(716)-024-9926",
//     "cell": "(749)-373-8195",
//     "id": {
//       "name": "SSN",
//       "value": "536-02-8640"
//     },
//     "picture": {
//       "large": "https://randomuser.me/api/portraits/women/36.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/women/36.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/women/36.jpg"
//     },
//     "nat": "US"
//   },
//   {
//     "gender": "male",
//     "name": {
//       "title": "mr",
//       "first": "jeremiah",
//       "last": "gutierrez"
//     },
//     "location": {
//       "street": "7088 valley view ln",
//       "city": "oceanside",
//       "state": "maine",
//       "postcode": 10450
//     },
//     "email": "jeremiah.gutierrez@example.com",
//     "login": {
//       "username": "lazywolf912",
//       "password": "torpedo",
//       "salt": "sGa8US6t",
//       "md5": "4a28eb68ca1f0e8e086e9343a475d53e",
//       "sha1": "2325a0a136560f1030d043ca9aad96f3c7eea8a1",
//       "sha256": "8380013e74d6c8f4f7634d16b8c06d2b0c73d7085dc14acb073d6cd767328f89"
//     },
//     "registered": 1150308598,
//     "dob": 36376654,
//     "phone": "(078)-774-0897",
//     "cell": "(510)-485-6020",
//     "id": {
//       "name": "SSN",
//       "value": "900-63-7428"
//     },
//     "picture": {
//       "large": "https://randomuser.me/api/portraits/men/37.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/men/37.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/men/37.jpg"
//     },
//     "nat": "US"
//   },
//   {
//     "gender": "male",
//     "name": {
//       "title": "mr",
//       "first": "justin",
//       "last": "sanchez"
//     },
//     "location": {
//       "street": "2875 hamilton ave",
//       "city": "olathe",
//       "state": "oregon",
//       "postcode": 72529
//     },
//     "email": "justin.sanchez@example.com",
//     "login": {
//       "username": "whitebear233",
//       "password": "keegan",
//       "salt": "1op5oklx",
//       "md5": "e1f7cf7f7dafc6e9ee954e9b6dfef1b5",
//       "sha1": "79a97f0597f8ba906a1f646d591ff6c1f2529192",
//       "sha256": "17c7dfdfec01d6d38e390cfb364c0879bb3b39914060db6c1668660aa7ccef19"
//     },
//     "registered": 1186731503,
//     "dob": 1070636260,
//     "phone": "(574)-169-6696",
//     "cell": "(403)-561-2817",
//     "id": {
//       "name": "SSN",
//       "value": "057-05-3274"
//     },
//     "picture": {
//       "large": "https://randomuser.me/api/portraits/men/38.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/men/38.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/men/38.jpg"
//     },
//     "nat": "US"
//   },
//   {
//     "gender": "female",
//     "name": {
//       "title": "miss",
//       "first": "beverly",
//       "last": "terry"
//     },
//     "location": {
//       "street": "9800 shady ln dr",
//       "city": "denver",
//       "state": "mississippi",
//       "postcode": 13993
//     },
//     "email": "beverly.terry@example.com",
//     "login": {
//       "username": "greenrabbit648",
//       "password": "felicia",
//       "salt": "Hr7czV4I",
//       "md5": "f96456c40c37db66c1f043bbd95de2ca",
//       "sha1": "d202e98483a424efb897a8ed1adfda563203ac9f",
//       "sha256": "c06e5096f896dd7cfe261b7a9c13b9bc75f75f89780520de941e340d5d073fc2"
//     },
//     "registered": 1327258968,
//     "dob": 588722089,
//     "phone": "(995)-921-6616",
//     "cell": "(126)-045-7458",
//     "id": {
//       "name": "SSN",
//       "value": "510-32-3580"
//     },
//     "picture": {
//       "large": "https://randomuser.me/api/portraits/women/48.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/women/48.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/women/48.jpg"
//     },
//     "nat": "US"
//   },
//   {
//     "gender": "male",
//     "name": {
//       "title": "mr",
//       "first": "dave",
//       "last": "jenkins"
//     },
//     "location": {
//       "street": "1512 mcclellan rd",
//       "city": "albany",
//       "state": "kentucky",
//       "postcode": 33715
//     },
//     "email": "dave.jenkins@example.com",
//     "login": {
//       "username": "organicleopard229",
//       "password": "wicked",
//       "salt": "jx4AqxbO",
//       "md5": "6b69557326c7d3f6731d6ccaf82ad961",
//       "sha1": "570c0ea0b93055d494797cd280c4c4edffc5e2c7",
//       "sha256": "0c51bc0b352ef5e9fd288615b609720598987319de4428dcaf766f21de6fed78"
//     },
//     "registered": 1285000545,
//     "dob": 1005178656,
//     "phone": "(178)-197-4080",
//     "cell": "(037)-979-9144",
//     "id": {
//       "name": "SSN",
//       "value": "718-64-5207"
//     },
//     "picture": {
//       "large": "https://randomuser.me/api/portraits/men/14.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/men/14.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/men/14.jpg"
//     },
//     "nat": "US"
//   }
// ];