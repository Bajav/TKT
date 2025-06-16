import React, { useEffect, useContext } from "react";
import FlightsForm from "../components/flightSearch/flightsForm/flightsFormInput";
import Gallery from "../components/flightSearch/galler";
import LocationHeader from "../components/Header/header";
import Alert from "../components/features/Error&Sucess/alert.component";
// import axios from 'axios';
import success from "../assets/icons/white-heavy-check-mark-svgrepo-com.svg";
import { FlightContext } from "../components/context/flightSearch.context";

function Flights() {
  const { alert } = useContext(FlightContext);
  useEffect(() => {
    // reloadPage();
    // console.log("page reloaded");
  }, []);
  return (
    <main className="flights">
      <LocationHeader />
      <div className="flights-console">
        <FlightsForm />
      </div>
      {alert && (
        <Alert img={success} alertText="Email address changed successfully" />
      )}
    </main>
  );
}

export default Flights;
