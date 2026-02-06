import { useContext, useEffect, useState, useMemo } from "react";
import "./passenger.styles.scss";
import TicketHeader from "../../components/flightSearch/Ticket/ticketheader.component";
import PaxForm from "../../components/features/PaxForm/PaxForm";
import Checkout from "../../components/Model/checkout.model";
import { motion, AnimatePresence } from "motion/react";
import { UiContext } from "../../components/context/ui.context";
import SuccessfulPayment from "../../components/CheckoutSuccess/success.component";

// stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

// CRITICAL FIX #1: Move stripePromise OUTSIDE component to prevent re-initialization
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

function Passengers() {
  const { isModel, isSuccess } = useContext(UiContext);
  const [clientSecret, setClientSecret] = useState("");

  // CRITICAL FIX #2: Fetch clientSecret when component mounts or when needed
  useEffect(() => {
    // Only fetch if modal is open and we don't have a clientSecret yet
    if (isModel && !clientSecret) {
      axios
        .post("http://localhost:3000/createpaymentintent", { amount: 9000 }) // amount in cents
        .then((res) => setClientSecret(res.data.clientSecret))
        .catch((err) => console.error("Error fetching client secret:", err));
    }
  }, [isModel, clientSecret]);

  // CRITICAL FIX #3: Memoize options to prevent unnecessary re-renders
  const options = useMemo(
    () => ({
      appearance: { theme: "flat" },
      clientSecret,
    }),
    [clientSecret]
  );

  return (
    <section className="passengers">
      <h1>Enter traveller details</h1>
      <TicketHeader
        originCode="ebb"
        originCity="kampala"
        originTime="12:05:00"
        destinationCode="lhr"
        destinabtionCity="london"
        destinationTime="00:11:00"
        arrowColor="#222"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, type: "tween", duration: 0.5 }}
        className="form"
      >
        <PaxForm />
      </motion.div>

      <AnimatePresence mode="wait">
        {isModel && (
          <motion.div
            className="model-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  className="success-container"
                  initial={{ y: 400, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -400, opacity: 0, scale: 0.5 }}
                  transition={{ type: "tween", duration: 0.5 }}
                >
                  <SuccessfulPayment />
                </motion.div>
              ) : (
                <motion.div
                  key="checkout"
                  className="check-out-container"
                  initial={{ y: 400, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -400, opacity: 0, scale: 0.7 }}
                  transition={{ type: "tween", duration: 0.5 }}
                >
                  <h1>Enter card details to book the flight</h1>
                  {/* CRITICAL FIX #4: Only render Elements when clientSecret is available */}
                  {clientSecret ? (
                    <Elements stripe={stripePromise} options={options}>
                      <Checkout />
                    </Elements>
                  ) : (
                    <div className="loading">Loading payment form...</div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="bloc"></div>
    </section>
  );
}

export default Passengers;