import { Fragment, useEffect, useState, useContext, useRef } from "react";
import { FlightContext } from "../../context/flightSearch.context";
import { useNavigate, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import axios from "axios";
import Loader from "../../EyesLoader/loader";
// import scss
import "./ticket.scss";
// import components
import BearLoader from "../../bearLoader/bearLoader.component";
import line from "../../../assets/icons/line.svg";
import DummyTicket from "../../features/DummyTicket/DummyTicket";
import TicketHeader from "./ticketheader.component";
import AirlineInfo from "./airlinedata.component";
import borderLine from "../../../assets/icons/line.svg";
// icons
import { CircleDollarSign, CircleCheckIcon } from "lucide-react";
import { flightSearchData } from "../../../../../Server/DATA/Flights/flightsearch.data.js";
import { brandedUpsellData } from "../../../data/Flights/brandedUpsell.data.js";
// motion
import { motion } from "motion/react";
// uitils
import {
  iataLookups,
  airlinesLookUps,
} from "../../Utils/FlightUtils/airlinecodeslookup.utils";
import { fetchFlightMeta } from "../../Utils/FlightUtils/fetchIataCodes.utils";
import { getJourneyBreakdown } from "../../Utils/FlightUtils/totaljourneytime.utils.jsx";

function FlightCard() {
  // console.log(flightSearchData);
  // contexts
  const {
    iataCodes,
    airlineData,
    flightSearch,
    // flightResults,
    // setFlightResults,
    bookedFlight,
    setBookedFlight,
    selectedFlight,
    setSelectFlight,
    brandedUpSell,
    setBrandedUpSell,
    upsellError,
    setUpsellError,
    setlastFlight,
    setFormData,
    setIataCodes,
    setAirlineData,
    filteredFlights,
    setFilteredFlights,
    scrollRef,
  } = useContext(FlightContext);
  // states
  const [isOverlay, setOverlay] = useState(false);
  const [flightResults, setFlightResults] = useState([]);
  const [filterDropDown, setFilterDropDown] = useState(false);
  const [filteredPrices, setFilteredPrices] = useState([]);
  const [dropDown, showDropDown] = useState(null);
  const [showTickets, setShowTickets] = useState(true);
  const [multiple, setMultiple] = useState(false);
  // const [outBoundFlight, setFlight] = useState({});
  const [availableAirlines, setAvailableAirlines] = useState([]);
  const [filters, setFilters] = useState({
    maxPrice: "",
    // stops: 0, // Options: "any", "0"
    airline: "",
  });
  const location = useLocation();
  const navigate = useNavigate();

  const formData = location.state;
  // Fetch data --- use effects ---
  useEffect(() => {
    const setdata = () => setFormData(formData);
    const fetchData = () => {
      try {
        setFilteredFlights(flightResults);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        console.log("Error response:", err.response?.data);
        console.log("Error status:", err.response?.status);
      }
    };
    const setSession = async ()=>{
      try{
             const sessionpost = await axios.post(
          "http://localhost:3000/setsession",
          formData,
        );
        console.log(sessionpost);
      }catch(err){
        console.log(err);
      }
    }
    const fetchFlights = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/results",
          formData,
        );
        setFlightResults(response?.data);
        // setFlightResults(flightSearchData);
        console.log(response?.data[0]);
      } catch (error) {
        console.error("Error posting flight:", error);
      }
      // setFlightResults(flightSearchData);
    };

    const fetchAirlines = async () => {
      try {
        const { iataCodes, airlineData } = await fetchFlightMeta();
        setIataCodes(iataCodes);
        setAirlineData(airlineData);
      } catch (err) {
        console.error("Error fetching flight meta data:", err);
      }
    };

    setdata();
    fetchFlights();
    setSession();
    fetchData();
    fetchAirlines();
  }, []);

  useEffect(() => {
    const uniqueAirlineCodes = [
      ...new Set(
        flightResults?.flatMap((itinerary) =>
          itinerary?.itineraries[0]?.segments?.flatMap(
            (items) => items?.carrierCode,
          ),
        ),
      ),
    ];
    const filteredAirlines = airlineData.filter((airline) =>
      uniqueAirlineCodes.includes(airline.code),
    );
    setAvailableAirlines(filteredAirlines);
    // console.log("filteredAirlines",filteredAirlines);
  }, [flightResults, airlineData]);
  // Filter flights when filters change
  useEffect(() => {
    const applyFilters = () => {
      const results = flightResults?.filter((itinerary) => {
        // Price filter
        const priceOk = filters?.maxPrice
          ? parseFloat(itinerary?.price.grandTotal) <=
            parseFloat(filters?.maxPrice)
          : true;
        // Stops filter
        const stopsOk =
          filters?.stops === "any" ||
          (filters?.stops === 0 &&
            itinerary?.itineraries?.every((it) =>
              it?.segments?.every((seg) => seg.numberOfStops === 0),
            ));

        // Airline filter
        const airlineOk = filters.airline
          ? itinerary?.itineraries[0]?.segments[0]?.carrierCode.includes(
              filters?.airline,
            )
          : true;
        return priceOk && airlineOk;
      });

      // console.log("filter res", results);
      setFilteredFlights(results);
    };

    applyFilters();
  }, [filters, flightResults]);
  // Lookup tables
  const iataLookup = iataLookups(iataCodes);
  // Correct accumulator name
  const airlinesLookUp = airlinesLookUps(airlineData);

  // Button actions
