import React from 'react'
import FlightCard from '../components/flightSearch/TicketCard';
import { Arrow } from '../components/flightSearch/flightArrowSvg';

function FlightResult() {
  return (
    <main className='FlightResult'>
      <div className="FlightResults">
        <h3>Results for your search</h3>
        <div className="FlightResult-header">
        <div className="ticket-header">
            <div className="origin">
                <h2>kla</h2>
                <h5>Kampala, Uganda</h5>
                <h5>12:00 pm</h5>
            </div>
            <div className="item"><Arrow /></div>
            <div className="item">
                <h2>DXB</h2>
                <h5>Dubai , UAE</h5>
                <h5>2.00pm</h5>
            </div>
        </div>
        </div>
        <div className="results">
          <FlightCard />
        </div>
      </div>
    </main>
  )
}

export default FlightResult;