import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Arrow } from "./flightArrowSvg";
import axios from "axios";
import Loader from "../loader";

function FlightCard() {
  // states
  const [iataCodes, setIataCodes] = useState([]);
  const [airlines, setAirlines] = useState([]);
  const [flightResponse, setFlightResponse] = useState([]);
  const [dropDown, showDropDown] = useState(null);
  const [outBoundFlight, setFlight] = useState({});
  const [isOverLay, setShowOverLay] = useState(true);
  // const [showBookingInfo, setShowBookingInfo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [flightsRes, iataRes,airporRes] = await Promise.all([
          axios.get("http://localhost:3000/results"),
          axios.get("http://localhost:3000/iataCodes"),
          axios.get("http://localhost:3000/airlines"),
        ]);
        setFlightResponse(flightsRes.data);
        console.log(flightsRes.data);
        const iataCodes = iataRes.data;
        const airlines = airporRes.data;
        setIataCodes(iataCodes);
        setAirlines(airlines);
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
      }
    };
    fetchData();
  }, []);
  

  const iataLookup = iataCodes.reduce((lookup, item) => {
    lookup[item.AirportCode] = {
      city: item.City,
      country: item.Country,
    };
    return lookup;
  }, {});
  
  const airlinesLookUp = airlines.reduce((airlineLookUp, item) => {
    airlineLookUp[item.code] = {
      logo: item.logo,
      name: item.name,
    };
    return airlineLookUp;
  }, {});
  

  // Button actions
  const seeDetails = async (index) => {
    console.log("details button is clicked for card", index);
    showDropDown((prevIndex) => (prevIndex === index ? null : index));
  };

  const bookNow = async (index) => {
    navigate("/flights/flightsResults/flightPricing");
    console.log("boook now btn hit")
    try {
      setFlight (flightResponse[index]);
      await axios.post(
        "http://localhost:3000/flights/flightsResults/flightPricing",
        { flight: outBoundFlight,index : index }
      );
    } catch (err) {
      console.error("Error posting data:", err);
    }
  };
  return(
<Fragment>
  {flightResponse.length < 1 ? (
    <Loader loaderTag="Searching for flights" />
  ) : (
    flightResponse.map((itinerary, index) => {
      const segments = itinerary.itineraries[0]?.segments || [];
      const segmentNumber = segments.length;
      const lastSegmentIndex = segmentNumber - 1;
      const segmentOne = itinerary.itineraries[0].segments;
      const segmentTwo = itinerary.itineraries[1].segments;

      return (
        <div className="main-cards" key={index}>
          <div className="flights-res">
            <div className="flights-header">
              <div className="airLineIcone">
                <div className="icon">
                  <img
                    src={
                      airlines.find(
                        (airlineLookUp) =>
                          airlineLookUp.code === segments[0].carrierCode
                      )?.logo || ""
                    }
                    alt="Airline Logo"
                    className="airline-logo"
                  />
                </div>
                <h4>
                  {airlines.find(
                    (airlineLookUp) =>
                      airlineLookUp.code === segments[0].carrierCode
                  )?.name || ""}
                </h4>
              </div>
              <h4>{segments[0].aircraft.code}</h4>
            </div>
            <div className="ticket-header">
              <div className="origin">
                <h2>{segments[0].departure.iataCode}</h2>
                <h5>
                  {iataCodes.find(
                    (lookup) =>
                      lookup.AirportCode === segments[0].departure.iataCode
                  )?.City || ""}
                </h5>

                <h5>{segments[0].departure.at.slice(11)}</h5>
              </div>
              <div className="center">
                <Arrow color="#F5F7F8" width="200px" />
                {segmentNumber > 1 ? (
                  <h5>{segmentNumber - 1} stops</h5>
                ) : (
                  <h5>0 stops</h5>
                )}
              </div>
              <div className="item">
                <h2>{segments[lastSegmentIndex].arrival.iataCode}</h2>
                <h5>
                  {iataCodes.find(
                    (lookup) =>
                      lookup.AirportCode ===
                      segments[lastSegmentIndex].arrival.iataCode
                  )?.City || ""}
                </h5>
                <h5>{segments[lastSegmentIndex].arrival.at.slice(11)}</h5>
              </div>
            </div>
            <div className="flights-actions">
              <div className="time-details">
                <div className="flex-tim">
                  <h4>{segments[lastSegmentIndex].arrival.at.slice(0, 10)}</h4>
                </div>
                <div className="flex-tim">
                  <h4>{itinerary.itineraries[0].duration.slice(2)}</h4>
                </div>
              </div>
              <div className="price-details">
                <h4>${itinerary.price.grandTotal}</h4>
              </div>
              <div className="actions">
                <button
                  onClick={() => {
                    bookNow(index);
                  }}
                  className="bookBtn"
                >
                  Book Now
                </button>
                <button
                  onClick={() => {
                    seeDetails(index);
                  }}
                  className="detailsBtn"
                >
                  See Details
                </button>
              </div>
            </div>
          </div>
          {dropDown === index ? (
            <div className="flightsDetails">
              <Swiper
                spaceBetween={20}
                slidesPerView="auto"
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="stopOvers"
              >
                {segmentOne.map((stopOver, setStopIndex) => (
                  <SwiperSlide key={setStopIndex}>
                    <div className="ticket-header">
                      <div className="stopFlight">
                        <div className="origin">
                          <h2>{stopOver.departure.iataCode}</h2>
                          <h5>
                            {iataCodes.find(
                              (lookup) =>
                                lookup.AirportCode ===
                                segments[0].departure.iataCode
                            )?.City || ""}
                          </h5>
                          <h5>{stopOver.departure.at.slice(11)}</h5>
                        </div>
                        <div className="center">
                          <Arrow color="#F5F7F8" width="150px" />
                        </div>
                        <div className="item">
                          <h2>{stopOver.arrival.iataCode}</h2>
                          <h5>
                            {iataCodes.find(
                              (lookup) =>
                                lookup.AirportCode ===
                                segments[0].arrival.iataCode
                            )?.City || ""}
                          </h5>
                          <h5>{stopOver.arrival.at.slice(11)}</h5>
                        </div>
                      </div>
                      <div className="lineOne">
                        <h5>-----------------------------------------------</h5>
                      </div>
                      <div className="stop-details">
                        <h5>LAYOVER TIME : 1H40M </h5>
                        <h5>||</h5>
                        <h5>
                          CLASS :{" "}
                          {
                            itinerary.travelerPricings[0]
                              .fareDetailsBySegment[0].class
                          }{" "}
                          {
                            itinerary.travelerPricings[0]
                              .fareDetailsBySegment[0].cabin
                          }
                        </h5>
                        <h5>||</h5>
                        <h5>AIRLINE : KENYA AIRWAYS - KQ23A</h5>
                        <h5>||</h5>
                        <h5>DURATION : 4H40M </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="line">
                <h5>-------------------------------------------</h5>
              </div>
              <div className="Alldetails">
                <h5>SEATS LEFT : {itinerary.numberOfBookableSeats}</h5>
                <h5>last Date : {itinerary.lastTicketingDate}</h5>
                <h5>TRAVLR TYPE : ADT</h5>
                <h5>
                  {itinerary.travelerPricings[0].fareDetailsBySegment[0].cabin}
                </h5>
                <h5>
                  CHECKED BAG : 30KG
                  {
                    itinerary.travelerPricings[0].fareDetailsBySegment[0]
                      .includedCheckedBags.weight
                  }
                </h5>
              </div>
            </div>
          ) : null}
        </div>
      );
    })
  )}
</Fragment>
)
}
export default FlightCard;
