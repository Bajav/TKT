import { stripe } from "../Config/Stripe/stripe.config.js";


 const createPaymentIntent = async (req, res) => {
  const { amount, currency = 'usd' } = req.body; // amount in cents

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount:amount*100,
      currency,
      automatic_payment_methods: { enabled: true }
    });
    console.log("paymentIntent",paymentIntent);
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default createPaymentIntent;
