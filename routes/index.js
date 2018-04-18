const express = require('express')
const router = express.Router()

//placeholder views for now
router.use('/', require('./view'))

//setting up authentication path for passportjs
router.use('/auth', require('./auth'))

//set up the route to access the db
//route will look something like /db/MODEL/:id
router.use('/db', require('./db'))

//export a big router with subrouters
//right now it's only the api
module.exports = router