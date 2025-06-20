import { useContext, useState } from "react";
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

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

function Passengers() {
  const { isModel, isSuccess } = useContext(UiContext);

  return (
    <section className="passengers">
      <h1>enter traveller details</h1>
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
                  key="checkout"
                  className="check-out-container"
                  initial={{ y: 400, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -400, opacity: 0, scale: 0.7 }}
                  transition={{ type: "tween", duration: 0.5 }}
                >
                  <h1>Enter card details to book the flight</h1>
                  <Elements stripe={stripePromise}>
                    <Checkout />
                  </Elements>
                </motion.div>
              ) : (
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
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Passengers;
