import "./hotelcard.styles.scss";
import star from "../../../assets/icons/star.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { HotelContext } from "../../context/hotels.contenxt";
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
  offerName = "",
  offerAmount = "0",
  categoryCode,
  isDeal = false,
  hotel, // ← the full hotel object
}) => {
  const { setSelectedHotel, setHotelInfo } = useContext(HotelContext);
  const navigate = useNavigate();

  const selectButton = async () => {
    if (!hotel) return;

    setSelectedHotel(hotel);

    try {
      const response = await axios.post(
        "http://localhost:3000/hotels/hoteldata",
        { code: hotel.code } // ← safe, minimal payload
      );

      const { hotel: fetchedHotel } = response.data.data;
      setHotelInfo(fetchedHotel);
      navigate("/searchhotels/availablerooms");
    } catch (err) {
      console.error("Error fetching hotel data:", err);
    }
  };

  return (
    <div className="hotel-card">
      <div className="hotel-img">
        <img src={image} alt={hotelName} loading="lazy" />
      </div>

      <div className="hotel-data">
        <div className="hotel-header">
          <div className="hotel-name-country">
            <h1>{hotelName}</h1>
            <h4>{country}</h4>
          </div>
          <Rates
            categoryCode={categoryCode}
            reviewCount={reviewCount || 30}
            rating={rating || 4.2}
          />
        </div>

        <div className="amenities-price">
          <div className="pricings">
            <div className="price">
              <h2>€{parseFloat(mainPrice).toFixed(2)}</h2>
              <h5>€{parseFloat(pricePerNight).toFixed(2)} per night</h5>
            </div>

            {isDeal && parseFloat(offerAmount) > 0 && (
              <div className="offer">
                <h4>
                  {offerName} <strong>€{offerAmount}</strong>
                </h4>
              </div>
            )}
          </div>

          {/* Fixed: pass function reference, not invocation */}
          <button className="browseBtn" onClick={selectButton}>
            Browse Rooms
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;