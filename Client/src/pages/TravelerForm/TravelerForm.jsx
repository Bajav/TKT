import React from "react";
import { Arrow } from "../../components/flightSearch/flightArrowSvg";
import BackBTN from "../../components/features/BackButton/BackBTN";
import PaxForm from "../../components/features/PaxForm/PaxForm";

function TravelerForm() {
  return (
    <section className="travelForm">
      <BackBTN to={"/"} btnName="back" />
      <h1>Enter Traveler Details</h1>
      <div className="FlightResult-header">
        <div className="ticket-header">
          <div className="origin">
            <h2>Kla</h2>
            <h3>Kampala, Uganda</h3>
          </div>
          <div className="item">
            <Arrow color="#313030" width="200px" />
          </div>
          <div className="item">
            <h2>DXB</h2>
            <h3>Dubai , UAE</h3>
          </div>
        </div>
      </div>
      <PaxForm />
    </section>
  );
}

export default TravelerForm;
