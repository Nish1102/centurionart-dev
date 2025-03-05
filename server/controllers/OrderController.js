const stripe = require('stripe')('your-stripe-secret-key');

const payment = async (req, res) => {
    try {
        const { amount, currency, source } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method: source,
            confirm: true
        });

        res.status(200).json({ message: 'Payment successful', paymentIntent });
    } catch (error) {
        console.error('Error In Register User:', error);
        res.status(500).json({ message: 'Payment failed', error: error.message });
    }
};

const createCheckoutSession = async (req, res) => {
    const { items } = req.body;

    const lineItems = items.map(item => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: item.title,
                images: [item.image],
            },
            unit_amount: item.price * 100,
        },
        quantity: 1,
    }));

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        });

        res.status(200).json({ id: session.id });
    } catch (error) {
        res.status(500).json({ message: 'Checkout session creation failed', error: error.message });
    }
}

module.exports = {
    createCheckoutSession,
    payment
}