import { stripe } from "../Config/DB/stripe.config";

const checkOut = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: "https://yourdomain.com/success",  // ✅ Replace with real URL
      cancel_url: "https://yourdomain.com/cancel",    // ✅ Replace with real URL
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "ebb-dxb",
            },
            unit_amount: 50 * 100, // $50
          },
          quantity: 1,
        },
      ],
    });

    res.status(200).json({ url: session.url }); // ✅ Send session URL to client
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default checkOut;