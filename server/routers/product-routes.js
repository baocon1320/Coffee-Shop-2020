// import express
const express = require('express');

// import product-controller
const productControllers = require('../controllers/product-controllers');

// import file-upload middleware to updaload image
const fileUpload = require('../middleware/file-upload');

// Import AuthCheck function from Auth Controller
const { authCheck } = require('../controllers/auth-controller');

// using router
const router = express.Router();

// get all product
router.get('/', productControllers.getAllProducts);

// get products by category id
router.get('/category/:cid', productControllers.getProductsByCategory);

// get product by id
router.get('/:pid', productControllers.getProductsById);


// update a product
router.patch('/:pid', authCheck, fileUpload.single('imageUpload'), productControllers.updateProduct);

// add a product
router.post('/', authCheck, fileUpload.single('imageUpload'), productControllers.addProduct);

// remove a product
router.delete('/:pid', authCheck, productControllers.removeAProduct);

/*

const multer = require('multer');
const Product = require('../models/product').default;
const mongoose = require('mongoose');

//set up multer for save images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/menu');
  },
  filename: function (req, file, cb) {
    const now = new Date().toISOString();
    const date = now.replace(/:/g, '-');
    cb(null, date + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});






// get all drinks
//router.get('/drinks', menuControllers.getAllDrinks);

// Get all food
//router.get('/food', menuControllers.getAllFood);

// Add a new item
// router.post('/', menuControllers.addNewItem);

router.post('/', upload.single('productImage'), async (req, res, next) => {
  let fileUrl = req.file.path.replace(/\\/g, '/');

  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    dessert: req.body.dessert,
    drink: req.body.drink,
    content: req.body.content,
    productImage: fileUrl,
  });
  await product
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Created product successfully',
        createdProduct: {
          name: result.name,
          price: result.price,
          content: result.content,

          _id: result._id,
          request: {
            type: 'GET',
            url: 'http://localhost:5000/products/' + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
// get an item by id
//router.get('/:iid', menuControllers.getItemById);
// Edit an item by id
//router.patch('/:iid', menuControllers.editById);
// delete an item by id
//router.delete('/:iid', menuControllers.deleteById);
*/
// export
module.exports = router;
