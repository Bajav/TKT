import { Fragment, useEffect, useState, useContext, useRef } from "react";
import { FlightContext } from "../../context/flightSearch.context";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import axios from "axios";
import Loader from "../../loader";
// import scss
import "./ticket.scss";
// import components
import BearLoader from "../../bearLoader/bearLoader.component";
import { Arrow } from "../flightArrowSvg";
import line from "../../../assets/icons/line.svg";
import DummyTicket from "../../features/DummyTicket/DummyTicket";
import TicketHeader from "./ticketheader.component";
import AirlineInfo from "./airlinedata.component";
import dollarIcon from "../../../assets/icons/dollar-minimalistic-svgrepo-com.svg";
import checkMark from "../../../assets/icons/white-heavy-check-mark-svgrepo-com.svg";
// motion
import { motion } from "motion/react";

function FlightCard() {
  // contexts
  const { iataCodes } = useContext(FlightContext);
  const { airlineData } = useContext(FlightContext);
  const { flightSearch } = useContext(FlightContext);
  const { flightResults } = useContext(FlightContext);
  const { bookedFlight, setBookedFlight } = useContext(FlightContext);
  const { selectedFlight, setSelectFlight } = useContext(FlightContext);
  const { brandedUpSell, setBrandedUpSell } = useContext(FlightContext);
  const { upsellError, setUpsellError } = useContext(FlightContext);
  const { setlastFlight } = useContext(FlightContext);
  // states
  const [isOverlay, setOverlay] = useState(false);
  const [filterDropDown, setFilterDropDown] = useState(false);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [filteredPrices, setFilteredPrices] = useState([]);
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
          itinerary.itineraries[0].segments.flatMap(
            (items) => items.carrierCode
          )
        )
      ),
    ];
    console.log("uniqueAirlineCodes", uniqueAirlineCodes);
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
          ? itinerary.itineraries[0].segments[0].carrierCode.includes(
              filters.airline
            )
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
      console.error("Axios error:", err?.response?.data?.message);
      setUpsellError(err?.response?.data?.message[0]);
    }
  };

  const bookNow = async (index) => {
    const flight = brandedUpSell[index];
    console.log("book now btn hit");
    console.log("Flight to book:", flight);
    setlastFlight(flight);
    try {
      const response = await axios.post("http://localhost:3000/findLastPrice", {
        bookedFlight: flight,
      });
      setBookedFlight(response.data);
      console.log("response", response);
      console.log("booked", bookedFlight);
      navigate("/flights/lastprice", { replace: true });
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
    setUpsellError(null);
    console.log(upsellError);
  };

  const fareBrandMap = {
    ECONVENIEN: "Economy Convenient",
    ECOFLEX: "Economy Flexible",
    ECOBASIC: "Economy Basic",
  };

  // useEffect(() => {
  //   amenity.isChargeable
  //     ? console.log("its chargable")
  //     : console.log("its free");
  // }, []);

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
          <div className="upsell">
          <TicketHeader
            originCode={flightSearch?.origin?.slice(0, 3) || ""}
            arrowColor="#313030"
            departureCode={flightSearch?.destination?.slice(0, 3) || "XXX"}
          />
          </div>
          {brandedUpSell.length === 0 ? (
            <BearLoader />
          ) : (
            brandedUpSell.map((upsell, index) => {
              const segments = upsell.itineraries[0]?.segments || [];
              const segmentNumber = segments.length;
              const lastSegmentIndex = segmentNumber - 1;
              const segmentOne = upsell.itineraries[0].segments;
              const segmentTwo = upsell.itineraries[1].segments;
              const travelerPricings = upsell.travelerPricings;
              const departureObject = segmentOne[0].departure;
              const arrivalObject = segmentOne[0].arrival;
              const segTwoIndex = segmentTwo.length - 1;
              const departureObjectSegTwo = segmentTwo[segTwoIndex].departure;
              const arrivalObjectSegTwo = segmentTwo[segTwoIndex].arrival;
              const perks =
                travelerPricings[0].fareDetailsBySegment[0].amenities;
              return (
                <Swiper spaceBetween={20} slidesPerView="auto">
                  <SwiperSlide>
                    <div className="flightDealContainer">
                      <AirlineInfo
                        logo={
                          airlinesLookUp[segmentOne[0].carrierCode]?.logo || ""
                        }
                        carrierCode={segmentOne[0].carrierCode || ""}
                        airlineName={
                          travelerPricings[0].fareDetailsBySegment[0]
                            .brandedFare
                        }
                      />
                      <TicketHeader
                        originCode={departureObject.iataCode || ""}
                        originCity={
                          iataLookup[departureObject.iataCode]?.city || ""
                        }
                        arrowColor="#F5F7F8"
                        originTime={departureObject.at.slice(11) || ""}
                        departureCode={arrivalObject.iataCode || ""}
                        departureCity={
                          iataLookup[arrivalObject.iataCode]?.city || ""
                        }
                        departureTime={arrivalObject.at.slice(11) || ""}
                      />
                      <h6 className="lineNew">
                        --------------------------------------------------------
                      </h6>

                      <div className="flightDetails">
                        {perks.map((perk) => {
                          return (
                            <div className="detailsSect">
                              <img
                                src={perk.isChargeable ? dollarIcon : checkMark}
                                alt="perk icon"
                              />
                              <li>{perk.description}</li>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flights-actions">
                        <div className="time-details">
                          <div className="flex-tim">
                            <h4>{arrivalObject.at.slice(0, 10)}</h4>
                          </div>
                          <div className="flex-tim">
                            <h4>{segmentOne[0].duration.slice(2)}</h4>
                          </div>
                        </div>
                        <div className="price-details">
                          <h4>
                            {travelerPricings[0].price.total}/<span>pax</span>
                          </h4>
                        </div>
                        <div className="actions">
                          <button
                            onClick={() => bookNow(index)}
                            className="bookBtn"
                          >
                            book now
                          </button>
                          <button onClick={() => {}} className="detailsBtn">
                            {travelerPricings[0].fareDetailsBySegment[0].cabin}
                          </button>
                        </div>
                      </div>

                      <div className="flightFunction"></div>
                    </div>
                  </SwiperSlide>

                  {/* segtment two */}
                  <SwiperSlide>
                    <div className="flightDealContainer">
                      <AirlineInfo
                        logo={
                          airlinesLookUp[segmentTwo[0].carrierCode]?.logo || ""
                        }
                        carrierCode={segmentTwo[0].carrierCode || ""}
                        airlineName={
                          travelerPricings[0].fareDetailsBySegment[1]
                            .brandedFare
                        }
                      />
                      <TicketHeader
                        originCode={departureObjectSegTwo.iataCode || ""}
                        originCity={
                          iataLookup[departureObjectSegTwo.iataCode]?.city || ""
                        }
                        arrowColor="#F5F7F8"
                        originTime={departureObjectSegTwo.at.slice(11) || ""}
                        departureCode={arrivalObjectSegTwo.iataCode || ""}
                        departureCity={
                          iataLookup[arrivalObjectSegTwo.iataCode]?.city || ""
                        }
                        departureTime={arrivalObjectSegTwo.at.slice(11) || ""}
                      />
                      <h6 className="lineNew">
                        --------------------------------------------------------
                      </h6>

                      <div className="flightDetails">
                        {perks.map((perk) => {
                          return (
                            <div className="detailsSect">
                              <img
                                src={perk.isChargeable ? dollarIcon : checkMark}
                                alt="perk icon"
                              />
                              <li>{perk.description}</li>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flights-actions">
                        <div className="time-details">
                          <div className="flex-tim">
                            <h4>{arrivalObjectSegTwo.at.slice(0, 10)}</h4>
                          </div>
                          <div className="flex-tim">
                            <h4>{segmentTwo[0].duration.slice(2)}</h4>
                          </div>
                        </div>
                      </div>

                      <div className="flightFunction"></div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              );
            })
          )}
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
              <div className="main-cards">
                <div className="flights-res" key={index}>
                  <AirlineInfo
                    logo={airlinesLookUp[segmentOne[0].carrierCode]?.logo || ""}
                    carrierCode={
                      airlinesLookUp[segments[0]?.carrierCode]?.name || ""
                    }
                    airlineName={segments[0]?.aircraft?.code || ""}
                  />
                  <TicketHeader
                    originCode={segments[0]?.departure.iataCode || ""}
                    originCity={
                      iataLookup[segments[0]?.departure.iataCode]?.city || ""
                    }
                    originTime={segments[0]?.departure.at.slice(11) || ""}
                    segmentNum={segmentNumber}
                    segment={segmentNumber}
                    arrowColor="#F5F7F8"
                    departureCode={
                      segments[lastSegmentIndex]?.arrival.iataCode || ""
                    }
                    departureCity={
                      iataLookup[segments[lastSegmentIndex]?.arrival.iataCode]
                        ?.city || "xxx"
                    }
                    departureTime={
                      segments[lastSegmentIndex]?.arrival.at.slice(11) || ""
                    }
                  />
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
                          <div className="stops-details">
                            <TicketHeader
                              originCode={stopOver.departure.iataCode}
                              originCity={
                                iataLookup[stopOver.departure.iataCode]?.city ||
                                ""
                              }
                              originTime={stopOver.departure.at.slice(11) || ""}
                              arrowColor="#F5F7F8"
                              departureCode={stopOver.arrival.iataCode || ""}
                              departureCity={
                                iataLookup[stopOver.arrival.iataCode]?.city ||
                                ""
                              }
                              departureTime={
                                stopOver.arrival.at.slice(11) || ""
                              }
                            />
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

//  <div className="detailsSect">
//             <div className="itemContainer">
//               <img src={suiteCase} />
//               <li>{perks.cabinBag || "No Cabin Bag"}</li>
//             </div>
//             <div className="itemContainer">
//               <img src={pctMile} />
//               <li>{perks.qmiles || "No QMiles Accumulation"}</li>
//             </div>
//           </div>
//  <div className="itemContainer">
//                         <img src={seat} />
//                         <li>
//                           {perks.seatChoice
//                             ? "Seat Choice Included"
//                             : "No Seat Selection"}
//                         </li>
//                       </div>
//                       <div className="itemContainer">
//                         <img src={cutlary} />
//                         <li>{perks.meal ? "Meal Beverage" : "No Meal"}</li>
//                       </div>
