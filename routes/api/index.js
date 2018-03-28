const router = require('express').Router();
const jobRoutes = require('./jobs');

// Book routes
router.use('/job', jobRoutes);

module.exports = router;
