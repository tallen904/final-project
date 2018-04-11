const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cruzinDb");

//setup dummy data
const testUser = {
  name    : 'Johnny Boy',
  seats   : 4,
  email   : 'goodboy@johnny.com'
}

const testCar = (id) => ({
  seats   : 4,
  driver  : id
})

const testEvent = {
  name      : 'Test Event',
  time      : Date.now(),
  location  : '32.852992, -117.182789'
}

//clear out db state, then reseed
db.Event.remove({}, () => console.log('Events removed,'))
  .then(() => db.Car.remove({}, () => console.log('Cars removed,')))
  .then(() => db.User.remove({}, () => console.log('Users removed.')))

  //create event and user first, will populate event after
  .then(() => db.User.create(testUser))
  .then(dbUser => db.Car.create(testCar(dbUser._id)))
  .then(dbCar => {
    db.Event.create(testEvent).then(dbEvent => {
      console.log(dbEvent);
      //we need to link the car with the event that is created
      // dbEvent.cars.push(dbCar._id)
    })
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
