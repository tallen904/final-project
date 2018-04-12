const mongoose = require('mongoose')
const db = require('../models')

//deletes a single document from the db
//switches on a provide path, which will send back a function that calls the correct model in the db
module.exports = (path) => {
  switch (path) {
    case '/user':
      return (req, res) => {
        db.User.findOneAndRemove({ _id : req.params.id})
          //send back confirmation the deletion took place
          .then(data => res.json(data))
      }
    case '/car':
      return (req, res) => {
        db.Car.findOneAndRemove({ _id: req.params.id })
          //send back confirmation the deletion took place
          .then(data => res.json(data))
      }
    case '/event':
      return (req, res) => {
        db.Event.findOneAndRemove({ _id: req.params.id })
          //send back confirmation the deletion took place
          .then(data => res.json(data))
      }
    default:
      return (req, res) => {
        //if nothing matches, send 404 status
        res.sendStatus(404)
      }
  }
}