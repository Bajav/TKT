import React from 'react'
import Buttons from './flightSearch/buttons'
import FlightSearch from './flightSearch/flightSearch'
import CalenderInputs from './flightSearch/calenderInputs'
import PassengerSeatType from './flightSearch/seatPassenger'

function FlightsForm() {
  return (
    <div class="cutout-box">
        <form action="/flights">
        <Buttons />
        <FlightSearch />
        <CalenderInputs />
        <PassengerSeatType />
        </form>
    </div>
  )
}

export default FlightsForm;