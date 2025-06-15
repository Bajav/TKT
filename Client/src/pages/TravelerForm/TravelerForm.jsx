import React from "react";
import { Arrow } from "../../components/flightSearch/flightArrowSvg";
import BackBTN from "../../components/features/BackButton/BackBTN";
import PaxForm from "../../components/features/PaxForm/PaxForm";

function TravelerForm() {
  return (
    <section className="travelForm">
      <BackBTN to={"/"} btnName="back" />
      <h1>Enter Traveler Details</h1>
      <PaxForm />
    </section>
  );
}

export default TravelerForm;
