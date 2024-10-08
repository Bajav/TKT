import {Routes , Route} from "react-router-dom";
import Navbar from "../components/navBar";

const NavItems =()=>{
    return(
        <Routes>
            <Route path="/" element={<Navbar />} />
        </Routes>
    );
}