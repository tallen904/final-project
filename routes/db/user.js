const controller = require('../../controller');
const express = require('express');
const router = express.Router()

//below will set up routes for posting, getting, putting, and deleting a user object in the db
router.post('/', controller.postDocument)

router.get('/:id', controller.getDocument)

router.put('/:id', controller.putDocument)

router.delete('/:id', controller.deleteDocument)

module.exports = router