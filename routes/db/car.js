const controller = require('../../controller');
const express = require('express');
const router = express.Router()

//below will set up routes for posting, getting, putting, and deleting a car object in the db
router.post('/car', controller.car.postCar)

router.get('/car/:id', controller.car.getCar)

router.put('/car/:id', controller.car.putCar)

router.delete('./car/:id', controller.car.deleteCar)

module.exports = router