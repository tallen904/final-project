const mongoose = require('mongoose');
const geocoder = require('node-geocoder')({
  provider : 'google',
  apiKey : 'AIzaSyAwIze81UMw6T5ASTCAD0UWuMh3HlFY92o',
  formatter : null
});
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
  lat : {
    type      : String
  },
  lng : {
    type      : String
  },
  'cars' : [{
  'driver' : {
    type: String
  },
  'car' : {
    type      : Schema.Types.ObjectId,
    ref       : 'Car'
  },
  'createdAt': { type: Date, default: Date.now },
  'updatedAt': { type: Date, default: Date.now }
});

//boilerplate for edit flags
newSchema.pre('save', function(next){
  geocoder.geocode(this.location)
    .then(res => {
      console.log('here')
      //process location and set lat lng into model
      this.lat = res.latitude,
      this.lng = res.longitude
    })
    .catch(err => console.log(err))
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
