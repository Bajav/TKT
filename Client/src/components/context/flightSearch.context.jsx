import {createContext, useState } from "react";

export const FlightContext = createContext({
  flightSearch: null,
  setFormData: () => null,
});

export const FlightSearchProvider = ({ children }) => {
  const [flightSearch, setFormData] = useState(null);
  const value = { flightSearch, setFormData };
  return (
    <FlightContext.Provider value={value}>{children}</FlightContext.Provider>
  );
};