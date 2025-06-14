import './headr.styles.scss';
import Icon from '../places/icon';
import LocationComponent from '../LOCATION/location.component';

 function LocationHeader() {
  return (
    <div className='header'>
        <LocationComponent />
        <Icon />
    </div>
  )
}
export default LocationHeader;