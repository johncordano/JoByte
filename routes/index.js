const path = require('path');
const router = require('express').Router();
const jobRoutes = require('./api/jobs');
const actionsRoutes = require('./api/actions');

// API Routes
router.use('/api/action', actionsRoutes);
router.use('/api/job', jobRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

module.exports = router;
