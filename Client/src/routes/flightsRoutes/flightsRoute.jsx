import { Routes, Route } from "react-router-dom";
import Flights from "../pages/flights";
import FlightResult from "../pages/flightResult/flightResults";
import FlightPricing from "../pages/flightPricing/flightPricing";
import TravelerForm from "../pages/TravelerForm/TravelerForm";

function FlightsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Flights />} />
      <Route path="results" element={<FlightResult />} />
      <Route path="review" element={<FlightPricing />} />
      <Route path="confirm" element={<TravelerForm />} />
    </Routes>
  );
}

export default FlightsRoutes;