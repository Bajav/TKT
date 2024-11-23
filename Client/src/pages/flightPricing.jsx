import React, { useEffect, useState } from "react";
import axios from "axios";
import { Arrow } from "../components/flightSearch/flightArrowSvg";

function FlightPricing() {
  const [res, setRes] = useState([]);

  const fetchFlightPricing = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/flights/flightsResults/flightPricing"
      );
      console.log(response.data);
      setRes(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFlightPricing();
  }, []);
  return (
    <section className="reviewFlight">
      <button>back</button>
      <h1>review flight</h1>
      <div className="mainReview">
        <div className="departureReview">
          <h1>DEPARTURE FLIGHT</h1>
          <div className="ticket ">
            <div className="ticket-header">
              <div className="origin text-review">
                <h2>kla</h2>
                <h5>kampala</h5>
                <h5>11:12</h5>
                <h6>TERMINAL : 1E</h6>
              </div>
              <div className="center">
                <Arrow color="#F5F7F8" width="200px" />
                <h4>5hr40min</h4>
              </div>
              <div className="departure text-review">
                <h2>kla</h2>
                <h5>kampala</h5>
                <h5>11:12</h5>
                <h6>TERMINAL : 1E</h6>
              </div>
            </div>
            <div className="flight-info">
              <div className="flex-info">
                <h5>AIRLINE : KQ A380</h5>
              </div>
              <div className="flex-info">
                <h5>NO STOPS</h5>
              </div>
              <div className="flex-info">
                <h5>CO2 : 93 KG</h5>
              </div>
              <div className="flex-info">
                <h5>05.DEC.24</h5>
              </div>
              <div className="flex-info">
                <h5>CLASS : R ECONOMY</h5>
              </div>
            </div>
          </div>
          <div className="ticket review-ticket">
            <div className="ticket-header">
              <div className="origin text-review">
                <h2>kla</h2>
                <h5>kampala</h5>
                <h5>11:12</h5>
                <h6>TERMINAL : 1E</h6>
              </div>
              <div className="center">
                <Arrow color="#F5F7F8" width="200px" />
                <h4>5hr40min</h4>
              </div>
              <div className="departure text-review">
                <h2>kla</h2>
                <h5>kampala</h5>
                <h5>11:12</h5>
                <h6>TERMINAL : 1E</h6>
              </div>
            </div>
            <div className="flight-info">
              <div className="flex-info">
                <h5>AIRLINE : KQ A380</h5>
              </div>
              <div className="flex-info">
                <h5>NO STOPS</h5>
              </div>
              <div className="flex-info">
                <h5>CO2 : 93 KG</h5>
              </div>
              <div className="flex-info">
                <h5>05.DEC.24</h5>
              </div>
              <div className="flex-info">
                <h5>CLASS : R ECONOMY</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="returnReview"></div>
      </div>
    </section>
  );
}

export default FlightPricing;
