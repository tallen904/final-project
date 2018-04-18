const express = require('express')
const router = express.Router()

// route is /auth/google
router.use('/google', require('./google'))

module.exports = router