const seeDetails = (index) => {
  console.log("details button is clicked for card", index);
  showDropDown((prevIndex) => (prevIndex === index ? null : index));
};

  const selectButton = async (index) => {
    console.log("selectButton clicked");
    const selected = filteredFlights[index];
    setSelectFlight(selected);
    setShowTickets(false);
    setOverlay(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/brandedUpSell",
        selected,
      );
      setBrandedUpSell(response.data); // likely want .data, not full response
      // setBrandedUpSell(brandedUpsellData);
      console.log("brandedUpsell res", brandedUpsellData);
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
      // console.log("response", response.data);
      // console.log("booked", bookedFlight);
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
    setShowTickets(true);
    setUpsellError(null);
    console.log(upsellError);
  };

  const fareBrandMap = {
    ECONVENIEN: "Economy Convenient",
    ECOFLEX: "Economy Flexible",
    ECOBASIC: "Economy Basic",
  };

  // helper functioms

  // Flight offer analysis functions
  function analyzeFlightOffers(flightOffers) {
    const results = {
      multiAirlineTrips: [],
      codeSharingTrips: [],
      cheapestOffer: null,
      mostExpensiveOffer: null,
      priceRange: {
        min: Infinity,
        max: -Infinity,
      },
      airlineFrequency: {},
      summary: {},
    };

    flightOffers?.forEach((offer) => {
      const price = parseFloat(offer.price.grandTotal);
      const airlines = extractAirlines(offer);

      // Track price range
      if (price < results.priceRange.min) {
        results.priceRange.min = price;
        results.cheapestOffer = offer;
      }
      if (price > results.priceRange.max) {
        results.priceRange.max = price;
        results.mostExpensiveOffer = offer;
      }

      // Check for multi-airline trips
      if (airlines.unique.length > 1) {
        results.multiAirlineTrips.push({
          offerId: offer.id,
          airlines: airlines.unique,
          price: price,
          currency: offer.price.currency,
          segments: airlines.segmentDetails,
        });
      }

      // Check for code sharing (operating vs marketing carriers)
      const codeSharingInfo = checkCodeSharing(offer);
      if (codeSharingInfo.hasCodeSharing) {
        results.codeSharingTrips.push({
          offerId: offer.id,
          price: price,
          currency: offer.price.currency,
          codeSharingDetails: codeSharingInfo.details,
        });
      }

      // Track airline frequency
      airlines.all.forEach((airline) => {
        results.airlineFrequency[airline] =
          (results.airlineFrequency[airline] || 0) + 1;
      });
    });

    // Generate summary
    results.summary = {
      totalOffers: flightOffers.length,
      multiAirlineCount: results.multiAirlineTrips.length,
      codeSharingCount: results.codeSharingTrips.length,
      priceSpread: results.priceRange.max - results.priceRange.min,
      mostFrequentAirline: getMostFrequentAirline(results.airlineFrequency),
    };

    return results;
  }

  function extractAirlines(offer) {
    const allAirlines = [];
    const segmentDetails = [];

    offer.itineraries.forEach((itinerary, itinIndex) => {
      itinerary.segments.forEach((segment, segIndex) => {
        // Marketing carrier (the airline selling the ticket)
        if (segment.carrierCode) {
          allAirlines.push(segment.carrierCode);
          segmentDetails.push({
            itinerary: itinIndex,
            segment: segIndex,
            marketingCarrier: segment.carrierCode,
            operatingCarrier:
              segment.operating?.carrierCode || segment.carrierCode,
            flightNumber: segment.number,
            from: segment.departure?.iataCode,
            to: segment.arrival?.iataCode,
          });
        }

        // Operating carrier (the airline actually operating the flight)
        if (segment.operating?.carrierCode) {
          allAirlines.push(segment.operating.carrierCode);
        }
      });
    });

    // Add validating airlines
    if (offer.validatingAirlineCodes) {
      allAirlines.push(...offer.validatingAirlineCodes);
    }

    return {
      all: allAirlines,
      unique: [...new Set(allAirlines)],
      segmentDetails: segmentDetails,
    };
  }

  function checkCodeSharing(offer) {
    const codeSharingDetails = [];
    let hasCodeSharing = false;

    offer.itineraries.forEach((itinerary, itinIndex) => {
      itinerary.segments.forEach((segment, segIndex) => {
        const marketingCarrier = segment.carrierCode;
        const operatingCarrier = segment.operating?.carrierCode;

        if (operatingCarrier && marketingCarrier !== operatingCarrier) {
          hasCodeSharing = true;
          codeSharingDetails.push({
            itinerary: itinIndex,
            segment: segIndex,
            marketingCarrier: marketingCarrier,
            operatingCarrier: operatingCarrier,
            flightNumber: segment.number,
            route: `${segment.departure?.iataCode}-${segment.arrival?.iataCode}`,
          });
        }
      });
    });

    return {
      hasCodeSharing,
      details: codeSharingDetails,
    };
  }

  function getMostFrequentAirline(airlineFrequency) {
    let maxCount = 0;
    let mostFrequent = null;

    for (const [airline, count] of Object.entries(airlineFrequency)) {
      if (count > maxCount) {
        maxCount = count;
        mostFrequent = airline;
      }
    }

    return { airline: mostFrequent, count: maxCount };
  }

  // Helper function to get specific filtered results
  function getFilteredResults(flightOffers, filters = {}) {
    const analysis = analyzeFlightOffers(flightOffers);
    const filtered = {};

    if (filters.multiAirlineOnly) {
      filtered.multiAirlineTrips = analysis.multiAirlineTrips;
    }

    if (filters.codeSharingOnly) {
      filtered.codeSharingTrips = analysis.codeSharingTrips;
    }

    if (filters.priceRange) {
      const { min, max } = filters.priceRange;
      filtered.priceFiltered = flightOffers.filter((offer) => {
        const price = parseFloat(offer.price.grandTotal);
        return price >= min && price <= max;
      });
    }

    if (filters.specificAirline) {
      filtered.airlineSpecific = flightOffers.filter((offer) => {
        const airlines = extractAirlines(offer);
        return airlines.unique.includes(filters.specificAirline);
      });
    }

    return {
      ...analysis,
      filtered,
    };
  }

  useEffect(() => {
    const results = analyzeFlightOffers(flightResults);
    console.log("Multi-airline trips:", results.multiAirlineTrips.length);
    console.log("Code sharing flights:", results.codeSharingTrips.length);
    console.log("Cheapest offer:", results.cheapestOffer?.price.grandTotal);
    console.log(
      "Most expensive offer:",
      results.mostExpensiveOffer?.price.grandTotal,
    );
    // console.log("Most frequent airline:", results.summary.mostFrequentAirline);
    const filtered = getFilteredResults(flightResults, {
      multiAirlineOnly: true,
      priceRange: { min: 200, max: 600 },
    });

    console.log("form data", formData);
  }, []);
  // Usage example:
  /*
const results = analyzeFlightOffers(flightOffersArray);
// Get specific filtered results
});
*/
  // flightResults.map(itinerary=>{const hasMultipleAirlines = flagMultipleAirlines(itinerary)});

  //   console.log("hasMultipleAirlines",hasMultipleAirlines);
  // });
  // const hasMultipleAirlines = flagMultipleAirlines();

  // Usage
  // const segments = [
  //   { duration: "PT2H30M" },
  //   { duration: "PT1H15M" },
  //   { duration: "PT45M" }
  // ];
  // scroll animations
  gsap.registerPlugin(ScrollTrigger);
  const allChildren = gsap.utils.toArray(scrollRef?.current?.children);
  const flightTickets = allChildren.slice(1);
  console.log(typeof flightTickets);
  useGSAP(() => {
    gsap.from(".flightContainer", {
      x: -500,
      opacity: 0,
      delay: 0.05,
      stagger: 1,
      ease: "power1.inOut",
      // stagger: {
      //   amount: 1,
      //   from: "edges",
      //   grid: "auto",
      //   ease: "power2.inOut",
      // }
    });
    //   gsap.from('.flightDealContainer',{
    //   x:-500,
    //   opacity:0,
    //   delay:1,
    //   stagger:0.4
    // });
    //    gsap.from('.flightDealContainer',{
    //   x:-500,
    //   opacity:0,
    //   delay:1,
    //   stagger:0.4
    // });
  });
  // console.log(scrollRef?.current?.children)
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
          {/* <h3 className="text">swipe left to view</h3> */}
          <div className="upsell">
            <TicketHeader
              originCode={flightSearch?.origin?.slice(0, 3) || ""}
              arrowColor="#313030"
              destinationCode={flightSearch?.destination?.slice(0, 3) || "XXX"}
            />
          </div>
          {brandedUpSell.length === 0 ? (
            <BearLoader />
          ) : (
            brandedUpSell.map((upsell, index) => {
              const segments = upsell.itineraries[0]?.segments || [];
              const segmentNumber = segments.length;
              // console.log("upsell", upsell);
              const lastSegmentIndex = segmentNumber - 1;
              const segmentOne = upsell.itineraries[0].segments;
              const segOneIndex = segmentOne.length - 1;
              const segmentTwo = upsell.itineraries[lastSegmentIndex].segments;
              const travelerPricings = upsell.travelerPricings;
              const departureObject = segmentOne[0].departure;
              const arrivalObject = segmentOne[segOneIndex].arrival;
              const segTwoIndex = segmentTwo.length - 1;
              const departureObjectSegTwo = segmentTwo[0].departure;
              const arrivalObjectSegTwo = segmentTwo[segTwoIndex].arrival;
              const perks =
                travelerPricings[0].fareDetailsBySegment[0].amenities;
              const segOneTime = getJourneyBreakdown(segmentOne);
              const segTwoTime = getJourneyBreakdown(segmentTwo);
              // console.log("segOneTime", segOneTime);
              return (
                <Swiper spaceBetween={20} slidesPerView="auto" key={index}>
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
                        segmentNum={segmentOne.length}
                        segment={segmentOne.length}
                        originTime={departureObject.at.slice(11) || ""}
                        destinationCode={arrivalObject.iataCode || ""}
                        destinationCity={
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
                              {perk.isChargeable ? (
                                <CircleDollarSign color="#E82929" size={15} />
                              ) : (
                                <CircleCheckIcon color="#00B74A" size={15} />
                              )}
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
                            <h4>{segOneTime.total.formatted}</h4>
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
                  <SwiperSlide className="addUp">
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
                        segmentNum={segmentTwo.length}
                        segment={segmentTwo.length}
                        originTime={departureObjectSegTwo.at.slice(11) || ""}
                        destinationCode={arrivalObjectSegTwo.iataCode || ""}
                        destinationCity={
                          iataLookup[arrivalObjectSegTwo.iataCode]?.city || ""
                        }
                        destinationTime={arrivalObjectSegTwo.at.slice(11) || ""}
                      />
                      <h6 className="lineNew">
                        --------------------------------------------------------
                      </h6>

                      <div className="flightDetails">
                        {perks.map((perk) => {
                          return (
                            <div className="detailsSect">
                              {perk.isChargeable ? (
                                <CircleDollarSign color="#E82929" size={15} />
                              ) : (
                                <CircleCheckIcon color="#00B74A" size={15} />
                              )}
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
                            <h4>{segTwoTime.total.formatted}</h4>
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
      {showTickets &&
        (filteredFlights.length < 1 ? (
          <Loader loaderTag="Searching for flights" />
        ) : (
          filteredFlights.map((itinerary, index) => {
            const segments = itinerary.itineraries[0]?.segments || [];
            const segmentNumber = segments.length;
            const lastSegmentIndex = segmentNumber - 1;
            const segmentOne = itinerary.itineraries[0].segments;
            const segmentTwo = itinerary.itineraries[1]?.segments;
            // const segmentOneNum = segments.
            // const segmentOneNum = segments.length;
            // console.log("segments:::", segments);
            function flagMultipleAirlines(data) {
              const carrierCodes = data.segments.map((s) => s.carrierCode);
              return new Set(carrierCodes).size > 1;
            }
            const hasMultipleAirlines = flagMultipleAirlines(
              itinerary.itineraries[0],
            );

            function getPrimaryAirline(segments) {
              const count = {};
              for (const s of segments) {
                count[s.carrierCode] = (count[s.carrierCode] || 0) + 1;
              }
              return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
            }
            const primaryAirlineCode = getPrimaryAirline(segmentOne);
            function getSecondaryAirlines(segments, primaryAirline) {
              const uniqueCarriers = new Set(
                segments.map((s) => s.carrierCode),
              );
              uniqueCarriers.delete(primaryAirline);
              return [...uniqueCarriers];
            }
            const secondaryAirlines = getSecondaryAirlines(
              segmentOne,
              primaryAirlineCode,
            );

            return (
              <div className="flightContainer" key={index}>
                <div className="main-cards">
                  <div className="flights-res">
                    <AirlineInfo
                      logo={airlinesLookUp[primaryAirlineCode]?.logo || ""}
                      carrierCode={
                        airlinesLookUp[primaryAirlineCode]?.name || ""
                      }
                      multicityAirline={hasMultipleAirlines}
                      // multicityCode={airlinesLookUp[
                      //     segments[0]?.carrierCode
                      //   ]?.name || ""}
                      multicityCode={`multiple airlines (${
                        secondaryAirlines || ""
                      })`}
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
                      destinationCode={
                        segments[lastSegmentIndex]?.arrival.iataCode || ""
                      }
                      destinationCity={
                        iataLookup[segments[lastSegmentIndex]?.arrival.iataCode]
                          ?.city || "xxx"
                      }
                      destinationTime={
                        segments[lastSegmentIndex]?.arrival.at.slice(11) || ""
                      }
                    />
                    <div className="border">
                      <img src={line} />
                    </div>
                    <div className="flights-actions">
                      <div className="time-details">
                        <div className="flex-tim">
                          <h4>
                            {segments[lastSegmentIndex]?.arrival.at.slice(
                              0,
                              10,
                            ) || ""}
                          </h4>
                        </div>
                        <div className="flex-tim">
                          <h4>
                            {itinerary.itineraries[0]?.duration.slice(2) || ""}
                            {/* {time.hours}H{time.minutes.toString().padStart(2, "0")}M */}
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

                  {dropDown === index && (
                    <div className="flightsDetails">
                      <Swiper
                        spaceBetween={20}
                        slidesPerView="auto"
                        className="stopOvers"
                      >
                        {segmentOne.map((stopOver, setStopIndex) => (
                          <SwiperSlide key={setStopIndex}>
                            {/* {console.log("stopOver",stopOver)} */}
                            <div className="stops-details">
                              <TicketHeader
                                originCode={stopOver.departure.iataCode}
                                originCity={
                                  iataLookup[stopOver.departure.iataCode]
                                    ?.city || ""
                                }
                                originTime={
                                  stopOver.departure.at.slice(11) || ""
                                }
                                arrowColor="#F5F7F8"
                                destinationCode={
                                  stopOver.arrival.iataCode || ""
                                }
                                destinationCity={
                                  iataLookup[stopOver.arrival.iataCode]?.city ||
                                  ""
                                }
                                destinationTime={
                                  stopOver.arrival.at.slice(11) || ""
                                }
                              />
                              <div className="border">
                                <img src={borderLine} />
                              </div>
                              <div className="stop-details">
                                <h5>
                                  LAYOVER TIME:{" "}
                                  {setStopIndex > 0
                                    ? calculateLayover(
                                        segmentOne[setStopIndex - 1].arrival.at,
                                        stopOver.departure.at,
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
                        <h5>
                          {" "}
                          CABIN BAG:{" "}
                          {itinerary.travelerPricings[0]
                            ?.fareDetailsBySegment[0]?.includedCabinBags
                            ?.quantity || 0}{" "}
                          piece
                        </h5>
                        <h5>{itinerary?.numberOfBookableSeats} seats left</h5>
                        <h5>
                          CHECKED BAG:{" "}
                          {itinerary.travelerPricings[0]
                            ?.fareDetailsBySegment[0]?.includedCheckedBags
                            ?.quantity || 0}{" "}
                          pieces
                        </h5>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ))}
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
