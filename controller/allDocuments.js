const mongoose = require('mongoose')
const db = require('../models')

//gets all of the docs from the db that meet certain criteria
module.exports = (path) => {
  return (req, res) => {
    //get the path from the request path mounted
    const path = req.path()
    //switch on the path
    switch (path) {
      case '/user':
        return 
          //TODO:
          //pending implementation
          //can get all of the users that have a linked event, but it will likely
          //be best to get that from the cars that are owned by the event
      case '/car':
          //TODO:
          //pending implementation
          //should likely send back the list of the cars that are linked to an event
      case '/event':
        return
          db.Event.find()
            .then(events => res.json(events));
      default:
        return
          //if the path is not found, send 404
          res.sendStatus(404)
    }
  }
}