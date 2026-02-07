import "./flightsearch.styles.scss";
import { useEffect, useContext,useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import FlightsForm from "../../components/flightSearch/flightsForm/flightsFormInput";
import Gallery from "../../components/flightSearch/galler";
import LocationHeader from "../../components/Header/header";
import Alert from "../../components/features/Error&Sucess/alert.component";
import success from "../../assets/icons/white-heavy-check-mark-svgrepo-com.svg";
import windowImg from "../../assets/images/windowseat.jpg";
import { FlightContext } from "../../components/context/flightSearch.context";
import axios from "axios";
import searchData from "../../data/searchdata/searchdata.json";
import { ArrowRight } from "lucide-react";
function Flights() {
  const { alert, setFormData } = useContext(FlightContext);
  const location = useLocation();

  const hideLayoutRoutes = [
    "/flights/results",
    "/flights/lastprice",
    "/flights/Passengerdata",
  ];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);
  const hasFetchedRef = useRef(false);
  const fetchFlightRecents = async () => {
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;
    try {
      const res = await axios.get("http://localhost:3000/getsession",{withCredentials: true});
      if (res) {
        setSession(res.data.data.flightSearch);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchFlightRecents();
  }, []);
  // populate selected from search array
  const getSelected = (index) => {
    const selectedSearch = searchData[index];
    setFormData(selectedSearch);
    console.log(index, selectedSearch);
  };

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
                    onClick={() => getSelected(index)}
                    key={index}
                  >
                    <h5>origin:{item.origin} </h5>
                    <h5>destination:{item.Destination} </h5>
                    <h5>
                      {item.tripType}: {item.departureDate} -{" "}
                      {item.returnDate}{" "}
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="did-you-know-wrapper">
            <div className="did-you-know">
              <div className="text-overlay">
                <p>
                  Did you know, when you sign up the process of booking is just
                  4 simple steps. When you sign up now, you get to access our
                  exclusive prices and discounts.
                </p>
                <button>
                  sign up now{" "}
                  <span>
                    <ArrowRight size={12} color={"#333"} />
                  </span>
                </button>
              </div>
              <img src={windowImg} />
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
