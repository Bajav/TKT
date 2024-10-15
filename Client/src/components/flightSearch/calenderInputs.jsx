import React from 'react'
import Calender from './calenderInput'
import { useState } from 'react';

function CalenderInputs() {
  const [inputs, setInputs] = useState({});
  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values =>({...values,[name]:value}));
  }
  return (
    <div className='calendersUI'>
        <Calender label="date Of departure" labelName="date Of departure"  inputType="date" inputName="departureDate" change={handleChange} value={inputs.departureDate || ""} />
        <Calender label="date Of Return" labelName="date Of Return"  inputType="date" inputName="returnDate" change={handleChange} value={inputs.returnDate || ""}/>
    </div>
  )
}

export default CalenderInputs;