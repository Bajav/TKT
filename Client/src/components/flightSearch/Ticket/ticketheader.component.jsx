import "./ticket.scss";
import { Arrow } from "../flightArrowSvg";

function TicketHeader(props) {
  return (
    <div className="ticket-header">
      <div className="origin">
        <h2>{props.originCode}</h2>
        <h5>{props.originCity}</h5>
        <h5>{props.originTime}</h5>
      </div>
      <div className="center">
        <Arrow color={props.arrowColor} width="200px" />
        {props.segmentNum > 1 ? (
          <h5>{props.segment - 1} stops</h5>
        ) : (
          <h5>0 stops</h5>
        )}
      </div>
      <div className="item">
        <h2>{props.departureCode}</h2>
        <h5>{props.departureCity}</h5>
        <h5>{props.departureTime}</h5>
      </div>
    </div>
  );
}

export default TicketHeader;

{/* <TicketHeader
  originCode={stopOver.departure.iataCode}
  originCity={iataLookup[stopOver.departure.iataCode]?.city || ""}
  originTime={stopOver.departure.at.slice(11) || ""}
  arrowColor="#F5F7F8"
  departureCode={stopOver.arrival.iataCode || ""}
  departureCity={
    iataLookup[stopOver.arrival.iataCode]?.city || ""
  }
  departureTime={stopOver.arrival.at.slice(11) || ""}
/>; */}
