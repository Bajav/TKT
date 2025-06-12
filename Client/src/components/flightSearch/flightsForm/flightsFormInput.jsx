import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
// hooks
import { FlightContext } from "../../context/flightSearch.context";
// components
import FlightSearchInput from "../SearchInput/flightSearch";
import ClickOption from "../checkBtns/ClickOption";
import Calender from "../Calender/calenderInput";
import RoundTripIcon from "../../../assets/icons/arrows-svgrepo-com (1).svg";
import line from "../../../assets/icons/line.svg";
import Calendar from "../Calender/newCalender";
// import styles
import "./flightsForm.scss";

function FlightsForm() {
  // contexts
  const { setFormData } = useContext(FlightContext);
  const { setIataCodes } = useContext(FlightContext);
  const { setFlightResults } = useContext(FlightContext);
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

    fetchData();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { ...inputs, passengers };
    try {
      const response = await axios.post(
        "http://localhost:3000/results",
        formData
      );
      setFlightResults(response.data);
      console.log(response.data[0]);
      setFormData(formData);
      navigate("results");
    } catch (error) {
      console.error("Error posting flight:", error);
    }
  };

  const handleSwitch = (e) => {
    e.preventDefault();
    setInputs((prev) => ({
      ...prev,
      origin: prev.destination,
      destination: prev.origin,
    }));
  };

  return (
    <div>
      {location.pathname === "/flights" && (
        <div className="cutout-box">
          <form onSubmit={handleSubmit}>
            <div className="flightSearch">
              <div className="flex-option">
                {["oneWay", "roundTrip", "multiCity"].map((type) => (
                  <ClickOption
                    key={type}
                    labelName={type}
                    label={type.replace(/([A-Z])/g, " $1").toLowerCase()}
                    checkName="flightType"
                    changeFunc={() => handleTripTypeClick(type)}
                    checkedName={inputs.flightType === type}
                    click={() => handleTripTypeClick(type)}
                    isActive={inputs.flightType === type}
                  />
                ))}
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
                <button className="switchBtn" onClick={handleSwitch}>
                  <img src={RoundTripIcon} alt="" />
                </button>
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
            <div className="calendersUI">
              <Calender
                label="Date of Departure"
                labelName="Date of Departure"
                inputType="date"
                inputName="departureDate"
                change={handleChange}
                value={inputs.departureDate}
                flightType={inputs.flightType}
              />
              {(inputs.flightType === "roundTrip" ||
                inputs.flightType === "multiCity") && (
                <Calender
                  label="Date of Return"
                  labelName="Date of Return"
                  inputType="date"
                  inputName="returnDate"
                  change={handleChange}
                  value={inputs.returnDate}
                  flightType={inputs.flightType}
                />
              )}
            </div>
            <div className="seatType">
              <div className="passenger-selector">
                <div className="dropdown-header" onClick={toggleDropdown}>
                  <span>Passengers: {getTotalPassengers()}</span>
                  <span className="arrow">{isDropdownOpen ? "▲" : "▼"}</span>
                </div>

                {isDropdownOpen && (
                  <div className="dropdown-content">
                    {["adults", "children", "infants"].map((type) => (
                      <div className="passenger-type" key={type}>
                        <div className="passenger-label">
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </div>
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
            </div>

            <button className="btn-submit" type="submit">
              Search Flights
            </button>
          </form>
        </div>
      )}
      {/* <Outlet /> */}
    </div>
  );
}

export default FlightsForm;
