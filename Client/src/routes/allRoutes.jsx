import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/home";
import Places from "../pages/places";
import Flights from "../pages/flights";
import Hotels from "../pages/hotels";
import Packages from "../pages/packages";
import Navbar from "../components/navBar";
import FlightPricing from '../pages/flightPricing/flightPricing';
import FlightResult from '../pages/flightResult/flightResults';

function AllRoutes() {
  const location = useLocation();

  // All routes where the Navbar should be hidden
  const hideNavRoutes = [
    "/flights/pricing",
    "/flights/results"
  ];

  const shouldHideNavbar = hideNavRoutes.some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <div>
      {/* Conditionally render Navbar */}
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="places" element={<Places />} />

        <Route path="flights" element={<Flights />} />
          <Route path="results" element={<FlightResult />} />
          <Route path="pricing" element={<FlightPricing />} />

        <Route path="hotels" element={<Hotels />} />
        <Route path="packages" element={<Packages />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
