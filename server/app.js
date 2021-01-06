//include dotenv to loads environment variables from a .env file process.env
require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');

//HTTP request logger
app.use(morgan('tiny'));
// For info routes
const infoRoutes = require('./routers/info-routes');
const stripeRoutes = require('./routers/stripe-routes')
// import routes
const authRoutes = require('./routers/auth-routes');
const userRoutes = require('./routers/user-routes');
const categoryRoutes = require('./routers/category-routes');
const productRoutes = require('./routers/product-routes');
const orderRoutes = require('./routers/order-routes');
const brainTreeRoutes = require('./routers/braintree-routes');


// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(expressValidator());

// import HttpError model
const HttpError = require('./models/http-error');
// EJS
app.set('view engine', 'ejs');
app.get('/menuform', (req, res) => res.render('menu-form'));

// make photo static
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// set CORS headers avoid CORS error
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

// use routes
app.use('/info', infoRoutes);
app.use('/checkout', stripeRoutes)
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', infoRoutes); 
app.use('/api', brainTreeRoutes); 

app.use('/api', orderRoutes); 



// Handle unsupported routes erro
app.use((req, res, next) => {
  const error = new HttpError('Could not find this route', 404);
  throw error;
});
// app.use(express.static('./uploads'));


// handling error
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'an unknown error occurred!' });
});
// Connect to database
// Get username and password from .env file
const dbUsername = process.env.DBUSERNAME;
const dbPass = process.env.DBPASSWORD;
const dbName = process.env.DBNAME;
// uncommit to run bao's DB
// const dbConnect =
//   'mongodb+srv://' +
//   dbUsername +
//   ':' +
//   dbPass +
//   '@cluster0.qrjam.mongodb.net/' +
//   dbName +
//   '?retryWrites=true&w=majority';
const dbConnect = process.env.MONGO_URI
mongoose
  .connect(dbConnect, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
  })
  .then(() => {
    // app.listen(port, function (res) {
    console.log('connected DB');
    // });
  })
  .catch((err) => {
    console.log(err);
  });

  // Listen to our 5000 port
let port = process.env.PORT;
if (port == null || port == '') {
  port = 5000;
}
app.listen(port, function (res) {
  console.log('server running on port 5000');
});