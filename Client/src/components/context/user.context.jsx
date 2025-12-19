import { createContext, useState, useReducer } from "react";

const UserContext = createContext({
  userData: null,
  setUserData: () => {},
  signedIn: false,
  setSigninedIn: () => {},
});

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [signedIn, setSigninedIn] = useState(false);
  const value = { userData, setUserData, signedIn, setSigninedIn };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
