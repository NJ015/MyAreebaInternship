const express = require('express');
const UserController = require('../controller/User');
const router = express.Router();

// Retrieve all users
router.get('/', UserController.findAll);

// Create a new user
router.post('/', UserController.create);

// Retrieve a single user with userId
router.get('/:id', UserController.findOne);

// Update a user with userId
router.patch('/:id', UserController.update);

// Delete a user with userId
router.delete('/:id', UserController.destroy);

module.exports = router;
