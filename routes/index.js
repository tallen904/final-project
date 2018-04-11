const express = require('express')
const router = express.Router()

//set up the route to access the db
router.use('/db', require('./db'))

//export a big router with subrouters
module.exports = router