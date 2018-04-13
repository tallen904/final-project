const mongoose = require('mongoose')
const db = require('../models')

//updates a single user from the db
//each function will find by the id passed in request
//update the document pased on the passed params
//which should be in the form { key : newVal }
module.exports = (path) => {
  return (req, res) => {
    //get the path from the request path mounted
    const path = req.baseUrl
    //switch on the path
    switch (path) {
      case '/db/user':
        //send back the document that was updated
        return db.User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }).then(data => res.json(data))
      case '/db/car':
        //send back the document that was updated
        return db.Car.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }).then(data => res.json(data))
      case '/db/event':
        //send back the document that was updated
        return db.Event.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }).then(data => res.json(data))
      default:
        return res.sendStatus(404)
    }
  }
}