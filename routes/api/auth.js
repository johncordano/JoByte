const router = require('express').Router();
const db = require('../../models');

const controller = require('../../controllers/controller.js');

router
  .route("/login").post(controller.findAccount);
router
  .route("/signup").post(controller.createAccount);

module.exports = router;