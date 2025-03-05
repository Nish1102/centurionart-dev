const express = require('express');
const router = express.Router();

// Import route handlers
const authRoutes = require('./authRoutes');
const artWorkRoutes = require('./artWorkRoutes');
const ordersRoutes = require('./orderRoutes');

// Define routes
router.use('/auth', authRoutes);
router.use('/artwork', artWorkRoutes);
router.use('/orders', ordersRoutes);

module.exports = router;





