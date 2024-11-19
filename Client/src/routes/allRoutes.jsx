import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Places from '../pages/places';
import Flights from '../pages/flights';
import Hotels from '../pages/hotels';
import Packages from '../pages/packages';
import Navbar from '../components/navBar';
import FlightResult from '../pages/flightResults';
import FlightPricing from '../pages/flightPricing';

function AllRoutes() {
  return (
<Routes>
    <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="flights" element={<Flights />}>
        </Route>
            <Route path="flights/flightsResults" element={<FlightResult />} />
            <Route path="flights/flightsResults/flightPricing" element={<FlightPricing />} />
        <Route path="places" element={<Places />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="packages" element={<Packages />} />
    </Route>
</Routes>

  );
}

export default AllRoutes;
