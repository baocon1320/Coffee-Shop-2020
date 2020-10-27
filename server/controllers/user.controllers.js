const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const {registerValidation, loginValidation, loginSchema} = require('../middleware/validation')
const User = require('../models/user');
 
exports.user_signup = async (req, res, next) => {
  const {error} = registerValidation(req.body)

  if(error) return res.status(400).send(err.details[0].message)

  const emailExist = await User.findOne({email: req.body.email});
  if(emailExist) return res.status(400).send('Email already exists')

  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(req.body.password, salt)


  const user = new User({
               _id: new mongoose.Types.ObjectId(),
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              email: req.body.email,
              password: hashPassword,
    
  });
  try{
const savedUser = await user.save()
     res.status(201).json({
              message: 'User created',
            })
      return res.send(savedUser)
  }catch(err){
    res.status(400).send(err)
  }

};

exports.user_login = async (req, res, next) => {



const {error} = loginValidation(req.body);
//let validate  the data before a user
if(error) return res.status(400).send(error.details[0].message)

  const user = await User.findOne({email: req.body.email});

  if(!user) return res.status(400).send('Email is not found')

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if(!validPass) return res.status(400).send('Invalid password')

const token = jwt.sign({_id: user._id}, process.env.JWT_KEY);
res.header('auth-token', token).status(200).json({
            message: 'Auth successful',
            token: token,
            id: user._id
          });
};

exports.user_delete = (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: 'User deleted',
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.user_get = async (req, res, next) => {
  User.find({}, function (err, users) {
    if (err)
      return next(err);
    res.json(users)
})
};
exports.user_getbyid = async (req, res, next) => {
  User.findById(req.params.userId, function (err, user) {
    if (err)
      return next(err);
    res.json(user)
});
};



