import "./hotelroom.styles.scss";
import { useContext } from "react";
import { HotelContext } from "../../../components/context/hotels.contenxt";
import { useNavigate } from "react-router-dom";
import BackBTN from "../../../components/features/BackButton/BackBTN";
import Rates from "../Rates/rates.component";
import { AirVent } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import {
  Wifi,
  Dumbbell,
  Car,
  Coffee,
  Tv,
  Wind,
  Waves,
  Utensils,
  Bubbles,
  Cigarette,
  Baby,
  BoomBox,
  Accessibility,
  Plug,
  Bath,
  AlarmSmoke,
  Cable,
  ShowerHead,
  Phone,
  ShieldCheck,
  Toilet,
  Heater,
  AlarmClockCheck,
  Bed,
  Refrigerator,
} from "lucide-react";

function HotelRoom() {
  const { selectedHotel, hotelInfo } = useContext(HotelContext);
  const {
    categoryCode,
    name,
    rooms: availableRooms,
  } = selectedHotel;

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
  const facilityIconMap = {
    wifi: { icon: Wifi, label: "Free WiFi" },
    "wi-fi": { icon: Wifi, label: "Free WiFi" },
    internet: { icon: Wifi, label: "Internet Access" },
    wireless: { icon: Wifi, label: "WiFi" },
    fridge: { icon: Refrigerator, label: "Fridge" },

    gym: { icon: Dumbbell, label: "Gym" },
    fitness: { icon: Dumbbell, label: "Fitness Center" },

    parking: { icon: Car, label: "Parking" },
    "car park": { icon: Car, label: "Parking" },

    radio:{icon:BoomBox,label:"Radio"},
    shower:{icon:ShowerHead,label:"Shower"},
    safe:{icon:ShieldCheck,label:"Safe"},
    "individually adjustable heating":{icon:Heater,label:"Individually adjustable heating"},
    "wake-up service":{icon:AlarmClockCheck,label:"Wake-up service "},
    "extra beds on demand":{icon:Bed,label:"Extra beds on demand"},
    "smoking rooms":{icon:Cigarette,label:"Smoking rooms"},
    "plug adaptor":{icon:Plug,label:"Plug adaptor"},

    "wheelchair-accessible":{icon:Accessibility,label:"Wheelchair-accessible"},
    toiletries:{icon:Toilet,label:"Toiletries"},

    "air conditioning": { icon: Wind, label: "Air Conditioning" },
    "air conditioned": { icon: Wind, label: "Air Conditioning" },
    "220V power supply": { icon: Cable, label: "220V Power Supply" },
    "direct dial telephone": { icon: Phone, label: "Direct Dial Telephone" },
    "tea and coffee making facilities": { icon: Coffee, label: "Tea and Coffee Making Facilities" },

    "swimming pool": { icon: Waves, label: "Swimming Pool" },
    pool: { icon: Waves, label: "Pool" },
    bathtub: { icon: Bath, label: "Bathtub" },

    restaurant: { icon: Utensils, label: "Restaurant" },
    bar: { icon: Coffee, label: "Bar" },

    spa: { icon: Bubbles, label: "Spa" },
    sauna: { icon: Bubbles, label: "Sauna" },

    "smoke detector": { icon: AlarmSmoke, label: "Smoke Detector" },

    "non smoking": { icon: Cigarette, label: "Non-smoking", color: "#ff4444" },
    "family rooms": { icon: Baby, label: "Family Rooms" },
    tv: { icon: Tv, label: "TV" },
    television: { icon: Tv, label: "Television" },
  };

  // Helper to get icon + label for a facility description
  const getFacilityDisplay = (desc) => {
    const lower = desc.toLowerCase();
    const match = Object.entries(facilityIconMap).find(([key]) =>
      lower.includes(key)
    );
    if (match) {
      const [, { icon: Icon, label, color }] = match;
      return { Icon, label, color };
    }
    return null;
  };

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
            {facilities?.slice(0).map((facility, index) => {
              const display = getFacilityDisplay(facility.description.content);
              return (
                <div
                  key={index}
                  className={`facility ${display ? "with-icon" : "plain"}`}
                >
                  {display ? (
                    <>
                      <display.Icon
                        size={20}
                        color={display.color || "#2f7bc8"}
                      />
                      <h4>{display.label}</h4>
                    </>
                  ) : (
                    <>
                      <span className="dot" />
                      <h4>{facility.description.content}</h4>
                    </>
                  )}
                </div>
              );
            })}
          </div>
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
                    {roomFacilities.length > 0 && (
                      <div className="room-facilities">
                        <div className="facilities">
                          {roomFacilities.map((fac, i) => {
                            const display = getFacilityDisplay(
                              fac.description.content
                            );
                            return (
                              <div
                                key={i}
                                className={`facility ${
                                  display ? "with-icon" : "plain"
                                }`}
                              >
                                {display ? (
                                  <>
                                    <display.Icon
                                      size={18}
                                      color={display.color || "#2f7bc8"}
                                    />
                                    <span>{display.label}</span>
                                  </>
                                ) : (
                                  <>
                                    <span className="dot" />
                                    <span>{fac.description.content}</span>
                                  </>
                                )}
                                {fac.number && (
                                  <small style={{ marginLeft: 6 }}>
                                    ({fac.number})
                                  </small>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                    {/* <div className="amenity">
                      <AirVent size={13} color="#2f7bc8" />
                      <h5>Air conditioning</h5>
                    </div> */}
                  </div>
                </div>

                {/* Rates */}
                <h4 className="room-rates">Available Rates</h4>
                <div className="rooms-segment">
                  {room.rates.map((rate, idx) => {
                    const { net, boardName, cancellationPolicies } = rate;
                    const hasFreeCancellation = cancellationPolicies?.some(
                      (p) => new Date(p.from) > new Date()
                    );
                    return (
                      <div key={idx} className="room">
                        <div className="room-data">
                          <h4>{boardName || "Room Only"}</h4>
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
