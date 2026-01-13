import "./bookhotel.stles.scss";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function BookHotel() {
  const location = useLocation();
  const { rateKey } = location.state || {};
  const [input, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    countryCode: "",
    mySelf: true,
    someone: false,
    phoneNumber: null,
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="pax-info-flex">
              <input
                type="text"
                name="firstName"
                placeholder="enter first name"
                value={input.firstName}
                className=""
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="enter last name"
                value={input.lastName}
                className=""
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="email"
              placeholder="enter email address"
              value={input.email}
              className=""
              onChange={handleChange}
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
                value={input.country}
                className=""
                onChange={handleChange}
              />
              <input
                type="text"
                name="countryCode"
                placeholder="country code"
                value={input.countryCode}
                className=""
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="phoneNumber"
              placeholder="enter phone number"
              value={input.phoneNumber}
              className=""
              onChange={handleChange}
            />
          </div>
          <div className="text-info">
            <p>
              Please enter a valid email address that will be used for
              confirmation
            </p>
            <div className="booking-for">
              <h4>Booking for ?</h4>
              <div className="click-container">
                <div className="click">
                  <input
                    type="radio"
                    name="bookingFor"
                    value="someone"
                    checked={input.bookingFor === "someone"}
                    onChange={handleChange}
                  />
                  <label>my self</label>
                </div>
                <div className="click">
                  <input
                    type="radio"
                    name="bookingFor"
                    value="myself"
                    checked={input.bookingFor === "myself"}
                    onChange={handleChange}
                  />
                  <label>someone else</label>
                </div>
              </div>
            </div>
            <hr />
            <div className="pricing">
              <div className="pricing-header">
                <h2>Total $3941.82</h2>
                <h5>Online payment Required</h5>
              </div>
              <div className="section-two">
                <div className="section-two-header">
                  <h3>non refundable.</h3>
                  <h4>includes taxes and charges</h4>
                </div>
                <h4>in property currency : $2,937.60</h4>
              </div>
              <div className="price-breakdown">
                <h1>Pricing breakdown</h1>
                <ul className="list">
                  <li>Includes $656.97 in taxes and charges</li>
                  <li>Includes $134.17 in damage deposit (fully refundable)</li>
                  <li>
                    Note: the card issuer may charge you a foreign transaction
                    fee.
                  </li>
                </ul>
                <p>
                  Price is converted from Euro to show amount in usd but you are
                  paying in Euro, the exchange rate might change before you pay.
                </p>
              </div>
            </div>
          </div>
          <button type="submit">
            proceed to payment <span>$3941.82</span>
          </button>
        </form>
        <div className="heigth"></div>
      </div>
    </div>
  );
}

export default BookHotel;
