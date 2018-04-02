const router = require('express').Router();
const db = require('../../models');
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

const controller = require('../../controllers/controller.js');

router
  .route("/login").post(controller.findAccount);
router
  .route("/signup").post(controller.createAccount);

module.exports = router;