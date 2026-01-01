// styles
import './hotelresults.styles.scss';
// components
import hotelJson from "../../../data/hotelsJson.json";
import HotelCard from "../../../components/Hotels/HotelCard/hotelcard.component";
import hotelImg from "../../../assets/images/hotelImg.jpg"
function HotelResults() {
  return (
    <main className="hotel-results">
        <h1>hotel results</h1>
      {hotelJson.hotels.hotels.map((hotel) => {
        const { name, destinationName, categoryName, minRate } = hotel;
        return (
          <HotelCard
            hotelName={name}
            city={"Paris"}
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
            // off={30}
          />
        );
      })}
    </main>
  );
}

export default HotelResults;
