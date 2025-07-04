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
  console.log("lastFlight", lastFlight);

  return (
    <section className="reviewFlight">
      <BackBTN onClick={() => navigate("/flights")} btnName="cancel" />
      <h1>Review Flight</h1>

      <button className="continueBtn" onClick={coninueBtn}>
        Continue
      </button>
    </section>
  );
}

export default FlightPricing;
// code to look at
// const fareDetail = travelerPricings[0].fareDetailsBySegment.find(
//   (f) => f.segmentId === segment.id
// );
// const fareClass = fareDetail?.class || "Unknown";
// const cabin = fareDetail?.cabin || "Unknown";
