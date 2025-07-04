import "./review.styles.scss";
import airlineLogo from '../../assets/icons/qatar_airline_logo.png'
function ReviewCard() {
  return (
    <section className="flight-review">
      <div className="outbound-flight">
        <div className="travel-date">
          <h4>outbound : {"Wednesday,26,jun 2025"}</h4>
        </div>

        <div className="flight">
          <div className="flight-header">
            <div className="airline-details">
              <h3>qatar air</h3>
              <h3>AA67 . operated by qatar air</h3>
            </div>
            <div className="hide-flag"></div>
            <div className="airline-logo">
              <img src={airlineLogo} alt="ariline-logo" />
            </div>
          </div>
          <div className="border-line"></div>
          <div className="flight-data">
            <div className="trip-data">
              <h3>8:38 ebb, entebbe kampala uganda</h3>
              <h3>terminal : n/a</h3>
            </div>
            <div className="flight-time">
              <h5>8h40m</h5>
              <h5>direct</h5>
            </div>
            <div className="trip-data">
              <h3>11:05 london heathrow united kingdom</h3>
              <h3>terminal : n/a</h3>
            </div>

            <div className="trip-ameneties">
              <h6>class : k economy</h6>
              <h6>carry on : 1pc 7kg</h6>
              <h6>checked bags : 2pcs 23kg each</h6>
              <h6>co2 : 936kg</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewCard;

// {
//   bookedFlight.flightOffers.map(
//     ({ itineraries, price, travelerPricings, validatingAirlineCodes }) => {
//       useEffect(() => {
//         setPrice(price);
//         setTaxes(travelerPricings[0].price.taxes);
//         setTravelerPricings(travelerPricings);
//       });
//       const segmnetOne = itineraries[0].segments;
//       return segmnetOne.map(
//         (
//           {
//             aircraft,
//             arrival,
//             carrierCode,
//             co2Emissions,
//             departure,
//             duration,
//             operating,
//           },
//           index
//         ) => {
//           const fareDetails = travelerPricings[0].fareDetailsBySegment[index];
//           const fareClass = fareDetails?.class || "Unknown";
//           const cabin = fareDetails?.cabin || "Unknown";
//           // console.log(aircraft.code);
//           // console.log(
//           //   "travelerPricings",
//           //   travelerPricings
//           // );
//         }
//       );
//     }
//   );
// }

// taxes

//   <section className="taxes-container">
//         <div className="taxes">
//           <div className="taxesHeader">
//             <h5>fare breakdown </h5>
//             <h5>taxes breakdown </h5>
//           </div>
//           <Border />
//           <div className="taxesBody">
//             <div className="bodyOne">
//               <h4>Base: ${price.base}</h4>
//               <h4>Taxes: $330</h4>
//               <h4>Total: ${price.total}</h4>
//               <h4>grand Total: ${price.grandTotal}</h4>
//             </div>
//             <div className="bodyOne tax">
//               {taxes.map((tax, index) => {
//                 return (
//                   <h4 key={index}>
//                     {tax.code} - ${tax.amount}
//                   </h4>
//                 );
//               })}
//             </div>
//           </div>
//           <div className="paxData">
//             <div className="paxDataContainer">
//               {console.log(travelerPricings)}
//               <div className="data">
//                 <h4>
//                   Travelers:
//                   {flightSearch.passengers.adults +
//                     flightSearch.passengers.children +
//                     flightSearch.passengers.infants}{" "}
//                 </h4>
//               </div>
//               <div className="pax">
//                 <h4>Adults:{flightSearch.passengers.adults} </h4>
//               </div>
//               <div className="pax">
//                 <h4>Children: {flightSearch.passengers.children}</h4>
//               </div>
//               <div className="pax">
//                 <h4>Infants: {flightSearch.passengers.infants}</h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
