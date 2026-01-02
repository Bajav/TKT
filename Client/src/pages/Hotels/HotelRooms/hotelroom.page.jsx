import "./hotelroom.styles.scss";
import hotelJson from "../../../data/hotelsJson.json";
import HotelCard from "../../../components/Hotels/HotelCard/hotelcard.component";
import { useNavigate } from "react-router-dom";
import BackBTN from "../../../components/features/BackButton/BackBTN";
import hotelImgTwo from "../../../assets/images/hotelTwo.jpg";
import Rates from "../Rates/rates.component";
function HotelRoom() {
  const navigate = useNavigate();
  const backBtn = () => {
    // setFlightResults([]);
    // setFilteredFlights([]);
    navigate("/searchhotels/results");
  };
  return (
    <section className="hotel-results">
      <div className="main-header">
        <BackBTN onClick={backBtn} btnName="back" />
        <Rates rateNum={3} reviewCount={30} rating={4} />
      </div>
      <div className="rooms-header">
        <img src={hotelImgTwo} alt="" />
        <div className="overlay" />
      </div>
      <div className="main-results">
        <h4>available rooms</h4>
      </div>
    </section>
  );
}

export default HotelRoom;
