import React, { useEffect, useState,useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlightCard from "../../components/flightSearch/Ticket/TicketCard";
import { Arrow } from "../../components/flightSearch/flightArrowSvg";
import Dummy from "../../components/places/dummyCard";
import DummyTicket from "../../components/features/DummyTicket/DummyTicket";
import BackBTN from "../../components/features/BackButton/BackBTN";
// import './FlightResults.scss';

// import hooks
import { FormContext } from "../../Hooks/Context/formData.context";

function FlightResult() {
  const { travelData } = useContext(FormContext);
  console.log("travellerData ::: ",travelData);
  // define location
  const location = useLocation();
  const { searchResults, formData, airlines } = location.state || {};
  const [iataCodes, setIataCodes] = useState([]);
  const [airliness, setAirlines] = useState([]);
  const [error , setError] = useState([]);
  // define navigate
  const navigate = useNavigate();
  useEffect(() => {
    const data = () => {
      const formDataa = formData;
      console.log("form data :::", formData);
    };
    data();

    const fetchData = async () => {
      try {
        const iataRes = await Promise.all([
          axios.get("http://localhost:3000/flights"),
        ]);
        const { iataCodes, airliness } = iataRes.data;
        setIataCodes(iataCodes);
        setAirlines(airlines);
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
      }
    };
    fetchData();
  }, []);

  return (
    <main className="FlightResult-page">
      <BackBTN to={"/flights"} btnName="back" />
      <div className="FlightResults">
        <h3 className="text"> Results for your search</h3>
        <h3>{searchResults}</h3>
        <div className="FlightResult-header">
          <div className="ticket-header">
            <div className="origin">
                <h2>{formData?.origin?.slice(0,3) || "XXX"}</h2>
            </div>
            <div className="item"><Arrow color="#313030" width="200px" /></div>
            <div className="item">
                <h2>{formData?.destination?.slice(0,3) || "XXX"}</h2>
            </div>
        </div>
        </div>
        <div className="results">
          <FlightCard />
          {/* <DummyTicket /> */}
          <Dummy />
        </div>
      </div>
    </main>
  );
}

export default FlightResult;
