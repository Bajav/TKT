import {Routes , Route} from 'react-router-dom';
import Flights from '../../pages/flights';
import FlightPricing from '../../pages/flightPricing/flightPricing';
import FlightResult from '../../pages/flightResult/flightResults';

const FlightsRoutes =()=>{
    return(
        <Routes>
        <Route path='/flights' element={<Flights />} >
        <Route path='/flightsResults' element={<FlightResult />} />
        <Route path='/flightsResults/flightPricing' element={<FlightResult />} /> 
        </Route>
        </Routes>
    );
};
export default FlightsRoutes;