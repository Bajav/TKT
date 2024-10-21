import React from 'react'
import {Arrow, CalenderSvg, TimeSvg } from './flightArrowSvg'



function FlightCard() {
  return (
    <div className="flights">
        <div className="flights-header">
            <div className="airLineIcone">
                <div className="icon"></div>
                <h4>UR, Uganda Air</h4>
            </div>
            <h4>A380</h4>
        </div>
        <div className="flights-header">
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
        <div className="flights-actions">
            <div className="time-details">
                <div className="time">
                <CalenderSvg />
                <h4>23.DEC.24</h4>
                </div>
                <div className="date">
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