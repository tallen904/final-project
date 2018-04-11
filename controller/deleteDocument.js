const mongoose = require('mongoose')
const db = require('../models')

//deletes a single document from the db
module.exports = (req, res) => {
  db.User.findOneAndRemove({ _id : req.params.id})
    //send back confirmation the deletion took place
    .then(data => res.json(data));
}