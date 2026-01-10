import "./hotelroom.styles.scss";
import { useContext } from "react";
import { HotelContext } from "../../../components/context/hotels.contenxt";
import { useNavigate } from "react-router-dom";
import BackBTN from "../../../components/features/BackButton/BackBTN";
import Rates from "../Rates/rates.component";
import facilityIconMap from "../../../components/Utils/icons.utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { CheckCheckIcon } from "lucide-react";
import hotelReviews from "../../../data/hotelReviews.data.json";
import { FacilityList } from "../../../components/Utils/HotelsUtils/facilities.utils.jsx";
import { getCancellationBadge } from "../../../components/Utils/HotelsUtils/cancellation.utils.jsx";

function HotelRoom() {
  const { selectedHotel, hotelInfo } = useContext(HotelContext);
  const { categoryCode, name, rooms: availableRooms } = selectedHotel;
  console.log("hotelInfo", hotelInfo);
  const { images, facilities, description } = hotelInfo;

  const navigate = useNavigate();
  const backBtn = () => navigate("/searchhotels/results");

  const roomImagesByCode = images
    .filter((img) => img.type.code === "HAB" && img.roomCode)
    .reduce((acc, img) => {
      const code = img.roomCode;
      if (!acc[code]) acc[code] = [];
      acc[code].push({
        url: `https://photos.hotelbeds.com/giata/bigger/${img.path}`,
        visualOrder: img.visualOrder,
      });
      return acc;
    }, {});

  // Optional sort (uncomment if you want ordered images)
  // Object.keys(roomImagesByCode).forEach((code) => {
  //   roomImagesByCode[code].sort((a, b) => a.visualOrder - b.visualOrder);
  // });

  // ================================================================
  // 2. Create lookup map: roomCode → detailed room info (with facilities)
  // ================================================================
  const roomDetailsMap = (hotelInfo.rooms || []).reduce((map, room) => {
    map[room.roomCode] = room;
    return map;
  }, {});
  //ICON MAPPING FOR FACILITIES

  // Clean room code (handles "[STU.ST]" → "STU.ST")
  const cleanRoomCode = (code) => code?.replace(/[\[\]]/g, "").trim();

  return (
    <section className="hotel-rooms">
      <BackBTN onClick={backBtn} btnName="back" />

      {/* Header Swiper - now using bigger images */}
      <div className="rooms-header">
        <Swiper
          pagination={{ type: "fraction" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={`https://photos.hotelbeds.com/giata/bigger/${img.path}`}
                alt={img.type.description.content || "Hotel view"}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="overlay" />
      </div>

      <div className="flex-rates">
        <Rates categoryCode={categoryCode} reviewCount={30} rating={4.2} />
      </div>

      <div className="main-results">
        <h4>{name}</h4>
        <p>{description?.content}</p>

        {/* Hotel facilities (general) */}
        <div className="facilites-container">
          <h4 className="facilities-header">Hotel Facilities</h4>
          <div className="hotel-facilities">
            <FacilityList
              facilities={facilities}
              groupCodes={[71, 80, 30, 72, 80, 90]}
            />
          </div>
        </div>
        {/* hotel reviews */}
        <div className="hotel-reviews">
          {hotelReviews.map((rev, index) => {
            const { name, country, review, imageUrl } = rev;
            return (
              <div className="review-segments" key={index}>
                <div className="review-header">
                  <div className="reviewImg">
                    <img src={imageUrl} alt={name} />
                  </div>
                  <div className="review-datta">
                    <h4>{name}</h4>
                    <h5>{country}</h5>
                    <div className="verified">
                      <CheckCheckIcon size={14} color="#40C265" />
                      <h5>Verified Booking</h5>
                    </div>
                  </div>
                </div>
                <div className="review-content">
                  <p>{review}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Rooms available */}
        <div className="rooms-container">
          <h2>Rooms Available</h2>

          {availableRooms.map((room, index) => {
            const cleanCode = cleanRoomCode(room.code);
            const roomImages = roomImagesByCode[cleanCode] || [];
            const detailedRoom = roomDetailsMap[cleanCode];
            const roomFacilities = detailedRoom?.roomFacilities || [];

            return (
              <div key={index} className="rooms">
                <h5>{room.name}</h5>
                <div className="border" />

                {/* Room-specific images */}
                <div className="img-container">
                  {roomImages.length > 0 ? (
                    <Swiper
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="room-swiper"
                    >
                      {roomImages.map((img, i) => (
                        <SwiperSlide key={i}>
                          <img
                            src={img.url}
                            alt={`${room.name} - view ${i + 1}`}
                            loading="lazy"
                            style={{ width: "100%", objectFit: "cover" }}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <div className="no-images">
                      <p>No specific images for this room type</p>
                    </div>
                  )}
                </div>

                {/* Room-specific facilities */}
                <div className="amenities-container">
                  <h4>room facilities</h4>
                  <div className="amenities">
                    <FacilityList
                      facilities={roomFacilities}
                      groupCodes={60}
                      className="room-facilities"
                      color="#E88D67"
                    />
                  </div>
                </div>

                {/* Rates */}
                <h4 className="room-rates">Rates Available for this room</h4>
                <div className="rooms-segment">
                  {room.rates.map((rate, idx) => {
                    const { net, boardName } = rate;
                    const cancellationSummary = getCancellationBadge(rate);
                    return (
                      <div key={idx} className="room">
                        <div className="top">
                          <div className="side-one">
                              <h4>{boardName || "Room Only"}</h4>
                              <h2>online payment required</h2>
                            </div>
                            <h6>{cancellationSummary.label}</h6>
                        </div>
                        <div className="bottom">
                          <div className="room-actives">
                            <div
                              className={`cancellation-badge ${cancellationSummary.color}`}
                            >
                              <p>{cancellationSummary.details}</p>
                            </div>
                          </div>
                          <button className="book-now">
                            <span>€{net}</span> {"  "}
                            <small>book now</small>
                          </button>
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
