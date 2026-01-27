import "./bookhotel.stles.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getCancellationBadge } from "../../../components/Utils/HotelsUtils/cancellation.utils";
import rateConfirm from "../../../data/hote.rates.json";
import { CheckCircleIcon } from "@phosphor-icons/react";
import axios from "axios";
import { UserContext } from "../../../components/context/user.context";

function BookHotel() {
  const location = useLocation();
  const navigate = useNavigate();
  const { rateKey } = location.state || {};
  const { signedIn } = useContext(UserContext);
  // console.log("location.state:", rateKey);

  // ALL HOOKS FIRST (before any return or early exit)
  const [input, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    countryCode: "",
    bookingFor: "myself",
    phoneNumber: "",
  });
  const [otp, setOtp] = useState({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
    num5: "",
    num6: "",
  });

  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [verifified, setVerifified] = useState(true);
  const [error, setError] = useState(null);
  const [days, setDays] = useState(0);
  const [weeks, setWeeks] = useState(0);

  const fetchRates = async () => {
    try {
      setLoading(true);
      setError(null);

      // const response = await axios.post(
      //   "http://localhost:3000/hotels/hotelrates",
      //   { rate: rateKey }
      // );

      // console.log(response);
      // setRes(response.data.hotel);
      setRes(rateConfirm.hotel);
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
    console.log(res);
  }, [rateKey, navigate]);

  // Stay count effect (now safe at top level)
  useEffect(() => {
    if (!res?.checkIn || !res?.checkOut) return;

    const checkInDate = new Date(res.checkIn);
    const checkOutDate = new Date(res.checkOut);

    if (isNaN(checkInDate) || isNaN(checkOutDate)) {
      setDays(0);
      setWeeks(0);
      return;
    }

    const diffTime = Math.abs(checkOutDate - checkInDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 7) {
      const week = Math.floor(diffDays / 7);
      const day = diffDays % 7;
      setWeeks(week);
      setDays(day);
    } else {
      setWeeks(0);
      setDays(diffDays);
    }
  }, [res?.checkIn, res?.checkOut]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  // Now early returns are SAFE (after all hooks)
  if (loading) return <p>Loading booking details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!res) return <p>No data available</p>;

  // Safe destructuring (after checks)
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
  const submitRate = rates[0].rateKey;
  console.log(submitRate);
  const { clientAmount, included, subType, type } = taxesArray[0] || {};

  const totalAsNumber = (
    parseFloat(totalNet || 0) + parseFloat(clientAmount || 0)
  ).toFixed(2);
  // console.log(cancellationPolicies);

  const cacellationSummary = getCancellationBadge(rates);
  // form submit btn
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      const response = await axios.post("http://localhost:3000/bookhotel", {
        rate: submitRate,
        formData: input,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const otpSubmit = (e) => {
    e.preventDefault();
    const code = Object.values(otp).join("");
    // if (code.length !== 6) {
    //   alert("Enter complete OTP");
    //   return;
    // }
    console.log("OTP Submitted:", code);
    setVerifified(true);
  };
  // console.log(taxesArray.length);
  const onOtpChange = (e) => {
    const { name, value } = e.target;
    if (!/^\d?$/.test(value)) return; // only 1 digit
    setOtp((prev) => ({
      ...prev,
      [name]: value,
    }));
    // auto-focus next input
    if (value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  return (
    <div className="bookhotel-container">
      <h4>complete your booking</h4>
      <div className="summary">
        <h5>summary</h5>
        <div className="summary-container">
          <div className="summary-header">
            <h1>{name}</h1>
            <h5>
              {weeks > 0 && days >= 0
                ? `${weeks} weeks, ${days} days`
                : `${days} days`}
            </h5>
          </div>
          <h3>{rooms[0].name}</h3>
          <h3>{destinationName}</h3>
          <hr className="hr-line" />
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
              Please enter a valid phone number that will be used for
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
                {paymentDataRequired ? (
                  <h5>Online payment Required</h5>
                ) : (
                  <h5>payment at the hotel</h5>
                )}
              </div>
              <div className="section-two">
                <div className="section-two-header">
                  <h3>
                    {cacellationSummary.label} ||{""}
                    {modificationPolicies.cancellation
                      ? "free cancellation"
                      : "can't cancel this"}
                  </h3>
                  {allIncluded ? <h4>includes taxes and charges</h4> : null}
                </div>
                <h4>in property currency : €{totalNet}</h4>
              </div>
              <div className="price-breakdown">
                <h1>Pricing breakdown</h1>
                <ul className="list">
                  {taxesArray.length > 0 ? (
                    <li>
                      Includes € {clientAmount || ""} in taxes and charges
                    </li>
                  ) : null}
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
       {!signedIn && <div className="verification-overlay">
          <div className="verificartion-container">
            <div className="ad-texts">
              <h1>Don’t like the process ?</h1>
              <p>
                Sign up now to make everything swift and <br /> also get access
                to exclusives.
              </p>
            </div>
            <div className="verification">
              {verifified ? (
                // verifified
                <div className="verified">
                  <div className="verified-header">
                    <h1>you are verified</h1>
                    <h4>balijawahussein@gmail.com</h4>
                  </div>
                  <CheckCircleIcon size={80} color="#40C265" weight="fill" />
                  <p>you are being redirected to the payment page</p>
                </div>
              ) : (
                <div className="killswitch">
                  <div className="verification-header">
                    <p>
                      We just sent you an email <br /> for verification
                    </p>
                    <h4>Enter the security verification code sent to</h4>
                    <h2>balijawahussein@gmail.com</h2>
                  </div>
                  <form
                    onSubmit={otpSubmit}
                    className="verification-input-container"
                  >
                    <div className="verification-inputs">
                      {["num1", "num2", "num3", "num4", "num5", "num6"].map(
                        (key, index) => (
                          <input
                            key={key}
                            type="text"
                            name={key}
                            value={otp[key]}
                            maxLength={1}
                            inputMode="numeric"
                            pattern="[0-9]*"
                            autoComplete={index === 0 ? "one-time-code" : "off"}
                            onChange={onOtpChange}
                          />
                        ),
                      )}
                    </div>
                    <button type="submit" className="verification-input-submit">
                      verify email
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default BookHotel;
