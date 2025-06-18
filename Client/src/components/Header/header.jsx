import "./headr.styles.scss";
import LocationComponent from "../LOCATION/location.component";
import { useState, useContext, useEffect } from "react";
import { motion } from "motion/react";
import popUpSignIn from "../../Controllers/signinwithpopup.controller";
import { UserContext } from "../context/user.context";

const LocationHeader = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [dropDown, setDropDown] = useState(false);
  const [signedIn, setSigninedIn] = useState(false);
  const showDropdown = () => setDropDown(!dropDown);

 const signinwithpopup = async () => {
  try {
    const signinedInUser = await popUpSignIn();
    setUserData(signinedInUser.user);
    console.log("✅ User signed in:", signinedInUser.user);
    setSigninedIn(true);
  } catch (err) {
    console.log("❌ Error signing in:", err);
  }
};
useEffect(() => {
  if (userData) {
    console.log("✅ userData has been updated:", userData);
  }
}, [userData]);

  return (
    <div className="header">
      {console.log(userData?.photoURL)}
      <LocationComponent />
      <div onClick={showDropdown} className="icon">
        <img src={userData?.photoURL || " "} alt="user image" />
      </div>
      {dropDown && (
        <motion.div
          initial={{ opacity: 0, height: 0, width: 0 }}
          animate={{ opacity: 1, height: 175, width: 200 }}
          transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
          className="user-drop-down"
        >
          {signedIn ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="drop-down-contents"
            >
              <div className="user-drop-down-header">
                <h3>{userData?.displayName.toLocaleUpperCase()}</h3>
                <p>{userData?.email}</p>
              </div>
              <ul className="drop-down-links">
                <li>your flights</li>
                <li>likes</li>
                <li>community</li>
                <li>log out</li>
              </ul>
            </motion.div>
          ) : (
            <div className="signIn-container">
              <div className="display">

              <p>sign in / up to view console</p>
              </div>
              <button onClick={signinwithpopup}>sign in</button>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};
export default LocationHeader;
