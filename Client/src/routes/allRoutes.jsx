import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/home";
import Places from "../pages/places";
import Hotels from "../pages/hotels";
import Packages from "../pages/packages";
import Navbar from "../components/navBar";

// IMPORT ROUTES
// import FlightsRoutes from "./flightsRoutes/flightsRoute";
import Flights from "../pages/flights";
import FlightPricing from "../pages/flightPricing/flightPricing";
import FlightResult from "../pages/flightResult/flightResults";
import TravelerForm from "../pages/TravelerForm/TravelerForm";

function AllRoutes() {
  const location = useLocation();

  // All routes where the Navbar should be hidden
  const hideNavRoutes = ["/pricing", "/results","/travelerData"];

  const shouldHideNavbar = hideNavRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div>
      {/* Conditionally render Navbar */}
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Navbar />} >
        <Route index element={<Home />} />
        <Route path="places" element={<Places />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="packages" element={<Packages />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
