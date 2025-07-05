import "./review.styles.scss";
import airlineLogo from "../../assets/icons/qatar_airline_logo.png";
import line from "../../assets/icons/Line 5.svg";
import { Clock } from "lucide-react";
import FlightFlag from "../flightarrival/flightflag.component";
import fromTo from "../../assets/icons/fromto.svg";
import { OctagonAlert } from "lucide-react";
import lineDeg from "../../assets/icons/90deg.svg"

function ReviewCard(props) {
  return (
    <section className="flight-review">
      <div className="outbound-flight">
        <div className="travel-date">
          <h4>{props.tripType}</h4>
          <img src={lineDeg} />
          <h4>{props.travelDate}</h4>
        </div>

        <div className="flight">
          <div className="flight-header">
            <div className="airline-details">
              <h4>{props.airlineName}</h4>
              <h3>{props.equipmentNumb} {props.operator}</h3>
            </div>
            <div className="hide-flag">
              <h4>multiple airlines</h4>
            </div>
            <div className="airline-logo">
              <img src={airlineLogo} alt="ariline-logo" />
            </div>
          </div>
          <div className="border-line">
            <img src={line} />
          </div>
          <div className="flight-data-container">
            <img src={fromTo} alt="" />

            <div className="det">
              <div className="trip-data">
                <h3>{props.departureTime} {props.originCode}, {props.originCityCountry}</h3>
                <h3 className="terminal">terminal : {props.originTerminal}</h3>
              </div>
              {/* { <Clock />} */}
              <div className="flight-time">
                <Clock size={12} opacity={70} color="#323030"/>
                <h5>{props.duration}</h5>
                <h5 className="terminal">{props.tripstops}</h5>
              </div>
              <div className="trip-data">
                <h3>{props.arrivalTime} {props.destinationCode}, {props.destinationCityCountry}</h3>
                <h3 className="terminal">terminal : {props.destinationTerminal}</h3>
              </div>
            </div>
          </div>
          <div className="flight-data">
            <div className="trip-ameneties">
              <h6>class : {props.cabin}{props.cabinClass}</h6>
              <h6>carry on : {props.carryWeight} {props.carryOnUnit} </h6>
              <h6>checked bags : {props.checkedWeight} {props.checkedOnUnit} each</h6>
              <h6>co2 : {props.c02Weight}</h6>
            </div>

            <FlightFlag
              icon={<OctagonAlert size={14} color="#E82929" />}
              bgColor="#FFDDDD"
              fontColor="#E82929"
              alertText="arrives the next day"
            />
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
