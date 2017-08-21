import mongoose from 'mongoose';
import User from './models/user';

const users = [
  {
    "oauth_id": "",
    "gender": "male",
    "name": "Aleksandar Jordanov",
    "location": {
      "street": "1446 oak lawn ave",
      "city": "lakewood",
      "state": "arizona",
      "postcode": 60649
    },
    "email": "aleksandar.jordanovv@gmail.com",
    "username": "aleksandar",
    "password": "Ace123",
    "phone": "(661)-131-8187",
    "avatar": "https://lh3.googleusercontent.com/-SuesVY-UfEM/VEBAhEvRq3I/AAAAAAAAAB8/eUSJosjm2mcHZq1X-gUEahOUz6IncITlwCEw/w139-h140-p/8491_656557891025831_1795667356_n.jpg",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "skills": ["Reading Books", "Cleaning & Housekeeping", "Meal Preparation"],
  },
  {
    "oauth_id": "",
    "gender": "male",
    "name": "Mario Walters",
    "location": {
      "street": "8467 preston rd",
      "city": "allentown",
      "state": "maine",
      "postcode": 71108
    },
    "email": "mario.walters@example.com",
    "username": "tinyrabbit750",
    "password": "detroit",
    "phone": "(612)-481-1846",
    "avatar": "https://randomuser.me/api/portraits/men/47.jpg",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "skills": ["Reading Books", "Cleaning & Housekeeping", "Meal Preparation"],
  },
  {
    "oauth_id": "",
    "gender": "male",
    "name": "Joseph Lambert",
    "location": {
      "street": "2673 w pecan st",
      "city": "surrey",
      "state": "new hampshire",
      "postcode": 12183
    },
    "email": "joseph.lambert@example.com",
    "username": "silverbear726",
    "password": "jjjj",
    "phone": "(481)-952-7376",
    "avatar": "https://randomuser.me/api/portraits/men/13.jpg",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "skills": ["Reading Books", "Cleaning & Housekeeping", "Meal Preparation"],
  },
  {
    "oauth_id": "",
    "gender": "female",
    "name": "Tina Jennings",
    "location": {
      "street": "1123 blossom hill rd",
      "city": "orange",
      "state": "nebraska",
      "postcode": 57791
    },
    "email": "tina.jennings@example.com",
    "username": "blackfish147",
    "password": "redsox1",
    "phone": "(938)-316-5866",
    "avatar": "https://randomuser.me/api/portraits/women/22.jpg",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "skills": ["Reading Books", "Cleaning & Housekeeping", "Meal Preparation"],
  },
  {
    "oauth_id": "",
    "gender": "female",
    "name": "Irma Gibson",
    "location": {
      "street": "9233 karen dr",
      "city": "elk grove",
      "state": "washington",
      "postcode": 93917
    },
    "email": "irma.gibson@example.com",
    "username": "crazyostrich373",
    "password": "snapon",
    "phone": "(355)-604-7804",
    "cell": "(190)-158-3107",
    "avatar": "https://randomuser.me/api/portraits/women/53.jpg",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "skills": ["Reading Books", "Cleaning & Housekeeping", "Meal Preparation"],
  },
  {
    "oauth_id": "",
    "gender": "male",
    "name": "Lloyd Barnett",
    "location": {
      "street": "6462 james st",
      "city": "hayward",
      "state": "oklahoma",
      "postcode": 33461
    },
    "email": "lloyd.barnett@example.com",
    "username": "heavyrabbit767",
    "password": "mmmmmmm",
    "phone": "(065)-649-9739",
    "avatar": "https://randomuser.me/api/portraits/men/19.jpg",
    "days": ["Monday", "Thursday", "Friday", "Saturday", "Sunday"],
    "skills": ["Reading Books", "Cleaning & Housekeeping", "Meal Preparation"],
  },
  {
    "oauth_id": "",
    "gender": "female",
    "name": "Katherine Kennedy",
    "location": {
      "street": "1879 lakeview st",
      "city": "tulsa",
      "state": "arkansas",
      "postcode": 70641
    },
    "email": "katherine.kennedy@example.com",
    "username": "tinyelephant958",
    "password": "blueeyes",
    "phone": "(471)-835-0973",
    "avatar": "https://randomuser.me/api/portraits/women/30.jpg",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",],
    "skills": ["Reading Books", "Cleaning & Housekeeping", "Meal Preparation"],
  },
  {
    "oauth_id": "",
    "gender": "male",
    "name": "Derek Cooper",
    "location": {
      "street": "6380 harrison ct",
      "city": "minneapolis",
      "state": "south dakota",
      "postcode": 75232
    },
    "email": "derek.cooper@example.com",
    "username": "whitefrog184",
    "password": "vette",
    "phone": "(031)-916-8541",
    "avatar": "https://randomuser.me/api/portraits/men/95.jpg",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "skills": ["Reading Books", "Cleaning & Housekeeping", "Meal Preparation"],
  },
  {
    "oauth_id": "",
    "gender": "female",
    "name": "Janice Holt",
    "location": {
      "street": "5555 ranchview dr",
      "city": "st. louis",
      "state": "maine",
      "postcode": 37161
    },
    "email": "janice.holt@example.com",
    "username": "organicduck558",
    "password": "woodstoc",
    "phone": "(716)-024-9926",
    "avatar": "https://randomuser.me/api/portraits/women/36.jpg",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "skills": ["Reading Books", "Cleaning & Housekeeping", "Meal Preparation"],
  },
  {
    "oauth_id": "",
    "gender": "male",
    "name": "Jeremiah Gutierrez",
    "location": {
      "street": "7088 valley view ln",
      "city": "oceanside",
      "state": "maine",
      "postcode": 10450
    },
    "email": "jeremiah.gutierrez@example.com",
    "username": "lazywolf912",
    "password": "torpedo",
    "phone": "(078)-774-0897",
    "avatar": "https://randomuser.me/api/portraits/men/37.jpg",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "skills": ["Reading Books", "Cleaning & Housekeeping", "Meal Preparation"],
  },
  {
    "oauth_id": "",
    "gender": "male",
    "name": "Justin Sanchez",
    "location": {
      "street": "2875 hamilton ave",
      "city": "olathe",
      "state": "oregon",
      "postcode": 72529
    },
    "email": "justin.sanchez@example.com",
    "username": "whitebear233",
    "password": "keegan",
    "phone": "(574)-169-6696",
    "avatar": "https://randomuser.me/api/portraits/men/38.jpg",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "skills": ["Reading Books", "Cleaning & Housekeeping", "Meal Preparation"],
  },
  {
    "oauth_id": "",
    "gender": "female",
    "name": "Beverly Terry",
    "location": {
      "street": "9800 shady ln dr",
      "city": "denver",
      "state": "mississippi",
      "postcode": 13993
    },
    "email": "beverly.terry@example.com",
    "username": "greenrabbit648",
    "password": "felicia",
    "phone": "(995)-921-6616",
    "avatar": "https://randomuser.me/api/portraits/women/48.jpg",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "skills": ["Reading Books", "Cleaning & Housekeeping", "Meal Preparation"],
  },
  {
    "oauth_id": "",
    "gender": "male",
    "name": "Dave Jenkins",
    "location": {
      "street": "1512 mcclellan rd",
      "city": "albany",
      "state": "kentucky",
      "postcode": 33715
    },
    "email": "dave.jenkins@example.com",
    "username": "organicleopard229",
    "password": "wicked",
    "phone": "(178)-197-4080",
    "avatar": "https://randomuser.me/api/portraits/men/14.jpg",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "skills": ["Reading Books", "Cleaning & Housekeeping", "Meal Preparation"],
  }
];

// Connect to MongoDB
//mongoose.connect('mongodb://localhost:27017/movies');

mongoose.connect('mongodb://localhost:27017/users');

// Go through each movie
/*movies.map(data => {
  // Initialize a model with movie data
  const movie = new Movie(data);
  
  movie.save();
});*/

users.map(data => {
  // Initialize a model with movie data
  const user = new User(data);
  
  user.save();
});