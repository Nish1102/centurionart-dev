const express = require('express');
const router = express.Router();

// Import route handlers
const authRoutes = require('./authRoutes');
const artWorkRoutes = require('./artWorkRoutes');
const ordersRoutes = require('./orderRoutes');
const menusRoutes = require('./menusRoute');
const categoryRoutes = require('./categoryRoutes');


// Define routes
router.use('/auth', authRoutes);
router.use('/artwork', artWorkRoutes);
router.use('/orders', ordersRoutes);
router.use('/menu', menusRoutes);
router.use('/categories', categoryRoutes)

module.exports = router;