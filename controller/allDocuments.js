const mongoose = require('mongoose')
const db = require('../models')

//gets all of the docs from the db that meet certain criteria
module.exports = () => {
  return (req, res) => {
    //get the path from the request path mounted
    const path = req.baseUrl
    //switch on the path
    switch (path) {
      case '/db/user':
        //TODO:
        //pending implementation
        //can get all of the users that have a linked event, but it will likely
        //be best to get that from the cars that are owned by the event
        return 
      case '/db/car':
        //TODO:
        //pending implementation
        //should likely send back the list of the cars that are linked to an event
        return
      case '/db/event':
        return db.Event.find().then(events => res.json(events));
      default:
        //if the path is not found, send 404
        return res.send('Status(404)')
    }
  }
}