import "./ticket.styles.scss";
import Barcode from "react-barcode";
import TicketHeader from "../flightSearch/Ticket/ticketheader.component";
import klmLogo from "../../assets/images/klmLogo.png";
import border from "../../assets/icons/border-line.svg";
// import Alert from "../features/Error&Sucess/alert.component";
import TripDateContainer from "./date-trip-container/tripdate.component";
import FlightFlag from "../flightarrival/flightflag.component";
import { CircleAlert } from "lucide-react";

function BookedTicket() {
  const defaults = {
    color: "#1e1e1e",
  };
  const barcodeOptions = {
    width: 2,
    height: 50,
    format: "CODE128",
    displayValue: false,
    fontOptions: "",
    font: "monospace",
    textAlign: "center",
    textPosition: "bottom",
    textMargin: 2,
    fontSize: 20,
    background: "transparent",
    lineColor: "#222",
    margin: 0,
    marginTop: undefined,
    marginBottom: undefined,
    marginLeft: undefined,
    marginRight: undefined,
    id: undefined,
    className: undefined,
  };
  return (
    <div className="tickets-container">
      <TripDateContainer tripType="departure" dates="Wednesday ,26, jun 2025" />
      <div className="booked-ticket">
        <div className="booked-ticket-header">
          <div className="airlinelogo">
            <img src={klmLogo} />
          </div>
          <div className="airline-data">
            <div className="flexed-text">
              <h3>KL 920</h3>
              <h3>A232/FL</h3>
            </div>
            <div className="flexed-text">
              <h3>travel date </h3>
              <h3>23-03-2025</h3>
            </div>
            <div className="flexed-text">
              <h3>booking ref</h3>
              <h3>kl/xynfte</h3>
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
        <div className="flight-details">
          <div className="detail-flex">
            <h3>passenger</h3>
            <h3>balijawa hussein</h3>
          </div>

          <div className="detail-flex">
            <h3>cabin class</h3>
            <h3>economy</h3>
          </div>
          <div className="detail-flex small-width">
            <h3>seat number</h3>
            <h3>18A</h3>
          </div>
          <div className="detail-flex">
            <h3>ticket number</h3>
            <h3>FL/ETK 2123347218</h3>
          </div>

          <div className="detail-flex">
            <h3>flight code</h3>
            <h3>a380 KQC3</h3>
          </div>

          <div className="detail-flex small-width">
            <h3>Terminal</h3>
            <h3>T1</h3>
          </div>
        </div>
        <div className="ticket-border">
          <img src={border} />
        </div>
        <Barcode
          height={barcodeOptions.height}
          margin={barcodeOptions.margin}
          displayValue={barcodeOptions.displayValue}
          background={barcodeOptions.background}
          lineColor={barcodeOptions.lineColor}
          value="212334721921233492334233423211"
        />
        <FlightFlag
          icon={
            <CircleAlert
              style={{ rotate: "180deg" }}
              size={15}
              color="#79CC77"
            />
          }
          bgColor="#D3F3D5"
          fontColor="#79CC77"
          alertText="arrives the next day"
        />
      </div>
    </div>
  );
}

export default BookedTicket;
