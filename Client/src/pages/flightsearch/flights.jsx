import './flightsearch.styles.scss';
import { useEffect, useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import FlightsForm from "../../components/flightSearch/flightsForm/flightsFormInput";
import Gallery from "../../components/flightSearch/galler";
import LocationHeader from "../../components/Header/header";
import Alert from "../../components/features/Error&Sucess/alert.component";
import success from "../../assets/icons/white-heavy-check-mark-svgrepo-com.svg";
import { FlightContext } from "../../components/context/flightSearch.context";
import axios from "axios";
import searchData from "../../data/searchdata/searchdata.json";
function Flights() {
  const { alert,setFormData } = useContext(FlightContext);
  const location = useLocation();

  const hideLayoutRoutes = [
    "/flights/results",
    "/flights/lastprice",
    "/flights/Passengerdata",
  ];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);
  const fetchFlightRecents = async () => {
    try {
      const res = await axios.get("http://localhost:3000/getsession");
      if (res) {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchFlightRecents();
  }, []);
  // populate selected from search array
  const getSelected =(index)=>
    {
      const selectedSearch = (searchData[index]);
      setFormData(selectedSearch);
      console.log(index,selectedSearch);
    }

  return (
    <main className="flights">
      <Outlet />
      {!shouldHideLayout && (
        <div className="flights-layout">
          <LocationHeader />
          <div className="flights-console">
            <FlightsForm />
          </div>

          <div className="searches-container">
            <h4>recent searches.</h4>
            <div className="searched-wrapper">
              {searchData.map((item, index) => {
                return (
                  <div
                    className="search"
                    onClick={()=>getSelected(index)}
                    key={index}
                  >
                    <h5>origin:{item.origin} </h5>
                    <h5>destination:{item.Destination} </h5>
                    <h5>{item.tripType}: {item.departureDate} - {item.returnDate} </h5>
                  </div>
                );
              })}
            </div>
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
