const router = require('express').Router();
const db = require('../../models');

const controller = require('../../controllers/controller.js');

router
  .route('/')
  .post(controller.createAccount);
  // .put(controller.updateAccount);
  
  router
  .route('/:id')
  .post(controller.findAccount);

module.exports = router;