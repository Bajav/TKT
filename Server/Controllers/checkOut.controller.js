import { stripe } from "../Config/Stripe/stripe.config.js";


 const createPaymentIntent = async (req, res) => {
  const { amount, currency = 'usd' } = req.body; // amount in cents

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount:amount*100, // e.g. 2000 = $20.00
      currency,
      // Optional: metadata, receipt_email, etc.
    });
    console.log("paymentIntent",paymentIntent);

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default createPaymentIntent;


// const checkOut = async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       mode: "payment",
//       success_url: "https://yourdomain.com/success",  // ✅ Replace with real URL
//       cancel_url: "https://yourdomain.com/cancel",    // ✅ Replace with real URL
//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: "ebb-dxb",
//             },
//             unit_amount: 50 * 100, // $50
//           },
//           quantity: 1,
//         },
//       ],
//     });

//     res.status(200).json({ url: session.url }); 
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
