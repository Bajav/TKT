import {Routes , Route} from 'react-router-dom';
import FlightResult from '../pages/flightResults';

const FlightsRoutes =()=>{
    return(
    <Routes>
        <Route path='flights/flightsResults' element={<FlightResult />} />
    </Routes>
    );
};
export default FlightsRoutes;