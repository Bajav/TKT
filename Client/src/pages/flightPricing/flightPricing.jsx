import { useEffect, useState,useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import Border from "../../components/flightSearch/border";
import confirmOder from "../../data/flightConfirmOrder";
import BackBTN from "../../components/features/BackButton/BackBTN";
import TicketHeader from "../../components/flightSearch/Ticket/ticketheader.component";
import { FlightContext } from "../../components/context/flightSearch.context";

function FlightPricing() {
  const flightOffers = confirmOder.flightOffers;
  // const itineraries = confirmOder.itineraries;
  const { bookedFlight } = useContext(FlightContext);
  console.log("bookedFlight",bookedFlight);
  const [res, setRes] = useState([]);

  // const fetchFlightPricing = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:3000/flights/flightsResults/flightPricing"
  //     );
  //     console.log("RESPONSE DATA IS BACK", response.data);
  //     setRes(response.data);
  //   } catch (err) {
  //     console.log("Error fetching data:", err);
  //   }
  // };

  // Log updated state when it changes
  // useEffect(() => {
  //   fetchFlightPricing();
  //   // console.log("Updated res:", res);
  // }, []);
  // // define navigation

  const navigate = useNavigate();

  return (
    <section className="reviewFlight">
      <BackBTN to={"/"} btnName="cancel" />
      <h1>Review Flight</h1>
      <div className="main-trip-container">
        <div className="trip-container">
          <h1>departure flight</h1>
          <Swiper
            spaceBetween={0}
            slidesPerView="auto"
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="tickets"
          >
            <SwiperSlide>
              <div className="flight-container">
                <TicketHeader
                  originCode={"ebb"}
                  originCity={"kampala"}
                  originTime={"12:00:00"}
                  arrowColor="#222222"
                  departureCode={"dxb"}
                  departureCity={"dubai"}
                  departureTime={"12:00:00"}
                  originTerminal={"Terminal:1A"}
                  destinationTerminal={"Terminal:7A"}
                />
                <div className="detail">
                  <h5>AIRLINE : KQ A380</h5>
                  <h5>CO2 : 93 KG</h5>
                  <h5>THU 05-DEC-24</h5>
                  <h5>CLASS : R ECONOMY</h5>
                </div>
                <div className="detail">
                  <h5>CARRY ON 1PC 8KG</h5>
                  <h5>LAYOVER : 3HR40MINS</h5>
                  <h5>CHECKED BAGS : 2 PCS 23KG/EACH</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flight-container">
                <TicketHeader
                  originCode={"ebb"}
                  originCity={"kampala"}
                  originTime={"12:00:00"}
                  arrowColor="#222222"
                  departureCode={"dxb"}
                  departureCity={"dubai"}
                  departureTime={"12:00:00"}
                  originTerminal={"Terminal:1A"}
                  destinationTerminal={"Terminal:7A"}
                />
                <div className="detail">
                  <h5>AIRLINE : KQ A380</h5>
                  <h5>CO2 : 93 KG</h5>
                  <h5>THU 05-DEC-24</h5>
                  <h5>CLASS : R ECONOMY</h5>
                </div>
                <div className="detail">
                  <h5>CARRY ON 1PC 8KG</h5>
                  <h5>LAYOVER : 3HR40MINS</h5>
                  <h5>CHECKED BAGS : 2 PCS 23KG/EACH</h5>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <section className="taxes-container">
        <div className="taxes">
          <div className="taxesHeader">
            <h5>fare breakdown </h5>
            <h5>taxes breakdown </h5>
          </div>
          <Border />
          <div className="taxesBody">
            <div className="bodyOne">
              <h4>Base: $230</h4>
              <h4>Taxes: $330</h4>
              <h4>Total: $560</h4>
            </div>
            <div className="bodyOne">
              <h4>F6 YQ - Carrier-Imposed Surcharge: $10</h4>
              <h4>UL - Passenger Service Charges: $10</h4>
              <h4>AE - UAE Passenger Service Charge: $10</h4>
              <h4>F6 - UAE Passenger Facility Charge: $10</h4>
              <h4>UG - Security Charge: $10</h4>
              <h4>TP - UAE Passenger Security and Safety Fee: $10</h4>
            </div>
          </div>
          <div className="paxData">
            <div className="paxDataContainer">
              <div className="data">
                <h4>Travelers: 4</h4>
              </div>
              <div className="pax">
                <h4>Adults: 1</h4>
              </div>
              <div className="pax">
                <h4>Children: 1</h4>
              </div>
              <div className="pax">
                <h4>Infants: 0</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button className="continueBtn" onClick={() => navigate("/travelerData")}>
        Continue
      </button>
    </section>
  );
}

export default FlightPricing;
