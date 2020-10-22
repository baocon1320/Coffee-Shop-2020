//include dotenv to loads environment variables from a .env file process.env
require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
app.use(cors());

//HTTP request logger
app.use(morgan('tiny'));
// For info routes
const infoRoutes = require('./routers/info-routes');

// For menu routes
const menuRoutes = require('./routers/menu-routes');

const orderRoutes = require('./routers/order-routes')

const userRoutes = require('./routers/user-routes')
// import HttpError model
const HttpError = require('./models/http-error');
// EJS
app.set('view engine', 'ejs');
app.get('/menuform', (req, res) => res.render('menu-form'));
// For bodyParser
app.use(bodyParser.json());

// serving file from server, this case for uploaded images
// app.use('/uploads/images', express.static(path.join('uploads', 'images')));
// app.use(express.static('./upload'));
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
// app.use('/menu', menuRoutes);
app.use('/products', menuRoutes);

app.use('/orders', orderRoutes);
app.use('/user', userRoutes)
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
    useCreateIndex:true,
  })
  .then(() => {
    // app.listen(port, function (res) {
    console.log('server running on port 5000');
    // });
  })
  .catch((err) => {
    console.log(err);
  });
