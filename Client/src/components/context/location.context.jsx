import { useState, createContext } from "react";

export const LocationContext = createContext({
  userLocation: null,
  setLocation: () => {},
   loading: false,
  setLoading: () => {},
   error: null,
  setError: () => {},
});

export const LocationProvider = ({ children }) => {
  const [userLocation, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const value = { userLocation, setLocation,loading, setLoading,error, setError };
  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
