// styles
import "./hotelresults.styles.scss";
// components
import hotelJson from "../../../data/hotelsJson.json";
import HotelCard from "../../../components/Hotels/HotelCard/hotelcard.component";
import hotelImg from "../../../assets/images/hotelImg.jpg";
import { SlidersHorizontal } from "lucide-react";
import { useEffect, useContext, useState,Fragment } from "react";
import axios from "axios";
import { HotelContext } from "../../../components/context/hotels.contenxt.jsx";
import images from "../../../data/images.data.json";
import { getBestOffer } from "../../../components/Utils/HotelsUtils/pricing.utils.jsx";
import { motion } from "framer-motion";
// import {getCancellationBadge} from '../../'

function HotelResults() {
  const { hotelContents, setHotelContents,overlay,setOverlay } = useContext(HotelContext);
  const [dealAmount, setDealAmount] = useState(0);
  const [bestOfferName, setBestOfferName] = useState("");
  // this is a helper function to get hotel codes from hotelJson
  const getHotelCodes = () => {
    const codes = new Set();
    hotelJson.hotels.hotels.forEach((hotel) => {
      if (hotel.code) {
        codes.add(hotel.code);
      }
    });
    return Array.from(codes);
  };
  // this is a helper function to fetch hotel contents from the server
  const fetchHotelsContent = async (codes) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/hotelscontents",
        { hotelCodes: codes },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data.data || response.data;
    } catch (error) {
      console.error("Error fetching hotels content:", error);
      return null;
    }
  };

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
  return (
    <div>
      {overlay?<div className="overLay">
        <h4>redirecting you to hotel rooms</h4>
        <div className="views-container">
          <img src={hotelImg} />
        </div>
        <p>To travel is to discover that everyone is wrong about other countries. <br /> <span>by Aldous Huxley</span></p>
      </div>:(
            <main className="hotel-results">
      <div className="results-header">
        <button className="cancelBtn">cancel</button>
      </div>
      <h1 className="results-head">
        {hotelJson.hotels.hotels.length} hotels found
      </h1>
      <div className="results-header">
        <div className="filter">
          <SlidersHorizontal color="#222" size={8} />
          <h5>filters</h5>
        </div>
      </div>
      {hotelJson.hotels.hotels.map((hotel, index) => {
        const { name, destinationName, categoryName, minRate, categoryCode } =
          hotel;

        const imageUrl = images[index % images.length];
        const bestOffer = getBestOffer(hotel);

        return (
          <HotelCard
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
      })}
    </main>
      )}
    </div>
  );
}

export default HotelResults;
