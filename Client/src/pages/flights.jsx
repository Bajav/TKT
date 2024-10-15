import React from 'react'
import Header from '../components/header';
import FlightsForm from '../components/flightsFormInput';
import Gallery from '../components/flightSearch/galler';

function Flights() {
  return (
 <main className='flights'>
  <Header />
  <div className="flights-console">
    <FlightsForm />
    <Gallery />
  </div>
 </main>
  )
}

export default Flights;