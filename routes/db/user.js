const controller = require('../../controller');
const express = require('express');
const router = express.Router()

//below will set up routes for posting, getting, putting, and deleting a user object in the db
router.post('/user', controller.user.postUser)

router.get('/user/:id', controller.user.getUser)

router.put('/user/:id', controller.user.putUser)

router.delete('./user/:id', controller.user.deleteUser)

module.exports = router