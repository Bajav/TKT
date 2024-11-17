import React,{useEffect, useState} from 'react';
import axios from "axios";



function FlightPricing() {
    const [res, setRes] = useState([]);

    const fetchFlightPricing = async ()=>
        {
            try{
            const response = await axios.get("http://localhost:3000/flights/flightsResults/flightPricing");
            console.log(response.data);
            setRes(response.data);
        }
             catch(err){
                console.log(err);
            }
        }

        useEffect(()=>{
            fetchFlightPricing();
        },[])
  return (
    <div>
      pricing
    </div>
  )
}

export default FlightPricing;
