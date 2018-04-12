const controller = require('../../controller');
const express = require('express');
const router = express.Router()

//below will set up routes for posting, getting, putting, and deleting a car object in the db
//passing through the path of the route, to be switched on the controller, outputting a function back
router.post('/', controller.postDocument(router.path()))

router.get('/:id', controller.getDocument(router.path()))

router.put('/:id', controller.putDocument(router.path()))

router.delete('/:id', controller.deleteDocument(router.path()))

module.exports = router