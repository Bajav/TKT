import "./hotelroom.styles.scss";
// hooks
import { useContext } from "react";
import { HotelContext } from "../../../components/context/hotels.contenxt";
import hotelJson from "../../../data/hotelsJson.json";
import HotelCard from "../../../components/Hotels/HotelCard/hotelcard.component";
import { useNavigate } from "react-router-dom";
import BackBTN from "../../../components/features/BackButton/BackBTN";
import hotelImgTwo from "../../../assets/images/hotelTwo.jpg";
import Rates from "../Rates/rates.component";
import { AirVent } from "lucide-react";
// plugins
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

function HotelRoom() {
  const imgEndPoint = `https://photos.hotelbeds.com/`;
  const { selectedHotel, hotelInfo } = useContext(HotelContext);
  const {
    categoryCode,
    code,
    currency,
    destinationName,
    name,
    maxRate,
    minRate,
    rooms,
  } = selectedHotel;
  const {
    S2C,
    address,
    boards,
    category,
    categoryGroup,
    chain,
    city,
    coordinates,
    country,
    description,
    email,
    facilities,
    images,
    interestPoints,
    phones,
    giataCode,
    postalCode,
    terminals,
    wildcards,
    web,
  } = hotelInfo;
  // console.log("this is the selected hotel",selectedHotel);
  console.log(hotelInfo);
  const navigate = useNavigate();
  const backBtn = () => {
    navigate("/searchhotels/results");
  };
  return (
    <section className="hotel-rooms">
      <BackBTN onClick={backBtn} btnName="back" />
      <div className="rooms-header">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((img, index) => {
            // console.log(img.path);
            return (
              <SwiperSlide key={index}>
                <img
                  src={`https://photos.hotelbeds.com/giata/${img.path}`}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="overlay" />
      </div>
      <div className="flex-rates">
        <Rates rateNum={3} reviewCount={30} rating={4} />
      </div>
      <div className="main-results">
        <h4>{name}</h4>
        <p>{description?.content}</p>
        <div className="facilites-container">
          <h4 className="facilities-header">facilites</h4>
          <div className="facilites">
            {facilities.map((facility, index) => {
              const { description, number } = facility;
              return (
                <li key={index}>
                  {description.content} {number ? number : ""}
                </li>
              );
            })}
            <div className="facility">
              <AirVent size={20} color="#2f7bc8" />
              <h4>Air conditioning</h4>
            </div>
          </div>
        </div>
        <div className="hotel-reviews">
          <h4>hotel reviews</h4>
          <div className="reviews-container">
            <div className="review-card">
              <div className="review-header">
                <div className="review-icon"></div>
                <h3>hussein balijawa</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="rooms-container">
          <h2>rooms available</h2>
          {rooms.map((room, index) => {
            const { name, code, rates } = room;
            // console.log(rates)
            return (
              <div className="rooms">
                <h5>{name}</h5>
                <div className="border"></div>
                <div className="rooms-segment">
                  <div className="room">
                  <div className="img-container"></div>
                  <div className="room-data">
                    <h4>room only</h4>
                    <div className="amenities">
                      <div className="amenity">
                        <AirVent size={13} color="#2f7bc8" />
                        <h5>air conditioning</h5>
                      </div>
                    </div>
                    <div className="room-actives">
                      <h6>free cancellation</h6>
                      <button className="book-now">$300 book room</button>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HotelRoom;
