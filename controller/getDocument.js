const mongoose = require('mongoose')
const db = require('../models')

//gets a single user from the db
//returns back function that returns a promise to be inserted into route
module.exports = () => {
  return (req, res) => {
    //get the path from the request path mounted
    const path = req.baseUrl
    //switch on the path
    switch (path) {
      case '/db/user':
        //send back the document that was found
        return db.User.findById(req.params.id).then(data => res.json(data))
      case '/db/car':
        //send back the document that was found
        return db.Car.findById(req.params.id).then(data => res.json(data))
      case '/db/event':
        //send back the document that was found
        return db.Event.findById(req.params.id).then(data => res.json(data))
      default:
        return res.sendStatus(404)
    }
  }
}