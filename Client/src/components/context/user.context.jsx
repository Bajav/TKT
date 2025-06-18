import { createContext, useState } from "react";

const UserContext = createContext({
  userData: null,
  setUserData: () => {},
});

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const value = { userData, setUserData };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext,UserContextProvider};
