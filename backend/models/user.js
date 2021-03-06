import mongoose, { Schema } from 'mongoose';

var userSchema = new Schema({
    oauth_id: {
		type: String,
		unique: true,
		index: true,
	},
    gender: String,
    name: String,
    location: {
      street: String,
      city: String,
      state: String,
      postcode: String,
    },
    email: String,
    username: String,
    password: String,
    phone: String,
    avatar: String,
    days: Array,
    skills: Array,
    /*gender: String,
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
    times: Array,*/
  });

export default mongoose.model('user', userSchema);