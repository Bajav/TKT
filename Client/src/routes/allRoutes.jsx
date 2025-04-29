import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/home";
import Places from "../pages/places";
import Hotels from "../pages/hotels";
import Packages from "../pages/packages";
import Navbar from "../components/navBar";

// FLIGHTS PAGES
import Flights from "../pages/flights";
import FlightPricing from "../pages/flightPricing/flightPricing";
import FlightResult from "../pages/flightResult/flightResults";
import TravelerForm from "../pages/TravelerForm/TravelerForm";
// import context
import { FormContextProvider } from "../Hooks/Context/formData.context";

function AllRoutes() {
  // const location = useLocation();

  // Define all routes where Navbar should be hidden
  const hideNavRoutes = ["/flights/pricing", "/flights/results", "/flights/travelerData"];

  const shouldHideNavbar = hideNavRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div>
      {/* Show Navbar unless on certain routes */}
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/packages" element={<Packages />} />

        {/* Flights Route Group */}
        <Route path="/flights" element={
          <FormContextProvider>
            <Flights /> 
          </FormContextProvider>
        }/>
        <Route path="flights/results" element={
          <FormContextProvider>
          <FlightResult />
          </FormContextProvider>
          } />
        <Route path="flights/brandedDeals" element={
          <FormContextProvider>
          <Home />
          </FormContextProvider>
        } />
        <Route path="flights/lastprice" element={
          <FormContextProvider>
          <FlightPricing />
          </FormContextProvider>} />
        <Route path="flights/confirmFlight" element={
          <FormContextProvider>
          <TravelerForm />
          </FormContextProvider>} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* Catch-All for Unknown Routes */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default AllRoutes;
