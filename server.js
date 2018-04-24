// =============================
//      DEPENDENCIES
// =============================

// var logger = require("morgan");
var express = require('express');
// var mongojs = require('mongojs');
// var request = require('request');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const routes = require('./routes');

// Initialiaze express...
var app = express();

// Require all models
var db = require('./models');
var PORT = process.env.PORT || 8080;

// ===============================
// Configure middleware and DB connection
// ===============================

// using body parser for handling submissions...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static directory...
app.use(express.static('./client/build'));

// // use morgan logger to log requests
// app.use(logger("dev"));

mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/joByte', {});

// load ROUTES
app.use(routes);

app.listen(PORT, function() {
  console.log('App running on port', PORT);
});

app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

module.exports = {  
  // Secret key for JWT signing and encryption
  'secret': 'super secret passphrase',
}