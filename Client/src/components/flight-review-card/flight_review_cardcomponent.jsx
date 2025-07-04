import "./review.styles.scss";

function ReviewCard() {
  return (
    <section className="flight-review">
      <div className="outbound-flight">
        <div className="travel-date">outbound :{"Wednesday,26,jun 2025"}</div>

        <div className="flight">
          <div className="flight-header">
            <div className="airline-details">
              <h3>qatar air</h3>
              <h3>AA67 . operated by qatar air</h3>
            </div>
            <div className="hide-flag"></div>
            <div className="airline-logo">
              {/* <img src={} alt="ariline-logo" /> */}
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
