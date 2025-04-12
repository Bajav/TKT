import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Arrow } from "./flightSearch/flightArrowSvg";

function DummyTicket() {
    // define navigate
    const navigate = useNavigate();
    // drop down state
      const [dropDown, showDropDown] = useState(false);
    // book now btn function
    const bookNow=()=>
        {
            // navigate to a different route
            navigate("/flights/flightsResults/flightPricing");
            console.log("book now btn clicked")
        };
        // see details btn hit
        const seeDetails=()=>
            {
                console.log("seeDetails btn clicked");
                showDropDown(true);
            };

  return (
    <div className="main-cards" key={2}>
      <div className="flights-res">
        <div className="flights-header">
          <div className="airLineIcone">
            <div className="icon">
              <img src="" alt="Airline Logo" className="airline-logo" />
            </div>
            <h4>UR, Uganda Air</h4>
          </div>
          <h4>A380</h4>
        </div>
        <div className="ticket-header">
          <div className="origin">
            <h2>kla</h2>
            <h5>Kampala, Uganda</h5>

            <h5>12:00 pm</h5>
          </div>
          <div className="center">
            <Arrow color="#F5F7F8" width="200px" />
            <h4>0 stops</h4>
          </div>
          <div className="item">
            <h2>dxb</h2>
            <h5>Dubai , UAE</h5>
            <h5>2.00pm</h5>
          </div>
        </div>
        <div className="flights-actions">
          <div className="time-details">
            <div className="flex-tim">
              <h4>23.DEC.24</h4>
            </div>
            <div className="flex-tim">
              <h4>4h 30m</h4>
            </div>
          </div>
          <div className="price-details">
            <h4>
              $200/<span>pax</span>
            </h4>
          </div>
          <div className="actions">
            <button
              onClick={() => {
                bookNow();
              }}
              className="bookBtn"
            >
              Book Now
            </button>
            <button
              onClick={() => {
                seeDetails();
              }}
              className="detailsBtn"
            >
              See Details
            </button>
          </div>
        </div>
      </div>
      <div className="flightsDetails">
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="stopOvers"
        >
          <SwiperSlide>
            <div className="ticket-header">
              <div className="stopFlight">
                <div className="origin">
                  <h2>Kla</h2>
                  <h5>Kampala, Uganda</h5>
                  <h5>12:00 pm</h5>
                </div>
                <div className="center">
                  <Arrow color="#F5F7F8" width="150px" />
                </div>
                <div className="item">
                  <h2>dxb</h2>
                  <h5>Dubai , UAE</h5>
                  <h5>2.00pm</h5>
                </div>
              </div>
              <div className="lineOne">
                <h5>-----------------------------------------</h5>
              </div>
              <div className="stop-details">
                <h5>LAYOVER TIME : 1H40M </h5>
                <h5>||</h5>
                <h5>CLASS : Y</h5>
                <h5>||</h5>
                <h5>AIRLINE : KENYA AIRWAYS - KQ23A</h5>
                <h5>||</h5>
                <h5>DURATION : 4H40M </h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="line">
          <h5>-----------------------------------------</h5>
        </div>
        <div className="Alldetails">
          <h5>SEATS LEFT : </h5>
          <h5>last Date :</h5>
          <h5>Economy</h5>
          <h5>CHECKED BAG : 30KG</h5>
        </div>
      </div>
    </div>
  );
}

export default DummyTicket;
