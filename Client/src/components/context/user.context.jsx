import { createContext, useState } from "react";

const UserContext = createContext({
  userData: null,
  setUserData: () => {},
});

const userContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const value = { userData, setUserData };
  <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext,userContextProvider};
