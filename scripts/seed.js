const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/crwsin");

//setup dummy data

//user is the most basic object we have, but we have some options to push the events the user belongs to
const testUser = {
  name    : 'Johnny Boy',
  seats   : 4,
  email   : 'goodboy@johnny.com'
}

//a car only needs a driver and seats to be created, but has linking to event it belongs to
//has an array of riders as well
const testCar = (id) => ({
  seats   : 4,
  driver  : id
})

//event needs a name, time, and place to be created
//has an array of car objects which belong to it
const testEvent = (carId) => ({
  name      : 'Test Event',
  time      : Date.now(),
  location  : '32.852992, -117.182789',
  cars : [carId]
})

//clear out db state, then reseed
db.Event.remove({}, () => console.log('Events removed,'))
  .then(() => db.Car.remove({}, () => console.log('Cars removed,')))
  .then(() => db.User.remove({}, () => console.log('Users removed.')))

  //create user, then car with user id, then event with the car id
  .then(() => db.User.create(testUser))
  .then(dbUser => db.Car.create(testCar(dbUser._id)))
  .then(dbCar => db.Event.create(testEvent(dbCar._id)))

  //link the event to both the user and the car.
  //using async to prevent having to keep using promises
  .then(async function(dbEvent) {
    //find the user and push the event id
    await db.User.findOneAndUpdate({}, {$push : {events : dbEvent._id}})
    //finding and updating the only car in db
    //returning the promise so we can continue the promise chain
    return db.Car.findOneAndUpdate({}, {$set : {event : dbEvent._id}})
  })

  //exit messages
  .then(data => {
    console.log('db seeded!')
    process.exit(0)
  })
  //if any errors occur, throw the err, close out the script
  .catch(err => {
    throw err;
    process.exit(1)
  })
