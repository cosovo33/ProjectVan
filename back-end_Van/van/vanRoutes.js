const express = require('express');
const router = express.Router();
const vanController = require('./vanController');

// Get all vans
router.get('/', vanController.getAll);

// Add a new van
router.post('/', vanController.addOne);

// Update a van by ID
router.put('/:_id', vanController.updateOne);

// Get a van by ID
router.get('/:_id', vanController.getOne);

// Delete a van by ID
router.delete('/:_id', vanController.deleteOne);

// Delete all vans
router.delete('/', vanController.deleteAll);

module.exports = router;
