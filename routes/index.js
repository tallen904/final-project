const express = require('express')
const router = express.Router()

//set up the route to access the db
//route will look something like /db/MODEL/:id
router.use('/db', require('./db'))

//export a big router with subrouters
//right now it's only the api
module.exports = router