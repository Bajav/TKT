import React from 'react'
import { useState } from 'react';

function FlightSearch() {
  
  const [inputs, setInputs] = useState({});
  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values =>({...values,[name]:value}));
  }

  return (
    <div className="flightSearch">
      <div className='flexInput'>
      <label htmlFor="from">from</label>
      <input type="text" name="origin" placeholder='enter origin' onChange={handleChange} value={inputs.origin || ""} />
      </div>
      <div className='flexInput'>
      <label htmlFor="to">to</label>
      <input type="text" name="destination" placeholder='enter destination' onChange={handleChange} value={inputs.destination || ""} />
      
      </div>
    </div>
  )
}

export default FlightSearch;