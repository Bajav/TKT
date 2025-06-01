import "./flightdeals.styles.scss";
import { Arrow } from "../flightSearch/flightArrowSvg";

function FlightDeals(props) {
  return (
    <div className="flights-res">
      <div className="flights-header">
        <div className="airLineIcone">
          <div className="icon">
            <img
              src={"" || ""}
              alt="Airline Logo"
              className="airline-logo"
            />
          </div>
          <h4>{"" || ""}</h4>
        </div>
        <h4>{"" || ""}</h4>
      </div>
      <div className="ticket-header">
        <div className="origin">
          <h2>{"" || ""}</h2>
          <h5>{""|| "xxx"}</h5>
          <h5>{"" || ""}</h5>
        </div>
        <div className="center">
          <Arrow color="#F5F7F8" width="200px" />
          {2 > 1 ? (
            <h5>{2 - 1} stops</h5>
          ) : (
            <h5>0 stops</h5>
          )}
        </div>
        <div className="item">
          <h2>{"" || ""}</h2>
          <h5>
            {""||
              ""}
          </h5>
          <h5>{segments[lastSegmentIndex]?.arrival.at.slice(11) || ""}</h5>
        </div>
      </div>
      <div className="flights-actions">
        <div className="time-details">
          <div className="flex-tim">
            <h4>{""|| ""}</h4>
          </div>
          <div className="flex-tim">
            <h4>{"" || ""}</h4>
          </div>
        </div>
        <div className="price-details">
          <h4>${itinerary.price?.grandTotal || ""}</h4>
        </div>
        <div className="actions">
          <button onClick={() => {}} className="bookBtn">
            select
          </button>
          <button onClick={() => {}} className="detailsBtn">
           
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlightDeals;
