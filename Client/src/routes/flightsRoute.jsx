import {Routes , Route} from 'react-router-dom';
import Flights from '../pages/flights';

const FlightsRoutes =()=>{
    return(
    <Routes>
        <Route path='/flights' element={<Flights />} />
    </Routes>
    );
};
export default FlightsRoutes;