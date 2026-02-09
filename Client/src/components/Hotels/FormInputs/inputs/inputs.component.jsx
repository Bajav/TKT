import { useState, useRef, Fragment, useEffect } from "react";
import axios from "axios";
import "./input.styles.scss";

const DestinationSearchInput = ({
  value,
  onChange,
  placeholder = "Enter city or country",
  name,
  label,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [citiesJson, setcitiesJson] = useState(null);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef(null);
  const timeoutRef = useRef(null);

useEffect(() => {
  let isMounted = true; // ✅ Track if component is still mounted

  const fetchCities = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/get/cities");
        console.log("response :: :: ",response);
      
      if (isMounted) { // ✅ Only update state if still mounted
        setcitiesJson(response.data);
      }
    } catch (error) {
      if (isMounted) {
        console.error(`Error fetching cities: ${error}`);
      }
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }
  };
  
  fetchCities();

  return () => {
    isMounted = false; // ✅ Cleanup: mark as unmounted
  };
}, []);

  // Filter and limit results
  const filteredResults = citiesJson
    ?.filter((item) =>
      `${item.name_en} ${item.country} ${item.iata}`
        .toLowerCase()
        .includes(value.toLowerCase())
    )
    .slice(0, 10); // Limit to 10 results

  const handleSelect = (item) => {
    onChange({
      target: {
        name,
        value: `${item.iata}, ${item.name_en}, ${item.country}`,
      },
    });
    setShowDropdown(!showDropdown);
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
          onBlur={() => {
            timeoutRef.current = setTimeout(() => setShowDropdown(false), 150);
          }}
        />
      </div>

      {showDropdown && value && (
        <div className="destination-dropdown">
          {loading ? (
            <div className="loading">Loading cities...</div>
          ) : filteredResults?.length > 0 ? (
            <ul>
              {filteredResults.map((item, index) => (
                <li
                  key={`${item.iata}-${index}`}
                  className="destination-row"
                  onClick={() => handleSelect(item)}
                >
                  <span>{item.iata}</span> {" "}
                  <span className="meta">
                    {item.name_en}, {item.country}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="no-results">No cities found</div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default DestinationSearchInput;