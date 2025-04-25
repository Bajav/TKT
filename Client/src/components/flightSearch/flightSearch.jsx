import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

function FlightSearchInput(props) {
  const [iataCodes, setIataCodes] = useState([]);
  const [airlineData, setAirlineData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [iataRes, airlineRes] = await Promise.all([
          axios.get("http://localhost:3000/iataCodes"),
          axios.get("http://localhost:3000/airlines")
        ]);
        // console.log("airlines",airlineRes);
        // console.log("iatacodes",iataRes);
        setIataCodes(iataRes.data);
        setAirlineData(airlineRes.data);
      } catch (error) {
        console.error("Error fetching flight data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredCodes = iataCodes.filter((code) => {
    return (
      code.AirportName.toLowerCase().includes(props.value.toLowerCase()) || 
      code.AirportCode.toLowerCase().includes(props.value.toLowerCase()) || 
      code.City.toLowerCase().includes(props.value.toLowerCase()) ||        
      code.Country.toLowerCase().includes(props.value.toLowerCase())       
    );
  });

  const onSearch = (searchTerm) => {
    props.change({ target: { name: props.InputName, value: searchTerm } });
    setShowDropdown(false);  
  }

  return (
    <Fragment>
      <div className={props.classOne} >
        <label htmlFor={props.labelFor}>{props.label}</label>
        <input
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
            {filteredCodes.slice(0, 5).map((code, index) => (
              <li 
                className='dropDownRow' 
                key={index} 
                onClick={() => onSearch(`${code.AirportCode}, ${code.AirportName}, ${code.City}, ${code.Country}`)}
              >
                {code.AirportCode} - {code.AirportName}, {code.City}, {code.Country}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Fragment>
  );
}

export default FlightSearchInput;