// styles
import "./hotelresults.styles.scss";
// components
import hotelJson from "../../../data/hotelsJson.json";
import HotelCard from "../../../components/Hotels/HotelCard/hotelcard.component";
import hotelImg from "../../../assets/images/hotelImg.jpg";
import { SlidersHorizontal } from "lucide-react";


function HotelResults() {
  return (
    <main className="hotel-results">
      <div className="results-header">
        <button className="cancelBtn">cancel</button>
      </div>
          <h1 className="results-head">hotel results</h1>
      <div className="results-header">
        <div className="filter">
            <SlidersHorizontal color="#222" size={8}/>
            <h5>filters</h5>
        </div>
      </div>
      {hotelJson.hotels.hotels.map((hotel, index) => {
        const { name, destinationName, categoryName, minRate } = hotel;
        return (
          <HotelCard
            hotelName={name}
            // city={"Paris"}
            country={destinationName}
            description={
              "Ritz Paris is a renowned 5-star luxury hotel located in the heart of Paris,France. Famous for its classic architecture, refined service."
            }
            image={hotelImg}
            mainPrice={minRate}
            pricePerNight={100}
            rating={"9.0"}
            reviewCount={25}
            rateNum={3}
            key={index}
            index={index}
          />
        );
      })}
    </main>
  );
}

export default HotelResults;
