import React, { Fragment } from "react";

function Buttons() {
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

  const [count, setCount] = useState(0);

  const onClick = (e) => {
    setCount(count + 1);
  };

  return (
    <Fragment >
    <select name="passengers" id="passengers">
      <option value={count}>
        <button>+</button>
        <h4>{count}</h4>
        <button>-</button>
      </option>
    </select>

    <div className="passenger-selector">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <span>Passengers: {getTotalPassengers()}</span>
                <span className="arrow">{isDropdownOpen ? '▲' : '▼'}</span>
            </div>

            {isDropdownOpen && (
                <div className="dropdown-content">
                    <div className="passenger-type">
                        <div className="passenger-label">Adults</div>
                        <button onClick={(e) => {decrement('adults'); e.preventDefault();}} disabled={passengers.adults <= 1}>-</button>
                        <span>{passengers.adults}</span>
                        <button onClick={(e) =>{ increment('adults'); e.preventDefault();}}>+</button>
                    </div>
                    <div className="passenger-type">
                        <div className="passenger-label">Children</div>
                        <button onClick={(e) => {decrement('children'); e.preventDefault();}} disabled={passengers.children <= 0}>-</button>
                        <span>{passengers.children}</span>
                        <button onClick={(e) => {increment('children'); e.preventDefault();}}>+</button>
                    </div>
                    <div className="passenger-type">
                        <div className="passenger-label">Infants</div>
                        <button onClick={(e) => {decrement('infants'); e.preventDefault();}} disabled={passengers.infants <= 0}>-</button>
                        <span>{passengers.infants}</span>
                        <button onClick={(e) =>{ increment('infants'); e.preventDefault();}}>+</button>
                    </div>
                </div>
            )}
    </div>
    </Fragment>
  );
}

export default Buttons;
