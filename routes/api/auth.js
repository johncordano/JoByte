const router = require('express').Router();
const db = require('../../models');

const controller = require('../../controllers/controller.js');

//router
//  .route("/login").post(controller.findAccount);
router
  .route("/signup").post(controller.createAccount);
// router
//   .route('/signup')
//   .post(controller.createAccount)
//   // .put(controller.updateAccount);
// 
router
  .route('/login')
  .post(function(req, res) {
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
            if (isMatch) {
              console.log("yep");
              //console.log('res.redirect', res.redirect);
              return res.status(200);
            }
            else {
              console.log("nope");
            //  console.log('res.redirect', res.redirect);
              res.redirect('/signup');
            }
        });
    
        //res.redirect('/');
        console.log(user);
        // test a failing password
        // user.comparePassword(req.body.password, function(err, isMatch) {
        //     if (err) throw err;
        //     console.log('123Password:', isMatch); // -&gt; 123Password: false
        // });
    });
  });

module.exports = router;