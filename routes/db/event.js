const controller = require('../../controller');
const express = require('express');
const router = express.Router()

//below will set up routes for posting, getting, putting, and deleting an event object in the db
//passing through mounted path according to express docs
//controller will populate the proper function that returns a promise to db
router.post('/', controller.postDocument())

router.get('/:id', controller.getDocument())

router.put('/:id', controller.putDocument())

router.delete('/:id', controller.deleteDocument())

//get all doc path
router.get('/all', controller.allDocuments())

module.exports = router