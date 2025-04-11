import React, { useEffect, useState } from "react";
import axios from "axios";
import { Arrow } from "../../components/flightSearch/flightArrowSvg";
import InfoHighlights from "../../components/flightSearch/InfoHighlights";
import Border from "../../components/flightSearch/border";
import confirmOder from "../../data/flightConfirmOrder";

function FlightPricing() {
  const flightOffers = confirmOder.flightOffers;
  // const itineraries = confirmOder.itineraries;

  const [res, setRes] = useState([]);

  const fetchFlightPricing = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/flights/flightsResults/flightPricing"
      );
      console.log("RESPONSE DATA IS BACK", response.data);
      setRes(response.data);
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  };

  // Log updated state when it changes
  useEffect(() => {
    fetchFlightPricing();
    // console.log("Updated res:", res);
  }, []);
  return (
    <section className="reviewFlight">
      <h1>Review Flight</h1>
      <div className="mainReview">
        <div className="Mainorigin">
          <h1>departure flight</h1>
          <div className="ticket-header">
            <div className="origin">
              <h2>kla</h2>
              <h5>Kampala, Uganda</h5>
              <h5>12:00 pm</h5>
            </div>
            <div className="center">
              <Arrow color="#F5F7F8" width="200px" />
            </div>
            <div className="item">
              <h2>dxb</h2>
              <h5>Dubai , UAE</h5>
              <h5>2.00pm</h5>
            </div>
          </div>
        </div>
        <div className="Maindestination"></div>
      </div>
      <section className="taxes">
        <Border />
      </section>
      <button className="continueBtn">Continue</button>
    </section>
  );
}

export default FlightPricing;

// CLEAN
// {confirmOder.flightOffers.map((flightOffer, offerInd) => (
//   <div className="mainReview" key={`offer-${offerInd}`}>
//     {flightOffer.itineraries.map((itinerary, itinInd) => (
//       <div className="departureReview" key={`itin-${itinInd}`}>
//         {itinerary.segments.map((segment, segInd) => (
//           <div className="ticket" key={`seg-${segInd}`}>
//             <div className="ticket-header">
//               <div className="origin text-review">
//                 <h2>{segment.departure.iataCode}</h2>
//                 <h5>{segment.departure.city || "Unknown City"}</h5>
//                 <h5>{new Date(segment.departure.at).toLocaleTimeString()}</h5>
//                 <h6>TERMINAL: {segment.departure.terminal || "N/A"}</h6>
//               </div>
//               <div className="center">
//                 <Arrow color="#F5F7F8" width="200px" />
//                 <h4>{segment.duration || "N/A"}</h4>
//               </div>
//               <div className="departure text-review">
//                 <h2>{segment.arrival.iataCode}</h2>
//                 <h5>{segment.arrival.city || "Unknown City"}</h5>
//                 <h5>{new Date(segment.arrival.at).toLocaleTimeString()}</h5>
//                 <h6>TERMINAL: {segment.arrival.terminal || "N/A"}</h6>
//               </div>
//             </div>
//             <div className="flight-info">
//               <div className="flex-info">
//                 <h5>AIRLINE: {segment.carrierCode} {segment.aircraft.code}</h5>
//               </div>
//               <div className="flex-info">
//                 <h5>NO STOPS</h5>
//               </div>
//               <div className="flex-info">
//                 <h5>CO2: {segment.co2Emissions?.[0]?.weight || "N/A"} {segment.co2Emissions?.[0]?.weightUnit || ""}</h5>
//               </div>
//               <div className="flex-info">
//                 <h5>{new Date(segment.departure.at).toLocaleDateString()}</h5>
//               </div>
//               <div className="flex-info">
//                 <h5>CLASS: {"" || "N/A"} {flightOffer.travelerPricings[0]?.fareDetailsBySegment[0]?.cabin || "N/A"}</h5>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     ))}

{
  /* <div className="taxesBody">
<div className="bodyOne">
  <h4>Base: $230</h4>
  <h4>Taxes: $330</h4>
  <h4>Total: $560</h4>
</div> */
}
{
  /* <div className="bodyOne">
  <h4>F6 YQ - Carrier-Imposed Surcharge: $10</h4>
  <h4>UL - Passenger Service Charges: $10</h4>
  <h4>AE - UAE Passenger Service Charge: $10</h4>
  <h4>F6 - UAE Passenger Facility Charge: $10</h4>
  <h4>UG - Security Charge: $10</h4>
  <h4>TP - UAE Passenger Security and Safety Fee: $10</h4>
</div> */
}
{
  /* <div className="paxData">
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
            </div> */
}

//   <div className="taxesHeader">
//   <h1>Fare Breakdown</h1>
//   <h1>Taxes Breakdown</h1>
// </div>
