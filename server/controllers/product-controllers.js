// Controllers for menu

// For handle delete file
const fs = require('fs');

// Product model
const Product = require('../models/product');

// import Category model
const Category = require('../models/category');

const mongoose = require('mongoose');

// Import HttpError model
const HttpError = require('../models/http-error');
// const { Mongoose } = require('mongoose');
//const menuControllers = require('../controllers/menu-controllers');

// Get all products
const getAllProducts = async (req, res, next) => {
  console.log('get all products');

  let products;
  try {
    products = await Product.find().populate('category');;
  } catch (err) {
    const error = new HttpError('error when getting all products', 500);
    console.log(error);
    return next(error);
  }

  if (!products) {
    const error = new HttpError('List of Products is undefined', 404);
    return next(error);
  }

  res.json({ products: products.map(item => item.toObject({ getters: true }))}); // getters: true => create an id for object
};

// Get products by category
const getProductsByCategory = async (req, res, next) => {
  const categoryId = req.params.cid;
  console.log('get products by Category' + categoryId);

  let products;
  try {
    products = await Product.find({category: categoryId});
  } catch (err) {
    const error = new HttpError('error when getting products by category id ' + categoryId, 500);
    //console.log(error);
    return next(error);
  }

  if (!products) {
    const error = new HttpError('List of Products is undefined', 404);
    return next(error);
  }

  res.json({ products: products.map(item => item.toObject({ getters: true }))}); // getters: true => create an id for object
};

// Get products by category
const getProductsById = async (req, res, next) => {
  const productId = req.params.pid;
  console.log('get products by product id' + productId);

  let product;
  try {
    product = await Product.findById(productId);
  } catch (err) {
    const error = new HttpError('error when getting product by product id ' + productId, 500);
    //console.log(error);
    return next(error);
  }

  if (!product) {
    const error = new HttpError('Product is undefined', 404);
    return next(error);
  }

  res.json({ product: product.toObject({ getters: true })}); // getters: true => create an id for object
};

// update the category
const updateProduct = async (req, res, next) => {
  console.log('update product');
  //const cid = req.params.cid;
  let pid = req.params.pid;
  const {
    name,
    price,
    content,
    category
  } = req.body;
  let product;

  try {
    product = await Product.findById(pid).populate('category');
  } catch(err) {
    console.log(err);
    const error = new HttpError('error when getting product for updating', 500);
    return next(error);
  }

  // If we can't find this product
  if (!product) {
    const error = new HttpError('Can\'t find this product', 404);
    return next(error);
  }

  product.name = name;
  product.price = price;
  product.content = content;
  let imagePath;
  if(req.file){
    imagePath = product.productImage;
    product.productImage =  req.file.path;
  }
  //product.productImage = productImage;
  //console.log(category);
  //console.log(product.category);
  //product.category = category;

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    if(category !== product.category._id){
      await product.category.products.pull(product);
      await product.category.save({session: sess});
      let productCategory;
      try {
        productCategory = await Category.findById(category);
      } catch (err) {
        const error = new HttpError('error when getting Category for adding product', 500);
        return next(error);
      }

      if (!productCategory) {
        const error = new HttpError('Category is undefined', 404);
        return next(error);
      }
      await productCategory.products.push(product);
      await productCategory.save({session: sess});
      product.category = productCategory;
      await product.save({session: sess});
    }

    await sess.commitTransaction();
  } catch(err) {
    console.log(err);
    const error = new HttpError('error when update product', 500);
    return next(error);
  }

  // Delete old image if user change
  if(imagePath){
    fs.unlink(imagePath, err => {
      console.log(err);
    });
  }
  res.status(200).json({ product: product.toObject({ getters: true }) });

};

