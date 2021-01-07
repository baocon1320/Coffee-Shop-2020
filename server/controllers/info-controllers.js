// Controllers for info

// import info model
const Info = require('../models/info');

// For handle delete file
const fs = require('fs');

// Import HttpError model
const HttpError = require('../models/http-error');

// Get the info
const getInfo = async (req, res, next) => {
  console.log('get info');

  let info;
  try {
    info = await Info.findOne(); // There is only 1 object for info document
    //console.log(info);
  } catch (err) {
    const error = new HttpError('error when getting info', 500);
    return next(error);
  }

  if (!info) {
    const error = new HttpError('info is undefined', 404);
    return next(error);
  }

  res.status(200).json({ info: info.toObject({ getters: true }) }); // getters: true => create an id for object
};

// update the info
const updateInfo = async (req, res, next) => {

  const {
    name,
    shortAddress,
    address,
    phoneNumber,
    email,
    intro,
    fullIntro,
    bestDrinksIntro,
    hours,
    hoursDetail,
  } = req.body;
  let info;
  try {
    info = await Info.findOne();
  } catch (err) {
    const error = new HttpError('error when getting info to update', 500);
    return next(error);
  }  
  info.name = name;
  info.shortAddress = shortAddress;
  info.address = address;
  info.phoneNumber = phoneNumber;
  info.email = email;
  info.intro = intro;
  info.fullIntro = fullIntro;
  info.bestDrinksIntro = bestDrinksIntro;
  info.hours = hours;
  info.hoursDetail = hoursDetail;

  try {
    await info.save();
  } catch (err) {
    const error = new HttpError('error when update new info', 500);
    console.log(err);
    return next(error);
  }
  res.status(200).json({ info: info.toObject({ getters: true }) });
};

// update the home background images
const updateBgImage = async (req, res, next) => {

  const {
    title,
    content
  } = req.body;
  let info;
  try {
    info = await Info.findOne();
  } catch (err) {
    const error = new HttpError('error when getting info to update', 500);
    return next(error);
  }  
  let img = info.images[info.images.findIndex(image => image._id == req.params.iid)];
  if(!img){
    const error = new HttpError('error when getting this image', 500);
    return next(error);
  }

  // Set new content
  img.title = title;
  img.content = content;
  let imagePath;

  // Check if change image
  if(req.file){
    imagePath = img.src;
    img.src =  req.file.path;
    //console.log("come here get req");
  }


  try {
    await info.save();
  } catch (err) {
    const error = new HttpError('error when update home background image', 500);
    console.log(err);
    return next(error);
  }

  // Delete old image if user change
  if(imagePath){
    //console.log("come here delete");
    fs.unlink(imagePath, err => {
      console.log(err);
    });
  }
  res.status(200).json({ info: info.toObject({ getters: true }) });
};

// update the Menu background images
const updateMenuImage = async (req, res, next) => {
  if(!req.file){
    const error = new HttpError('There is no image to update', 400);
    return next(error);
  }
  let info;
  try {
    info = await Info.findOne();
  } catch (err) {
    const error = new HttpError('error when getting info to update', 500);
    return next(error);
  }  
  let imagePath;
  imagePath = info.menuImage;
  info.menuImage =  req.file.path;
  try {
    await info.save();
  } catch (err) {
    const error = new HttpError('error when update menu background image', 500);
    console.log(err);
    return next(error);
  }

  // Delete old image if user change
  if(imagePath){
    //console.log("come here delete");
    fs.unlink(imagePath, err => {
      console.log(err);
    });
  }
  res.status(200).json({ info: info.toObject({ getters: true }) });
};

// update the Contact background images
const updateContactImage = async (req, res, next) => {
  if(!req.file){
    const error = new HttpError('There is no image to update', 400);
    return next(error);
  }
  let info;
  try {
    info = await Info.findOne();
  } catch (err) {
    const error = new HttpError('error when getting info to update', 500);
    return next(error);
  }  
  let imagePath;
  imagePath = info.contactImage;
  info.contactImage =  req.file.path;
  try {
    await info.save();
  } catch (err) {
    const error = new HttpError('error when update contact background image', 500);
    console.log(err);
    return next(error);
  }

  // Delete old image if user change
  if(imagePath){
    //console.log("come here delete");
    fs.unlink(imagePath, err => {
      console.log(err);
    });
  }
  res.status(200).json({ info: info.toObject({ getters: true }) });
};

// add new info
const addInfo = async (req, res, next) => {
  const {
    name,
    shortAddress,
    address,
    phoneNumber,
    email,
    images,
    intro,
    fullIntro,
    bestDrinksIntro,
    hours,
    hoursDetail,
    menuImage,
    contactImage
  } = req.body;
  const newInfo = new Info({
    name,
    shortAddress,
    address,
    phoneNumber,
    email,
    images,
    intro,
    fullIntro,
    bestDrinksIntro,
    hours,
    hoursDetail,
    menuImage,
    contactImage
  });

  try {
    await newInfo.save();
  } catch (err) {
    const error = new HttpError('error when adding new info', 500);
    return next(error);
  }
  res.status(201).json({ info: newInfo });
};

exports.getInfo = getInfo;
exports.updateInfo = updateInfo;
exports.addInfo = addInfo;
exports.updateBgImage = updateBgImage;
exports.updateMenuImage = updateMenuImage;
exports.updateContactImage = updateContactImage;
