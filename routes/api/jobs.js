const router = require('express').Router();
const db = require('../../models');

const controller = require('../../controllers/controller.js');

// Matches with "/api/books"
router
  .route('/')
  .get(controller.findAllJobs)
  .post(controller.createJob)
  .put(controller.updateJob);

module.exports = router;
