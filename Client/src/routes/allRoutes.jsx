import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/home";
import Places from "../pages/places";
import Flights from "../pages/flights";
import Hotels from "../pages/hotels";
import Packages from "../pages/packages";
import Navbar from "../components/navBar";
import FlightPricing from '../pages/flightPricing/flightPricing';
import FlightResult from '../pages/flightResult/flightResults';
// import FlightsRoutes from "./flightsRoutes/flightsRoute";

function AllRoutes() {
  const location = useLocation();

  // Define routes where Navbar should NOT appear
  const hideNavRoutes = ["/flights/flightsResults/flightPricing"];

  return (
    <div>
      {/* Conditionally render Navbar */}
      {!hideNavRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* {FlightsRoutes()} */}
        <Route path="flights" element={<Flights />} />
        <Route path="flights/FlightResult" element={<Places />} />
        <Route path="places" element={<Places />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="packages" element={<Packages />} />
      </Routes>
      {/* <FlightsRoutes /> */}
    </div>
  );
}

export default AllRoutes;
