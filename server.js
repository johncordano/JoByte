// =============================
//      DEPENDENCIES
// =============================

const logger = require("morgan");
const express = require('express');
// var mongojs = require('mongojs');
// var request = require('request');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const routes = require('./routes');
const dbConnection = require('./database') 
const passport = require('passport');

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
app.use(express.static('./public'));

// use morgan logger to log requests
app.use(logger("dev"));

// Sessions
app.use(
	session({
		secret: 'vizsla-bodhi', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// load ROUTES
// app.use(routes);


//Routes
const authRoute = require('./routes/routes.js')(app,passport);
 
//load passport strategies
require('./passport/passport.js')(passport, db.User);

app.listen(PORT, function() {
  console.log('App running on port', PORT);
});
