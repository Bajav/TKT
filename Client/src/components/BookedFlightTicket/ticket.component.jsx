import "./ticket.styles.scss";
import TicketHeader from "../flightSearch/Ticket/ticketheader.component";
import klmLogo from '../../assets/images/klmLogo.png'
function BookedTicket() {
  const defaults = {
    color: "#1e1e1e",
  };
  return (
    <div className="booked-ticket">
      <div className="booked-ticket-header">
        <div className="airlinelogo">
          <img src={klmLogo}  />
        </div>
        <div className="airline-data">
          <div className="flexed-text">
            <h3>KL 920</h3>
            <h3>A232/FL</h3>
          </div>
        </div>
      </div>
      <TicketHeader
        styles={defaults}
        originCode="kla"
        originCity="kampala, uganda"
        originTime="08:12:00"
        originTerminal="terminal : 1e"
        arrowColor="#222"
        destinationCode="dxb"
        destinationCity="dubai,uae"
        destinationTime="08:12:00"
        destinationTerminal="terminal : 2b"
      />
    </div>
  );
}

export default BookedTicket;
