import "./hotels.styles.scss";
import HotelForm from "../../components/Hotels/FormInputs/form/form.component";
import LocationHeader from "../../components/Header/header";
import HotelCard from "../../components/Hotels/HotelCard/hotelcard.component";
function Hotels() {
  return (
    <div className="home">
      <LocationHeader />
      <HotelForm />
      <HotelCard
        hotelName={"Hôtel Ritz"}
        city={"Paris"}
        country={"France"}
        description={
          "Ritz Paris is a renowned 5-star luxury hotel located in the heart of Paris,France. Famous for its classic architecture, refined service."
        }
        image={"SD"}
        mainPrice={"1800"}
        pricePerNight={100}
        rating={9.0}
        reviewCount={25}
      />
    </div>
  );
}
export default Hotels;
