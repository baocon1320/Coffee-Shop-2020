const express = require('express')
const router = express.Router()
const {signup, signin, signout} = require("../controllers/auth-control")
const {userSignupValidator} = require('../validator/index')

router.post('/signup', userSignupValidator, signup)

router.post('/signin', signin)

router.get('/signout', signout)




module.exports = router