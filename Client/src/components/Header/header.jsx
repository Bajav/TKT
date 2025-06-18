import "./headr.styles.scss";
import LocationComponent from "../LOCATION/location.component";
import { useState } from "react";
import { motion } from "motion/react";

function LocationHeader() {
  const [dropDown, setDropDown] = useState(true);
  return (
    <div className="header">
      <LocationComponent />
      <div className="icon"></div>
      {dropDown && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 2, type: "spring" }}
          className="user-drop-down"
        >
          <motion.div className="drop-down-contents">
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
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
export default LocationHeader;
