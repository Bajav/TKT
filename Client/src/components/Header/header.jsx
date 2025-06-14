import './headr.styles.scss';
import LocationComponent from '../LOCATION/location.component';

 function LocationHeader() {
  return (
    <div className='header'>
        <LocationComponent />
        <div className="icon"></div>
    </div>
  )
}
export default LocationHeader;