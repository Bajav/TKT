import {createContext, useState } from "react";

export const FlightContext = createContext({
  formData: null,
  setFormData: () => null,
});

export const FlightSearchProvider = ({ children }) => {
  const [formData, setFormData] = useState(null);
  const value = { formData, setFormData };
  return (
    <FlightContext.Provider value={value}>{children}</FlightContext.Provider>
  );
};