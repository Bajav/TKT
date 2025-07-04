import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useState, useContext, useEffect } from "react";
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
  useEffect(() => {
    const fetchPaymentIntent = async () => {
     try
     {
       const response = await axios.post(URL,{amount:80});
      
     }catch(Err){
      console.log("error ")
     }
    };
    fetchPaymentIntent();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Processing...");
  };

  return (
    <div className="main-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <PaymentElement />
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
