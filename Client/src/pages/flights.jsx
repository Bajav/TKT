import { useEffect, useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import FlightsForm from "../components/flightSearch/flightsForm/flightsFormInput";
import Gallery from "../components/flightSearch/galler";
import LocationHeader from "../components/Header/header";
import Alert from "../components/features/Error&Sucess/alert.component";
import success from "../assets/icons/white-heavy-check-mark-svgrepo-com.svg";
import { FlightContext } from "../components/context/flightSearch.context";

function Flights() {
  const { alert } = useContext(FlightContext);
  const location = useLocation();

  const hideLayoutRoutes = ["/flights/results", "/flights/lastprice","/flights/Passengerdata"];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <main className="flights">
      <Outlet />
      {!shouldHideLayout && (
        <>
          <LocationHeader />
          <div className="flights-console">
            <FlightsForm />
          </div>
        </>
      )}
      {alert && (
        <Alert img={success} alertText="Email address changed successfully" />
      )}
    </main>
  );
}

export default Flights;