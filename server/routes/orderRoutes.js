const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

router.post('/payment', OrderController.payment);
router.post('/create-checkout-session', OrderController.createCheckoutSession);

module.exports = router;
