import "./bookhotel.stles.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; // Removed unused Children import
import axios from "axios";

function BookHotel() {
  const location = useLocation();
  const navigate = useNavigate();
  const { rateKey } = location.state || {};
  console.log("location.state:", rateKey);
  
  const [input, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    countryCode: "",
    bookingFor: "myself", // Added this field that was missing
    phoneNumber: "",
  });
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(true); // Uncommented - needed
  const [error, setError] = useState(null); // Uncommented - needed
  const [days,setDays]= useState(0);
  const [weeks,setWeeks]= useState(0);

  const fetchRates = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(
        "http://localhost:3000/hotels/hotelrates",
        { rate: rateKey }
      );

      console.log(response);

      setRes(response.data.hotel);
    } catch (error) {
      console.error("Error fetching rates:", error);
      setError(error.message || "Failed to fetch rates");
      navigate("/hotels/results");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!rateKey) {
      navigate("/hotels/results");
      return;
    }

    fetchRates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rateKey]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post("");
    } catch (error) {}
  };

  // Add loading and error checks BEFORE destructuring
  if (loading) return <p>Loading booking details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!res) return <p>No data available</p>;

  const {
    name,
    checkIn,
    checkOut,
    categoryCode,
    destinationName,
    modificationPolicies,
    paymentDataRequired,
    rooms,
    totalNet,
  } = res;
  
  // Add safety checks
  if (!rooms || rooms.length === 0) return <p>No rooms available</p>;
  const { rates } = rooms[0] || {};
  if (!rates || rates.length === 0) return <p>No rates available</p>;
  
  const {
    cancellationPolicies,
    boardName,
    net,
    adults,
    rateBreakDown,
    children,
    rateComments,
    taxes,
  } = rates[0] || {};

  const { allIncluded } = taxes || {};
  const taxesArray = taxes?.taxes || [];
  const { clientAmount, included, subType, type } = taxesArray[0] || {};
  
  console.log(modificationPolicies);
  
  const totalAsNumber = (
    parseFloat(totalNet || 0) + parseFloat(clientAmount || 0)
  ).toFixed(2);
  // stay count
  const checkInDate = parseFloat(checkIn.slice(8));
  const checkOutDate = parseFloat(checkOut.slice(8));

  return (
    <div className="bookhotel-container">
      <h4>complete your booking</h4>
      <div className="summary">
        <h5>summary</h5>
        <div className="summary-container">
          <div className="summary-header">
            <h1>{name}</h1>
            <h5>{weeks} weeks, {days} days</h5>
          </div>
          <h3>{rooms[0].name}</h3>
          <hr />
          <div className="dates">
            <div className="date">
              <h4>Check in date</h4>
              <h2>{checkIn}</h2>
            </div>
            <div className="date">
              <h4>Check out date</h4>
              <h2>{checkOut}</h2>
            </div>
            <div className="date">
              <h4>pax</h4>
              <h2>
                {adults} <span>adult</span> {children} <span>child</span>
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
                    value="myself"
                    checked={input.bookingFor === "myself"}
                    onChange={handleChange}
                  />
                  <label>my self</label>
                </div>
                <div className="click">
                  <input
                    type="radio"
                    name="bookingFor"
                    value="someone"
                    checked={input.bookingFor === "someone"}
                    onChange={handleChange}
                  />
                  <label>someone else</label>
                </div>
              </div>
            </div>
            <hr />
            <div className="pricing">
              <div className="pricing-header">
                {included ? (
                  <h2>total €{totalNet}</h2>
                ) : (
                  <h2>Total €{totalAsNumber}</h2>
                )}
                <h5>Online payment Required</h5>
              </div>
              <div className="section-two">
                <div className="section-two-header">
                  <h3>non refundable.</h3>
                  <h4>includes taxes and charges</h4>
                </div>
                <h4>in property currency : €{totalNet}</h4>
              </div>
              <div className="price-breakdown">
                <h1>Pricing breakdown</h1>
                <ul className="list">
                  <li>Includes € {clientAmount || ""} in taxes and charges</li>
                  <li>Includes €134.17 in damage deposit (fully refundable)</li>
                  <li>
                    Note: the card issuer may charge you a foreign transaction
                    fee.
                  </li>
                </ul>
                <p>
                  Price is converted from Euro to show amount in usd but you are
                  paying in Euro, the exchange rate might change before you pay.
                </p>
                <p>{rateComments || ""}</p>
              </div>
            </div>
          </div>
          <button type="submit">
            proceed to payment <span>€{totalAsNumber}</span>
          </button>
        </form>
        <div className="heigth"></div>
      </div>
    </div>
  );
}

export default BookHotel;