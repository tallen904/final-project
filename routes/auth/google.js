const express = require('express')
const router = express.Router()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy

//setup client secret and ID
const GOOGLE_CLIENT_ID = "502626059336-03u3ipvjpd9jjg016aq2hl53tj2mil2e.apps.googleusercontent.com",
  GOOGLE_CLIENT_SECRET = "n9B853agw8K3ZgJXwe5FMdmb"

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  //NOTE :
  //Carefull ! and avoid usage of Private IP, otherwise you will get the device_id device_name issue for Private IP during authentication
  //The workaround is to set up thru the google cloud console a fully qualified domain name such as http://mydomain:3000/ 
  //then edit your /etc/hosts local file to point on your private IP. 
  //Also both sign-in button + callbackURL has to be share the same url, otherwise two cookies will be created and lead to lost your session
  //if you use it.
  callbackURL: "http://yourdormain:3000/auth/google/callback",
  passReqToCallback: true
},
  function (request, accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {

      // To keep the example simple, the user's Google profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Google account with a user record in your database,
      // and return that user instead.
      return done(null, profile)
    });
  }
));

//route at this point is crws.in/auth/google/
app.get('/', passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read']
}));

// route is now /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

//likely needs to be put into a separate router
//definitely needs to be moved to a separate login page
app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}

//export back the subrouter we created
module.exports = router