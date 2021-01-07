//include dotenv to loads environment variables from a .env file process.env
require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');


// cors
//var cors = require('cors')

// For handle delete file
const fs = require('fs');

// For passport and session
const session = require('express-session');
const passport = require('passport');
const passportSetup = require("./config/passport-setup"); // important setup passport


// import Manager model
const Manager = require('./models/manager');

// For Oauth 2
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// For routes
const infoRoutes = require('./routers/info-routes');
const categoryRoutes = require('./routers/category-routes');
const productRoutes = require('./routers/product-routes');
const orderRoutes = require('./routers/order-routes')
const userRoutes = require('./routers/user-routes')
const stripeRoutes = require('./routers/stripe-routes')
const authRoutes = require('./routers/auth-routers');

// import HttpError model
const HttpError = require('./models/http-error');

const app = express();
//app.use(cors());

//HTTP request logger
app.use(morgan('tiny'));

// EJS
app.set('view engine', 'ejs');
app.get('/menuform', (req, res) => res.render('menu-form'));
// For bodyParser
app.use(bodyParser.json());


//Frontend URL
const frontendURL = process.env.REACT_APP_FRONTEND_URL;


// serving file from server, this case for uploaded images
// app.use('/uploads/images', express.static(path.join('uploads', 'images')));
// app.use(express.static('./upload'));
// make photo static
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

/*
// set CORS headers avoid CORS error
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');

  next();
});
*/

// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: frontendURL, // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

// Session for loging 
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { _expires: (10 * 60 * 1000) }
}))

// initialize passport for express application
app.use(passport.initialize());
app.use(passport.session());


// use routes
app.use('/auth', authRoutes)
app.use('/info', infoRoutes);
app.use('/category', categoryRoutes)

// app.use('/menu', menuRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes)
app.use('/checkout', stripeRoutes)


// Handle unsupported routes erro
app.use((req, res, next) => {
  const error = new HttpError('Could not find this route', 404);
  throw error;
});

// app.use(express.static('./uploads'));
// handling error
app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, err => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'an unknown error occurred!' });
});

// Listen to our 5000 port
let port = process.env.PORT;
if (port == null || port == '') {
  port = 5000;
}
app.listen(port, function (res) {
  console.log('server running on port 5000');
});
// Connect to database
// Get username and password from .env file
const dbUsername = process.env.DBUSERNAME;
const dbPass = process.env.DBPASSWORD;
const dbName = process.env.DBNAME;
const dbConnect =
  'mongodb+srv://' +
  dbUsername +
  ':' +
  dbPass +
  '@cluster0.qrjam.mongodb.net/' +
  dbName +
  '?retryWrites=true&w=majority';
// console.log(dbConnect);

mongoose
  .connect(dbConnect, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    // app.listen(port, function (res) {
    console.log('server running on port 5000');
    // });
  })
  .catch((err) => {
    console.log(err);
  });
