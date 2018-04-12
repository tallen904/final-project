const mongoose = require('mongoose')
const db = require('../models')

//posts a single user from the db
module.exports = (path) => {
  return (req, res) => {
    //get the path from the request path mounted
    const path = req.path()
    //switch on the path
    switch (path) {
      case '/user':
        return
          db.User.create(req.body)
            //send back the document that was created
            .then(data => res.json(data))
      case '/car':
        return
          db.Car.create(req.body)
            //send back the document that was created
            .then(data => res.json(data))
      case '/event':
        return
          db.Event.create(req.body)
            //send back the document that was created
            .then(data => res.json(data))
      default:
        return
          res.sendStatus(404)
    }
  }
}