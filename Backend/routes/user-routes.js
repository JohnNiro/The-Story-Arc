const express = require('express');
const router = express.Router();
const userController = require('../controller/user-controller');

// Register a new user
router.post('/register', userController.registerUser);
// Login an existing user
router.post('/users/login', userController.loginUser);

module.exports = router;