import React,{useEffect, useState} from 'react'
import {Arrow, CalenderSvg, TimeSvg } from './flightArrowSvg'
import axios from 'axios';



function FlightCard() {
    const [flightResponse , setflightResponse]= useState([]);

    const fetchFlights = async()=>{ 
        try{
            const res = axios.get('http://localhost:3080/flights/flightsResults');
            setflightResponse(res.data);
            console.log(res);
            console.log(res.data);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchFlights();
    },[]);

  return (
    <div className="flights-res">
        <div className="flights-header">
            <div className="airLineIcone">
                <div className="icon"></div>
                <h4>UR, Uganda Air</h4>
            </div>
            <h4>A380</h4>
        </div>
        <div className="ticket-header">
            <div className="origin">
                <h2>kla</h2>
                <h5>Kampala , Uganda</h5>
                <h5>12:00 pm</h5>
            </div>
            <div className="item"><Arrow color="#F5F7F8" /></div>
            <div className="item">
                <h2>DXB</h2>
                <h5>Dubai , UAE</h5>
                <h5>2.00pm</h5>
            </div>
        </div>
        <div className="flights-actions">
            <div className="time-details">
                <div className="flex-tim">
                <CalenderSvg />
                <h4>23.DEC.24</h4>
                </div>
                <div className="flex-tim">
                   <TimeSvg />
                    <h4>4h30m</h4>
                </div>
            </div>
            <div className="price details">
                <h4>$243/Pax</h4>
            </div>
            <div className="actions">
                <button className='bookBtn'>book now</button>
                <button className='detailsBtn'>see details</button>
            </div>
        </div>
    </div>
  )
}

export default FlightCard;