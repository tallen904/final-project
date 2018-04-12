const mongoose = require('mongoose')
const db = require('../models')

//gets a single user from the db
//returns back function that returns a promise to be inserted into route
module.exports = () => {
  return (req, res) => {
    //get the path from the request path mounted
    const path = req.path()
    //switch on the path
    switch (path) {
      case '/user':
        return
          db.User.findById(req.params.id)
            //send back the document that was found
            .then(data => res.json(data))
      case '/car':
        return
          db.Car.findById(req.params.id)
            //send back the document that was found
            .then(data => res.json(data))
      case '/event':
        return
          db.Event.findById(req.params.id)
            //send back the document that was found
            .then(data => res.json(data))
      default:
        return 
          res.sendStatus(404)
    }
  }
}