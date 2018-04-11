const controller = require('../../controller');
const express = require('express');
const router = express.Router()

//below will set up routes for posting, getting, putting, and deleting a car object in the db
router.post('/car', controller.postDocument)

router.get('/car/:id', controller.getDocument)

router.put('/car/:id', controller.putDocument)

router.delete('/car/:id', controller.deleteDocument)

module.exports = router