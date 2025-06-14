import React, {useEffect, useState} from 'react'
import FlightsForm from '../components/flightSearch/flightsForm/flightsFormInput';
import Gallery from '../components/flightSearch/galler';
import LocationHeader from '../components/Header/header'
// import axios from 'axios';




function Flights() {
  // const reloadPage =() =>
  //   {
  //     window.location.reload();
  //   }
 useEffect(()=>{
  // reloadPage();
  // console.log("page reloaded");
 },[]);
  return (
 <main className='flights'>
  <LocationHeader />
  <div className="flights-console">
    <FlightsForm />
  </div>
 </main>
  )
}

export default Flights;