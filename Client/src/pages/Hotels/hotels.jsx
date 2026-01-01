import "./hotels.styles.scss";
import HotelForm from "../../components/Hotels/FormInputs/form/form.component";
import LocationHeader from "../../components/Header/header";
import HotelCard from "../../components/Hotels/HotelCard/hotelcard.component";
import hotelJson from "../../data/hotelsJson.json";
import hotelImg from '../../assets/images/hotelImg.jpg'
function Hotels() {
  return (
    <div className="home">
      <LocationHeader />
      <HotelForm />
      {hotelJson.hotels.hotels.map((hotel) => {
        const { name, destinationName,categoryName,minRate } = hotel;
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
            rating={9.0}
            reviewCount={25}
          />
        );
      })}
    </div>
  );
}
export default Hotels;
