const router = require('express').Router();
const db = require('../../models');

const controller = require('../../controllers/controller.js');

router
  .route('/:id')
  .get(controller.findAllActions)
  .post(controller.createAction);

module.exports = router;
