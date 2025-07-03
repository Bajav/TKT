import { useEffect, useState, useContext } from "react";
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
  const { flightSearch,setFlightResults,flightResults,setFilteredFlights } = useContext(FlightContext);
  const resLength = flightResults.length;
  // define location
  const location = useLocation();
  const [error, setError] = useState([]);
  // define navigate
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const iataRes = await Promise.all([
          axios.get("http://localhost:3000/flights"),
        ]);
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
      }
    };
    fetchData();
  }, []);

  const backBtn =()=>{
    setFlightResults([]);
    setFilteredFlights([]);
    navigate("/flights");
  };
  return (
    <main className="FlightResult-page">
      <BackBTN onClick={backBtn} btnName="back" />
      <div className="FlightResults">
        <h3 className="text"> <span>{ resLength }</span> Results for your search </h3>
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
