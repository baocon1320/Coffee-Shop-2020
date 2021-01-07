//import express
const express = require('express');

// import file-upload middleware to updaload image
const fileUpload = require('../middleware/file-upload');

// import infoController
const infoControllers = require('../controllers/info-controllers');

// Import AuthCheck function from Auth Controller
const { authCheck } = require('../controllers/auth-controller');

// using Router
const router = express.Router();




// Get all info
router.get('/', infoControllers.getInfo);

// update info
router.patch('/', authCheck, infoControllers.updateInfo);

// Update home images
router.patch('/bgImage/:iid', authCheck, fileUpload.single('imageUpload'), infoControllers.updateBgImage);

// Update menu images
router.patch('/menuImage', authCheck, fileUpload.single('imageUpload'), infoControllers.updateMenuImage);

// Update contact images
router.patch('/contactImage', authCheck, fileUpload.single('imageUpload'),  infoControllers.updateContactImage);

// adding info
router.post('/', authCheck, infoControllers.addInfo);

module.exports = router;


