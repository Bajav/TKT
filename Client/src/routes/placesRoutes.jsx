import {Routes , Route} from "react-router-dom"
import Places from "../pages/places";

function PlacesRoutes() {
  return (
    <Routes>
        <Route path="/places" element={<Places />} />
    </Routes>
  )
}

export default PlacesRoutes;