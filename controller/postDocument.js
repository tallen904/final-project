const mongoose = require('mongoose')
const db = require('../models')

//posts a single user from the db
module.exports = (path) => {
  return (req, res) => {
    //get the path from the request path mounted
    const path = req.baseUrl
    //switch on the path
    switch (path) {
      case '/db/user':
        //send back the document that was created
        return db.User.create(req.body).then(data => res.json(data))
      case '/db/car':
        //send back the document that was created
        return db.Car.create(req.body).then(data => res.json(data))
      case '/db/event':
        //send back the document that was created
        return db.Event.create(req.body).then(data => res.json(data))
      default:
        return res.sendStatus(404)
    }
  }
}