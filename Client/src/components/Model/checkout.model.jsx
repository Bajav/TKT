import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState, useContext } from "react";
import { UiContext } from "../context/ui.context";
import "./checkout.styles.scss";
import axios from "axios";

function Checkout() {
  const stripe = useStripe();
  const elements = useElements();
  const { setModel, setSuccess } = useContext(UiContext);
  const [cardHolder, setCardHolder] = useState("");
  const [status, setStatus] = useState("");

  const style = {
    base: {
      fontSize: "14px",
      color: "#323030",
      "::placeholder": { color: "#a0aec0" },
    },
    invalid: {
      color: "#e53e3e",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Processing...");

    const { data } = await axios.post("http://localhost:3000/checkout", {
      amount: 70000,
    });

    const clientSecret = data.clientSecret;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
        billing_details: { name: cardHolder },
      },
    });

    if (result.error) {
      setStatus(`❌ ${result.error.message}`);
    } else if (result.paymentIntent.status === "succeeded") {
      setStatus("✅ Payment successful!");
    }

    setSuccess(false)
  };

  return (
    <div className="main-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="card-input">
          <label>Card Holder</label>
          <input
            type="text"
            placeholder="Enter Card Holder Names"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
          />
        </div>

        <div className="card-input">
          <label>Card Number</label>
          <div className="stripe-input">
            <CardNumberElement options={{ style }} />
          </div>
        </div>

        <div className="flexed">
          <div className="card-input half">
            <label>CVC</label>
            <div className="stripe-input">
              <CardCvcElement options={{ style }} />
            </div>
          </div>

          <div className="card-input half">
            <label>Expiry Date</label>
            <div className="stripe-input">
              <CardExpiryElement options={{ style }} />
            </div>
          </div>
        </div>

        <div className="btn-container">
          <button
            type="button"
            className="cancelBtn"
            onClick={() => setModel(false)}
          >
            Cancel
          </button>
          <button type="submit" className="paymentBtn" disabled={!stripe}>
            Pay $700
          </button>
        </div>

        {status && <p>{status}</p>}
      </form>
    </div>
  );
}

export default Checkout;
