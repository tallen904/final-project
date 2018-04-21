const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
  'name': {
    type      : String,
    required  : true
  },
  'seats': {
    //seats is potentially optional, if you're just signed up as a rider
    type      : Number
  },
  'email': {
    //need email validation
    type      : String,
    required  : true
  },
  'password' : {
    type : String
  },
  'events': [{
    type      : Schema.Types.ObjectId,
    ref       : 'Event'
  }],
  'createdAt': { type: Date, default: Date.now },
  'updatedAt': { type: Date, default: Date.now }
});

//boilerplate for edit flags
newSchema.pre('save', function(next){
  this.updatedAt = Date.now();
  next();
});

newSchema.pre('update', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});

newSchema.pre('findOneAndUpdate', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});



module.exports = mongoose.model('User', newSchema);
