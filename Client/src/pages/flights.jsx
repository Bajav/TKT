import { useEffect, useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import FlightsForm from "../components/flightSearch/flightsForm/flightsFormInput";
import Gallery from "../components/flightSearch/galler";
import LocationHeader from "../components/Header/header";
import Alert from "../components/features/Error&Sucess/alert.component";
import success from "../assets/icons/white-heavy-check-mark-svgrepo-com.svg";
import { FlightContext } from "../components/context/flightSearch.context";
import axios from 'axios';

function Flights() {
  const { alert } = useContext(FlightContext);
  const location = useLocation();

  const hideLayoutRoutes = ["/flights/results", "/flights/lastprice","/flights/Passengerdata"];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);
  const fetchFlightRecents =async()=>{
  try{
      const res = await axios.get("http://localhost:3000/getsession");
    if (res){
      console.log(res);
    }
  }catch(err){
    console.log(err);
  }
  };
  useEffect(()=>{fetchFlightRecents()},[]);

  return (
    <main className="flights">
      <Outlet />
      {!shouldHideLayout && (
        <div className="flights-layout">
          <LocationHeader />
          <div className="flights-console">
            <FlightsForm />
          </div>

          <div className="flights-container">
            <h4>most visited places.</h4>
          </div>
           <div className="backUpBlock"></div>
        </div>
      )}
      {alert && (
        <Alert img={success} alertText="Email address changed successfully" />
      )}
    </main>
  );
}

export default Flights;