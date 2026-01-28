import { useEffect, useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import axios from "axios";
import Border from "../../components/flightSearch/border";
import confirmOder from "../../data/flightConfirmOrder";
import BackBTN from "../../components/features/BackButton/BackBTN";
import TicketHeader from "../../components/flightSearch/Ticket/ticketheader.component";
import { FlightContext } from "../../components/context/flightSearch.context";
import ReviewCard from "../../components/flight-review-card/flight_review_cardcomponent";
// UTILS
import { airlinesLookUps, iataLookups } from "../../components/Utils/FlightUtils/airlinecodeslookup.utils";
function FlightPricing() {
  // const flightOffers = confirmOder.flightOffers;
  // const itineraries = confirmOder.itineraries;
  const { flightSearch, bookedFlight, iataCodes, lastFlight, airlineData } =
    useContext(FlightContext);

  const [price, setPrice] = useState([]);
  const [taxes, setTaxes] = useState([]);
  const [direct, setDirect] = useState("");
  const [travelerPricings, setTravelerPricings] = useState([]);

  const navigate = useNavigate();

  const iataLookup = iataLookups(iataCodes);
  const airlinesLookUp = airlinesLookUps(airlineData);
  // console.log("lastFlight",lastFlight);
  const coninueBtn = () =>{
    navigate("/flights/Passengerdata", { replace: true });
  // console.log("lastFlight", segementOne.carrierCode);
  // check if the flight is direct function
  // if(lastFlight.itineraries[0].segments.length > 1){
  //   setDirect(`${lastFlight.itineraries[0].segments.length} stops`)
  // }else{
  //   setDirect("direct")
  }

  return (
    <section className="reviewFlight">
      <BackBTN onClick={() => navigate("/flights")} btnName="cancel" />
      <h1>Review Flight</h1>
      <TicketHeader
        originCode={"ebb"}
        originCity={"kampala,uganda"}
        destinationCode={"dxb"}
        arrowColor="#333"
        destinationCity={"dubai,uae"}
      />
      {lastFlight.itineraries.map((itinerary, index) => {
        const segments = itinerary.segments;
        const segementOne = segments[0];
        const segementTwo = segments[1];
        const segmentTwo = itinerary.segments[1];
        // console.log("segmentOne ::", segementOne);
        // console.log("segmentTwo ::",segmentTwo);
        // segmentOne.map((itine)=>{
        //   console.log(itine);
        // })
        function flagMultipleAirlines(res) {
          const carrierCodes = res.segments.map((s) => s.carrierCode);
          return new Set(carrierCodes).size > 1;
        }
        const hasMultipleAirlines = flagMultipleAirlines(
          itinerary
        );

        function getPrimaryAirline(res) {
          const count = {};
          for (const s of res) {
            count[s.carrierCode] = (count[s.carrierCode] || 0) + 1;
          }
          return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
        };
        
        const primaryAirlineCode = getPrimaryAirline(segments);
        function getSecondaryAirlines(segments, primaryAirline) {
          const uniqueCarriers = new Set(segments.map((s) => s.carrierCode));
          uniqueCarriers.delete(primaryAirline);
          return [...uniqueCarriers];
        };
        // console.log( segementOne)
        console.log("primaryAirlineCode",primaryAirlineCode)
        const secondaryAirlines = getSecondaryAirlines(
          segments,
          primaryAirlineCode
        );
        // console.log("secondaryAirlines", secondaryAirlines);
        return (
          // <li>hello</li>
          <ReviewCard
          key={index}
            airlineLogo={airlinesLookUp[primaryAirlineCode]?.logo || ""}
            tripType={
              lastFlight.itineraries.length >= 2 ? "round trip" : "one way"
            }
            travelDate={itinerary.segments[0].departure.at.slice(0, 10) || ""}
            airlineName={
              `${airlinesLookUp[primaryAirlineCode]?.name}` || ""
            }
            equipmentNumb={itinerary.segments[0].aircraft.code || ""}
            operator={`operated by ${
              primaryAirlineCode?.name || ""
            }`}
            departureTime={itinerary.segments[0].departure.at.slice(11) || ""}
            originCode={itinerary.segments[0].departure.iataCode || ""}
            originCityCountry={
              iataLookup[itinerary.segments[0].departure.iataCode]?.city || ""
            }
            // originTerminal="n/a"
            duration={itinerary.segments[0].duration.slice(2) || ""}
            tripstops={
              lastFlight.itineraries[0].segments.length > 1
                ? lastFlight.itineraries[0].segments.length -
                  1 +
                  " " +
                  "stop's'"
                : "direct flight"
            }
            arrivalTime={itinerary.segments[0].arrival.at.slice(11) || ""}
            destinationCode={itinerary.segments[0].arrival.iataCode || ""}
            destinationCityCountry={
              iataLookup[itinerary.segments[0].arrival.iataCode]?.city || ""
            }
            // destinationTerminal={"n/a" || ""}
            cabin={
              lastFlight.travelerPricings[0].fareDetailsBySegment[0].class || ""
            }
            cabinClass={
              lastFlight.travelerPricings[0].fareDetailsBySegment[0].cabin || ""
            }
            carryWeight={
              lastFlight.travelerPricings[0].fareDetailsBySegment[0].amenities[1].description.slice(
                10,
                17
              ) || ""
            }
            carryOnUnit={
              lastFlight.travelerPricings[0].fareDetailsBySegment[0].amenities[1].description.slice(
                17
              ) || ""
            }
            checkedWeight={
              lastFlight.travelerPricings[0].fareDetailsBySegment[0].amenities[0].description.slice(
                12,
                17
              ) || ""
            }
            checkedOnUnit={
              lastFlight.travelerPricings[0].fareDetailsBySegment[0].amenities[0].description.slice(
                17
              ) || ""
            }
            c02Weight={"936kg" || ""}
            iconcolor={"#E82929"}
            flagBgcolor={"#FFDDDD"}
            fontColor={"#E82929"}
            arrivalText={"arrives the next day"}
          />
        );
      })}
      <button className="continueBtn" onClick={coninueBtn}>
        Continue
      </button>
    </section>
  );
}

export default FlightPricing;
{
  /* <ReviewCard tripType="" travelDate="" airlineName="" equipmentNumb="" operator="" departureTime="" originCode="" originCityCountry="" originTerminal="" duration="" tripstops="" arrivalTime="" destinationCode="" destinationCityCountry="" destinationTerminal="" cabin="" cabinClass="" carryWeight="" carryOnUnit=""  checkedWeight="" checkedOnUnit="" c02Weight=""  /> */
}
// code to look at
// const fareDetail = travelerPricings[0].fareDetailsBySegment.find(
//   (f) => f.segmentId === segment.id
// );
// const fareClass = fareDetail?.class || "Unknown";
// const cabin = fareDetail?.cabin || "Unknown";
