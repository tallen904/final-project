const express = require('express')
const router = express.Router()

//collates the smaller routers into a single db router
router.use('/user', require('./user'))

router.use('/car', require('./car'))

router.use('/event', require('./event'))

module.exports = router