import React, { Fragment, useEffect, useState } from "react";
import { Arrow } from "./flightArrowSvg";
import axios from "axios";

function FlightCard() {
  const [flightResponse, setFlightResponse] = useState([]);
  const [dropDown, showDropDown] = useState(null);

  const fetchFlights = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/flights/flightsResults"
      );
      setFlightResponse(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  // Button actions
  const seeDetails = (index) => {
    console.log("details button is clicked for card", index);
    showDropDown((prevIndex) => (prevIndex === index ? null : index));
  };

  const bookNow = (e) => {
    console.log("bookNow button is clicked");
  };

  return (
    <Fragment>
      {flightResponse.map((itinerary, index) => {
        console.log(itinerary);
        const segments = itinerary.itineraries[0].segments;
        const segmentNumber = segments.length;
        const lastSegmentIndex = segmentNumber - 1;

        return (
          <div
            className="main-cards"
            key={itinerary.itineraries[0].segments[0].id || itinerary.id}
          >
            <div className="flights-res">
              <div className="flights-header">
                <div className="airLineIcone">
                  <div className="icon"></div>
                  <h4>{segments[0].carrierCode}</h4>
                </div>
                <h4>{segments[0].aircraft.code}</h4>
              </div>
              <div className="ticket-header">
                <div className="origin">
                  <h2>{segments[0].departure.iataCode}</h2>
                  <h5>Kampala, Uganda</h5>
                  <h5>{segments[0].departure.at.slice(11)}</h5>
                </div>
                <div className="center">
                  <Arrow color="#F5F7F8" />
                  {segmentNumber > 1 ? (
                    <h5>{segmentNumber - 1} stops</h5>
                  ) : (
                    <h5>0 stops</h5>
                  )}
                </div>
                <div className="item">
                  <h2>{segments[lastSegmentIndex].arrival.iataCode}</h2>
                  <h5>Dubai, UAE</h5>
                  <h5>{segments[lastSegmentIndex].arrival.at.slice(11)}</h5>
                </div>
              </div>
              <div className="flights-actions">
                <div className="time-details">
                  <div className="flex-tim">
                    <h4>
                      {segments[lastSegmentIndex].arrival.at.slice(0, 10)}
                    </h4>
                  </div>
                  <div className="flex-tim">
                    <h4>{itinerary.itineraries[0].duration.slice(2)}</h4>
                  </div>
                </div>
                <div className="price-details">
                  <h4>${itinerary.price.grandTotal}</h4>
                </div>
                <div className="actions">
                  <button onClick={bookNow} className="bookBtn">
                    Book Now
                  </button>
                  <button
                    onClick={() => seeDetails(index)}
                    className="detailsBtn"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
            {dropDown === index ? (
              <div className="flightsDetails">
                <div className="stopOvers">
                <div className="ticket-header">
                  <div className="origin">
                    <h2>{segments[0].departure.iataCode}</h2>
                    <h5>Kampala, Uganda</h5>
                    <h5>{segments[0].departure.at.slice(11)}</h5>
                  </div>
                  <div className="center">
                    <Arrow color="#F5F7F8" />
                    {segmentNumber > 1 ? (
                      <h5>{segmentNumber - 1} stops</h5>
                    ) : (
                      <h5>0 stops</h5>
                    )}
                  </div>
                  <div className="item">
                    <h2>{segments[lastSegmentIndex].arrival.iataCode}</h2>
                    <h5>Dubai, UAE</h5>
                    <h5>{segments[lastSegmentIndex].arrival.at.slice(11)}</h5>
                  </div>
                </div>
                <div className="line"></div>
                <div className="Alldetails"></div>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </Fragment>
  );
}

export default FlightCard;
