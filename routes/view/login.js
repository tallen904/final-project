const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Login Failure')
})

module.exports = router