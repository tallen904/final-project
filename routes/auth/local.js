const db = require('../../models')
const router = require('express').Router()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy(
  //using custom params for authentication
  //username in the below === email
  //need to use the correct field for the 
  {
    usernameField : 'email'
  },
  (username, password, done) => {
    //query db for a user matching the email address
    db.User.findOne({ email : username })
      .then(user => {
        //if no user found, 
        if (!user){
          return done(null, false, { message : 'Email not found.  Please register an account.'})
        }
        //if passwords do not match,
        if (!(user.password === password)){
          return done(null, false, { message : 'Incorrect Password.'})
        }
        //else, user has been validated
        return done(null, user)
      })
  }
))

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.User.findById(id, function(err, user) {
    done(err, user);
  });
});

//when posting to /auth/local
//use passport to authenticate
router.post('/', 
  passport.authenticate('local', 
    {
      successRedirect : '/',
      failureRedirect : '/login',
      faulureFlash : true
    }
  )
)

module.exports = router