import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");
  const [iataCodes, setIataCodes] = useState([]); 

  const getIataCodes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/flights");
      setIataCodes(response.data); 
      setMessage("STATUS 200");
      console.log(response.data);
    } catch (error) {
      setMessage("STATUS 400");
      console.error("Error fetching DATA:", error);
    }
  };

  useEffect(() => {
    getIataCodes();
  }, []);
  const filteredCodes = iataCodes.filter((item) =>
    item.AirportName.toLowerCase().includes(value.toLowerCase())  ||
    item.AirportCode.toLowerCase().includes(value.toLowerCase()) ||  
    item.City.toLowerCase().includes(value.toLowerCase()) ||     
    item.Country.toLowerCase().includes(value.toLowerCase())   
  );

  return (
    <div className="testing">
      <h1>{message}</h1>
      <div className="input">
        <input
          type="text"
          name="search"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div className="dropDown">
          {filteredCodes.length > 0 ? (
            filteredCodes.slice(0 , 10).map((item, index) => (
              <li className="dropDownRow" key={index}>
                {item.AirportName} - {item.AirportCode}, {item.Country}
              </li>
            ))
          ) : (
            <div className="dropDownRow">No results found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;