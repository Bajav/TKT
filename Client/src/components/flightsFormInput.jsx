import React, { useState } from 'react';
import Calender from './flightSearch/calenderInput';

function FlightsForm() {
  const [inputs, setInputs] = useState({
    flightType: 'oneWay',
    seatClass: 'economy_class',
    multicity: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...inputs, passengers });
    // This is where you would send the data to your backend, for example:
    // axios.post('/api/flights', { ...inputs, passengers });
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
    <div className="cutout-box">
      <form action="/flights" onSubmit={handleSubmit}>
        <div className="flightSearch">
          <div className="flightType-btns">
            <select name="flightType" onChange={handleChange} value={inputs.flightType}>
              <option value="oneWay">One Way</option>
              <option value="roundTrip">Round Trip</option>
            </select>

            <div className="check">
              <label htmlFor="multicity">Multicity</label>
              <input type="checkbox" name="multicity" onChange={handleChange} checked={inputs.multicity} />
            </div>
          </div>

          <div className="flightInputs">
            <div className="flexInput">
              <label htmlFor="from">From</label>
              <input
                type="text"
                name="origin"
                placeholder="Enter origin"
                onChange={handleChange}
                value={inputs.origin || ''}
              />
            </div>
            <div className="flexInput">
              <label htmlFor="to">To</label>
              <input
                type="text"
                name="destination"
                placeholder="Enter destination"
                onChange={handleChange}
                value={inputs.destination || ''}
              />
            </div>
          </div>
        </div>

        <div className="calendersUI">
          <Calender
            label="Date of Departure"
            inputType="date"
            inputName="departureDate"
            change={handleChange}
            value={inputs.departureDate || ''}
          />
          <Calender
            label="Date of Return"
            inputType="date"
            inputName="returnDate"
            change={handleChange}
            value={inputs.returnDate || ''}
          />
        </div>

        <div className="seatType">
          <div className="passenger-selector">
            <div className="dropdown-header" onClick={toggleDropdown}>
              <span>Passengers: {getTotalPassengers()}</span>
              <span className="arrow">{isDropdownOpen ? '▲' : '▼'}</span>
            </div>

            {isDropdownOpen && (
              <div className="dropdown-content">
                <div className="passenger-type">
                  <div className="passenger-label">Adults</div>
                  <button
                    onClick={(e) => {
                      decrement('adults');
                      e.preventDefault();
                    }}
                    disabled={passengers.adults <= 1}
                  >
                    -
                  </button>
                  <span>{passengers.adults}</span>
                  <button
                    onClick={(e) => {
                      increment('adults');
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
                      decrement('children');
                      e.preventDefault();
                    }}
                    disabled={passengers.children <= 0}
                  >
                    -
                  </button>
                  <span>{passengers.children}</span>
                  <button
                    onClick={(e) => {
                      increment('children');
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
                      decrement('infants');
                      e.preventDefault();
                    }}
                    disabled={passengers.infants <= 0}
                  >
                    -
                  </button>
                  <span>{passengers.infants}</span>
                  <button
                    onClick={(e) => {
                      increment('infants');
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
            <select name="seatClass" id="seatClass" onChange={handleChange} value={inputs.seatClass}>
              <option value="economy_class">Economy</option>
              <option value="economy_premium">Economy Premium</option>
              <option value="business_class">Business</option>
              <option value="first_class">First Class</option>
            </select>
          </div>
        </div>

        <button onClick={(e)=>{console.log("clicked")}} className="btn-submit" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default FlightsForm;