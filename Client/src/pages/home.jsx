import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [value, setValue] = useState(""); 
  const [status, setStatus] = useState(""); 
  const [iataCodes, setIataCodes] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);  

  const handleChange = (e) => {
    setValue(e.target.value);
    setShowDropdown(true);  
  }

  const fetchIataCodes = async () => { 
    try {
      const response = await axios.get("http://localhost:3080/flights"); 
      setStatus(response.statusText);
      setIataCodes(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
      setStatus("400");
    }
  }

  useEffect(() => {
    fetchIataCodes();
  }, []);

  const filteredCodes = iataCodes.filter((code) => {
    return (
      code.AirportName.toLowerCase().includes(value.toLowerCase()) || 
      code.AirportCode.toLowerCase().includes(value.toLowerCase()) || 
      code.City.toLowerCase().includes(value.toLowerCase()) ||        
      code.Country.toLowerCase().includes(value.toLowerCase())       
    );
  });

  const onSearch = (searchTerm) => {
    setValue(searchTerm); 
    setShowDropdown(false);  
  }

  return (
    <div className="testing">
      
    </div>
  )
}

export default Home;