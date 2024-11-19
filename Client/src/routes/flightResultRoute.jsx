import {Routes , Route} from 'react-router-dom';
import FlightResult from '../pages/flightResults';
import FlightPricing from '../pages/flightPricing';

const FlightsRoutes =()=>{
    return(
    <Routes>
        <Route path='flights/flightsResults' element={<FlightResult />} >
        <Route path="flights/flightsResults/flightPricing" element={<FlightPricing />}/>
        </Route>
    </Routes>
    );
};
export default FlightsRoutes;