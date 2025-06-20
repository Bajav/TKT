import { useState } from "react";
import "./passenger.styles.scss";
import TicketHeader from "../../components/flightSearch/Ticket/ticketheader.component";
import PaxForm from "../../components/features/PaxForm/PaxForm";
import Checkout from "../../components/Model/checkout.model";

function Passengers() {
  const [isModel,setModel]= useState(false);



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

     {isModel ? (<div className="form">
        <PaxForm />
      </div>):(
        <div className="model-overlay">
          <Checkout />
        </div>
      )}
    </section>
  );
}

export default Passengers;
