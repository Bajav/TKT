import "./hotelcard.styles.scss";
import star from "../../../assets/icons/star.png";
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
  off
}) => {
  return (
    <div className="hotel-card">
      <div className="hotel-img">
        <img src={image} alt={hotelName} />
      </div>

      <div className="hotel-data">
        <div className="hotel-header">
          <div className="hotel-name-country">
            <h1>{hotelName}</h1>
            <h4>
             {country}
            </h4>
          </div>

          <div className="reviews">
            <div className="stars">
              <h5>{rating}</h5>
              <div className="rate-stars" />
              {Array.from({ length: Math.min(rateNum, 5) }).map((_, i) => (
                <img key={i} src={star} alt="star" />
              ))}
            </div>
            <h4>{reviewCount} reviews</h4>
          </div>
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
          <button className="browseBtn">browse rooms</button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
