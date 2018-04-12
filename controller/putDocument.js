const mongoose = require('mongoose')
const db = require('../models')

//updates a single user from the db
//each function will find by the id passed in request
//update the document pased on the passed params
//which should be in the form { key : newVal }
module.exports = (path) => {
  switch (path) {
    case '/user':
      return (req, res) => {
        db.User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
          //send back the new data
          .then(user => res.json(user))
      }
    case '/car':
      return (req, res) => {
        db.Car.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
          //send back the new data
          .then(data => res.json(data))
      }
    case '/event':
      return (req, res) => {
        db.Event.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
          //send back the new data
          .then(data => res.json(data))
      }
    default:
      return (req, res) => {
        //if nothing matches, send 404 status
        res.sendStatus(404)
      }
  }
}