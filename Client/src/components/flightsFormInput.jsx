import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';  
import Calender from "./flightSearch/calenderInput";
import FlightSearchInput from "./flightSearch/flightSearch";

function FlightsForm() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    flightType: false,
    seatClass: "ECONOMY",
    multicity: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  
  const [iataCodes, setIataCodes] = useState([]);
  const [airlines, setAirlines] = useState([]);

  const fetchFlightData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/flights");
      const { iataCodes, airlines } = res.data;
      setIataCodes(iataCodes);
      setAirlines(airlines);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchFlightData();
  }, []);




  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { ...inputs, passengers };
    try {
      const response = await axios.post('http://localhost:3000/flights/flightsResults', formData);
      // i send data to next page
      navigate("/flights/flightsResults", { state: { formData, airlines } });
      console.log('Flight data posted:', response.data);
    } catch (error) {
      console.error('Error posting flight:', error);
    }
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const increment = (type) => {
    setPassengers((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const decrement = (type) => {
    setPassengers((prev) => ({
      ...prev,
      [type]: prev[type] > 0 ? prev[type] - 1 : 0,
    }));
  };

  const getTotalPassengers = () => {
    return passengers.adults + passengers.children + passengers.infants;
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <Fragment >
    <div className="cutout-box">
      <form action="/flights" onSubmit={handleSubmit}>
        <div className="flightSearch">
          <div className="flightType-btns">
            <select
              name="flightType"
              onChange={handleChange}
              value={inputs.flightType}
            >
              <option value="oneWay">One Way</option>
              <option value="roundTrip">Round Trip</option>
            </select>

            <div className="check">
              <label htmlFor="multicity">Multicity</label>
              <input
                type="checkbox"
                name="multicity"
                onChange={handleChange}
                checked={inputs.multicity}
              />
            </div>
          </div>

          <div className="flightInputs">
            <FlightSearchInput required classOne="flexInput" labelFor="Origin" label="Origin" placeholder="input place of origin" InputName="origin" change={handleChange} value={inputs.origin || ""} />
            <div className="changeUi">
            <FlightSearchInput required classOne="flexInput" labelFor="destination" label="destination" placeholder="input place of destination" InputName="destination" change={handleChange} value={inputs.destination || ""} />
            </div>   
          </div>
        </div>

        <div className="calendersUI">
          <Calender
            label="Date of Departure"
            inputType="date"
            required
            inputName="departureDate"
            change={handleChange}
            value={inputs.departureDate || ""}
          />
          <Calender
            label="Date of Return"
            inputType="date"
            inputName="returnDate"
            change={handleChange}
            value={inputs.returnDate || ""}
          />
        </div>

        <div className="seatType">
          <div className="passenger-selector">
            <div className="dropdown-header" onClick={toggleDropdown}>
              <span>Passengers: {getTotalPassengers()}</span>
              <span className="arrow">{isDropdownOpen ? "▲" : "▼"}</span>
            </div>

            {isDropdownOpen && (
              <div className="dropdown-content">
                <div className="passenger-type">
                  <div className="passenger-label">Adults</div>
                  <button
                  className="add"
                    onClick={(e) => {
                      decrement("adults");
                      e.preventDefault();
                    }}
                    disabled={passengers.adults <= 1}
                  >
                    -
                  </button>
                  <span>{passengers.adults}</span>
                  <button
                    onClick={(e) => {
                      increment("adults");
                      e.preventDefault();
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="passenger-type">
                  <div className="passenger-label">Children</div>
                  <button
                    onClick={(e) => {
                      decrement("children");
                      e.preventDefault();
                    }}
                    disabled={passengers.children <= 0}
                  >
                    -
                  </button>
                  <span>{passengers.children}</span>
                  <button
                    onClick={(e) => {
                      increment("children");
                      e.preventDefault();
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="passenger-type">
                  <div className="passenger-label">Infants</div>
                  <button
                    onClick={(e) => {
                      decrement("infants");
                      e.preventDefault();
                    }}
                    disabled={passengers.infants <= 0}
                  >
                    -
                  </button>
                  <span>{passengers.infants}</span>
                  <button
                    onClick={(e) => {
                      increment("infants");
                      e.preventDefault();
                    }}
                  >
                    +
                  </button>
                </div>
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

        <button
          className="btn-submit"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
    </Fragment>  
  );
}

export default FlightsForm;