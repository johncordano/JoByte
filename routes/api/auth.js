const router = require('express').Router();
const db = require('../../models');

const controller = require('../../controllers/controller.js');

router
  .route('/')
  // .get(controller.findAllJobs)
  .post(controller.createAccount);
  // .put(controller.updateJob);

module.exports = router;