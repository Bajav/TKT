import React, { useEffect, useState } from "react";
import axios from "axios";
import { Arrow } from "../components/flightSearch/flightArrowSvg";
import InfoHighlights from "../components/flightSearch/InfoHighlights";
import Border from "../components/flightSearch/border";
import confirmOder from "../data/flightConfirmOrder";

function FlightPricing() {
  const flightOffers = confirmOder.flightOffers;
  // const itineraries = confirmOder.itineraries;

  const [res, setRes] = useState([]);

  const fetchFlightPricing = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/flights/flightsResults/flightPricing"
      );
      console.log("RESPONSE DATA IS BACK", response.data);
      setRes(response.data);
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  };

  // Log updated state when it changes
  useEffect(() => {
    fetchFlightPricing();
    // console.log("Updated res:", res);
  }, []);
  return (
    <section className="reviewFlight">

      <h1>review flight</h1>
    {confirmOder.flightOffers.map((flightOffer,offerInd) => (
      <div className="mainReview" key={offerInd}>
        {flightOffer.itineraries.map((itinerary, itinInd) => (
          <div className="departureReview" key={itinInd}>
           {itinerary.segments.map((segment, segInd) => (
                  <div className="ticket ">
                  <div className="ticket-header">
                    <div className="origin text-review">
                      <h2>{segment.departure.iataCode}</h2>
                      <h5>kampala</h5>
                      <h5>11:12</h5>
                      <h6>TERMINAL : {segment.departure.terminal}</h6>
                    </div>
                    <div className="center">
                      <Arrow color="#F5F7F8" width="200px" />
                      <h4>{segment.duration}</h4>
                    </div>
                    <div className="departure text-review">
                      <h2>{segment.arrival.iataCode}</h2>
                      <h5>kampala</h5>
                      <h5>11:12</h5>
                      <h6>TERMINAL : {segment.arrival.terminal}</h6>
                    </div>
                  </div>
                  <div className="flight-info">
                    <div className="flex-info">
                      <h5>AIRLINE : {segment.carrierCode} {segment.aircraft.code}</h5>
                    </div>
                    <div className="flex-info">
                      <h5>NO STOPS</h5>
                    </div>
                    <div className="flex-info">
                      <h5>CO2 : {segment.co2Emissions[0].weight} {segment.co2Emissions[0].weightUnit}</h5>
                    </div>
                    <div className="flex-info">
                      <h5>05.DEC.24</h5>
                    </div>
                    <div className="flex-info">
                      <h5>CLASS : R {flightOffer.travelerPricings.fareDetailsBySegment}</h5>
                    </div>
                  </div>
                </div>
           ))}
          </div>
        ))}
      </div>
    ))}


      <section className="taxes">
        <div className="taxesHeader">
          <h1>fare breakdown</h1>
          <h1>taxes breakdown</h1>
        </div>
        <Border />
        <div className="taxesBody">
          <div className="bodyOne">
            <h4>base : $230</h4>
            <h4>taxes : $330</h4>
            <h4>total : $560</h4>
          </div>
          <div className="bodyOne">
            <h4>F6 YQ - Carrier-Imposed Surcharge : $10</h4>
            <h4>UL - Passenger Service Charges : $10</h4>
            <h4>AE - UAE Passenger Service Charge : $10</h4>
            <h4>F6 - UAE Passenger Facility Charge : $10</h4>
            <h4>UG - Security Charge : $10</h4>
            <h4>TP - UAE Passenger Security and Safety Fee : $10</h4>
          </div>
        </div>
  
        <div className="paxData">
          <div className="paxDataContainer">
            <div className="data">
              <h4>travelers 4</h4>
            </div>
            <div className=" pax">
              <h4>adult(s) :: 1</h4>
            </div>
            <div className=" pax">
              <h4>children :: 1</h4>
            </div>
            <div className=" pax">
              <h4>infants :: 0</h4>
            </div>
          </div>
        </div>
      </section>
  
      <button className="continueBtn">continue</button>
    </section>
  );
  
}

export default FlightPricing;

