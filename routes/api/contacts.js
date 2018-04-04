const router = require('express').Router();
const db = require('../../models');

const controller = require('../../controllers/controller.js');

router
  .route('/')
  .get(controller.findAllContacts)
  .post(controller.createContact)
  .delete(controller.deleteContact);

module.exports = router;
