import React from 'react'
import Header from '../components/header';
import FlightsForm from '../components/flightsFormInput';

function Flights() {
  return (
 <main className='flights'>
  <Header />
  <div className="flights-console">
    <FlightsForm />
  </div>
 </main>
  )
}

export default Flights;