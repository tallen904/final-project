const mongoose = require('mongoose')
const db = require('../models')

//posts a single user from the db
module.exports = (req, res) => {
  //posts a user using the passed data from req obj
  db.User.create(req.body)
    .then(user => res.json(user));
}