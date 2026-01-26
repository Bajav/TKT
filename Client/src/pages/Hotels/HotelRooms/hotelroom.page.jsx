import "./hotelroom.styles.scss";
import { useContext, useState, useEffect } from "react";
import { HotelContext } from "../../../components/context/hotels.contenxt";
import { useNavigate } from "react-router-dom";
import BackBTN from "../../../components/features/BackButton/BackBTN";
import Rates from "../Rates/rates.component";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { CheckCheckIcon } from "lucide-react";
import hotelReviews from "../../../data/hotelReviews.data.json";
import { FacilityList } from "../../../components/Utils/HotelsUtils/facilities.utils.jsx";
import { getCancellationBadge } from "../../../components/Utils/HotelsUtils/cancellation.utils.jsx";
import hotelPlaces from "../../../data/data.json";
// import { useHotel } from "../../../components/context/hotels.contenxt";
// icons
import {
  AirplaneTaxiingIcon,
  AnchorIcon,
  TrainIcon,
  BusIcon,
  SmileyIcon,
} from "@phosphor-icons/react";

function HotelRoom() {
  const { selectedHotel, hotelInfo, days, weeks } = useContext(HotelContext);
  const { categoryCode, name, rooms: availableRooms } = selectedHotel;
  // console.log("availableRooms", );
  const { images, facilities, description, terminals, interestPoints } =
    hotelInfo;
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();
  const backBtn = () => navigate("/hotels/results");
  // console.log()
  // function to set Room images by room codes.
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
  Object.keys(roomImagesByCode).forEach((code) => {
    roomImagesByCode[code].sort((a, b) => a.visualOrder - b.visualOrder);
  });
  const roomDetailsMap = (hotelInfo.rooms || []).reduce((map, room) => {
    map[room.roomCode] = room;
    return map;
  }, {});

  // Clean room code (handles "[STU.ST]" → "STU.ST")
  const cleanRoomCode = (code) => code?.replace(/[\[\]]/g, "").trim();
  // toggle tabs
  const toggleTab = (i) => {
    setActiveTab(i);
  };

  const bookRoomBtn = (roomIndex, rateIndex) => {
    const selectedRoom = availableRooms[roomIndex];
    const selectedRate = selectedRoom?.rates?.[rateIndex];
    const rateKey = selectedRate.rateKey;
    navigate(`/hotels/bookhotel`, { state: { rateKey } });
  };

  const airports = terminals?.filter((t) => t?.terminalType === "A") || [];
  const harbours = terminals?.filter((t) => t?.terminalType === "P") || [];
  const railway = terminals?.filter((t) => t?.terminalType === "T") || [];
  const bus = terminals?.filter((t) => t?.terminalType === "B") || [];
  const restaurants = hotelPlaces.data.restaurants.slice(0, 10) || [];
  const attractions = hotelPlaces.data.attractions.slice(0, 10) || [];
  const museums = hotelPlaces.data?.museums?.slice(0, 10) || [];
  const cafes = hotelPlaces.data?.cafes?.slice(0, 10) || [];
  const bars = hotelPlaces.data?.bars?.slice(0, 10) || [];
  const parks = hotelPlaces.data?.parks?.slice(0, 10) || [];
  const trainStations = hotelPlaces.data?.trainStations?.slice(0, 10) || [];
  const subwayStations = hotelPlaces.data?.subwayStations?.slice(0, 10) || [];
  const busStops = hotelPlaces.data?.busStops?.slice(0, 10) || [];
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
        <h5>
          {weeks > 0 && days >= 0
            ? `${weeks} weeks, ${days} days`
            : `${days} days`}
        </h5>
        <h4>rooms : {availableRooms[0]?.rates[0].rooms}</h4>
        <Rates categoryCode={categoryCode} reviewCount={30} rating={4.2} />
      </div>

      <div className="main-results">
        <div className="tabz-container">
          <div className="tabz">
            <div
              className="tab-slider"
              style={{ transform: `translateX(${activeTab * 100}%)` }}
            />
            <div
              onClick={() => toggleTab(1)}
              className={activeTab === 1 ? "tab active" : "tab"}
            >
              about hotel
            </div>
            <div
              onClick={() => toggleTab(2)}
              className={activeTab === 2 ? "tab active" : "tab"}
            >
              attractions
            </div>
            <div
              onClick={() => toggleTab(3)}
              className={activeTab === 3 ? "tab active" : "tab"}
            >
              food & drinks
            </div>
            <div
              onClick={() => toggleTab(4)}
              className={activeTab === 4 ? "tab active" : "tab"}
            >
              transport
            </div>
          </div>
          <div className="tabz-content">
            <div
              className={activeTab === 1 ? "content active-content" : "content"}
            >
              <h4>{name}</h4>
              <p>{description?.content}</p>
            </div>
            <div
              className={activeTab === 2 ? "content active-content" : "content"}
            >
              <h4>list of attractions close by</h4>
              <div className="poi">
                {interestPoints?.map((place, index) => {
                  const { poiName, distance } = place;
                  return (
                    <div className="place" key={index}>
                      <h4>
                        {poiName} {distance} km
                      </h4>
                    </div>
                  );
                })}
              </div>
              {attractions?.length > 0 ? (
                <div className="place">
                  {attractions?.map((place, index) => {
                    const { name, distanceKm } = place;
                    return (
                      <div className="place" key={index}>
                        <h4>
                          {name} {distanceKm} km
                        </h4>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
            <div
              className={activeTab === 3 ? "content active-content" : "content"}
            >
              {restaurants?.length > 0 ? (
                <div className="place-container">
                  <h4>restaurants</h4>
                  {restaurants?.map((place, index) => {
                    const { name, distanceKm } = place;
                    return (
                      <div className="place" key={index}>
                        <h4>
                          {name} {distanceKm} km
                        </h4>
                      </div>
                    );
                  })}
                </div>
              ) : null}
              {bars?.length > 0 ? (
                <div className="place-container">
                  <h4>bars</h4>
                  {bars?.map((place, index) => {
                    const { name, distanceKm } = place;
                    return (
                      <div className="place" key={index}>
                        <h4>
                          {name} {distanceKm} km
                        </h4>
                      </div>
                    );
                  })}
                </div>
              ) : null}
              {cafes?.length > 0 ? (
                <div className="place-container">
                  <h4>cafes</h4>
                  {cafes?.map((place, index) => {
                    const { name, distanceKm } = place;
                    return (
                      <div className="place" key={index}>
                        <h4>
                          {name} {distanceKm} km
                        </h4>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
            <div
              className={activeTab === 4 ? "content active-content" : "content"}
            >
              <div className="transport-container">
                {/* Airports */}
                {airports.length > 0 && (
                  <div className="airports">
                    <h4>Nearest Airports</h4>
                    <div className="airport-list">
                      {airports.map((airport) => (
                        <div
                          key={airport.terminalId || airport.name?.content}
                          className="place"
                        >
                          <AirplaneTaxiingIcon size={10} color="#222" />
                          <h5>
                            {airport.name?.content || "Unknown Airport"}
                            <span className="distance">
                              {" "}
                              • {airport.distance} km
                            </span>
                          </h5>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Harbours / Ports */}
                {harbours.length > 0 && (
                  <div className="harbours">
                    <h4>Nearest Harbours / Ports</h4>
                    <div className="harbour-list">
                      {harbours.map((harbour) => (
                        <div
                          key={harbour.terminalId || harbour.name?.content}
                          className="place"
                        >
                          <AnchorIcon size={10} color="#222" />
                          <h5>
                            {harbour.name?.content || "Unknown Harbour"}
                            <span className="distance">
                              {" "}
                              • {harbour.distance} km
                            </span>
                          </h5>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {railway.length > 0 && (
                  <div className="harbours">
                    <h4>Nearest trains</h4>
                    <div className="harbour-list">
                      {railway.map((tain) => (
                        <div
                          key={tain.terminalId || tain.name?.content}
                          className="place"
                        >
                          <TrainIcon size={10} color="#222" />
                          <h5>
                            {tain.name?.content || "Unknown Harbour"}
                            <span className="distance">
                              {" "}
                              • {tain.distance} km
                            </span>
                          </h5>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {bus.length > 0 && (
                  <div className="harbours">
                    <h4>Nearest trains</h4>
                    <div className="harbour-list">
                      {bus.map((bus) => (
                        <div
                          key={bus.terminalId || bus.name?.content}
                          className="place"
                        >
                          <BusIcon size={10} color="#222" />
                          <h5>
                            {bus.name?.content || "Unknown Harbour"}
                            <span className="distance">
                              {" "}
                              • {bus.distance} km
                            </span>
                          </h5>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Optional: show nothing found message */}
                {airports.length === 0 && harbours.length === 0 && (
                  <p className="no-data">
                    No nearby airports or harbours found
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

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

          {availableRooms.map((room, roomIndex) => {
            const cleanCode = cleanRoomCode(room.code);
            const roomImages = roomImagesByCode[cleanCode] || [];
            const detailedRoom = roomDetailsMap[cleanCode];
            const roomFacilities = detailedRoom?.roomFacilities || [];

            return (
              <div key={roomIndex} className="rooms">
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
                  {room.rates.map((rate, rateIndex) => {
                    const { net, boardName } = rate;
                    const cancellationSummary = getCancellationBadge(rate);
                    return (
                      <div key={rateIndex} className="room">
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
                          <button
                            onClick={() => {
                              bookRoomBtn(roomIndex, rateIndex);
                            }}
                            className="book-now"
                          >
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
      <div className="footer">
        <div className="footer-container">
          <h1>footer</h1>
          <SmileyIcon size={100} color="#f5f5f5" />
        </div>
      </div>
    </section>
  );
}

export default HotelRoom;
