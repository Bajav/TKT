import "./hotelroom.styles.scss";
import hotelJson from "../../../data/hotelsJson.json";
import HotelCard from "../../../components/Hotels/HotelCard/hotelcard.component";
import { useNavigate } from "react-router-dom";
import BackBTN from "../../../components/features/BackButton/BackBTN";
import hotelImgTwo from "../../../assets/images/hotelTwo.jpg";
import Rates from "../Rates/rates.component";
import { AirVent } from "lucide-react";
function HotelRoom() {
  const navigate = useNavigate();
  const backBtn = () => {
    // setFlightResults([]);
    // setFilteredFlights([]);
    navigate("/searchhotels/results");
  };
  return (
    <section className="hotel-rooms">
      <BackBTN onClick={backBtn} btnName="back" />
      <div className="rooms-header">
        <img src={hotelImgTwo} alt="" />
        <div className="overlay" />
      </div>
      <div className="flex-rates">
      <Rates rateNum={3} reviewCount={30} rating={4} />
      </div>
      <div className="main-results">
        <h4>The Beverly Hills Hotel</h4>
        <p>
          The Beverly Hills Hotel is a legendary 5-star luxury hotel located in
          Beverly Hills, California, United States. Known as “The Pink Palace,”
          it offers world-class accommodation, fine dining, and premium service
        </p>
      </div>
      <div className="facilites-container">
        <h4 className="facilities-header">facilites</h4>
        <div className="facilites">
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
        <div className="rooms">
          <div className="room">
          <div className="images">

          </div>
          <div className="room-header">
            <h1>Classic Room</h1>
            <h3>Luxury Collection</h3>
            <h4>No refund</h4>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotelRoom;
