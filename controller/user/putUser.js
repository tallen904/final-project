const mongoose = require('mongoose')
const db = require('../models')

//updates a single user from the db
module.exports = (req, res) => {
  //find by the id passed in request
  //update the document pased on the passed params
  //should be in the form { key : newVal }
  db.User.findOneAndUpdate({ _id : req.params.id }, { $set : req.body })
    .then(user => res.json(user));
}