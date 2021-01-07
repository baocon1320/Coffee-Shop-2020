//Environment
require('dotenv').config();

//Frontend URL
const frontendURL = process.env.REACT_APP_FRONTEND_URL;


// Import HttpError model
const HttpError = require('../models/http-error');


// Redirect to server after authenticating
const authRedirect = async function (req, res, next) {
    res.redirect(frontendURL + "/baocon/");
};

// Success Authenticating
const successAuthen = async function (req, res, next) {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "user has successfully authenticated",
            user: req.user,
            cookies: req.cookies
        });
    } else {
        const error = new HttpError('No login found', 404);
        return next(error);
    }

};


// Failure Authenticating
const failureAuthen = async function (req, res, next) {
    res.redirect(frontendURL + "/baocon/login");
};

// Logout
const logout = async function (req, res, next) {
    req.logout();
    res.redirect(frontendURL + '/baocon/login');
};


// For checking authentication
const authCheck = (req, res, next) => {
    console.log(req);
    if (!req.user) {
      res.status(401).json({
        authenticated: false,
        message: "bạn không có quyền truy cập đến site này"
      });
    } else {
      next();
    }
  };

exports.authRedirect = authRedirect;
exports.successAuthen = successAuthen;
exports.failureAuthen = failureAuthen;
exports.logout = logout;
exports.authCheck = authCheck;
