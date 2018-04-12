const mongoose = require('mongoose')
const db = require('../models')

//posts a single user from the db
module.exports = (path) => {
  switch (path) {
    case '/user':
      return (req, res) => {
        db.User.create(req.body)
          //sending back data that was posted
          .then(data => res.json(data))
      }
    case '/car':
      return (req, res) => {
        db.Car.create(req.body)
          //sending back data that was posted
          .then(data => res.json(data))
      }
    case '/event':
      return (req, res) => {
        db.Event.create(req.body)
          //sending back data that was posted
          .then(data => res.json(data))
      }
    default:
      return (req, res) => {
        //if nothing matches, send 404 status
        res.sendStatus(404)
      }
  }
}