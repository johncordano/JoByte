var db = require('../models');

module.exports = {
  
  // ================================
  //            JOB METHODS
  // ================================
  
  findAllJobs: function(req, res) {
    db.Job.find({ userId: req.body.userId }).sort({status: 1})
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
    },
    
    
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
        
        // test password
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (err) throw err;
          console.log('does password match', isMatch);
          if (isMatch) {
            console.log("yep");
            res.status(200).end();
            //  res.redirect("/dashboard").end();
          }
          else {
            console.log("nope");
            //  res.redirect('/login');
          }
        });
      });
    }  
  };