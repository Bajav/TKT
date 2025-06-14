import React, {useEffect, useState} from 'react'
import Header from '../components/header';
import FlightsForm from '../components/flightSearch/flightsForm/flightsFormInput';
import Gallery from '../components/flightSearch/galler';
import LocationComponent from '../components/LOCATION/location.component';
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
  <Header />
  <div className="flights-console">
    <FlightsForm />
    <LocationComponent />
  </div>
 </main>
  )
}

export default Flights;