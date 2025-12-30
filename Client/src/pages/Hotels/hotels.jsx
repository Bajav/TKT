import './hotels.styles.scss';
import HotelForm from "../../components/Hotels/FormInputs/form/form.component";
import LocationHeader from '../../components/Header/header';
function Hotels (){
    return(
       <div className='home'>
        <LocationHeader />
        <HotelForm />
       </div>
    );
}
export default Hotels;