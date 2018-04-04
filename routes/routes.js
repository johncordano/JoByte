const controller = require('../controllers/controller.js');
const db = require("../models");

const path = require('path');
const router = require('express').Router();
// const userRoutes = require('./user')
// const jobRoutes = require('./api/jobs');
// const actionsRoutes = require('./api/actions');

module.exports = function(app, passport) {

// ========================
// 		USER/LOGIN ROUTES
// ========================
	
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/dashboard',
            failureRedirect: '/signin'
        }
    ))


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
		failureRedirect: '/signup'
        }
    ))

    app.get('/user', (req, res) => {
    	console.log('=====user!=====')
    	// console.log(req.user)
    	if(req.user) {
    		res.json({user: req.user})
    	} else {
    		res.json({user: null})
    	}
    })

    app.post('/logout', controller.logout);

// ========================
// 		JOB ROUTES
// ========================

	app.get('/api/job', isLoggedIn, controller.findAllJobs)
	app.post('/api/job', isLoggedIn, controller.createJob)
	app.put('/api/job', isLoggedIn, controller.updateJob)
	app.delete('/api/job', isLoggedIn, controller.deleteJob)

// ========================
// 		ACTION ROUTES
// ========================

	app.get('/api/action', isLoggedIn, controller.findAllActions)
	app.post('/api/action', isLoggedIn, controller.createAction)
	app.delete('/api/action', isLoggedIn, controller.deleteAction)

	app.get('/:id', isLoggedIn, controller.findJobActions)




	// // API Routes
	// router.use('/api/job', isLoggedInjobRoutes);
	// router.use('/api/action', actionsRoutes);
	// router.use('/user', userRoutes);

	// If no API routes are hit, send the React app
	router.use(function(req, res) {
  	res.sendFile(path.join(__dirname, '../client/public/index.html'));
	});

	// function to confirm whether the user is logged in before proceeding to next argument
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
 
            return next();
 
        res.redirect('/signin');
    }

}




// module.exports = router;
