const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const newSchema = new Schema({
  'seats': {
    type      : Number,
    required  : true
  },
  'driver': {
    //should reference the user who is the driver
    type: Schema.Types.ObjectId,
    ref : 'User',
    required : true
  },
  //points to event the car belongs to
  'event' : {
    type  : Schema.Types.ObjectId,
    ref   : 'Event'
  },
  'riders': [{
    //allows us to populate the users that belong to this car
    type: Schema.Types.ObjectId,
    ref : 'User'
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



module.exports = mongoose.model('Car', newSchema);
