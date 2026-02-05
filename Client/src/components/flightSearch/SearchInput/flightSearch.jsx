import { Fragment, useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { FlightContext } from "../../context/flightSearch.context";
import "./flightSearch.scss";

function FlightSearchInput(props) {
  // contexts
  const { iataCodes, setIataCodes, setAirlineData } = useContext(FlightContext);
  // const { setAirlineData } = useContext(FlightContext);
  // state
  const [showDropdown, setShowDropdown] = useState(true);
  // fetch
  const hasFetchedRef = useRef(false);
  useEffect(() => {
    const fetchData = async () => {
      if (hasFetchedRef.current) return;
      hasFetchedRef.current = true;
      try {
        const [iataRes, airlineRes] = await Promise.all([
          axios.get("http://localhost:3000/iataCodes"),
          axios.get("http://localhost:3000/airlines"),
        ]);
        setIataCodes(iataRes.data);
        setAirlineData(airlineRes.data);
      } catch (error) {
        console.error("Error fetching flight data:", error);
      }
    };

    fetchData();
  }, []);

  // filters

  const filteredCodes = iataCodes.filter((code) => {
    return (
      code.AirportName?.toLowerCase().includes(
        props.value?.toLowerCase() || "",
      ) ||
      code.AirportCode?.toLowerCase().includes(
        props.value?.toLowerCase() || "",
      ) ||
      code.City?.toLowerCase().includes(props.value?.toLowerCase() || "") ||
      code.Country?.toLowerCase().includes(props.value?.toLowerCase() || "")
    );
  });

  const onSearch = (searchTerm) => {
    props.change({ target: { name: props.InputName, value: searchTerm } });
    setShowDropdown(false);
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
      {props.value && showDropdown && filteredCodes.length > 0 ? (
        <div className="dropDown">
          <ul>
            {filteredCodes.slice(0, 50).map((code, index) => (
              <li
                className="dropDownRow"
                key={index}
                onClick={() =>
                  onSearch(
                    `${code.AirportCode}, ${code.AirportName}, ${code.City}, ${code.Country}`,
                  )
                }
              >
                {code.AirportCode} - {code.AirportName}, {code.City},{" "}
                {code.Country}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
           </div>
    </Fragment>
  );
}

export default FlightSearchInput;
