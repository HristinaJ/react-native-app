import mongoose, { Schema } from 'mongoose';

var userSchema = new Schema({
    gender: String,
    name: {
      title: String,
      first: String,
      last: String,
    },
    location: {
      street: String,
      city: String,
      state: String,
      postcode: String,
    },
    email: String,
    login: {
      username: String,
      password: String,
      salt: String,
      md5: String,
      sha1: String,
      sha256: String,
    },
    registered: String,
    dob: String,
    phone: String,
    cell: String,
    ids: {
      name: String,
      value: String,
    },
    picture: {
      large: String,
      medium: String,
      thumbnail: String,
    },
    nat: String,
    days: Array,
    times: Array,
	/*id: {
		type: String,
		unique: true,
	},
    name: String,
    username: String,
    email: String,
    address: {
      street: String,
      suite: String,
      city: String,
      zipcode: String,
      geo: {
        lat: String, 
        lng: String,
      },
    },
    phone: String,
    website: String,
    company: {
      name: String,
      catchPhrase: String,
      bs: String,
    },*/
  });

export default mongoose.model('user', userSchema);