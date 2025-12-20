import { createContext, useState, useReducer,useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Utils/firebase.utils";

const UserContext = createContext({
  userData: null,
  setUserData: () => {},
  signedIn: false,
  setSigninedIn: () => {},
});

const UserContextProvider = ({ children }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({
          displayName:user.displayName,
          email:user.email,
          photoURL:user.photoURL
        });
        setSigninedIn(true);
      } else {
        setUserData(null);
        setSigninedIn(false);
      }
    });

    // cleanup
    return unsubscribe;
  }, []);
  const [userData, setUserData] = useState(null);
  const [signedIn, setSigninedIn] = useState(false);
  const value = { userData, setUserData, signedIn, setSigninedIn };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
