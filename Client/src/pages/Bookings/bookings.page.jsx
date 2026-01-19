import "./bookings.styles.scss";
import hotelImg from "../../assets/images/hotelTwo.jpg";
import { useLocation } from "react-router-dom";
import { useState, Fragment, useEffect } from "react";
import bookingConfirmantion from "../../data/booking.confirmation.json";
import BookedTicket from "../../components/BookedFlightTicket/ticket.component";

function Bookings() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(1);
  const [days, setDays] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const hideLayoutRoutes = ["/user/mybookings"];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);
  const toggleTab = (i) => {
    setActiveTab(i);
  };
  const booking = bookingConfirmantion.booking;
  const {
    reference,
    modificationPolicies,
    hotel,
    remark,
    pendingAmount,
    totalNet,
    currency,
  } = booking;
  const {
    categoryCode,
    checkIn,
    checkOut,
    code,
    destinationName,
    latitude,
    longitude,
    name,
    rooms,
  } = hotel;
  //   console.log(hotel);
  useEffect(() => {
    //   if (!res?.checkIn || !res?.checkOut) return;
    if (checkIn || checkOut) return;

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    //    const checkInDate = new Date(res.checkIn);
    //   const checkOutDate = new Date(res.checkOut);

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
  }, [checkIn, checkOut]);
  return (
    <Fragment>
      <div className="bookings-page">
        <button className="close">close page</button>
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
              <h1>your booked flights</h1>
              <BookedTicket />
              <BookedTicket />
              <button className="submmit-btn">go to check in</button>
            </div>

            <div
              className={activeTab === 2 ? "content active-content" : "content"}
            >
              <h1>Your Hotel Bookings</h1>
              {rooms.map((room) => {
                const { paxes, rates, id } = room;
                console.log(room);
                return (
                  <div className="bookedhotel-container">
                    <div className="img-header">
                      <img src={hotelImg} />
                    </div>
                    <div className="booking-details">
                      <div className="booking-header">
                        <div className="main-header">
                          <h1>{name}</h1>
                          {rates.map((rate) => (
                            <h3>
                              {room.name} {rate.boardName}
                            </h3>
                          ))}
                          <h3>{destinationName}</h3>
                        </div>
                      </div>
                      <div className="booking-amenities">amenities here</div>
                      <hr />
                      <div className="room-details">
                        <h5>
                          rooms : <span>{rooms.length}</span>
                        </h5>
                        <h5>
                          guests : <span>{paxes.length}</span>
                        </h5>
                        <h5>
                          reference : <span>{reference}</span>
                        </h5>
                      </div>
                      <hr />
                      <div className="guest-details">
                        {paxes.map((pax, i) => {
                          const { name, surname, type, roomId } = pax;
                          return (
                            <div className="guest" key={i}>
                              <h5>
                                guest : <span>{name}</span>
                              </h5>
                              <h5>
                                names : <span>{surname}</span>
                              </h5>
                              <h5>
                                room ID : <span>{roomId}</span>
                              </h5>
                            </div>
                          );
                        })}
                      </div>
                      <hr />
                      <div className="booking-pricing">
                        <h2>Pricing Details</h2>

                        <div className="prices">
                          <h5>
                            Amount Due: <span>{pendingAmount}</span>
                          </h5>
                          <h5>
                            Payment Type: <span>{"at the hotel"}</span>
                          </h5>
                        </div>
                        <p>
                          Free cancellation before 2026-02-07T23:59:00-05:00
                          after that a fee of $169.13 will be charged
                        </p>
                      </div>

                      <div className="pricing-breakdown">
                        <h1>Pricing breakdown</h1>
                        <h4>Includes $656.97 in taxes and charges</h4>
                        <h4>
                          Includes $134.17 in damage deposit (fully refundable)
                        </h4>
                        <h5>
                          Note: the card issuer may charge you a foreign
                          transaction fee.
                        </h5>
                        {rates.map((rate) => (
                          // check out the rooms section on this res
                          <p>{rate.rateComments}</p>
                        ))}
                      </div>
                      <div className="booking-request">
                        <h1>Booking Requests from you</h1>
                        <p>{remark}</p>
                      </div>
                      <div className="hotel-contacts">
                        <h1>Hotel Contacts</h1>
                        <h5>Tel : {"+1 888 880 3244"}</h5>
                        <h5>Tel : {"+1 20 3320 2609"}</h5>
                        <h5>email : {"helpdesk.themanhatanclubhotel.com"}</h5>
                      </div>
                      <div className="modifiers">
                        <button className="cancel">Cancel Booking</button>
                        <button className="modify">Modify Booking</button>
                        <button className="download">Download PDF</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className={activeTab === 3 ? "content active-content" : "content"}
            >
              <p>no booked activities yet</p>
            </div>

            <div
              className={activeTab === 4 ? "content active-content" : "content"}
            >
              <p>no booked cars yet</p>
            </div>
          </div>
        </div>

        <div className="height"></div>
      </div>
    </Fragment>
  );
}

export default Bookings;
