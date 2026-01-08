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
          <SlidersHorizontal color="#222" size={8} />
          <h5>filters</h5>
        </div>
      </div>
      {hotelJson.hotels.hotels.map((hotel, index) => {
        const {
          name,
          destinationName,
          categoryName,
          minRate,
          categoryCode,
          rooms,
        } = hotel;

        // Find the best offer across all rates in all rooms
        let bestOfferName = "";
        let bestOfferAmount = ""; // e.g., "52.00"

        if (rooms && rooms.length > 0) {
          let maxDiscount = 0;

          rooms.forEach((room) => {
            if (room.rates && room.rates.length > 0) {
              room.rates.forEach((rate) => {
                if (rate.offers && rate.offers.length > 0) {
                  rate.offers.forEach((offer) => {
                    const discountAmount = Math.abs(
                      parseFloat(offer.amount || 0)
                    );
                    if (discountAmount > maxDiscount) {
                      maxDiscount = discountAmount;
                      bestOfferName = offer.name || "Special Offer";
                      bestOfferAmount = discountAmount.toFixed(2);
                    }
                  });
                }
              });
            }
          });
        }

        return (
          <HotelCard
            key={index}
            hotelName={name}
            offerName={bestOfferName} // e.g., "Exclusive discount"
            offerAmount={bestOfferAmount} // e.g., "52.00"
            country={destinationName}
            // description="Ritz Paris is a renowned 5-star luxury hotel located in the heart of Paris, France. Famous for its classic architecture, refined service."
            image={hotelImg}
            mainPrice={minRate}
            pricePerNight={100}
            rating="9.0"
            reviewCount={25}
            rateNum={parseInt(categoryCode)} // e.g., "3EST" → 3
            categoryCode={categoryCode}
            index={index}
          />
        );
      })}
    </main>
  );
}

export default HotelResults;
