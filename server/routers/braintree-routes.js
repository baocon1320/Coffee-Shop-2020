const express = require('express')

const router = require('express').Router(); 
const{requireSignin, isAuth} = require("../controllers/auth-control")
const {userById} = require("../controllers/user-control")
const {generateToken, processPayment} = require("../controllers/braintree-control")

router.get('/braintree/getToken/:userId', requireSignin, isAuth, generateToken)
router.post(
    "/braintree/payment/:userId",
    requireSignin,
    isAuth,
    processPayment
);

router.param('userId', userById)
module.exports = router