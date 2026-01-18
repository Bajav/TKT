import { Routes, Route, useLocation } from "react-router-dom";
import { Fragment } from "react";

import Home from "../pages/Home/home";
import Places from "../pages/places";
import Hotels from "../pages/Hotels/hotels";
import Packages from "../pages/packages";
import Navbar from "../components/NavBar/navBar";

import ErrorBoundary from "../pages/ErrorPage/error.page.jsx";

// FLIGHTS PAGES
import Flights from "../pages/flights";
import FlightPricing from "../pages/flightPricing/flightPricing";
import FlightResult from "../pages/flightResult/flightResults";
import Passengers from "../pages/pasengerInputPage/passengers";
import BookedFlights from "../pages/bookedFlights/flights.page";

// hotelpages
import HotelResults from "../pages/Hotels/HotelSearchResults/hotelresults.page";
import HotelRoom from "../pages/Hotels/HotelRooms/hotelroom.page";
import BookHotel from "../pages/Hotels/HotelbBooking/bookhote.page.jsx";
// User
import Bookings from "../pages/Bookings/bookings.page.jsx";
function AllRoutes() {
  const location = useLocation();

  const hideNavRoutes = [
    "/flights/results",
    "/flights/lastprice",
    "/flights/passengerdata",
    "/myflights",
    "/hotels/results",
    "/hotels/rooms",
    "/hotels/bookhotel",
    "user/mybookings"
  ];

  const shouldHideNavbar = hideNavRoutes.some((path) =>
    location.pathname.toLowerCase().startsWith(path)
  );

  return (
    <Fragment>
      {/* Show Navbar unless on certain routes */}
      {!shouldHideNavbar && <Navbar />}
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="places" element={<Places />} />
          <Route path="searchhotels" element={<Hotels />} />
          <Route path="packages" element={<Packages />} />
          <Route path="myflights" element={<BookedFlights />} />

          {/* Flights Route Group */}
          <Route path="/flights" element={<Flights />}>
            <Route path="results" element={<FlightResult />} />
            <Route path="lastprice" element={<FlightPricing />} />
            <Route path="passengerdata" element={<Passengers />} />
          </Route>
          <Route path="/hotels" element={<Hotels />}>
            <Route path="results" element={<HotelResults />} />
            <Route path="rooms" element={<HotelRoom />} />
            <Route path="bookhotel" element={<BookHotel />} />
            {/* <Route path="passengerdata" element={<Passengers />} /> */}
          </Route>
          <Route path="user/mybookings" element={<Bookings />} ></Route>
        </Routes>
      </ErrorBoundary>
    </Fragment>
  );
}

export default AllRoutes;
