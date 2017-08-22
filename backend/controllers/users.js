import User from '../models/user';
import moment from 'moment';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export const indexUsers = (req, res, next) => {
	
	User.find().lean().exec((err, users) => res.json(
	{ users: users.map(user => ({
		...user,
	}))
		
	}
	));
};

export const createUser = async (req, res, next) => {
  const { oauth_id, gender, name, email, username, password, phone, location, avatar,
              days, skills } = req.body;
  // Save user
  const user = await new User({
    oauth_id: '',
        gender: gender,
        name: name,
        location: {
          street: street,
          city: city,
          state: state,
          postcode: postcode,
        },
        email: email,
        username: username,
        password: password,
        phone: phone,
        avatar: avatar,
        days: days,
        skills: skills,
  }).save();

  res.json({
    user: await user.findById(user._id)
      .exec()
  });
};