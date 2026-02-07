import { useState, useEffect, useContext, Fragment, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import axios from "axios";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
// hooks
import { FlightContext } from "../../context/flightSearch.context";
import { LocationContext } from "../../context/location.context";
import { SessionContext } from "../../context/session.context";
// components
import FlightSearchInput from "../SearchInput/flightSearch";
import ClickOption from "../checkBtns/ClickOption";
import RoundTripIcon from "../../../assets/icons/arrows-svgrepo-com (1).svg";
import line from "../../../assets/icons/DottedLine.png";
// import  from "../Calender/flightSearchExample";
import { FlightCalendar } from "../Calender/newCalender";
// import styles
import "./flightsForm.scss";

function FlightsForm() {
  // contexts
  const {
    flightSearch,
    setFormData,
    setIataCodes,
    setFlightResults,
    setFilteredFlights,
    setBrandedUpSell,
    setBookedFlight,
    setAlert,
  } = useContext(FlightContext);
  // hooks
  // const { userLocation } = useContext(LocationContext);

  const prevFlightSearchRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
    // calender
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState({ start: null, end: null });
  const [isRangeEnabled, setIsRangeEnabled] = useState(false);
  // const [calenderType, setIsRangeEnabled] = useState(false);

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
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
    console.log("flight type:::", type);
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

  // multicity handler functions
  const multicityArray = [2, 3, 4, 5];

  const [multiCityFlights, setMultiCityFlights] = useState([
    { origin: "", destination: "", departureDate: "" },
  ]);

  const handleMultiChange = (index, field, value) => {
    const updated = [...multiCityFlights];
    updated[index][field] = value;
    setMultiCityFlights(updated);
  };

  const handleAddFlight = () => {
    setMultiCityFlights([
      ...multiCityFlights,
      { origin: "", destination: "", departureDate: "" },
    ]);
  };

  const handleRemoveFlight = (index) => {
    setMultiCityFlights(multiCityFlights.filter((_, i) => i !== index));
  };

  // populate form recent searches

  useEffect(() => {
    // Skip if no flightSearch or it's the same reference (early bail-out)
    if (!flightSearch) return;

    // Optional: deep comparison if you want to avoid updates on same content
    // But usually reference + existence check is enough if parent controls uniqueness
    if (prevFlightSearchRef.current === flightSearch) return;

    console.log("Populating form from selected flightSearch", flightSearch);

    setInputs((prev) => ({
      ...prev,
      origin: flightSearch?.origin || "",
      destination: flightSearch?.destination || "",
      departureDate: flightSearch?.departureDate || "",
      returnDate: flightSearch?.returnDate || "",
      seatClass: "ECONOMY",
    }));

    prevFlightSearchRef.current = flightSearch;
  }, [flightSearch]); // still depends on flightSearch, but we bail early if same ref

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
                  <div className="newFlex">
                    <FlightSearchInput
                      classOne="flexInput inputOne"
                      labelFor="Origin"
                      label="Origin"
                      placeholder="Input place of origin"
                      InputName="origin"
                      change={handleChange}
                      value={inputs.origin}
                    />
                  </div>
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

              {(inputs.flightType === "oneWay" ||
                inputs.flightType === "roundTrip") && (
                <button className="btn-submit" type="submit">
                  Search Flights
                </button>
              )}
            </form>
          </div>

          {console.log(inputs.flightType)}
          <div className="multicity-container">
            {inputs.flightType === "multiCity" &&
              multiCityFlights.map((flight, index) => (
                <div className="multicity-flight" key={index}>
                  <div className="multicity-header">
                    <h4>Flight {index + 1}</h4>
                    <div className="function-btns">
                      <div
                        className="addflight funcBTN"
                        onClick={handleAddFlight}
                      >
                        <Plus size={20} />
                      </div>
                      {multiCityFlights.length > 1 && (
                        <div
                          className="removeFlight funcBTN"
                          onClick={() => handleRemoveFlight(index)}
                        >
                          <Minus size={20} />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flightInputs">
                    <div className="newFlex">
                      <FlightSearchInput
                        classOne="flexInput"
                        labelFor="Origin"
                        label="Origin"
                        placeholder="Input place of origin"
                        InputName="origin"
                        change={(e) =>
                          handleMultiChange(index, "origin", e.target.value)
                        }
                        value={flight.origin}
                      />
                    </div>

                    <motion.button
                      initial={{ rotate: 0 }}
                      animate={clicked ? { rotate: 360 } : { rotate: 0 }}
                      className="switchBtn"
                      onClick={(e) => {
                        e.preventDefault();
                        const updated = [...multiCityFlights];
                        [updated[index].origin, updated[index].destination] = [
                          updated[index].destination,
                          updated[index].origin,
                        ];
                        setMultiCityFlights(updated);
                      }}
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
                        change={(e) =>
                          handleMultiChange(
                            index,
                            "destination",
                            e.target.value,
                          )
                        }
                        value={flight.destination}
                      />
                    </div>
                  </div>

                  <FlightCalendar
                    onDateSelect={(date) =>
                      handleMultiChange(index, "departureDate", date)
                    }
                    placeholder="Select departure date"
                  />
                </div>
              ))}
          </div>
        </div>
      )}
      {/* <Outlet /> */}
    </div>
  );
}

export default FlightsForm;

// const array = ["UR", "QR","QR","WB","UR","ET"];
// const findDupes =(db)=>{
//     const availableFlights = new Set();
//     const dupeFlights = new Set();
//     for(i of db){
//         console.log(i);
//         if(availableFlights.has(i)){
//             dupeFlights.add(i)};
//         availableFlights.add(i);
//         console.log(dupeFlights);
//     }
//   };
//     findDupes(array);
