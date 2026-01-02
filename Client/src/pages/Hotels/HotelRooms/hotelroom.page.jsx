import "./hotelroom.styles.scss";
import hotelJson from "../../../data/hotelsJson.json";
import HotelCard from "../../../components/Hotels/HotelCard/hotelcard.component";
import { useNavigate } from "react-router-dom";
import BackBTN from "../../../components/features/BackButton/BackBTN";
import hotelImgTwo from "../../../assets/images/hotelTwo.jpg";
function HotelRoom() {
  const navigate = useNavigate();
  const backBtn = () => {
    // setFlightResults([]);
    // setFilteredFlights([]);
    navigate("/searchhotels/results");
  };
  return (
    <section className="hotel-results">
      <BackBTN onClick={backBtn} btnName="back" />
      <div className="rooms-header">
        <img src={hotelImgTwo} alt="" />
         <div className="overlay" />
      </div>
    </section>
  );
}

export default HotelRoom;
