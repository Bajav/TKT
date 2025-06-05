import { Fragment, useEffect, useState, useContext } from "react";
import { FlightContext } from "../../context/flightSearch.context";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import Loader from "../../loader";
// import scss
import "./ticket.scss";
// import components
import { Arrow } from "../flightArrowSvg";
import line from "../../../assets/icons/line.svg";
import calender from "../../../assets/icons/calender.svg";
import seat from "../../../assets/icons/Seat.svg";
import carier from "../../../assets/icons/carier.svg";
import pctMile from "../../../assets/icons/pctMile.svg";
import cutlary from "../../../assets/icons/cutlary.svg";
import suiteCase from "../../../assets/icons/suiteCase.svg";
import DummyTicket from "../../features/DummyTicket/DummyTicket";

function FlightCard() {
  // contexts
  const { iataCodes } = useContext(FlightContext);
  const { airlineData } = useContext(FlightContext);
  const { flightResults } = useContext(FlightContext);
  const { bookedFlight, setBookedFlight } = useContext(FlightContext);
  const { selectedFlight, setSelectFlight } = useContext(FlightContext);
  const { brandedUpSell, setBrandedUpSell } = useContext(FlightContext);
  // states
  const [isOverlay, setOverlay] = useState(false);
  const [filterDropDown, setFilterDropDown] = useState(false);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [filteredPrices, setFilteredPrices] = useState([]);
  const [upsellError, setUpsellError] = useState(
    "No upsell offer can be found"
  );
  const [dropDown, showDropDown] = useState(null);
  // const [outBoundFlight, setFlight] = useState({});
  const [availableAirlines, setAvailableAirlines] = useState([]);
  const [filters, setFilters] = useState({
    maxPrice: "",
    // stops: 0, // Options: "any", "0"
    airline: "",
  });
  const navigate = useNavigate();

  // Fetch data --- use effects ---
  useEffect(() => {
    const fetchData = () => {
      try {
        setFilteredFlights(flightResults);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        console.log("Error response:", err.response?.data);
        console.log("Error status:", err.response?.status);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const uniqueAirlineCodes = [
      ...new Set(
        flightResults.flatMap((itinerary) => 
          itinerary.itineraries[0].segments.flatMap((items)=>items.carrierCode)
      )
      ),
    ];
    console.log("uniqueAirlineCodes",uniqueAirlineCodes);
    const filteredAirlines = airlineData.filter((airline) =>
      uniqueAirlineCodes.includes(airline.code)
    );
    setAvailableAirlines(filteredAirlines);
    // console.log("filteredAirlines",filteredAirlines);
  }, [flightResults, airlineData]);
  // Filter flights when filters change
  useEffect(() => {
    const applyFilters = () => {
      const results = flightResults.filter((itinerary) => {
        // Price filter
        const priceOk = filters.maxPrice
          ? parseFloat(itinerary.price.grandTotal) <=
            parseFloat(filters.maxPrice)
          : true;
        // Stops filter
        const stopsOk =
          filters.stops === "any" ||
          (filters.stops === 0 &&
            itinerary.itineraries.every((it) =>
              it.segments.every((seg) => seg.numberOfStops === 0)
            ));

        // Airline filter
        const airlineOk = filters.airline
          ? itinerary.validatingAirlineCodes.includes(filters.airline)
          : true;
        return priceOk && airlineOk;
      });

      console.log("filter res", results);
      setFilteredFlights(results);
    };

    applyFilters();
  }, [filters, flightResults]);
  // Lookup tables
  const iataLookup = iataCodes.reduce((lookup, item) => {
    lookup[item.AirportCode] = {
      city: item.City,
      country: item.Country,
    };
    return lookup;
  }, {});

  // Fixed: Correct accumulator name
  const airlinesLookUp = airlineData.reduce((airlineLookUp, item) => {
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
    console.log("selectButton clicked");
    const selected = filteredFlights[index];
    setSelectFlight(selected);
    setOverlay(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/brandedUpSell",
        selected
      );
      setBrandedUpSell(response.data); // likely want .data, not full response
      console.log("brandedUpsell res", response.data);
    } catch (err) {
      console.error(
        "Axios error:",
        err?.response?.data?.message[0].detail 
      );
      // setUpsellError(err?.response?.data?.message);
    }
  };

  const bookNow = async (index) => {
    console.log("book now btn hit");
    try {
      setBookedFlight(filteredFlights[index]);
      await axios.post(
        "http://localhost:3000/flights/flightsResults/flightPricing",
        { flight: filteredFlights[index], index }
      );
    } catch (err) {
      console.error("Error posting data:", err);
    }
  };

  const showFilterDropDown = () => setFilterDropDown(!filterDropDown);
  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };
  const cancelBTN = () => {
    setBrandedUpSell([]);
    setOverlay(false);
  };

  const fareBrandMap = {
    ECONVENIEN: "Economy Convenient",
    ECOFLEX: "Economy Flexible",
    ECOBASIC: "Economy Basic",

  };

  return (
    <Fragment>
      <div className="filter-form">
        <button onClick={showFilterDropDown}>Filter Flights</button>
        {filterDropDown && (
          <form className="filters">
            <div className="maxPrice">
              <label>Max Price (USD) :</label>
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                placeholder="set price limit"
              />
            </div>
            <div className="stops">
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
            <div className="byAirline">
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
        )}
      </div>
      {isOverlay && (
        <div className="overlay">
          <div className="funcContainer">
            <button onClick={cancelBTN}>cancel</button>
          </div>
          <h3 className="text">choose your best deal</h3>
          <div className="flightDealsHeader ticket-header">
            <div className="origin">
              <h2>{"ebb" || ""}</h2>
              <h5>{"Kampala, Uganda" || ""}</h5>
            </div>
            <div className="center">
              <Arrow color="#1D1D1D" width="200px" />
              <h5>23.DEC.24</h5>
            </div>
            <div className="item">
              <h2>{"dxb" || ""}</h2>
              <h5>{"Dubai , UAE" || ""}</h5>
            </div>
          </div>
          {brandedUpSell.length < 0 ?(<h1>flights</h1>):(<h1>{upsellError}</h1>)}
        </div>
      )}
      {filteredFlights.length < 1 ? (
        <Loader loaderTag="Searching for flights" />
      ) : (
        filteredFlights.map((itinerary, index) => {
                  // console.log("validatingAirlineCodes",itinerary.validatingAirlineCodes);
          // console.log("itinerary for return",itinerary.itineraries[1]);
          const segments = itinerary.itineraries[0]?.segments || [];
          const segmentNumber = segments.length;
          const lastSegmentIndex = segmentNumber - 1;
          const segmentOne = itinerary.itineraries[0].segments;
          const segmentTwo = itinerary.itineraries[1].segments;
          return (
            <div className="flightContainer">
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
                        {iataLookup[segments[0]?.departure.iataCode]?.city ||
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
                        {iataLookup[
                          segments[lastSegmentIndex]?.arrival.iataCode
                        ]?.city || "xxx"}
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
                          {segments[lastSegmentIndex]?.arrival.at.slice(
                            0,
                            10
                          ) || ""}
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
                                    ?.city || ""}
                                </h5>
                                <h5>{stopOver.departure.at.slice(11)}</h5>
                              </div>
                              <div className="center">
                                <Arrow color="#F5F7F8" width="200px" />
                              </div>
                              <div className="item">
                                <h2>{stopOver.arrival.iataCode}</h2>
                                <h5>
                                  {iataLookup[stopOver.arrival.iataCode]
                                    ?.city || "ddd"}
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


// <div key={index} className="flightDealContainer">
//                     <div className="flights-header">
//                       <div className="airLineIcone">
//                         <div className="icon">
//                           <img
//                             src={
//                               airlinesLookUp[segmentOne?.carrierCode]?.logo ||
//                               ""
//                             }
//                             alt="Airline Logo"
//                             className="airline-logo"
//                           />
//                         </div>
//                         <h4>{validatingAirlineCodes[0] || ""}</h4>
//                       </div>
//                       <h3>
//                         {fareBrandMap[
//                           travelerPricings[0].fareDetailsBySegment[0]
//                             .brandedFare
//                         ] || "economy premium"}
//                       </h3>
//                     </div>

//                     <div className="ticket-header">
//                       <div className="origin">
//                         <h2>{departureObject.iataCode || ""}</h2>
//                         <h5>
//                           {iataLookup[departureObject.iataCode]?.city || ""}
//                         </h5>
//                         <h5>{departureObject.at.slice(11) || ""}</h5>
//                       </div>
//                       <div className="center">
//                         <Arrow color="#F5F7F8" width="200px" />
//                         {2 > 1 ? <h5>{2 - 1} stops</h5> : <h5>0 stops</h5>}
//                       </div>
//                       <div className="item">
//                         <h2>{arrivalObject.iataCode || ""}</h2>
//                         <h5>
//                           {iataLookup[arrivalObject.iataCode]?.city || ""}
//                         </h5>
//                         <h5>{arrivalObject.at.slice(11) || ""}</h5>
//                       </div>
//                     </div>
//                     <h6 className="lineNew">
//                       --------------------------------------------------------
//                     </h6>

//                     <div className="flightDetails">
//                       <div className="detailsSect">
//                         <div className="itemContainer">
//                           <img src={seat} />
//                           <li>
//                             {perks.seatChoice
//                               ? "Seat Choice Included"
//                               : "No Seat Selection"}
//                           </li>
//                         </div>
//                         <div className="itemContainer">
//                           <img src={cutlary} />
//                           <li>{perks.meal ? "Meal Beverage" : "No Meal"}</li>
//                         </div>
//                         <div className="itemContainer">
//                           <li>
//                             ${" "}
//                             {perks.changeable
//                               ? "Changeable Ticket"
//                               : "Not Changeable"}
//                           </li>
//                         </div>
//                       </div>
//                       <div className="detailsSect">
//                         <div className="itemContainer">
//                           <img src={carier} />
//                           <li>{perks.checkedBag || "No Checked Bag"}</li>
//                         </div>
//                         <div className="itemContainer">
//                           <li>
//                             {perks.refundable
//                               ? "refundable at a fee"
//                               : " Refundable Ticket"}
//                           </li>
//                         </div>
//                       </div>

//                       <div className="detailsSect">
//                         <div className="itemContainer">
//                           <img src={suiteCase} />
//                           <li>{perks.cabinBag || "No Cabin Bag"}</li>
//                         </div>
//                         <div className="itemContainer">
//                           <img src={pctMile} />
//                           <li>{perks.qmiles || "No QMiles Accumulation"}</li>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flights-actions">
//                       <div className="time-details">
//                         <div className="flex-tim">
//                           <h4>23.DEC.24</h4>
//                         </div>
//                         <div className="flex-tim">
//                           <h4>4 h 30 m</h4>
//                         </div>
//                       </div>
//                       <div className="price-details">
//                         <h4>
//                           {price.grandTotal}/<span>pax</span>
//                         </h4>
//                       </div>
//                       <div className="actions">
//                         <button onClick={() => {}} className="bookBtn">
//                           book now
//                         </button>
//                         <button onClick={() => {}} className="detailsBtn">
//                           economy
//                         </button>
//                       </div>
//                     </div>

//                     <div className="flightFunction"></div>
//                   </div>