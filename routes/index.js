const path = require('path');
const router = require('express').Router();
const jobRoutes = require('./api/jobs');
const actionsRoutes = require('./api/actions');
const authRoutes = require('./api/auth');
const contactsRoutes = require('./api/contacts');

// API Routes
router.use('/api/job', jobRoutes);
router.use('/api/action', actionsRoutes);
router.use('/api/account', authRoutes);
router.use('/api/contacts', contactsRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

module.exports = router;
