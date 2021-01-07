// Controllers for category of menu items

// import Category model
const Category = require('../models/category');

// Import HttpError model
const HttpError = require('../models/http-error');

// Get the category
const getCategory = async (req, res, next) => {
  console.log('get category');

  let category;
  try {
    category = await Category.find();
    //console.log(category);
  } catch (err) {
    const error = new HttpError('error when getting Category of menu item', 500);
    return next(error);
  }

  if (!category) {
    const error = new HttpError('Category is undefined', 404);
    return next(error);
  }

  res.json({ category: category.map(item => item.toObject({ getters: true }))}); // getters: true => create an id for object
};

// Get a category
const getACategory = async (req, res, next) => {
  console.log('get A category');
  let cid = req.params.cid;

  let category;
  try {
    category = await Category.findById(cid);
    //console.log(category);
  } catch (err) {
    const error = new HttpError('error when getting Category of menu item', 500);
    return next(error);
  }

  if (!category) {
    const error = new HttpError('Category is undefined', 404);
    return next(error);
  }

  res.json({ category: category.toObject({ getters: true })}); // getters: true => create an id for object
};

// update the category
const updateCategory = async (req, res, next) => {
  console.log('update category');
  //const cid = req.params.cid;
  let cid = req.params.cid;
  const {
    name,
    products
  } = req.body;
  let category;

  try {
    category = await Category.findById(cid);
  } catch(err) {
    console.log(err);
    const error = new HttpError('error when getting Category for updating', 500);
    return next(error);
  }

  // If we can't find this category
  if (!category) {
    const error = new HttpError('Category is undefined', 404);
    return next(error);
  }
  category.name = name;
  category.products = products;
  //console.log(category);

  try {
    await category.save();
  } catch(err) {
    console.log(err);
    const error = new HttpError('error when update Category', 500);
    return next(error);
  }

  res.status(200).json({ category: category.toObject({ getters: true }) });

};

// add new category
const addCategory = async (req, res, next) => {
  const {
    name
  } = req.body;
  const newCategory = new Category({
    name,
    products: []
  });

  try {
    await newCategory.save();
  } catch (err) {
    const error = new HttpError('error when adding new category', 500);
    return next(error);
  }
  res.status(201).json({ category: newCategory.toObject({ getters: true }) });
};

// remove a category
const removeACategory = async (req, res, next) => {
  console.log('remove a category');
  //const cid = req.params.cid;
  let cid = req.params.cid;
  let category;

  try {
    category = await Category.findById(cid);
  } catch(err) {
    console.log(err);
    const error = new HttpError('error when getting Category for deleting', 500);
    return next(error);
  }

  // If we can't find this category
  if (!category) {
    const error = new HttpError('can\'t find this category', 404);
    return next(error);
  }
  if(category.products.length > 0){
    const error = new HttpError('This category still have products, need to delete first', 400);
    return next(error);
  }
  //console.log(category);

  
  try {
    await category.remove();
  } catch(err) {
    console.log(err);
    const error = new HttpError('error when deleting Category', 500);
    return next(error);
  }

  res.status(200).json({ message: "delete category " + category.name});

};

exports.getCategory = getCategory;
exports.getACategory = getACategory;
exports.updateCategory = updateCategory;
exports.addCategory = addCategory;
exports.removeACategory = removeACategory;
