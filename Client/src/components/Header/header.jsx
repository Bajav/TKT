import "./headr.styles.scss";
import LocationComponent from "../LOCATION/location.component";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import popUpSignIn from "../../Controllers/signinwithpopup.controller";
import { UserContext } from "../context/user.context";
import defaultProfile from "../../assets/icons/profile-default-svgrepo-com.svg";
import createUserFromAuth from "../../Controllers/createUser.controller";

const LocationHeader = () => {
  const { userData, setUserData,signedIn,setSigninedIn } = useContext(UserContext);
  const [dropDown, setDropDown] = useState(false);
  
  const showDropdown = () => setDropDown(!dropDown);

  const signinwithpopup = async () => {
    try {
      const signinedInUser = await popUpSignIn();
      setUserData(signinedInUser.user);
      await createUserFromAuth(signinedInUser.user);
      setSigninedIn(true);
    } catch (err) {
      console.log("❌ Error signing in:", err);
    }
  };

useEffect(() => {
  if (!userData) return;
  const postUserData = async () => {
    try {
      console.log("🚀 Sending cookie request...");
      const response = await axios.post(
        "http://localhost:3000/",
        { userData:userData},
        {
          withCredentials: true,
        }
      );
      console.log("✅ Cookie response:", response);
      console.log("✅ Response headers:", response.headers);
    } catch (err) {
      console.log("❌ Error posting user data", err.response?.data || err.message);
    }
  };
  postUserData();
}, [userData]);

  return (
    <div className="header">
      <LocationComponent />
      <div onClick={showDropdown} className="icon">
        <img
          src={userData?.photoURL || defaultProfile}
          alt="user image"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultProfile;
          }}
        />
      </div>
      <AnimatePresence>
        {dropDown && (
          <motion.div
            initial={{ opacity: 0, height: 0, width: 0 }}
            animate={{ opacity: 1, height: 175, width: 200 }}
            exit={{ opacity: 0, height: 0, width: 0 }}
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
      </AnimatePresence>
    </div>
  );
};
export default LocationHeader;
