const mongoose = require('mongoose')
const db = require('../models')

//deletes a single document from the db
//switches on a provide path, which will send back a function that calls the correct model in the db
module.exports = () => {
  //returning back the function that will execute the switch 
  //which will provide the correct db query
  return (req, res) => {
    //get the path from the request path mounted
    const path = req.baseUrl
    //switch on the path
    switch (path) {
      case '/db/user':
        //send back confirmation the deletion took place
        return db.User.findOneAndRemove({ _id : req.params.id}).then(data => res.json(data))
      case '/db/car':
        //send back confirmation the deletion took place
        return db.Car.findOneAndRemove({ _id: req.params.id }).then(data => res.json(data))
      case '/db/event':
        //send back confirmation the deletion took place
        return db.Event.findOneAndRemove({ _id: req.params.id }).then(data => res.json(data))
      default:
        //if nothing matches, send 404 status
        return res.sendStatus(404)
    }
  }
}