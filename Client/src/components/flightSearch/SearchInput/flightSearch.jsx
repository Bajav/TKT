import { Fragment, useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { FlightContext } from "../../context/flightSearch.context";
import "./flightSearch.scss";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

function FlightSearchInput(props) {
  const { setAirlineData } = useContext(FlightContext);
  
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const debouncedSearchTerm = useDebounce(props.value, 300);
  
  // Abort controller for canceling requests
  const abortControllerRef = useRef(null);
  
  const hasFetchedAirlines = useRef(false);
  useEffect(() => {
    const fetchAirlines = async () => {
      if (hasFetchedAirlines.current) return;
      hasFetchedAirlines.current = true;
      
      try {
        const airlineRes = await axios.get("http://localhost:3000/airlines");
        setAirlineData(airlineRes.data);
      } catch (error) {
        console.error("Error fetching airlines:", error);
      }
    };

    fetchAirlines();
  }, [setAirlineData]);

  useEffect(() => {
    const searchAirports = async () => {
      if (!debouncedSearchTerm || debouncedSearchTerm.length < 2) {
        setSuggestions([]);
        return;
      }

      // Cancel previous request if it exists
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Create new abort controller
      abortControllerRef.current = new AbortController();

      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3000/searchairports?query=${encodeURIComponent(debouncedSearchTerm)}&limit=50`,
          { signal: abortControllerRef.current.signal }
        );
        setSuggestions(response.data.suggestions || []);
      } catch (error) {
        // Don't show error if request was aborted
        if (error.name !== 'CanceledError') {
          console.error("Error searching airports:", error);
          setSuggestions([]);
        }
      } finally {
        setLoading(false);
      }
    };

    searchAirports();

    // Cleanup on unmount
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [debouncedSearchTerm]);

  const onSearch = (searchTerm) => {
    props.change({ target: { name: props.InputName, value: searchTerm } });
    setShowDropdown(false);
    setSuggestions([]);
  };

  return (
    <Fragment>
      <div className="inputs-wrapper">
        <div className={props.classOne}>
          <label htmlFor={props.labelFor}>{props.label}</label>
          <input
            required
            className={props.class}
            type="text"
            name={props.InputName}
            placeholder={props.placeholder}
            onChange={props.change}
            value={props.value}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            autoComplete="off"
          />
        </div>

        {showDropdown && props.value && (
          <div className="dropDown">
            {loading ? (
              <div className="loading">Searching...</div>
            ) : suggestions.length > 0 ? (
              <ul>
                {suggestions.map((code, index) => (
                  <li
                    className="dropDownRow"
                    key={`${code.AirportCode}-${index}`}
                    onClick={() =>
                      onSearch(
                        `${code.AirportCode}, ${code.AirportName}, ${code.City}, ${code.Country}`
                      )
                    }
                  >
                    <strong>{code.AirportCode}</strong> - {code.AirportName}, {code.City}, {code.Country}
                  </li>
                ))}
              </ul>
            ) : debouncedSearchTerm.length >= 2 ? (
              <div className="no-results">No airports found</div>
            ) : null}
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default FlightSearchInput;