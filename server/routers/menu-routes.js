// import express
const express = require('express');

// import menu-controller
const menuControllers = require('../controllers/menu-controllers');

// using router
const router = express.Router();

// get all menu
router.get('/', menuControllers.getAllMenu);

// get all drinks
router.get('/drinks', menuControllers.getAllDrinks);

// Get all food 
router.get('/food', menuControllers.getAllFood);

// Add a new item
router.post('/', menuControllers.addNewItem);

// get an item by id
router.get('/:iid', menuControllers.getItemById);


// export
module.exports = router;