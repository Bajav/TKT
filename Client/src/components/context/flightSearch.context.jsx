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
  lastFlight: [],
  setlastFlight: () => {},
  alert: false,
  setAlert: () => {},
  filteredFlights: [],
  setFilteredFlights: () => {},
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
  const [lastFlight, setlastFlight] = useState([]);
  const [alert, setAlert] = useState(false);
  const [filteredFlights, setFilteredFlights] = useState([]);
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
    lastFlight,
    setlastFlight,
    alert,
    setAlert,
    filteredFlights,
    setFilteredFlights,
  };
  return (
    <FlightContext.Provider value={value}>{children}</FlightContext.Provider>
  );
};
