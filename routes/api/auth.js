const router = require('express').Router();
const db = require('../../models');

const controller = require('../../controllers/controller.js');

router
  .route("/login").post(controller.findAccount);
router
  .route("/signup").post(controller.createAccount);
// router
//   .route('/signup')
//   .post(controller.createAccount)
//   // .put(controller.updateAccount);
// 
// router
//   .route('/login')
//   .post(controller.findAccount);

module.exports = router;