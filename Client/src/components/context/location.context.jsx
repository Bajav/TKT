import { useState, createContext } from "react";

export const LocationContext = createContext({
  location: null,
  setLocation: () => {},
});

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const value = { location, setLocation };
  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>;
};
