import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
//import passport from 'passport';
//import FacebookStrategy from 'passport-facebook';
//import GoogleStrategy from 'passport-google-oauth20';
//import { facebook, google } from './config';
import bodyParser from 'body-parser';
import passport from 'passport';
import {
  facebookLogin,
  facebookMiddleware,
  googleLogin,
  googleMiddleware,
  oauthCallback,
} from './controllers/auth';
import { list, create } from './controllers/comments';
import router from './router';

// Connect to MongoDB
mongoose.connect('mongodb://localhost/users');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/react-native-comments');

// Initialize http server
const app = express();

// Transform Facebook profile because Facebook and Google profile objects look different
// and we want to transform them into user objects that have the same set of attributes
/*const transformFacebookProfile = (profile) => ({
  name: profile.name,
  avatar: profile.picture.data.url,
});

// Transform Google profile into user object
const transformGoogleProfile = (profile) => ({
  name: profile.displayName,
  avatar: profile.image.url,
});

// Register Facebook Passport strategy
passport.use(new FacebookStrategy(facebook,
  // Gets called when user authorizes access to their profile
  async (accessToken, refreshToken, profile, done)
    // Return done callback and pass transformed user object
    => done(null, transformFacebookProfile(profile._json))
));

// Register Google Passport strategy
passport.use(new GoogleStrategy(google,
  async (accessToken, refreshToken, profile, done)
    => done(null, transformGoogleProfile(profile._json))
));

// Serialize user into the sessions
passport.serializeUser((user, done) => done(null, user));

// Deserialize user from the sessions
passport.deserializeUser((user, done) => done(null, user));*/

// Logger that outputs all requests into the console
app.use(morgan('combined'));
// Use v1 as prefix for all API endpoints
app.use('/v1', router);

// Initialize Passport
/*app.use(passport.initialize());
app.use(passport.session());

// Set up Facebook auth routes
app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/auth/facebook' }),
  // Redirect user back to the mobile app using Linking with a custom protocol OAuthLogin
  (req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)));

// Set up Google auth routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google' }),
  (req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)));
*/
app.use(bodyParser.json());
// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Set up auth routes
app.get('/auth/facebook', facebookLogin);
app.get('/auth/google', googleLogin);
app.get('/auth/facebook/callback', facebookMiddleware, oauthCallback);
app.get('/auth/google/callback', googleMiddleware, oauthCallback);

// Set up Facebook auth routes
/*app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/auth/facebook' }),
  // Redirect user back to the mobile app using Linking with a custom protocol OAuthLogin
  (req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)));

// Set up Google auth routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google' }),
  (req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)));

*/
// Set up comment routes
app.route('/comments')
  .get(list)
  .put(create);

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});