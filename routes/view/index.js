const path = require('path')
const express = require('express')
const router = express.Router()

router.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
})

module.exports = router