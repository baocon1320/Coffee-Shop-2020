//Environment
require('dotenv').config();

//import express
const express = require('express');

// using Router
const router = express.Router();


// passport
const passport = require('passport');

//Frontend URL
const frontendURL = process.env.REACT_APP_FRONTEND_URL;

// Auth controller
const authController = require('../controllers/auth-controller');


//Authorize with google then auto redirect to "/auth/google/goccafes"
router.get("/google",
    passport.authenticate("google", { scope: ['email', 'profile'] }));

// Return from Google after authenticating
router.get("/google/goccafes",
    passport.authenticate("google", { failureRedirect: frontendURL + "/baocon/login-failure" }),
    authController.authRedirect);

//Authorize with facebook then auto redirect to "/auth/google/goccafes"
router.get('/facebook',
    passport.authenticate('facebook', {scope: ['email']}));

// Return from Facebook after authenticating
router.get('/facebook/goccafes',
    passport.authenticate('facebook', { failureRedirect: frontendURL + "/baocon/login-failure" }),
    authController.authRedirect);


// homepage
// After login success
router.get('/google/success', authController.successAuthen);


// Check login failure
router.get('/google/failure', authController.failureAuthen);


//Logout
// When logout, redirect to client
router.get("/logout", authController.logout);

module.exports = router;