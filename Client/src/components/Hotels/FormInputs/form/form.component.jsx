import './form.styles.scss';
import { useState } from "react";
import FlightSearchInput from "../../../flightSearch/SearchInput/flightSearch";

const HotelForm = () => {
  const [inputs, setInputs] = useState({
    stays: false,
    hotels: false,
    rooms: 1,
    cityName:"",

  });

  const handleChanges = (e) => {
    const { name, value, type, checked } = e.target;

    setInputs((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs); // payload ready for API
  };

  return (
    <div className="hotelform">
      <div className="header">
        <h1>
          Experience <span className="bold-span">luxury</span>
          on a level never <span>seen before.</span>
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="payload-inputs">
        <div className="payload-header">
          <div className="toggles">
            <div className="toggle-container">
              <label>Stays</label>
              <input
                type="radio"
                name="accommodationType"
                value="stays"
                checked={inputs.accommodationType === "stays"}
                onChange={handleChanges}
              />
            </div>

            <div className="toggle-container">
              <label>Hotels</label>
              <input
                type="radio"
                name="accommodationType"
                value="stays"
                checked={inputs.accommodationType === "hotels"}
                onChange={handleChanges}
              />
            </div>
          </div>

          <div className="room-input">
            <label htmlFor="rooms">Rooms ::</label>
            <input
              type="number"
              value={inputs.rooms}
              name="rooms"
              min={1}
              onChange={handleChanges}
            />
          </div>
          <div className="searchInputs">
            <input
              type="text"
              name="cityName"
              value={inputs.cityName}
              onChange={handleChanges}
              placeholder="enter city name"
            />
            <div className="guests">
                <input type="date" name="calnder" value={inputs.checkIn} onChange={handleChanges} />
                <input type="num" name="adults" value={inputs.guests} onChange={handleChanges} />
            </div>
          </div>
        </div>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default HotelForm;
