import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Arrow } from "../flightArrowSvg";
import BrandedFaresOverlay from "../BrandedFaresOverlay";
import axios from "axios";
import Loader from "../../loader";
import Select from "react-select";
// import scss
// import './ticket.scss';

function FlightCard() {
  // States
  const [iataCodes, setIataCodes] = useState([]);
  const [airlines, setAirlines] = useState([]);
  const [flightResponse, setFlightResponse] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [dropDown, showDropDown] = useState(null);
  const [outBoundFlight, setFlight] = useState({});
  const [isOverLay, setShowOverLay] = useState(false);
  const [availableAirlines, setAvailableAirlines] = useState([]);
  const [filters, setFilters] = useState({
    maxPrice: "",
    stops: "any", // Options: "any", "0"
    airline: "",
  });
  const navigate = useNavigate();

  // Fetch data
useEffect(() => {
  const fetchData = async () => {
    try {
      const flightsRes = await axios.get("http://localhost:3000/results");
      console.log("Flights response:", flightsRes.data);
      const iataRes = await axios.get("http://localhost:3000/iataCodes");
      console.log("IATA codes response:", iataRes.data);
      const airporRes = await axios.get("http://localhost:3000/airlines");
      console.log("Airlines response:", airporRes.data);

      setFlightResponse(flightsRes.data);
      setFilteredFlights(flightsRes.data);
      setIataCodes(iataRes.data);
      setAirlines(airporRes.data);
    } catch (err) {
      console.error("Failed to fetch data:", err);
      console.log("Error response:", err.response?.data);
      console.log("Error status:", err.response?.status);
    }
  };
  fetchData();
}, []);

  // Filter flights when filters change
  // Extract unique airlines from flightResponse
  useEffect(() => {
    const uniqueAirlineCodes = [
      ...new Set(
        flightResponse.flatMap((itinerary) => itinerary.validatingAirlineCodes)
      ),
    ];
    const filteredAirlines = airlines.filter((airline) =>
      uniqueAirlineCodes.includes(airline.code)
    );
    setAvailableAirlines(filteredAirlines);
  }, [flightResponse, airlines]);

  // Filter flights when filters change
  useEffect(() => {
    const applyFilters = () => {
      const results = flightResponse.filter((itinerary) => {
        // Price filter
        const priceOk = filters.maxPrice
          ? parseFloat(itinerary.price.grandTotal) <=
            parseFloat(filters.maxPrice)
          : true;

        // Stops filter
        const stopsOk =
          filters.stops === "any" ||
          (filters.stops === "0" &&
            itinerary.itineraries.every((it) =>
              it.segments.every((seg) => seg.numberOfStops === 0)
            ));

        // Airline filter
        const airlineOk = filters.airline
          ? itinerary.validatingAirlineCodes.includes(filters.airline)
          : true;
        return priceOk && stopsOk && airlineOk;
      });

      setFilteredFlights(results);
    };

    applyFilters();
  }, [filters, flightResponse]);

  // Lookup tables
  const iataLookup = iataCodes.reduce((lookup, item) => {
    lookup[item.AirportCode] = {
      city: item.City,
      country: item.Country,
    };
    return lookup;
  }, {});

  // Fixed: Correct accumulator name
  const airlinesLookUp = airlines.reduce((airlineLookUp, item) => {
    airlineLookUp[item.code] = {
      logo: item.logo,
      name: item.name,
    };
    return airlineLookUp; 
  }, {});

  // Button actions
  const seeDetails = (index) => {
    console.log("details button is clicked for card", index);
    showDropDown((prevIndex) => (prevIndex === index ? null : index));
  };

  const selectButton = async (index) => {
    setShowOverLay(true);
    console.log("selectButton clicked");
    setFlight(filteredFlights[index]);
  };

  const bookNow = async (index) => {
    console.log("book now btn hit");
    try {
      setFlight(filteredFlights[index]);
      await axios.post(
        "http://localhost:3000/flights/flightsResults/flightPricing",
        { flight: filteredFlights[index], index }
      );
    } catch (err) {
      console.error("Error posting data:", err);
    }
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Fragment>
      {isOverLay && (
        <div className="brandedUpsell">
          <div className="upsellContent">
            <button className="closeBtn" onClick={() => setShowOverLay(false)}>
              ✕
            </button>
            <h2>Selected Flight Info</h2>
            <div className="flights-res">
              <div className="flights-header">
                <div className="airLineIcone">
                  <div className="icon">
                    <img
                      src= {""}
                      alt="Airline Logo"
                      className="airline-logo"
                    />
                  </div>
                  <h4>
                    {""}
                  </h4>
                </div>
                <h4>{""}</h4>
              </div>
              <div className="ticket-header">
                <div className="origin">
                  <h2>{ ""}</h2>
                  <h5>
                    {"xxx"}
                  </h5>
                  <h5>{""}</h5>
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
                  <h2>{segments[lastSegmentIndex]?.arrival.iataCode || ""}</h2>
                  <h5>
                    {iataLookup[segments[lastSegmentIndex]?.arrival.iataCode]
                      ?.City || ""}
                  </h5>
                  <h5>
                    {segments[lastSegmentIndex]?.arrival.at.slice(11) || ""}
                  </h5>
                </div>
              </div>
              <div className="flights-actions">
                <div className="time-details">
                  <div className="flex-tim">
                    <h4>
                      {segments[lastSegmentIndex]?.arrival.at.slice(0, 10) ||
                        ""}
                    </h4>
                  </div>
                  <div className="flex-tim">
                    <h4>{itinerary.itineraries[0]?.duration.slice(2) || ""}</h4>
                  </div>
                </div>
                <div className="price-details">
                  <h4>${itinerary.price?.grandTotal || ""}</h4>
                </div>
                <div className="actions">
                  <button
                    onClick={() => selectButton(index)}
                    className="bookBtn"
                  >
                    select
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
          </div>
        </div>
      )}
      <div className="filter-form">
        <h3>Filter Flights</h3>
        <form>
          <div>
            <label>Max Price (USD):</label>
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              placeholder="No limit"
            />
          </div>
          <div>
            <label>Stops:</label>
            <select
              name="stops"
              value={filters.stops}
              onChange={handleFilterChange}
            >
              <option value="any">Any</option>
              <option value="0">Non-stop (0 stops)</option>
            </select>
          </div>
          <div>
            <label>Airline:</label>
            <select
              name="airline"
              value={filters.airline}
              onChange={handleFilterChange}
            >
              <option value="">All Airlines</option>
              {availableAirlines.map((airline) => (
                <option key={airline.code} value={airline.code}>
                  {airline.name}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>

      {filteredFlights.length < 1 ? (
        <Loader loaderTag="Searching for flights" />
      ) : (
        filteredFlights.map((itinerary, index) => {
          const segments = itinerary.itineraries[0]?.segments || [];
          const segmentNumber = segments.length;
          console.log("iatacodeeee", segments[0].departure.iataCode);
          const lastSegmentIndex = segmentNumber - 1;
          const segmentOne = itinerary.itineraries[0].segments;
          const segmentTwo = itinerary.itineraries[1]?.segments || [];

          return (
            <div className="main-cards" key={index}>
              <div className="flights-res">
                <div className="flights-header">
                  <div className="airLineIcone">
                    <div className="icon">
                      <img
                        src={
                          airlinesLookUp[segments[0]?.carrierCode]?.logo || ""
                        }
                        alt="Airline Logo"
                        className="airline-logo"
                      />
                    </div>
                    <h4>
                      {airlinesLookUp[segments[0]?.carrierCode]?.name || ""}
                    </h4>
                  </div>
                  <h4>{segments[0]?.aircraft?.code || ""}</h4>
                </div>
                <div className="ticket-header">
                  <div className="origin">
                    <h2>{segments[0]?.departure.iataCode || ""}</h2>
                    <h5>
                      {iataLookup[segments[0]?.departure.iataCode]?.City ||
                        "xxx"}
                    </h5>
                    <h5>{segments[0]?.departure.at.slice(11) || ""}</h5>
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
                    <h2>
                      {segments[lastSegmentIndex]?.arrival.iataCode || ""}
                    </h2>
                    <h5>
                      {iataLookup[segments[lastSegmentIndex]?.arrival.iataCode]
                        ?.City || ""}
                    </h5>
                    <h5>
                      {segments[lastSegmentIndex]?.arrival.at.slice(11) || ""}
                    </h5>
                  </div>
                </div>
                <div className="flights-actions">
                  <div className="time-details">
                    <div className="flex-tim">
                      <h4>
                        {segments[lastSegmentIndex]?.arrival.at.slice(0, 10) ||
                          ""}
                      </h4>
                    </div>
                    <div className="flex-tim">
                      <h4>
                        {itinerary.itineraries[0]?.duration.slice(2) || ""}
                      </h4>
                    </div>
                  </div>
                  <div className="price-details">
                    <h4>${itinerary.price?.grandTotal || ""}</h4>
                  </div>
                  <div className="actions">
                    <button
                      onClick={() => selectButton(index)}
                      className="bookBtn"
                    >
                      select
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
                                {iataLookup[stopOver.departure.iataCode]
                                  ?.City || ""}
                              </h5>
                              <h5>{stopOver.departure.at.slice(11)}</h5>
                            </div>
                            <div className="center">
                              <Arrow color="#F5F7F8" width="200px" />
                            </div>
                            <div className="item">
                              <h2>{stopOver.arrival.iataCode}</h2>
                              <h5>
                                {iataLookup[stopOver.arrival.iataCode]?.City ||
                                  ""}
                              </h5>
                              <h5>{stopOver.arrival.at.slice(11)}</h5>
                            </div>
                          </div>
                          <div className="lineOne">
                            <h5>
                              --------------------------------------------
                            </h5>
                          </div>
                          <div className="stop-details">
                            <h5>
                              LAYOVER TIME:{" "}
                              {setStopIndex > 0
                                ? calculateLayover(
                                    segmentOne[setStopIndex - 1].arrival.at,
                                    stopOver.departure.at
                                  )
                                : "N/A"}
                            </h5>
                            <h5>
                              CLASS:{" "}
                              {itinerary.travelerPricings[0]
                                ?.fareDetailsBySegment[0]?.class || ""}{" "}
                              {itinerary.travelerPricings[0]
                                ?.fareDetailsBySegment[0]?.cabin || ""}
                            </h5>
                            <h5>AIRLINE: {stopOver.carrierCode}</h5>
                            <h5>DURATION: {stopOver.duration.slice(2)}</h5>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="line">
                    <h5>-------------------------------------------</h5>
                  </div>
                  <div className="Alldetails">
                    <h5>SEATS LEFT: {itinerary.numberOfBookableSeats}</h5>
                    <h5>LAST DATE: {itinerary.lastTicketingDate}</h5>
                    <h5>
                      {itinerary.travelerPricings[0]?.fareDetailsBySegment[0]
                        ?.cabin || ""}
                    </h5>
                    <h5>
                      CHECKED BAG:{" "}
                      {itinerary.travelerPricings[0]?.fareDetailsBySegment[0]
                        ?.includedCheckedBags?.quantity || 0}{" "}
                      pieces
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

// Helper function for layover time
const calculateLayover = (arrival, departure) => {
  const arrTime = new Date(arrival);
  const depTime = new Date(departure);
  const diffMs = depTime - arrTime;
  const hours = Math.floor(diffMs / 1000 / 60 / 60);
  const minutes = Math.floor((diffMs / 1000 / 60) % 60);
  return `${hours}H${minutes.toString().padStart(2, "0")}M`;
};

export default FlightCard;
