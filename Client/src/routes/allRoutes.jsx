import { Routes, Route, useLocation } from "react-router-dom";
import { Fragment } from "react";

import Home from "../pages/Home/home";
import Places from "../pages/places";
import Hotels from "../pages/hotels";
import Packages from "../pages/packages";
import Navbar from "../components/NavBar/navBar";

// FLIGHTS PAGES
import Flights from "../pages/flights";
import FlightPricing from "../pages/flightPricing/flightPricing";
import FlightResult from "../pages/flightResult/flightResults";
import Passengers from "../pages/pasengerInputPage/passengers";

function AllRoutes() {
  const location = useLocation();

  const hideNavRoutes = [
    "/flights/results",
    "/flights/lastprice",
    "/flights/passengerdata"
  ];

  const shouldHideNavbar = hideNavRoutes.some((path) =>
    location.pathname.toLowerCase().startsWith(path)
  );

  return (
    <Fragment>
      {/* Show Navbar unless on certain routes */}
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/packages" element={<Packages />} />

        {/* Flights Route Group */}
        <Route path="/flights" element={<Flights />} >
          <Route path="results" element={<FlightResult />} />
          <Route path="lastprice" element={<FlightPricing />} />
          <Route path="passengerdata" element={<Passengers />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default AllRoutes;