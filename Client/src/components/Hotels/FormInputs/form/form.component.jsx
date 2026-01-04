import "./form.styles.scss";
import { useState, useRef } from "react";
import DestinationSearchInput from "../inputs/inputs.component";
import { FlightCalendar } from "../../../flightSearch/Calender/newCalender";
import GuestsSelector from "../../../PaxSelector/paxselector.component";
import { useNavigate } from "react-router-dom";

const HotelForm = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    accommodationType: "stays",
    destination: "",
    rooms: 1,
  });

  const [dates, setDates] = useState({
    checkIn: null,
    checkOut: null,
  });

  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    infants: 0,
  });

  const roomSelectRef = useRef(null);

  const handleRangeSelect = ({ start, end }) => {
    setDates({
      checkIn: formatDateToYMD(start),
      checkOut: formatDateToYMD(end),
    });
  }

  const handleChanges = (e) => {
    const { name, value } = e.target;

    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...inputs,
      guests,
      dates,
    };
    navigate("/hotels/results");
    // navigate("/flights/results", { state: formData });
    console.log("Hotel search payload:", payload);
  };

  const formatDateToYMD = (date) => {
    if (!date) return null;
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="hotelform">
      <div className="form-header">
        <h1>
          Experience <span className="bold-span">luxury</span> on a level never{" "}
          <span>seen before.</span>
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="payload-inputs">
        {/* HEADER */}
        <div className="payload-header">
          {/* TOGGLES */}
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

            <label className="toggle-option">
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

          {/* ROOMS */}
          <div
            className="room-input"
            onClick={() => roomSelectRef.current?.focus()}
          >
            <label>Rooms</label>
            <select
              ref={roomSelectRef}
              name="rooms"
              value={inputs.rooms}
              onChange={handleChanges}
            >
              {[...Array(9)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* SEARCH INPUTS */}
        <div className="searchInputs">
          <DestinationSearchInput
            label="Destination"
            name="destination"
            value={inputs.destination}
            onChange={handleChanges}
            placeholder="Enter city or country"
          />

          <div className="guests">
            <FlightCalendar
              isRangePicker
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
