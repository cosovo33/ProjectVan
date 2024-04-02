const express = require('express');
const router = express.Router();
const reservationController = require('./reservationController');

/**
 * @route GET /reservations
 * @description Get all reservations.
 * @access Public
 */
router.get('/', reservationController.getAll);

/**
 * @route POST /reservations
 * @description Add a new reservation.
 * @access Public
 */
router.post('/', reservationController.addOne);

/**
 * @route POST /reservations/price
 * @description Calculate the price and returns estimatedPrice value.
 * @access Public
 */
 router.post('/price', reservationController.priceCalculation);

/**
 * @route PUT /reservations/:_id
 * @description Update a reservation by ID.
 * @access Public
 */
router.put('/:_id', reservationController.updateOne);

/**
 * @route GET /reservations/:_id
 * @description Get a reservation by ID.
 * @access Public
 */
router.get('/:_id', reservationController.getOne);

/**
 * @route DELETE /reservations/:_id
 * @description Delete a reservation by ID.
 * @access Public
 */
router.delete('/:_id', reservationController.deleteOne);

/**
 * @route DELETE /reservations
 * @description Delete all reservations.
 * @access Public
 */
router.delete('/', reservationController.deleteAll);

module.exports = router;