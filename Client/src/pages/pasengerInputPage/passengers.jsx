import { useContext,useState } from "react";
import "./passenger.styles.scss";
import TicketHeader from "../../components/flightSearch/Ticket/ticketheader.component";
import PaxForm from "../../components/features/PaxForm/PaxForm";
import Checkout from "../../components/Model/checkout.model";
import { motion } from "motion/react";
import { UiContext } from "../../components/context/ui.context";


function Passengers() {
  const {isModel} = useContext(UiContext);
  // const [isModel,setModel]= useState(true)
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

      {isModel ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, type: "tween", duration: 0.5 }}
          className="form"
        >
          <PaxForm />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, type: "tween", duration: 0.5 }}
          className="model-overlay"
        >
          <h1>enter card details to book the flight</h1>
          <Checkout />
        </motion.div>
      )}
    </section>
  );
}

export default Passengers;
