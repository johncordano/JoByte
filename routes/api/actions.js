const router = require('express').Router();
const db = require('../../models');

const controller = require('../../controllers/controller.js');

router
  .route('/:id')
  .get(controller.findJobActions)
 
router 
 .route('/')
 .get(controller.findAllActions)
 .post(controller.createAction)
 .delete(controller.deleteAction);

module.exports = router;
