import "./bookings.styles.scss";
import hotelImg from "../../assets/images/hotelTwo.jpg";
import { useLocation } from "react-router-dom";
import { useState, Fragment } from "react";

function Bookings() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(1);
  const hideLayoutRoutes = ["/user/mybookings"];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);
  const toggleTab = (i) => {
    setActiveTab(i);
  };
  return (
    <Fragment>
      <div className="bookings-page">
        <div className="tabz-container">
          <div className="tabz">
            <div
              className="tab-slider"
              style={{ transform: `translateX(${activeTab * 100}%)` }}
            />
            <div
              onClick={() => toggleTab(1)}
              className={activeTab === 1 ? "tab active" : "tab"}
            >
              flights
            </div>
            <div
              onClick={() => toggleTab(2)}
              className={activeTab === 2 ? "tab active" : "tab"}
            >
              hotels
            </div>
            <div
              onClick={() => toggleTab(3)}
              className={activeTab === 3 ? "tab active" : "tab"}
            >
              activities
            </div>
            <div
              onClick={() => toggleTab(4)}
              className={activeTab === 4 ? "tab active" : "tab"}
            >
              cars
            </div>
          </div>
          <div className="tabz-content">
            <div
              className={activeTab === 1 ? "content active-content" : "content"}
            >
              <p>this flights tab</p>
            </div>

            <div
              className={activeTab === 2 ? "content active-content" : "content"}
            >
              <h1>Your Hotel Bookings</h1>
              <div className="bookedhotel-container">
                <div className="img-header">
                  <img src={hotelImg} />
                </div>
                <div className="booking-details">
                  <div className="booking-header">
                    <div className="main-header">
                      <h1>{""}</h1>
                      <h3>{""}</h3>
                      <h3>{""}</h3>
                    </div>
                  </div>
                  <div className="booking-amenities">amenities here</div>
                  <hr />
                  <div className="room-details">
                    <h5>
                      guest : <span>{""}</span>
                    </h5>
                    <h5>
                      names : <span>{""}</span>
                    </h5>
                    <h5>
                      Booking reference : <span>{""}</span>
                    </h5>
                  </div>
                  <hr />
                  <div className="guest-details">
                    <div className="guest">
                      <h5>
                        guest : <span>{""}</span>
                      </h5>
                      <h5>
                        names : <span>{""}</span>
                      </h5>
                      <h5>
                        room ID : <span>{""}</span>
                      </h5>
                    </div>
                  </div>
                  <hr />
                  <div className="bookin-pricing">
                    <h2>Pricing Details</h2>
                    <div className="prices">
                      <h5>
                        Amount Due: <span>{""}</span>
                      </h5>
                      <h5>
                        Payment Type: <span>{""}</span>
                      </h5>
                      <p>
                        Free cancellation before 2026-02-07T23:59:00-05:00 after
                        that a fee of $169.13 will be charged
                      </p>
                    </div>
                  </div>
                  
                  <div className="pricing-breakdown">
                    <h1>Pricing breakdown</h1>
                    <h4>Includes $656.97 in taxes and charges</h4>
                    <h4>Includes $134.17 in damage deposit (fully refundable)</h4>
                    <h5>Note: the card issuer may charge you a foreign transaction fee.</h5>

                    <p>{""}</p>
                  </div>
                  <div className="booking-request">
                    <h1></h1>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={activeTab === 3 ? "content active-content" : "content"}
            >
              <p>this activities tab</p>
            </div>

            <div
              className={activeTab === 4 ? "content active-content" : "content"}
            >
              <p>this cars tab</p>
            </div>

            {/* <div
              className={activeTab === 5 ? "content active-content" : "content"}
            >
                <p>this flights tab</p>
            </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Bookings;
