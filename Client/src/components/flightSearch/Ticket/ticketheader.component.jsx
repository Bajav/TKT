import "./ticket.scss";
import { Arrow } from "../flightArrowSvg";

function TicketHeader(props) {
  return (
    <div className="ticket-header">
      <div className="origin">
        <h2>{props.originCode}</h2>
        <h5>{props.originCity}</h5>
        <h5>{props.originTime}</h5>
        <h5>{props.originTerminal}</h5>
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
        <h2>{props.destinationCode}</h2>
        <h5>{props.destinationCity}</h5>
        <h5>{props.destinationTime}</h5>
        <h5>{props.destinationTerminal}</h5>
      </div>
    </div>
  );
}

export default TicketHeader;

{/* <TicketHeader
  originCode={"ebb"}
  originCity={"kampala"}
  originTime={""}
  arrowColor="#F5F7F8"
  departureCode={""}
  departureCity={""}
  departureTime={""}
/>; */}
