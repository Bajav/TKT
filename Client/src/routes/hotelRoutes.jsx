import { Routes ,Route } from "react-router-dom";
import Hotels from "../pages/hotels";

const HotelsRoutes =()=>{
    return(
        <Routes>
            <Route path="/hotels" element={<Hotels/>} />
        </Routes>
    );
}
export default HotelsRoutes;