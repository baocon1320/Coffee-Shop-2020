//import express
const express = require('express');

// import infoController
const infoControllers = require('../controllers/info-controllers');

// using Router
const router = express.Router();




// Get all info
router.get('/', infoControllers.getInfo);

// update info
router.patch('/', infoControllers.updateInfo);

// adding info
router.post('/', infoControllers.addInfo);

module.exports = router;


