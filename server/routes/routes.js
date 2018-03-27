var express = require('express');
var router = express.Router();
var db = require('../models');

var controller = require('../controllers/controller.js');

module.exports = function(app) {
  app.get('/', controller.index);
  // app.get('/dashboard', controller.scrape);
  // app.get('/addjob', controller.showArticles);
  // app.get('/saved', controller.displaySaved);
  // app.put('/article', controller.savedArticles);
  // app.delete('/article', controller.deleteArticle);
  // app.get('/notes/:id', controller.notes);
  // app.post('/notes/newNote', controller.saveNotes);
  // app.post('/notes/oneNote/:id', controller.oneNote);
  // app.post('/notes/deleteNote', controller.deleteNote);
};