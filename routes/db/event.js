const controller = require('../../controller');
const express = require('express');
const router = express.Router()

//below will set up routes for posting, getting, putting, and deleting an event object in the db
//passing through the mounted path to be switched on in the controller
router.post('/', controller.postDocument(router.path()))

router.get('/:id', controller.getDocument(router.path()))

router.put('/:id', controller.putDocument(router.path()))

router.delete('/:id', controller.deleteDocument(router.path()))

module.exports = router