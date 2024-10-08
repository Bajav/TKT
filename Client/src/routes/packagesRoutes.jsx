import { Routes , Route } from "react-router-dom";
import Packages from "../pages/Packages";

function PackageRoute() {
  return (
        <Routes>
            <Route path="packages" element={<Packages/>}/>
        </Routes>
  )
}

export default PackageRoute