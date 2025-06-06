import { createContext, useState } from "react";

export const FlightContext = createContext({
  flightSearch: null,
  setFormData: () => null,
  iataCodes: [],
  setIataCodes: () => {},
  airlineData: [],
  setAirlineData: () => {},
  flightResults: [],
  setFlightResults: () => {},
  selectedFlight: [],
  setSelectFlight: () => {},
  bookedFlight: [],
  setBookedFlight: () => {},
  brandedUpSell: [],
  setBrandedUpSell: () => {},
  upsellError: "",
  setUpsellError: () => {},
});

export const FlightSearchProvider = ({ children }) => {
  const [flightSearch, setFormData] = useState(null);
  const [iataCodes, setIataCodes] = useState([]);
  const [airlineData, setAirlineData] = useState([]);
  const [flightResults, setFlightResults] = useState([]);
  const [selectedFlight, setSelectFlight] = useState([]);
  const [bookedFlight, setBookedFlight] = useState([]);
  const [brandedUpSell, setBrandedUpSell] = useState([]);
  const [upsellError, setUpsellError] = useState("");

  const value = {
    flightSearch,
    setFormData,
    iataCodes,
    setIataCodes,
    airlineData,
    setAirlineData,
    flightResults,
    setFlightResults,
    selectedFlight,
    setSelectFlight,
    bookedFlight,
    setBookedFlight,
    brandedUpSell,
    setBrandedUpSell,
    upsellError,
    setUpsellError,
  };
  return (
    <FlightContext.Provider value={value}>{children}</FlightContext.Provider>
  );
};
