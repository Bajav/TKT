import { Routes, Route, useLocation } from "react-router-dom";

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
// import context
import { FormContextProvider } from "../Hooks/Context/formData.context";
import { Fragment } from "react";

function AllRoutes() {
  const location = useLocation();

  // Define all routes where Navbar should be hidden
  const hideNavRoutes = [
    "/flights/pricing",
    "/flights/results",
    "/flights/travelerData",
    "/flights/lastprice",
    "/flights/PassengerData"
  ];

  const shouldHideNavbar = hideNavRoutes.some((path) =>
    location.pathname.startsWith(path)
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
        <Route path="/flights" element={<Flights />} />
        <Route path="flights/results" element={<FlightResult />} />
        <Route path="flights/lastprice" element={<FlightPricing />} />
        <Route path="flights/PassengerData" element={<Passengers />} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* Catch-All for Unknown Routes */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Fragment>
  );
}

export default AllRoutes;
