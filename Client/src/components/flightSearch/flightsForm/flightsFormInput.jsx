import { useState, useEffect, useContext, Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import axios from "axios";
// hooks
import { FlightContext } from "../../context/flightSearch.context";
import { LocationContext } from "../../context/location.context";
// components
import FlightSearchInput from "../SearchInput/flightSearch";
import ClickOption from "../checkBtns/ClickOption";
import RoundTripIcon from "../../../assets/icons/arrows-svgrepo-com (1).svg";
import line from "../../../assets/icons/line.svg";
// import  from "../Calender/flightSearchExample";
import { FlightCalendar } from "../Calender/newCalender";
// import styles
import "./flightsForm.scss";

function FlightsForm() {
  // contexts
  const {
    setFormData,
    setIataCodes,
    setFlightResults,
    setFilteredFlights,
    setBrandedUpSell,
    setBookedFlight,
    setAlert,
  } = useContext(FlightContext);
  const { userLocation } = useContext(LocationContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    origin: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    flightType: "roundTrip",
    seatClass: "ECONOMY",
  });

  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const [airlines, setAirlines] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [iataRes, airlineRes] = await Promise.all([
          axios.get("http://localhost:3000/iataCodes"),
          axios.get("http://localhost:3000/airlines"),
        ]);
        setIataCodes(iataRes.data);
        setAirlines(airlineRes.data);
      } catch (error) {
        console.error("Error fetching flight data:", error);
      }
    };
    const resetState = () => {
      setFilteredFlights([]);
      setFlightResults([]);
      setBrandedUpSell([]);
      setBookedFlight([]);
      console.log("state reseted");
    };
    fetchData();
    resetState();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTripTypeClick = (type) => {
    setInputs((prev) => ({
      ...prev,
      flightType: type,
    }));
    console.log(type);
  };

  const increment = (type) => {
    setPassengers((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const decrement = (type) => {
    setPassengers((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] - 1),
    }));
  };

  const getTotalPassengers = () => {
    return passengers.adults + passengers.children + passengers.infants;
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  if (inputs.flightType === "oneWay") {
    inputs.returnDate = null;
  }
  const handleSubmit = async (e, req) => {
    e.preventDefault();
    console.log(req);
    const formData = {
      ...inputs,
      departureDate:
        inputs.departureDate instanceof Date
          ? inputs.departureDate.toISOString()
          : null,
      returnDate:
        inputs.returnDate instanceof Date
          ? inputs.returnDate.toISOString()
          : null,
      passengers,
    };
    setFormData(formData);
    setAlert(false);
    navigate("/flights/results", { state: formData });
  };

  const handleSwitch = (e) => {
    setClicked(!clicked);
    e.preventDefault();
    setInputs((prev) => ({
      ...prev,
      origin: prev.destination,
      destination: prev.origin,
    }));
  };

  // calender
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState({ start: null, end: null });
  const [isRangeEnabled, setIsRangeEnabled] = useState(false);
  // const [calenderType, setIsRangeEnabled] = useState(false);

  const handleDepartureSelect = (date) => {
    setDepartureDate(date);
    setInputs((prev) => ({
      ...prev,
      departureDate: date,
    }));
  };

  const handleReturnRangeSelect = (range) => {
    setReturnDate(range);
    setInputs((prev) => ({
      ...prev,
      departureDate: range.start,
      returnDate: range.end,
    }));
  };

  useEffect(() => {
    const checkFlightType = () => {
      if (inputs.flightType === "roundTrip") {
        setIsRangeEnabled(true);
      } else {
        setIsRangeEnabled(false);
      }
    };
    checkFlightType();
  }, [inputs]);

  return (
    <div>
      {location.pathname === "/flights" && (
        <div className="search-container">
          <div className="cutout-box">
            <form onSubmit={handleSubmit}>
              <div className="flightSearch">
                <div className="flex-option">
                  <ClickOption
                    key="oneWay"
                    className="trav"
                    labelName="oneWay"
                    label="one way"
                    checkName="flightType"
                    changeFunc={() => handleTripTypeClick("oneWay")}
                    checkedName={inputs.flightType === "oneWay"}
                    click={() => handleTripTypeClick("oneWay")}
                    isActive={inputs.flightType === "oneWay"}
                  />

                  <ClickOption
                    key="roundTrip"
                    className="trav"
                    labelName="roundTrip"
                    label="round trip"
                    checkName="flightType"
                    changeFunc={() => handleTripTypeClick("roundTrip")}
                    checkedName={inputs.flightType === "roundTrip"}
                    click={() => handleTripTypeClick("roundTrip")}
                    isActive={inputs.flightType === "roundTrip"}
                  />

                  <ClickOption
                    key="multiCity"
                    className="trav"
                    labelName="multiCity"
                    label="multi city"
                    checkName="flightType"
                    changeFunc={() => handleTripTypeClick("multiCity")}
                    checkedName={inputs.flightType === "multiCity"}
                    click={() => handleTripTypeClick("multiCity")}
                    isActive={inputs.flightType === "multiCity"}
                  />
                  <div
                    className="actives"
                    style={{
                      left:
                        inputs.flightType === "oneWay"
                          ? "1px"
                          : inputs.flightType === "roundTrip"
                          ? "140px"
                          : "270px",
                      width:
                        inputs.flightType === "oneWay"
                          ? "120px"
                          : inputs.flightType === "roundTrip"
                          ? "120px"
                          : "132px",
                    }}
                  />
                </div>

                <div className="flightInputs">
                  <FlightSearchInput
                    classOne="flexInput"
                    labelFor="Origin"
                    label="Origin"
                    placeholder="Input place of origin"
                    InputName="origin"
                    change={handleChange}
                    value={inputs.origin}
                  />
                  <motion.button
                    initial={{ rotate: 0 }}
                    animate={
                      clicked ? { rotate: 360, type: "spring" } : { rotate: 0 }
                    }
                    className="switchBtn"
                    onClick={handleSwitch}
                  >
                    <img src={RoundTripIcon} alt="" />
                  </motion.button>
                  <div className="newFlex">
                    <FlightSearchInput
                      classOne="flexInput inputTwo"
                      labelFor="Destination"
                      label="Destination"
                      placeholder="Input place of destination"
                      InputName="destination"
                      change={handleChange}
                      value={inputs.destination}
                    />
                  </div>
                </div>
              </div>
              <img className="lines" src={line} />
              <FlightCalendar
                onDateSelect={handleDepartureSelect}
                onRangeSelect={handleReturnRangeSelect}
                isRangePicker={isRangeEnabled}
                placeholder="Select departure date"
              />
              <div className="seatType">
                <div className="passenger-selector">
                  <div className="dropdown-header" onClick={toggleDropdown}>
                    <span>Passengers : {getTotalPassengers()}</span>
                    <span className="arrow">{isDropdownOpen ? "▲" : "▼"}</span>
                  </div>

                  {isDropdownOpen && (
                    <div className="dropdown-content">
                      {["adults", "children", "infants"].map((type) => (
                        <div className="passenger-type" key={type}>
                          <div className="passenger-label">
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </div>
                          <div className="pax">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                decrement(type);
                              }}
                              disabled={
                                type === "adults"
                                  ? passengers[type] <= 1
                                  : passengers[type] <= 0
                              }
                            >
                              -
                            </button>
                            <span>{passengers[type]}</span>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                increment(type);
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="seatClass">
                  <label htmlFor="seatClass"> Seat Class</label>
                  <select
                    name="seatClass"
                    id="seatClass"
                    onChange={handleChange}
                    value={inputs.seatClass}
                  >
                    <option value="ECONOMY">Economy</option>
                    <option value="PREMIUM_ECONOMY">Economy Premium</option>
                    <option value="BUSINESS">Business</option>
                    <option value="FIRST">First Class</option>
                  </select>
                </div>

                {/* <div className="seat">
                    {["economy", "business", "first class"].map((type) => (
                     <li>{type}</li>
                    ))}
                  </div> */}
              </div>

              <button className="btn-submit" type="submit">
                Search Flights
              </button>
            </form>
          </div>
          <div className="multicity-flight">
            <div className="multicity-header">
              <h4>flight {2}</h4>
              <button>add flight</button>
            </div>
            <div className="flightInputs">
              <FlightSearchInput
                classOne="flexInput"
                labelFor="Origin"
                label="Origin"
                placeholder="Input place of origin"
                InputName="origin"
                change={handleChange}
                value={inputs.origin}
              />
              <motion.button
                initial={{ rotate: 0 }}
                animate={
                  clicked ? { rotate: 360, type: "spring" } : { rotate: 0 }
                }
                className="switchBtn"
                onClick={handleSwitch}
              >
                <img src={RoundTripIcon} alt="" />
              </motion.button>
              <div className="newFlex">
                <FlightSearchInput
                  classOne="flexInput inputTwo"
                  labelFor="Destination"
                  label="Destination"
                  placeholder="Input place of destination"
                  InputName="destination"
                  change={handleChange}
                  value={inputs.destination}
                />
              </div>
            </div>
            <FlightCalendar
              onDateSelect={handleDepartureSelect}
              onRangeSelect={handleReturnRangeSelect}
              isRangePicker={isRangeEnabled}
              placeholder="Select departure date"
            />
          </div>
        </div>
      )}
      {/* <Outlet /> */}
    </div>
  );
}

export default FlightsForm;
