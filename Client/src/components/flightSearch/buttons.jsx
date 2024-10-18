import React, { useState } from 'react';

function PassengerForm() {
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0
  });

  const increment = (type) => {
    setPassengers((prev) => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const decrement = (type) => {
    setPassengers((prev) => ({
      ...prev,
      [type]: prev[type] > 0 ? prev[type] - 1 : 0
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can log the current passenger data
    console.log("Passenger Data Submitted: ", passengers);

    // Send the form data to your backend or API
    // Example: axios.post('/api/submit', passengers)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Passenger Selection</h4>

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

      <button type="submit">Submit</button>
    </form>
  );
}

export default PassengerForm;
