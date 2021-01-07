//import express
const express = require('express');

// import categoryController
const categoryControllers = require('../controllers/category-controllers');

// Import AuthCheck function from Auth Controller
const { authCheck } = require('../controllers/auth-controller');

// using Router
const router = express.Router();




// Get all category
router.get('/', categoryControllers.getCategory);

// Get a category
router.get('/:cid', categoryControllers.getACategory);

// update category
router.patch('/:cid', authCheck, categoryControllers.updateCategory);

// adding category
router.post('/', authCheck, categoryControllers.addCategory);

// adding category
router.delete('/:cid', authCheck, categoryControllers.removeACategory);

module.exports = router;


