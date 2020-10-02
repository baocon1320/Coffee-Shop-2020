// Controllers for menu
const Menu = require('../models/product');
// Import HttpError model
const HttpError = require('../models/http-error');
const menuControllers = require('../controllers/menu-controllers');

const Product = require('../models/product');
// Get All Menu
const getAllMenu = async (req, res, next) => {
  await Product.find()
    .select('name price _id productImage content')
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        products: docs.map((doc) => {
          return {
            name: doc.name,
            price: doc.price,
            content: doc.content,
            productImage: doc.productImage,
            _id: doc._id,
            request: {
              type: 'GET',
              url: 'http://localhost:5000/products/' + doc._id,
            },
          };
        }),
      };

      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
// Get All Drink
const getAllDrinks = (req, res, next) => {};

// Get All Food
const getAllFood = (req, res, next) => {
  console.log('get all food');
};

// Add a new Item
const addNewItem = async (req, res, next) => {
  let fileUrl = req.file.path.replace(/\\/g, '/');

  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
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
};

// Get item by Id
const getItemById = (req, res, next) => {
  const itemId = req.params.iid;
  console.log('get an item by id ' + itemId);
  Product.findById(itemId)
    .select('name price _id productImage')
    .exec()
    .then((doc) => {
      console.log('From database', doc);
      if (doc) {
        res.status(200).json({
          product: doc,
          request: {
            type: 'GET',
            url: 'http://localhost:5000/products',
          },
        });
      } else {
        res
          .status(404)
          .json({ message: 'No valid entry found for provided ID' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

const deleteById = async (req, res, next) => {
  const itemId = req.params.iid;
  console.log('delete an item by id ' + itemId);
  await Product.remove({ _id: itemId })
    .select('name price _id productImage')
    .exec()
    .then((result) => {
      res.status(200).json({
        message: 'Product deleted',
        request: {
          type: 'POST',
          url: 'http://localhost:5000/products',
          body: { name: 'String', price: 'Number' },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
exports.getAllMenu = getAllMenu;
exports.getAllDrinks = getAllDrinks;
exports.getAllFood = getAllFood;
exports.addNewItem = addNewItem;
exports.getItemById = getItemById;
exports.deleteById = deleteById;
