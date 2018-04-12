const mongoose = require('mongoose')
const db = require('../models')

//gets a single user from the db
//returns back function that calls a promise to be inserted into route
module.exports = (path) => {
  switch (path) {
    case '/user':
      return (req, res) => {
        db.User.findById(req.params.id)
          //send back the document that was found
          .then(data => res.json(data))
      }
    case '/car':
      return (req, res) => {
        db.Car.findById(req.params.id)
          //send back the document that was found
          .then(data => res.json(data))
      }
    case '/event':
      return (req, res) => {
        db.Event.findById(req.params.id)
          //send back the document that was found
          .then(data => res.json(data))
      }
    default:
      return (req, res) => {
        res.sendStatus(404)
      }
  }
}