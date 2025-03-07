const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

/**
 * @swagger
 * /api/order/payment:
 *   get:
 *     summary: Create Payment 
 *     description: Used to get create Payment.
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Payment created successfully
 */
router.post('/payment', OrderController.payment);
/**
 * @swagger
 * /api/order/create-checkout-session:
 *   get:
 *     summary: create checkout session 
 *     description: Used to create checkout sessions.
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: checkout session created successfully.
 */
router.post('/create-checkout-session', OrderController.createCheckoutSession);

module.exports = router;
