import "./headr.styles.scss";
import LocationComponent from "../LOCATION/location.component";
import { useState } from "react";
import { motion } from "motion/react";

function LocationHeader() {
  const [dropDown, setDropDown] = useState(false);
  const showDropdown = () => setDropDown(!dropDown);
  return (
    <div className="header">
      <LocationComponent />
      <div onClick={showDropdown} className="icon"></div>
      {dropDown && (
        <motion.div
          initial={{ opacity: 0 ,height:0,width:0}}
          animate={{ opacity: 1 ,height:175,width:200}}
          transition={{ delay: 0.2, duration: 0.5, type:"tween" }}
          className="user-drop-down"
        >
          <motion.div initial={{display:"none"}} animate={{display:"block"}} transition={{ delay: 0.8, duration: 0.3, type:"tween" }} className="drop-down-contents">
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
