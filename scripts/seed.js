const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cruzinDb");

const testUser = {
  name  : 'Johnny Boy',
  seats  : 4,
  email  : 'goodboy@johnny.com'
}

const testCar = (id) => {
  return {
    seats   : 4,
    driver  : id
  }
}

const testEvent => (id) {
  name     : 'Test Event',
  time      : Date.now(),
  location  : '32.852992, -117.182789',
  // TODO: point to created car db object
  cars : [id]
}

//clear out db, then reseed
db.Event
  .remove()
  .then(() => db.User.create(testUser))
  .then(dbUser => db.Car.create(testCar(dbUser._id)))
  .then(dbCar => {
    // TODO: create a event in the db, point it to the car object, have the car point to the event object
    //create event, set the cars array to point to car that was just created
    db.Event.create(testEvent(dbCar._id))
  })
  .catch(err => throw err)
  .then(data => {
    console.log('db seeded!')
    process.exit(0)
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
