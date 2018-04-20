const controller = require('../../controller');
const express = require('express');
const router = express.Router()

//will get all of the populated users (or riders) from a car, given an id
router.get('/all/:id', controller.allDocuments())

//below will set up routes for posting, getting, putting, and deleting a car object in the db
//passing through mounted path according to express docs
//controller will populate the proper function that returns a promise to db
router.post('/', controller.postDocument())

router.get('/:id', controller.getDocument())

router.put('/:id', controller.putDocument())

router.delete('/:id', controller.deleteDocument())

module.exports = router