import React, { Fragment, useEffect, useState } from "react";
import { Arrow, CalenderSvg, TimeSvg } from "./flightArrowSvg";
import axios from "axios";

function FlightCard() {
  const [flightResponse, setFlightResponse] = useState([]);

  const fetchFlights = async () => {
    try {
      const res = await axios.get("http://localhost:3080/flights/flightsResults");
      setFlightResponse(res.data);
      console.log()
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <Fragment>
      {flightResponse.map((itinerary) => {
        // console.log("results", itinerary);
        return ( 
          <div className="flights-res" key={itinerary.itineraries[0].segments[0].id || itinerary.id}>
            <div className="flights-header">
              <div className="airLineIcone">
                <div className="icon"></div>
                <h4>{itinerary.itineraries[0].segments[0].carrierCode}</h4>
              </div>
              <h4>{itinerary.itineraries[0].segments[0].aircraft.code}</h4>
            </div>
            <div className="ticket-header">
              <div className="origin">
                <h2>{itinerary.itineraries[0].segments[0].departure.iataCode}</h2>
                <h5>Kampala, Uganda</h5>
                <h5>{itinerary.itineraries[0].segments[0].departure.at.slice(11)}</h5>
              </div>
              <div className="item">
                <Arrow color="#F5F7F8" />
              </div>
              <div className="item">
                <h2>{itinerary.itineraries[0].segments[0].arrival.iataCode}</h2>
                <h5>Dubai, UAE</h5>
                <h5>{itinerary.itineraries[0].segments[0].arrival.at.slice(11)}</h5> {/* Corrected here */}
              </div>
            </div>
            <div className="flights-actions">
              <div className="time-details">
                <div className="flex-tim">
                  <h4>{itinerary.itineraries[0].segments[0].arrival.at.slice(0,10)}</h4>
                </div>
                <div className="flex-tim">
                  <h4>{itinerary.itineraries[0].duration.slice(2)}</h4>
                </div>
              </div>
              <div className="price details">
                <h4>${itinerary.price.grandTotal}/Pax</h4>
              </div>
              <div className="actions">
                <button className="bookBtn">book now</button>
                <button className="detailsBtn">see details</button>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}

export default FlightCard;