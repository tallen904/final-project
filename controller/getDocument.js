const mongoose = require('mongoose')
const db = require('../models')

//gets a single user from the db
module.exports = (req, res) => {
  db.User.findById(req.params.id)
    .then(user => res.json(user));
}