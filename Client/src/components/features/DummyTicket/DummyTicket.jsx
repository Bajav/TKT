import  { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import './ticket.scss';
import { Arrow } from "../../../components/flightSearch/flightArrowSvg";

function DummyTicket(props) {
    // define navigate
    const navigate = useNavigate();
    // drop down state
      const [dropDown, showDropDown] = useState(false);
    // book now btn function
    const bookNow=()=>
        {
            // navigate to a different route
            navigate("/review");
            console.log("book now btn clicked")
        };
        // see details btn hit
        const seeDetails=()=>
            {
                console.log("seeDetails btn clicked");
                showDropDown(true);
            };

  return (
    <div className="main-cards">
      <div className="flights-res">
        <div className="flights-header">
          <div className="airLineIcone">
            <div className="icon">
              <img src={props.airlineLogo} alt="Airline Logo" className="airline-logo" />
            </div>
            <h4>{props.airlineName}</h4>
          </div>
          <h4>{props.airlineNumber}</h4>
        </div>
        <div className="ticket-header">
          <div className="origin">
            <h2>{props.origin}</h2>
            <h5>{props.originCity}</h5>

            <h5>{props.departureTime}</h5>
          </div>
          <div className="center">
            <Arrow color="#F5F7F8" width="200px" />
            <h4>{props.time}</h4>
          </div>
          <div className="item">
            <h2>{props.destination}</h2>
            <h5>{props.destinationCity}</h5>
            <h5>{props.destinationTime}</h5>
          </div>
        </div>
        <div className="flights-actions">
          <div className="time-details">
            <div className="flex-tim">
              <h4>{props.date}</h4>
            </div>
            <div className="flex-tim">
              <h4>{props.Duration}</h4>
            </div>
          </div>
          <div className="price-details">
            <h4>
              ${props.price}/<span>pax</span>
            </h4>
          </div>
          <div className="actions">
            <button
              onClick={props.BookNowClick}
              className="bookBtn"
            >
              Book Now
            </button>
            <button
              onClick={
                props.detailClick
              }
              className="detailsBtn"
            >
              See Details
            </button>
          </div>
        </div>
      </div>
      {dropDown === index ?(<div className="flightsDetails">
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
      </div>) :null}
    </div>
  );
}

export default DummyTicket;
