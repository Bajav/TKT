import React,{useState} from 'react'
import Buttons from './flightSearch/buttons'
import FlightSearch from './flightSearch/flightSearch'
import CalenderInputs from './flightSearch/calenderInputs'
import PassengerSeatType from './flightSearch/seatPassenger'

function FlightsForm() {
  const handleSubmit =()=>{
    e.preventDefault();
    console.log(inputs);
  }
  return (
    <div class="cutout-box">
        <form action="/flights" onSubmit={handleSubmit}>
        <Buttons />
        <FlightSearch />
        <CalenderInputs />
        <PassengerSeatType />
        <button className='btn-submit'  type="submit" >search</button>
        </form>
    </div>
  )
}

export default FlightsForm;