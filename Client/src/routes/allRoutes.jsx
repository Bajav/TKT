import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/home";
import Places from "../pages/places";
import Hotels from "../pages/hotels";
import Packages from "../pages/packages";
import Navbar from "../components/navBar";

// FLIGHTS PAGES
import FlightsRoutes from "./flightsRoutes/flightsRoute";

// import context
import { FormContextProvider } from "../Hooks/Context/formData.context";

function AllRoutes() {
  const location = useLocation();

  const hideNavRoutes = ["/pricing", "/results", "/travelerData"];
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

        {/* Flights Route Group with Context */}
        <Route path="/flights/*" element={
          <FormContextProvider>
            <FlightsRoutes />
          </FormContextProvider>
        } />

        {/* Catch-All for Unknown Routes */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default AllRoutes;
