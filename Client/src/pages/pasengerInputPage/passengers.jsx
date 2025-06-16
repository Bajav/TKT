import { useState } from "react";
import "./passenger.styles.scss";
import TicketHeader from "../../components/flightSearch/Ticket/ticketheader.component";
import PaxForm from "../../components/features/PaxForm/PaxForm";

function Passengers() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Country:", selectedCountry);
  };
  const [formData, setFormData] = useState({
    name: "",
    gender: ""
  });

  const [selectedCountry, setSelectedCountry] = useState(null);
  return (
    <section className="passengers">
      <h1>enter traveller details</h1>
      <TicketHeader
        originCode="ebb"
        originCity="kampala"
        originTime="12:05:00"
        destinationCode="lhr"
        destinationCity="london"
        destinationTime="00:11:00"
        arrowColor="#222"
      />

      <div className="form">
        <PaxForm />
      </div>
    </section>
  );
}

export default Passengers;
