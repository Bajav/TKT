import "./headr.styles.scss";
import LocationComponent from "../LOCATION/location.component";

function LocationHeader() {
  return (
      <div className="header">
        <LocationComponent />
      <div className="user-drop-down">
        <div className="icon"></div>
        <div className="user-drop-down-header">
          <h3>balijawa hussein</h3>
          <p>balijawahussein@gmail.com</p>
        </div>
        <ul className="drop-down-links">
          <li>your flights</li>
          <li>likes</li>
          <li>community</li>
          <li>log out</li>
        </ul>
      </div>
    </div>
  );
}
export default LocationHeader;
