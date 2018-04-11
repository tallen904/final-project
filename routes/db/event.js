const controller = require('../../controller');
const express = require('express');
const router = express.Router()

//below will set up routes for posting, getting, putting, and deleting an event object in the db
router.post('/event', controller.postDocument)

router.get('/event/:id', controller.getDocument)

router.put('/event/:id', controller.putDocument)

router.delete('/event/:id', controller.deleteDocument)

module.exports = router