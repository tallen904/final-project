const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
  'name': {
    type: String,
    required: true
  },
  'time': {
    type      : Date,
    required  : true
  },
  'location' : {
    //the string here will be the geo tag for the event
    type      : String,
    required  : true
  },
  'cars' : [{
    type      : Schema.Types.ObjectId,
    ref       : 'Car'
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



module.exports = mongoose.model('Event', newSchema);
