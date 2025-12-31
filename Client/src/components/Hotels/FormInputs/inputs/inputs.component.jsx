import { useState, useRef, Fragment } from "react";
import axios from "axios";
import "./input.styles.scss";
import citiesJson from "../../../../data/IATACODES.json";

const DestinationSearchInput = ({
  value,
  onChange,
  placeholder = "Enter city or country",
  name,
  label,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);

  // 🔍 Filter logic (FIXED)
  const filteredResults = citiesJson.filter((item) =>
    `${item.name_en} ${item.country} ${item.iata}`
      .toLowerCase()
      .includes(value.toLowerCase())
  );

  // ✅ Select item (FIXED)
  const handleSelect = (item) => {
    onChange({
      target: {
        name,
        value: `${item.iata}, ${item.name_en}, ${item.country}`, // ✅ NO undefined
      },
    });
    setShowDropdown(false);
  };

  return (
    <Fragment>
      <div className="destination-input">
        <input
          ref={inputRef}
          type="text"
          value={value}
          name={name}
          placeholder={placeholder}
          autoComplete="off"
          onChange={(e) => {
            onChange(e);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
        />
      </div>

      {showDropdown && value && filteredResults.length > 0 && (
        <div className="destination-dropdown">
          <ul>
            {filteredResults.map((item, index) => (
              <li
                key={index}
                className="destination-row"
                onClick={() => handleSelect(item)}
              >
                <span>{item.iata}</span>
                <span className="meta">
                  {" "}
                  {item.name_en}, {item.country}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default DestinationSearchInput;