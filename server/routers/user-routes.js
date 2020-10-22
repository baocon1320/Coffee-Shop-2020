const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const UserController = require('../controllers/user.controllers');
const checkAuth = require('../middleware/check-auth');

router.post('/register',jsonParser, UserController.user_signup);

router.post('/login',jsonParser, UserController.user_login);

router.delete('/:userId', checkAuth, UserController.user_delete);

module.exports = router;
