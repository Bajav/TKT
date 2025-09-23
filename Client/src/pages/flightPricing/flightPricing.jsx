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

function FlightPricing() {
  // const flightOffers = confirmOder.flightOffers;
  // const itineraries = confirmOder.itineraries;
  const { flightSearch } = useContext(FlightContext);
  const { bookedFlight } = useContext(FlightContext);
  const { iataCodes } = useContext(FlightContext);
  const { lastFlight } = useContext(FlightContext);
  const [price, setPrice] = useState([]);
  const [taxes, setTaxes] = useState([]);
  const [travelerPricings, setTravelerPricings] = useState([]);

  const navigate = useNavigate();

  const iataLookup = iataCodes.reduce((lookup, item) => {
    lookup[item.AirportCode] = {
      city: item.City,
      country: item.Country,
    };
    return lookup;
  }, {});
  const coninueBtn = () =>
    navigate("/flights/Passengerdata", { replace: true });
  console.log("lastFlight", lastFlight.itineraries.length);

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
      {lastFlight.itineraries.map((itinerary) => {
        console.log("itinerary :::", itinerary);

        return (
          <ReviewCard
            tripType={
              lastFlight.itineraries.length >= 2 ? "round trip" : "one way"
            }
            travelDate={itinerary.segments[0].departure.at.slice(0, 10)}
            airlineName="qatar air"
            equipmentNumb="AA67."
            operator="operated by qatar air"
            departureTime={itinerary.segments[0].departure.at.slice(11)}
            originCode="ebb"
            originCityCountry="entebbe kampala uganda"
            originTerminal="n/a"
            duration="8h40m"
            tripstops="direct"
            arrivalTime="11:05 "
            destinationCode="ebb"
            destinationCityCountry=", entebbe kampala uganda"
            destinationTerminal="n/a"
            cabin="k"
            cabinClass="economy"
            carryWeight="1pc"
            carryOnUnit="7kg"
            checkedWeight="2pcs"
            checkedOnUnit="23kg each"
            c02Weight="936kg"
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
