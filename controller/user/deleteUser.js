const mongoose = require('mongoose')
const db = require('../models')

//deletes a single user from the db
module.exports = (req, res) => {
  db.User.findOneAndremove({ _id : req.params.id})
    //send back confirmation the deletion took place
    .then(data => res.json(data));
}