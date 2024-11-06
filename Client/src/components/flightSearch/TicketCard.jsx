import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Arrow } from "./flightArrowSvg";
import axios from "axios";

function FlightCard() {
  const [flightResponse, setFlightResponse] = useState([]);
  const [dropDown, showDropDown] = useState(null);
  const [outBoundFlight, setFlight] = useState({});
  const [showBookingInfo, setShowBookingInfo] = useState(false);

  const fetchFlights = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/flights/flightsResults"
      );
      setFlightResponse(res.data);
      console.log(flightResponse);
    } catch (err) {
      console.log(err);
    }
  };
  const [iataCodes, setIataCodes] = useState([]);
  const [airlines, setAirlines] = useState([]);
  const fetchIataCodes = async () => {
    console.log("fetch function is running again and again");
    try {
      const response = await axios.get("http://localhost:3000/flights");
      const { iataCodes, airlines } = response.data;
      setIataCodes(iataCodes);
      setAirlines(airlines);
    } catch (err) {
      console.error("Error fetching IATA codes", err);
    }
  };

  console.log("fetching is done multiple times");
  useEffect(() => {
    fetchFlights();
    fetchIataCodes();
  }, []);

  const iataLookup = iataCodes.reduce((lookup, item) => {
    lookup = {
      AirportCode: item.AirportCode,
      city: item.City,
      country: item.Country,
    };
    return lookup;
  }, {});

  const airlinesLookUp = airlines.reduce((airlineLookUp, item) => {
    airlineLookUp = {
      code: item.code,
      logo: item.logo,
      name: item.name,
    };
    // console.log(airlineLookUp);
    return airlineLookUp;
  }, {});

  // Button actions
  const seeDetails = (index) => {
    console.log("details button is clicked for card", index);
    showDropDown((prevIndex) => (prevIndex === index ? null : index));
  };

  const bookNow = (index) => {
    console.log(outBoundFlight);
    var selectedFLightOut = flightResponse.slice(index, index + 1);
    setFlight({ flight: selectedFLightOut, index });
    var numOfObjElements = Object.keys(outBoundFlight).length;
    numOfObjElements > 1 ? setShowBookingInfo(true) : setShowBookingInfo(false);
    console.log(numOfObjElements);
  };

  return (
     <Fragment>
       {!showBookingInfo ? (
         flightResponse.map((itinerary, index) => {
          const segments = itinerary.itineraries[0].segments;
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
                            <h5>
                              -----------------------------------------------
                            </h5>
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
                      {
                        itinerary.travelerPricings[0].fareDetailsBySegment[0]
                          .cabin
                      }
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
        ) : (
          flightResponse.map((itinerary, index) => {
            const segments = itinerary.itineraries[1].segments;
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
                              <h5>
                                -----------------------------------------------
                              </h5>
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
                        {
                          itinerary.travelerPricings[0].fareDetailsBySegment[0]
                            .cabin
                        }
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
  );
}

export default FlightCard;
