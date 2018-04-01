var db = require('../models');

module.exports = {

// ================================
//            JOB METHODS
// ================================

  findAllJobs: function(req, res) {
    db.Job.find().sort({status: 1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createJob: function(req, res) {
    db.Job.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteJob: function(req, res) {
    db.Job.deleteOne({_id:req.query.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateJob: function(req, res) {
    db.Job.update(
      { _id: req.body.id },
      {
        $set: {
          company: req.body.company,
          position: req.body.position,
          link: req.body.link,
          status: req.body.status
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

// ================================
//            ACTION METHODS
// ================================

  findJobActions: function(req, res) {
    db.Action.find({ jobId: req.params.id }).sort({ date: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllActions: function(req, res) {
    db.Action.find({}).sort({ date:1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createAction: function(req, res) {
    db.Action.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteAction: function(req, res) {
    db.Action.deleteOne({_id: req.query.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  
  
  createAccount: function(req, res) {
        console.log(req.body);
        
    db.User.create(req.body)
    //  .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAccount: function(req, res) {
    // fetch user and test password verification
    console.log("req.body", req.body);
    
    db.User.findOne({ email: req.body.email }, function(err, user) {
        console.log("req.email", req.body.email);
        console.log("req.pw", req.body.password);
        if (err) throw err;
    
        // test a matching password
        user.comparePassword(req.body.password, function(err, isMatch) {
            if (err) throw err;
            console.log('does password match', isMatch); // -&gt; Password123: true
        });
    
        res.redirect('/');
        console.log(user);
        // test a failing password
        // user.comparePassword(req.body.password, function(err, isMatch) {
        //     if (err) throw err;
        //     console.log('123Password:', isMatch); // -&gt; 123Password: false
        // });
    });
  }  
};

// exports.index = (req, res) => {
//   db.Article.find({})
//     .then(function(dbArticle) {
//       // If all Users are successfully found, send them back to the client
//       var hbsArticleObject = {
//         articles: dbArticle
//       };
//       // console.log(dbArticle);

//       res.render('index', hbsArticleObject);
//     })
//     .catch(function(err) {
//       // If an error occurs, send the error back to the client
//       res.json(err);
//     });
// };

// // Routes
// exports.scrape = (req, res) => {
//   request('https://techcrunch.com/', function(error, response, html) {
//     var $ = cheerio.load(html);

//     var results = {};

//     $('div.post-block').each(function(i, element) {
//       results.headline = $(this)
//         .find('h2')
//         .text();
//       results.body = $(this)
//         .find('div.post-block__content')
//         .text();
//       results.link = $(this)
//         .find('a')
//         .attr('href');
//       results.imgUrl = $(this)
//         .find('div.post-block__media picture')
//         .find('img')
//         .attr('src');

//       console.log('results', results.imgUrl);

//       var entry = new db.Article(results);
//       entry.save(function(err, doc) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(doc);
//         }
//       });
//     });
//   });
// };

// exports.showArticles = (req, res) => {
//   db.Article.find({})
//     .then(data => res.json(data))
//     .catch(err => res.json(err));
// };

// exports.displaySaved = (req, res) => {
//   db.Article.find({ saved: true })
//     .then(function(data) {
//       var hbsObject = {};
//       hbsObject.savedArticles = data;
//       // console.log(hbsObject)
//       res.render('saved', hbsObject);
//     })
//     .catch(function(err) {
//       res.json(err);
//     });
// };

// exports.savedArticles = (req, res) => {
//   db.Article.update({ _id: Object(req.body.id) }, { $set: { saved: true } }).then(function(data) {
//     res.json(data);
//   });
// };

// exports.deleteArticle = (req, res) => {
//   db.Article.update({ _id: Object(req.body.id) }, { $set: { saved: false } }).then(function(result) {
//     console.log('Article deleted');
//     return res.status(200).end();
//   });
// };

// exports.notes = (req, res) => {
//   db.Article.findOne({ _id: Object(req.body.id) })
//     .populate('notes')
//     .then(results => res.json(results))
//     .catch(err => res.json(err));
// };

// exports.saveNotes = (req, res) => {
//   let { title, body, articleId } = req.body;
//   let note = {
//     title,
//     body
//   };
//   db.Note.create(note)
//     .then(result => {
//       db.Article.findOneAndUpdate({ _id: articleId }, { $push: { notes: result._id } }, { new: true })
//         .then(data => res.json(result))
//         .catch(err => res.json(err));
//     })
//     .catch(err => res.json(err));
// };

// exports.deleteNote = (req, res) => {
//   // console.log(req.body);
//   let { articleId, noteId } = req.body;
//   db.Note.remove({ _id: noteId })
//     .then(result => res.json(result))
//     .catch(err => res.json(err));
// };

// exports.oneNote = (req, res) => {
//   db.Note.findOne({ _id: Object(req.body.id) })
//     .then(result => res.json(result))
//     .catch(err => res.json(err));
// };
