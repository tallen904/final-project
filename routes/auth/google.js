const router = require('express').Router()
const User = require('../../models/User')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy

//setup client secret and ID
const GOOGLE_CLIENT_ID = "502626059336-03u3ipvjpd9jjg016aq2hl53tj2mil2e.apps.googleusercontent.com",
  GOOGLE_CLIENT_SECRET = "n9B853agw8K3ZgJXwe5FMdmb"

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3001/auth/google/callback"
},
  function (request, accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      //find or create user account in db
      User.findOne({ email : profile.emails[0].value })
        .then(user => {
          console.log(user)
          //if no user found, create one
          if (!user) {
            //return promise to create a user in the db
            return User.create({
              //use data from google's response
              email : profile.emails[0].value,
              name : `${profile.name.givenName} ${profile.name.familyName}`
              }).then(user => {
                user.save()
                return done(null, user)
              })
          }
          //else, simply return the user from the db
          return done(null, user)
        })
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

//route at this point is crws.in/auth/google/
router.get(
  "/",
  passport.authenticate("google", {
    //using the userinfo.email endpoint since that's all we need to see
    scope: "https://www.googleapis.com/auth/userinfo.email"
  })
);

// route is now /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/callback',
  passport.authenticate('google', {
    //hard set link for now
    successRedirect: 'http://localhost:3000/',
    failureRedirect: '/login'
  }));

//likely needs to be put into a separate router
//definitely needs to be moved to a separate login page
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('http://localhost:3000/');
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