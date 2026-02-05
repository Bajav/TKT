// styles
import "./hotelresults.styles.scss";
// components
import hotelJson from "../../../data/hotelsJson.json";
import HotelCard from "../../../components/Hotels/HotelCard/hotelcard.component";
import hotelImg from "../../../assets/images/hotelImg.jpg";
import { SlidersHorizontal } from "lucide-react";
import { getBestOffer } from "../../../components/Utils/HotelsUtils/pricing.utils.jsx";
import { HotelContext } from "../../../components/context/hotels.contenxt.jsx";
import imagess from "../../../data/images.data.json";
// import hooks
import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useContext, useState, Fragment, useRef } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import imagesData from '../../../data/unsplash/unsplash.data.json';
// import utils
import { extractSearchParams } from "../../../components/Utils/HotelsUtils/searchparams.utils.jsx";
// import {getCancellationBadge} from '../../'

function HotelResults() {
  // hooks
  const {
    hotelContents,
    setHotelContents,
    overlay,
    setFormData,
    formData,
    setOverlay,
    setHotelJson,
    days,
    weeks,
    setDays,
    setWeeks,
  } = useContext(HotelContext);

  const [dealAmount, setDealAmount] = useState(0);
  const [json, setJson] = useState(null);
  const [hotels, setHotels] = useState({ hotels: [] });
  const [searchParams] = useSearchParams();
  const [bestOfferName, setBestOfferName] = useState("");
  const [images, setImages] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  // this is a helper function to get hotel codes from hotelJson
  const getHotelCodes = () => {
    const codes = new Set();
    json.hotels.hotels.forEach((hotel) => {
      if (hotel.code) {
        codes.add(hotel.code);
      }
    });
    return Array.from(codes);
  };
  const payload = extractSearchParams(searchParams);
  const hasFetchedRef = useRef(false);
  // fetch hotels function
  const fecthHotels = async () => {
    // console.log("formData", formData);
    if (!payload) return;
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;
    try {
      const response = await axios.post("http://localhost:3000/hotels", {
        formData: payload,
      });
      // console.log(response.data.hotels);
      setHotels(response.data.hotels);
      setJson(response.data);
    
      // setHotels(hotelJson.hotels);
    } catch (error) {
      console.log("error finding hotels", error);
    }
  };
  
  useEffect(() => {
    // console.log(hotelJson);
    fecthHotels();
    setFormData(payload);
  }, []);
  // this is the use effect to load hotel contents.
  //  useEffect(() => {
  //     const loadHotelContents = async () => {
  //       const codes = getHotelCodes();
  //       if (codes.length === 0) {
  //         console.log("No hotel codes found");
  //         return;
  //       }

  //       console.log(`Fetching content for ${codes.length} hotels...`);
  //       const data = await fetchHotelsContent(codes);

  //       if (data && data.hotels) {
  //         setHotelContents(data.hotels);
  //         console.log("Hotel contents loaded:", data.hotels.length, "hotels");
  //       } else {
  //         console.warn("No hotel content received");
  //       }
  //     };
  //     loadHotelContents();
  //   }, []);

  // Stay count effect (now safe at top level)

  useEffect(() => {
    if (!hotels?.checkIn || !hotels?.checkOut) return;

    const checkInDate = new Date(hotels.checkIn);
    const checkOutDate = new Date(hotels.checkOut);

    if (isNaN(checkInDate) || isNaN(checkOutDate)) {
      setDays(0);
      setWeeks(0);
      return;
    }


    const diffTime = Math.abs(checkOutDate - checkInDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 7) {
      const week = Math.floor(diffDays / 7);
      const day = diffDays % 7;
      setWeeks(week);
      setDays(day);
    } else {
      setWeeks(0);
      setDays(diffDays);
    }
  }, [hotels?.checkIn, hotels?.checkOut]);
// setHotelImages
const hotelImages = ()=>
  { const imagUrls = new Set();
    imagesData.data.forEach((imgJson)=>{
      imagUrls.add(imgJson.urls);
    }); 
    console.log(imagUrls);
  }
  useEffect(()=>{
    hotelImages();
  });

  return (
    <div>
      <main className="hotel-results">
        <div className="results-header">
          <button onClick={() => navigate("/hotels")} className="cancelBtn">
            cancel
          </button>
        </div>
        <h1 className="results-head">{hotels?.hotels?.length} hotels found</h1>
        <div className="results-header">
          <div className="filter">
            <SlidersHorizontal color="#222" size={8} />
            <h5>filters</h5>
          </div>
        </div>
        {hotels?.hotels?.length > 0 ? (
          hotels.hotels.map((hotel, index) => {

            const {
              name,
              destinationName,
              categoryName,
              minRate,
              categoryCode,
              rooms,
            } = hotel;
            // console.log(hotel);
            const { name: roomName, rates } = rooms[0] || {};
            const { boardName, net, paymentType, rateClass, taxes, allotment } =
              rates[0] || {};

            // const imageUrl = imagess[index % images.length];
          const imageUrls = imagesData.data.map(photo => photo.urls.thumb);
            const bestOffer = getBestOffer(hotel);
            // console.log("hotelsss::",hotels?.hotels);
            // console.log("imageUrls::",imageUrls);
            return (
              <HotelCard
                key={index}
                rooms={allotment}
                boardName={boardName}
                days={days}
                weeks={weeks}
                rateType={rateClass}
                hotelJson={json}
                index={index}
                isDeal={bestOffer?.hasDeal || false}
                hotelName={name}
                offerName={bestOffer?.name || ""}
                offerAmount={bestOffer?.amount || 0}
                country={destinationName}
                image={imageUrls[index % imageUrls.length]}
                mainPrice={net}
                pricePerNight={100}
                rating="9.5"
                reviewCount={25}
                rateNum={parseInt(categoryCode)}
                categoryCode={categoryCode}
              />
            );
          })
        ) : (
          <div className="finding">finding hotels for you</div>
        )}
        {/* {hotelJson.hotels.hotels.map((hotel, index) => {
            const {
              name,
              destinationName,
              categoryName,
              minRate,
              categoryCode,
            } = hotel;

            const imageUrl = images[index % images.length];
            const bestOffer = getBestOffer(hotel);

            return (
              <HotelCard
                key={index}
                hotelJson={hotelJson}
                index={index}
                isDeal={bestOffer?.hasDeal || false}
                hotelName={name}
                offerName={bestOffer?.name || ""}
                offerAmount={bestOffer?.amount || 0}
                country={destinationName}
                image={imageUrl}
                mainPrice={minRate}
                pricePerNight={100}
                rating="9."
                reviewCount={25}
                rateNum={parseInt(categoryCode)}
                categoryCode={categoryCode}
              />
            );
          })} */}
      </main>
    </div>
  );
}

export default HotelResults;
