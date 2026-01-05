import "./hotelroom.styles.scss";
// hooks
import { useContext } from "react";
import { HotelContext } from "../../../components/context/hotels.contenxt";
import { useNavigate } from "react-router-dom";
import BackBTN from "../../../components/features/BackButton/BackBTN";
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
  console.log(facilities);
  const navigate = useNavigate();
  const backBtn = () => {
    navigate("/searchhotels/results");
  };

  const roomImagesByCode = images
    .filter((img) => img.type.code === "HAB" && img.roomCode)
    .reduce((acc, img) => {
      const code = img.roomCode; 

      if (!acc[code]) {
        acc[code] = [];
      }
      acc[code].push({
        path: img.path,
       
        url: `https://photos.hotelbeds.com/giata/bigger/${img.path}`,
        // or smaller: `https://photos.hotelbeds.com/giata/${img.path}`
        order: img.order,
        visualOrder: img.visualOrder,
      });

      // console.log(acc);
      return acc;
    }, {});

  // Optional: sort images inside each roomCode by visualOrder or order
  Object.keys(roomImagesByCode).forEach((code) => {
    roomImagesByCode[code].sort((a, b) => a.visualOrder - b.visualOrder);
    // or use a.order - b.order if you prefer that
  });
  const roomImages = roomImagesByCode;
  // console.log("room images", roomImages);
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
                  src={`https://photos.hotelbeds.com/giata/bigger/${img.path}`}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="overlay" />
      </div>
      <div className="flex-rates">
        <Rates categoryCode={categoryCode} reviewCount={30} rating={4.2} />
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
          <h2>Rooms available</h2>
          {rooms.map((room, index) => {
            const { name, code, rates } = room;
            const roomSpecificImages = roomImages[code] || [];

            return (
              <div key={index} className="rooms">
                <h5>{name}</h5>
                <div className="border"></div>

                {/* Room Image Swiper */}
                <div className="img-container">
                  {roomSpecificImages.length > 0 ? (
                    <Swiper
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="room-swiper"
                    >
                      {roomSpecificImages.map((img, i) => (
                        <SwiperSlide key={i}>
                          <img
                            src={img.url}
                            alt={`${name} - view ${i + 1}`}
                            loading="lazy"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <div className="no-images">
                      <p>No specific images available for this room</p>
                    </div>
                  )}
                </div>

                <h4 className="room-rates">Available rates for this room</h4>
                <div className="rooms-segment">
                  {rates.map((rate, idx) => {
                    const { net, boardName, cancellationPolicies } = rate;

                    const hasFreeCancellation =
                      cancellationPolicies &&
                      cancellationPolicies.some(
                        (policy) => new Date(policy.from) > new Date()
                      );

                    return (
                      <div key={idx} className="room">
                        <div className="room-data">
                          <h4>{boardName || "Room Only"}</h4>
                          <div className="amenities">
                            <div className="amenity">
                              <AirVent size={13} color="#2f7bc8" />
                              <h5>Air conditioning</h5>
                            </div>
                          </div>
                          <div className="room-actives">
                            {hasFreeCancellation && (
                              <h6 className="free-cancel">Free cancellation</h6>
                            )}
                            <button className="book-now">
                              ${net} Book now
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
