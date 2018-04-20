const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001

//body-parser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//mongoose setup
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/crwsin", err => {
  if (err) throw err;
  console.log('db connected!')
})

//routes
app.use('/', require('./routes'))

app.listen(port, () => {
  console.log(`🌎  ==> DB now listening on PORT ${port}!`)
})
