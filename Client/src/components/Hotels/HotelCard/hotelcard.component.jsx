import "./hotelcard.styles.scss";
import star from "../../../assets/icons/star.png";
import { useNavigate } from "react-router-dom";
import Rates from "../../../pages/Hotels/Rates/rates.component";

const HotelCard = ({
  hotelName,
  city,
  country,
  description,
  image,
  mainPrice,
  pricePerNight,
  rating,
  reviewCount,
  amenities = [],
  rateNum,
  index,
  off,
  key,
}) => {
  const navigate = useNavigate();
  const selectButton = async(index)=>{
    console.log(index);
    // navigate("/searchhotels/availablerooms")
  }
  return (
    <div className="hotel-card" key={key}>
      <div className="hotel-img">
        <img src={image} alt={hotelName} />
      </div>

      <div className="hotel-data">
        <div className="hotel-header">
          <div className="hotel-name-country">
            <h1>{hotelName}</h1>
            <h4> {country}</h4>
          </div>
          <Rates rateNum={rateNum} reviewCount={reviewCount}  rating={rating}/>
        </div>

        {/* <p>{description}</p> */}

        <div className="amenities-price">
          {/* <div className="amenities">
           {amenities.slice(0, 8).map((item) => (
              <span key={item}>{item}</span>
            ))} 
          </div> */}

          <div className="price">
            <h2>${mainPrice}</h2>
            <h5>${pricePerNight} per night</h5>
          </div>
          <h4 className="off">{off}%</h4>
          <button
            className="browseBtn"
            onClick={() => selectButton(index)}
          >
            browse rooms
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
