import "./bookhotel.stles.scss";
import {useLocation} from 'react-router-dom';




function BookHotel() {
  const location = useLocation();
  const {rateKey} = location.state ||{};
  console.log(rateKey);
  return (
    <div className="bookhotel-container">
      <h4>complete your booking</h4>
      <div className="summary">
        <h5>summary</h5>
        <div className="summary-container">
          <div className="summary-header">
            <h1>The Beverly Hills Hotel</h1>
            <h5>2 weeks</h5>
          </div>
          <h3>1 Standard Deluxe room</h3>
          <hr />
          <div className="dates">
            <div className="date">
              <h4>Check in date</h4>
              <h2>Fri 16 jan 2026</h2>
            </div>
            <div className="date">
              <h4>Check out date</h4>
              <h2>Fri 16 jan 2026</h2>
            </div>
            <div className="date">
              <h4>pax</h4>
              <h2>
                1 <span>adult</span> 1 <span>child</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="form-container">
        <h4>enter your details</h4>
        <form>
          <div className="form-container">
            <div className="pax-info-flex">
              <input
                type="text"
                name="firstName"
                placeholder="enter first name"
                onChange={() => {}}
                className=""
              />
              <input
                type="text"
                name="lastName"
                placeholder="enter last name"
                onChange={() => {}}
                className=""
              />
            </div>
            <input
              type="text"
              name="email"
              placeholder="enter email address"
              onChange={() => {}}
              className=""
            />
            <p>
              Please enter a valid email address that will be used for
              confirmation
            </p>
            <div className="dates">
              <input
                type="text"
                name="country"
                placeholder="country"
                onChange={() => {}}
                className=""
              />
              <input
                type="text"
                name="countryCode"
                placeholder="country code"
                onChange={() => {}}
                className=""
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="enter phone number"
                onChange={() => {}}
                className=""
              />
            </div>
          </div>
          <div className="text-info">
            <p>Please enter a valid email address that will be used for confirmation</p>
            <div className="booking-for">
              <h4>Booking for ?</h4>
              <div className="click-container">
                <div className="click">
                  <input type="radio" name="mySelf" className="check" />
                  <label>my self</label>
                </div>
                <div className="click">
                  <input type="radio" name="mySelf" className="check" />
                  <label>someone else</label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookHotel;
