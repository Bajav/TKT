import { createContext, useState } from "react";

export const FlightContext = createContext({
  flightSearch: null,
  setFormData: () => null,
  iataCodes: [],
  setIataCodes: () => {},
  airlineData: [],
  setAirlineData: () => {},
  flightResults:[],
  setFlightResults:()=>{}
});

export const FlightSearchProvider = ({ children }) => {
  const [flightSearch, setFormData] = useState(null);
  const [iataCodes, setIataCodes] = useState([]);
  const [airlineData, setAirlineData] = useState([]);
  const [flightResults, setFlightResults] = useState([]);
  const value = {
    flightSearch,
    setFormData,
    iataCodes,
    setIataCodes,
    airlineData,
    setAirlineData,
    flightResults, setFlightResults
  };
  return (
    <FlightContext.Provider value={value}>{children}</FlightContext.Provider>
  );
};