// add new product
const addProduct = async (req, res, next) => {
  if(!req.file){
    const error = new HttpError('Missing image for this product', 400);
    return next(error);
  }
  const {
    name,
    price,
    content,
    category
  } = req.body;
  const productImage =  req.file.path;
  const newProduct = new Product({
    name,
    price,
    content,
    productImage,
    category
  });
  
  let productCategory;
  try {
    productCategory = await Category.findById(category);
  } catch (err) {
    const error = new HttpError('error when getting Category for adding product', 500);
    return next(error);
  }

  if (!productCategory) {
    const error = new HttpError('Category is undefined', 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await newProduct.save({session: sess});
    productCategory.products.push(newProduct);
    await productCategory.save({session: sess});
    await sess.commitTransaction();
    
  } catch (err) {
    console.log(err);
    const error = new HttpError('error when adding new product', 500);
    return next(error);
  }
  res.status(201).json({ product: newProduct.toObject({ getters: true }) });
};

// remove a category
const removeAProduct= async (req, res, next) => {
  console.log('remove a product');
  let pid = req.params.pid;
  let product;

  try {
    product = await Product.findById(pid).populate('category');
  } catch(err) {
    console.log(err);
    const error = new HttpError('error when getting product for deleting', 500);
    return next(error);
  }

  // If we can't find this category
  if (!product) {
    const error = new HttpError('can\'t find this product', 404);
    return next(error);
  }

  
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await product.remove({session: sess});
    product.category.products.pull(product);
    await product.category.save({session: sess});
    await sess.commitTransaction();
  } catch(err) {
    console.log(err);
    const error = new HttpError('error when deleting product', 500);
    return next(error);
  }

  res.status(200).json({ message: "delete product " + product.name});

};


/*
const getAllMenu = async (req, res, next) => {
  await Product.find()
    .select('name price _id productImage content drink dessert')
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        products: docs.map((doc) => {
          return {
            name: doc.name,
            price: doc.price,
            content: doc.content,
            drink: doc.drink,
            dessert: doc.dessert,
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
const getAllDrinks = async (req, res, next) => {
  let allDrinks = [];

  await Product.find()

    .select('name price _id productImage content drink dessert')
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        products: docs.map((doc) => {
          return {
            name: doc.name,
            price: doc.price,
            content: doc.content,
            drink: doc.drink,
            dessert: doc.dessert,
            productImage: doc.productImage,
            _id: doc._id,
            request: {
              type: 'GET',
              url: 'http://localhost:5000/products/' + doc._id,
            },
          };
        }),
      };

      for (let i = 0; i < response.count; i++) {
        const drink = response.products[i].drink;
        let drinks = response.products;
        if (drink == true) {
          allDrinks.push(drinks[i]);
        }
      }
      res.status(200).json(allDrinks);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

// Get All Food
const getAllFood = async (req, res, next) => {
  let allFoods = [];

  await Product.find()

    .select('name price _id productImage content drink dessert')
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        products: docs.map((doc) => {
          return {
            name: doc.name,
            price: doc.price,
            content: doc.content,
            drink: doc.drink,
            dessert: doc.dessert,
            productImage: doc.productImage,
            _id: doc._id,
            request: {
              type: 'GET',
              url: 'http://localhost:5000/products/' + doc._id,
            },
          };
        }),
      };

      for (let i = 0; i < response.count; i++) {
        const dessert = response.products[i].dessert;
        let desserts = response.products;
        if (dessert == true) {
          allFoods.push(desserts[i]);
        }
      }
      res.status(200).json(allFoods);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
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
const editById = async (req, res, next) => {
  const itemId = req.params.iid;
  console.log('Edit an item by id ' + itemId);
  await Product.update({ _id: itemId })
    .select('name price _id productImage')
    .exec()
    .then((result) => {
      res.status(200).json({
        message: 'Product updated',
        request: {
          type: 'GET',
          url: 'http://localhost:5000/products' + itemId,
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

*/
exports.getAllProducts = getAllProducts;
exports.getProductsByCategory = getProductsByCategory;
exports.getProductsById =  getProductsById;
exports.updateProduct = updateProduct;
exports.addProduct = addProduct;
exports.removeAProduct = removeAProduct;

/*
// should remove
exports.getAllFood = getAllFood;
exports.addNewItem = addNewItem;
exports.getItemById = getItemById;
exports.deleteById = deleteById;
exports.editById = editById;
*/