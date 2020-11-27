// Controllers for info

// import info model
const Info = require('../models/info');

// Import HttpError model
const HttpError = require('../models/http-error');

// Get the info
const getInfo = async (req, res, next) => {
  console.log('get info');

  let info;
  try {
    info = await Info.findOne();
    //console.log(info);
  } catch (err) {
    const error = new HttpError('error when getting info', 500);
    return next(error);
  }

  if (!info) {
    const error = new HttpError('info is undefined', 404);
    return next(error);
  }

  res.json({ info: info.toObject({ getters: true }) }); // getters: true => create an id for object
};

// update the info
const updateInfo = (req, res, next) => {
  console.log('update info');
};

// add new info
const addInfo = async (req, res, next) => {
  const {
    name,
    shortAddress,
    address,
    phoneNumber,
    images,
    intro,
    fullIntro,
    bestDrinksIntro,
    hours,
    hoursDetail,
  } = req.body;
  const newInfo = new Info({
    name,
    shortAddress,
    address,
    phoneNumber,
    images,
    intro,
    fullIntro,
    bestDrinksIntro,
    hours,
    hoursDetail,
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
