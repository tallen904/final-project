const controller = require('../../controller');
const express = require('express');
const router = express.Router()

//below will set up routes for posting, getting, putting, and deleting an event object in the db
router.post('/event', controller.event.postEvent)

router.get('/event/:id', controller.event.getEvent)

router.put('/event/:id', controller.event.putEvent)

router.delete('./event/:id', controller.event.deleteEvent)

module.exports = router