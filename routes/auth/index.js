const express = require('express')
const router = express.Router()

// /auth/local
router.use('/local', require('./local'))

// /auth/google
router.use('/google', require('./google'))

module.exports = router