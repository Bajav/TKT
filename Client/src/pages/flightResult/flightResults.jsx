import { useEffect, useState, useContext, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// importing components
import FlightCard from "../../components/flightSearch/Ticket/TicketCard";
import { Arrow } from "../../components/flightSearch/flightArrowSvg";
import Dummy from "../../components/places/dummyCard";
import DummyTicket from "../../components/features/DummyTicket/DummyTicket";
import BackBTN from "../../components/features/BackButton/BackBTN";
// impoting hooks
import { FlightContext } from "../../components/context/flightSearch.context";

function FlightResult() {
  const { flightSearch,setFlightResults,flightResults,setScrollRef,setFilteredFlights } = useContext(FlightContext);
  const resLength = flightResults?.length || 0;
  // define location
  // console.log("flightResults", flightResults);
  const location = useLocation();
  const [error, setError] = useState([]);
  // define navigate
  const navigate = useNavigate();
  const scrollRef = useRef([]);
  const backBtn =()=>{
    setFlightResults([]);
    setFilteredFlights([]);
    navigate("/flights");
  };
  useEffect(()=>{
    setScrollRef(scrollRef);
  },[])
  return (
    <main className="FlightResult-page">
      <BackBTN onClick={backBtn} btnName="back" />
      <div className="FlightResults">
        <h3 className="text">Results for your search </h3>
        <div className="FlightResult-header">

          <div className="ticket-header">
            <div className="origin">
              <h2>{flightSearch?.origin?.slice(0, 3) || " "}</h2>
            </div>
            <div className="item">
              <Arrow color="#313030" width="200px" />
            </div>
            <div className="item">
              <h2>{flightSearch?.destination?.slice(0, 3) || " "}</h2>
            </div>
          </div>
          
        </div>
        <div className="results" ref={scrollRef}>
          <FlightCard />
          {/* <DummyTicket /> */}
          <Dummy />
        </div>
      </div>
    </main>
  );
}

export default FlightResult;
