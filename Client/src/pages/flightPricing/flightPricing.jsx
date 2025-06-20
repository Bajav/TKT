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
  const {flightSearch} = useContext(FlightContext);
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
  const coninueBtn = () => navigate("/flights/Passengerdata", { replace: true });
  console.log("lastFlight",lastFlight);

  return (
    <section className="reviewFlight">
      <BackBTN to={"/"} btnName="cancel" />
      <h1>Review Flight</h1>
      <div className="main-trip-container OUTBOUND">
        <div className="trip-container">
          <h1>departure flight</h1>
          <Swiper
            spaceBetween={0}
            slidesPerView="auto"
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="tickets"
          >
            {bookedFlight.flightOffers.map(
              ({
                itineraries,
                price,
                travelerPricings,
                validatingAirlineCodes,
              }) => {
                useEffect(() => {
                  setPrice(price);
                  setTaxes(travelerPricings[0].price.taxes);
                  setTravelerPricings(travelerPricings);
                });
                const segmnetOne = itineraries[0].segments;
                return segmnetOne.map(
                  (
                    {
                      aircraft,
                      arrival,
                      carrierCode,
                      co2Emissions,
                      departure,
                      duration,
                      operating,
                    },
                    index
                  ) => {
                    const fareDetails =
                      travelerPricings[0].fareDetailsBySegment[index];
                    const fareClass = fareDetails?.class || "Unknown";
                    const cabin = fareDetails?.cabin || "Unknown";
                    // console.log(aircraft.code);
                    // console.log(
                    //   "travelerPricings",
                    //   travelerPricings
                    // );
                    return (
                      <SwiperSlide key={index}>
                        <div className="flight-container">
                          <TicketHeader
                            originCode={departure.iataCode}
                            originCity={
                              iataLookup[departure.iataCode]?.city || ""
                            }
                            originTime={departure.at.slice(11)}
                            arrowColor="#222222"
                            destinationCode={arrival.iataCode}
                            destinationCity={
                              iataLookup[arrival.iataCode]?.city || ""
                            }
                            destinationTime={arrival.at.slice(11)}
                            originTerminal={
                              departure.terminal
                                ? `Terminal: ${departure.terminal}`
                                : "Terminal: N/A"
                            }
                            destinationTerminal={
                              arrival.terminal
                                ? `Terminal: ${arrival.terminal}`
                                : "Terminal: N/A"
                            }
                          />
                          <div className="detail">
                            <h5>
                              AIRLINE : {carrierCode} {aircraft.code}
                            </h5>
                            <h5>
                              CO2 : {co2Emissions[0].weight}{" "}
                              {co2Emissions[0].weightUnit}
                            </h5>
                            <h5>{arrival.at.slice(0, 10)}</h5>
                            <h5>
                              CLASS : {fareClass} {cabin}
                            </h5>
                          </div>
                          <div className="detail">
                            <h5>CARRY ON 1PC 8KG</h5>
                            <h5>LAYOVER : 3HR40MINS</h5>
                            <h5>CHECKED BAGS : 2 PCS 23KG/EACH</h5>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  }
                );
              }
            )}
          </Swiper>
        </div>
      </div>
      <div className="main-trip-container">
        <div className="trip-container">
          <h1>return flight</h1>
          <Swiper
            spaceBetween={0}
            slidesPerView="auto"
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="tickets"
          >
            {bookedFlight.flightOffers.map(
              ({
                itineraries,
                price,
                travelerPricings,
                validatingAirlineCodes,
              }) => {
                // console.log("itineraries", itineraries);
                const segmnetTwo = itineraries[1].segments;
                // console.log("segmnetOne", segmnetTwo);
                return segmnetTwo.map(
                  ({
                    aircraft,
                      arrival,
                      carrierCode,
                      co2Emissions,
                      departure,
                      duration,
                      operating,
                  },index) => {
                    const fareDetails =
                      travelerPricings[0].fareDetailsBySegment[index];
                    const fareClass = fareDetails?.class || "Unknown";
                    const cabin = fareDetails?.cabin || "Unknown";
                    return (
                      <SwiperSlide>
                      <div className="flight-container">
                          <TicketHeader
                            originCode={departure.iataCode}
                            originCity={
                              iataLookup[departure.iataCode]?.city || ""
                            }
                            originTime={departure.at.slice(11)}
                            arrowColor="#222222"
                            destinationCode={arrival.iataCode}
                            destinationCity={
                              iataLookup[arrival.iataCode]?.city || ""
                            }
                            destinationTime={arrival.at.slice(11)}
                            originTerminal={
                              departure.terminal
                                ? `Terminal: ${departure.terminal}`
                                : "Terminal: N/A"
                            }
                            destinationTerminal={
                              arrival.terminal
                                ? `Terminal: ${arrival.terminal}`
                                : "Terminal: N/A"
                            }
                          />
                          <div className="detail">
                            <h5>
                              AIRLINE : {carrierCode} {aircraft.code}
                            </h5>
                            <h5>
                              CO2 : {co2Emissions[0].weight}{" "}
                              {co2Emissions[0].weightUnit}
                            </h5>
                            <h5>{arrival.at.slice(0, 10)}</h5>
                            <h5>
                              CLASS : {fareClass} {cabin}
                            </h5>
                          </div>
                          <div className="detail">
                            <h5>CARRY ON 1PC 8KG</h5>
                            <h5>LAYOVER : 3HR40MINS</h5>
                            <h5>CHECKED BAGS : 2 PCS 23KG/EACH</h5>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  }
                );
              }
            )}
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
              <h4>Base: ${price.base}</h4>
              <h4>Taxes: $330</h4>
              <h4>Total: ${price.total}</h4>
              <h4>grand Total: ${price.grandTotal}</h4>
            </div>
            <div className="bodyOne tax">
              {taxes.map((tax, index) => {
                return (
                  <h4 key={index}>
                    {tax.code} - ${tax.amount}
                  </h4>
                );
              })}
            </div>
          </div>
          <div className="paxData">
            <div className="paxDataContainer">
              {console.log(travelerPricings)}
              <div className="data">
                <h4>Travelers:{flightSearch.passengers.adults + flightSearch.passengers.children + flightSearch.passengers.infants} </h4>
              </div>
              <div className="pax">
                <h4>Adults:{flightSearch.passengers.adults} </h4>
              </div>
              <div className="pax">
                <h4>Children: {flightSearch.passengers.children}</h4>
              </div>
              <div className="pax">
                <h4>Infants: {flightSearch.passengers.infants}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
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
