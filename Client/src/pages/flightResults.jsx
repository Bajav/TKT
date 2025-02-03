import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import FlightCard from '../components/flightSearch/TicketCard';
import { Arrow } from '../components/flightSearch/flightArrowSvg';
import Dummy from '../components/places/dummyCard';

function FlightResult() {
  const location = useLocation();
  const { searchResults, formData,airlines } = location.state || {};
  

  const data =()=>
    {
      const origin = formData;
      console.log(formData);
    }
    useEffect(()=>{
      data();
    },[])

  return (
    <main className='FlightResult-page'>
      <button>back</button>
      <div className="FlightResults">
        <h3 className='text'> Results for your search</h3>
        <h3>{searchResults}</h3>
        <div className="FlightResult-header">
        <div className="ticket-header">
            <div className="origin">
                <h2>{formData.origin.slice(0,3)}</h2>
            </div>
            <div className="item"><Arrow color="#313030" width="200px" /></div>
            <div className="item">
                <h2>{formData.destination.slice(0,3)}</h2>
            </div>
        </div>
        </div>
        <div className="results">
          <FlightCard />
          <Dummy />
        </div>
      </div>
    </main>
  )
}

export default FlightResult;