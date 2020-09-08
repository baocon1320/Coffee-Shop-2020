// Controllers for menu

// Import HttpError model
const HttpError = require('../models/http-error');

// Get All Menu
const getAllMenu = (req, res, next) => {
    console.log('get all menu');
};

// Get All Drink
const getAllDrinks = (req, res, next) => {
    console.log('get all drink');
};

// Get All Food 
const getAllFood = (req, res, next) => {
    console.log('get all food');
};

// Add a new Item
const addNewItem = (req, res, next) => {
    console.log('add a new item');
};

// Get item by Id
const getItemById = (req, res, next) => {
    const itemId = req.params.iid;
    const foundItem = '';
    console.log('get an item by id ' + itemId);

    if(!foundItem){
        throw(new HttpError('can\'t found', 404));
    }
    res.json({foundItem});
}

exports.getAllMenu = getAllMenu;
exports.getAllDrinks = getAllDrinks;
exports.getAllFood = getAllFood;
exports.addNewItem = addNewItem;
exports.getItemById = getItemById;