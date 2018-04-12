const controller = require('../../controller');
const express = require('express');
const router = express.Router()

//below will set up routes for posting, getting, putting, and deleting a user object in the db
//passing through mounted path according to express docs
//controller will populate the proper function that returns a promise to db
router.post('/', controller.postDocument(router.path()))

router.get('/:id', controller.getDocument(router.path()))

router.put('/:id', controller.putDocument(router.path()))

router.delete('/:id', controller.deleteDocument(router.path()))

module.exports = router