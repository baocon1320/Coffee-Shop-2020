// Passport to login
const passport = require('passport');

// For findOrCreate on mongoose
//const findOrCreate = require('mongoose-findorcreate');

// import Manager model
const Manager = require('../models/manager');

// For Google Oauth 2
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// For Facebook Oauth 2
FacebookStrategy = require('passport-facebook').Strategy;

//Frontend URL
const frontendURL = process.env.REACT_APP_FRONTEND_URL;


// use static authenticate method of model in LocalStrategy
//passport.use(Manager.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  Manager.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/google/goccafes",
  profileFields: ['id', 'emails', 'name']
},
  function (accessToken, refreshToken, profile, cb) {
    console.log("google Login");
    console.log(profile);
    /*
    Manager.findOrCreate({ emailId: profile.id }, function (err, user) {
      return cb(err, user);
      */
    Manager.findOne({ emailId: profile.emails[0].value }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  profileFields: ['id', 'emails', 'name']
},
  function (accessToken, refreshToken, profile, cb) {
    console.log('loging facebook');
    console.log(profile);
    console.log(profile.emails);
    Manager.findOne({ emailId: profile.emails[0].value }, function (err, user) {
      return cb(err, user);
    });
  }
));