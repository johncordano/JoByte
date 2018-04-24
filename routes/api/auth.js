const router = require('express').Router();
const db = require('../../models');
const AuthenticationController = require('../../controllers/authentication');
const passportService = require('../../config/passport'),
      passport = require('passport');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });  
const requireLogin = passport.authenticate('local', { session: false });  

//const controller = require('../../controllers/authentication.js');


router
  .route("/login"), function(req, res) { AuthenticationController.login };
router
  .route("/signup"), function(req, res) { AuthenticationController.register };

module.exports = router;