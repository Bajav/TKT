import "./form.styles.scss";
import { useState } from "react";
import FlightSearchInput from "../../../flightSearch/SearchInput/flightSearch";
import { FlightCalendar } from "../../../flightSearch/Calender/newCalender";
import DestinationSearchInput from "../inputs/inputs.component";
import GuestsSelector from "../../../PaxSelector/paxselector.component";
const HotelForm = () => {
  const [inputs, setInputs] = useState({
    stays: false,
    hotels: false,
    rooms: 1,
    destination: "",
  });

  const HotelDateSelector = () => {
    const [dates, setDates] = useState({
      checkIn: null,
      checkOut: null,
    });
  };

  const handleRangeSelect = ({ start, end }) => {
    setDates({
      checkIn: start,
      checkOut: end,
    });
  };

  const handleChanges = (e) => {
    const { name, value, type, checked } = e.target;

    setInputs((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  });
  const handleSubmit = (e) => e.preventDefault();
  return (
    <div className="hotelform">
      <div className="form-header">
        <h1>
          Experience <span className="bold-span">luxury </span>
          on a level never <span>seen before.</span>
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="payload-inputs">
        <div className="payload-header">
          <div className="toggles">
            <div
              className={`toggle-slider ${
                inputs.accommodationType === "hotels" ? "right" : "left"
              }`}
            />

            <label className="toggle-option">
              <input
                type="radio"
                name="accommodationType"
                value="stays"
                checked={inputs.accommodationType === "stays"}
                onChange={handleChanges}
              />
          <span>Stays</span>
            </label>

            <label  className="toggle-option">
              <input
                type="radio"
                name="accommodationType"
                value="hotels"
                checked={inputs.accommodationType === "hotels"}
                onChange={handleChanges}
              />
              <span>Hotels</span>
              
            </label>
          </div>

          <div className="room-input">
            <label htmlFor="rooms">Rooms::</label>
            <select name="rooms" id="rooms">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>
        </div>
        <div className="searchInputs">
          <DestinationSearchInput
            label="Destination"
            name="destination"
            value={inputs.destination}
            onChange={handleChanges}
            placeholder="Enter City or country"
          />
          <div className="guests">
            <FlightCalendar
              isRangePicker={true}
              onRangeSelect={handleRangeSelect}
              placeholder="Check-in → Check-out"
            />
            <GuestsSelector value={guests} onChange={setGuests} />
          </div>
        </div>

        <button className="btn-sub" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default HotelForm;
