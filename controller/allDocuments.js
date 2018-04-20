const mongoose = require('mongoose')
const db = require('../models')

//gets all of the docs from the db that meet certain criteria
module.exports = () => {
  return (req, res) => {
    //get the path from the request path mounted
    const path = req.baseUrl
    //switch on the path
    switch (path) {
      case '/db/user':
        //populates all of the events the user belongs to
        return db.User.findById(req.params.id).populate('events').then(userWithEvents => res.json(userWithEvents))
      case '/db/car':
        //populates all of the riders in a cars
        return db.Car.findById(req.params.id).populate('riders').then(carWithRiders => res.json(carWithRiders))
      case '/db/event':
        //gets all of the events on the db
        return db.Event.find().then(events => res.json(events))
      default:
        //if the path is not found, send 404
        return res.send('Status(404)')
    }
  }
}