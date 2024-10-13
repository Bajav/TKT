import React from 'react'
import Buttons from './flightSearch/buttons'
import FlightSearch from './flightSearch/flightSearch'

function FlightsForm() {
  return (
    <div class="cutout-box">
        <form action="/flights">
        <Buttons />
        <FlightSearch />
        </form>
    </div>
  )
}

export default FlightsForm