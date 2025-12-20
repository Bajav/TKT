import { createContext, useState, useReducer } from "react";

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

const ACTIONS = {
  SET_FORM_DATA: "SET_FORM_DATA ",
  SET_IATA_CODES: "SET_IATA_CODES",
  SET_AIRLINE_DATA: "SET_AIRLINE_DATA",
  SET_FLIGHT_RESULTS: "SET_FLIGHT_RESULTS",
  SET_SELECTED_FLIGHTS: "SET_SELECTED_FLIGHTS",
  SET_FILTERED_FLIGHTS: "SET_FILTERED_FLIGHTS",
  SET_BRANDED_UPSELL: "SET_BRANDED_UPSELL",
  SET_BOOKED_FLIGHT: "SET_BOOKED_FLIGHT",
  SET_UPSELL_ERROR: "SET_UPSELL_ERROR",
  SET_LAST_FLIGHT: "SET_LAST_FLIGHT",
  SET_ALERT: "SET_ALERT",
};

const flightReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_FORM_DATA:
      return {
        ...state,
        flightSearch: action.payload,
      };
    // case ACTIONS.SET_FORM_DATA : return{}
    case ACTIONS.SET_IATA_CODES:
      return {
        ...state,
        iataCodes: action.payload,
      };
    case ACTIONS.SET_AIRLINE_DATA:
      return {
        ...state,
        airlineData: action.payload,
      };
    case ACTIONS.SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case ACTIONS.SET_BOOKED_FLIGHT:
      return {
        ...state,
        bookedFlight: action.payload,
      };
    case ACTIONS.SET_BRANDED_UPSELL:
      return {
        ...state,
        brandedUpSell: action.payload,
      };
    case ACTIONS.SET_SELECTED_FLIGHTS:
      return {
        ...state,
        brandedUpSell: action.payload,
      };
    case ACTIONS.SET_UPSELL_ERROR:
      return {
        ...state,
        brandedUpSell: action.payload,
      };
  }
};

const INITIAL_STATE = {
  flightSearch: null,
  iataCodes: [],
  airlineData: [],
  lightResults: [],
  selectedFlight: [],
  bookedFlight: [],
  brandedUpSell: [],
  upsellError: "",
  lastFlight: [],
  alert: false,
  filteredFlights: [],
};

export const FlightSearchProvider = ({ children }) => {
  // const [flightSearch, setFormData] = useState(null);
  // const [iataCodes, setIataCodes] = useState([]);
  // const [airlineData, setAirlineData] = useState([]);
  // const [flightResults, setFlightResults] = useState([]);
  // const [selectedFlight, setSelectFlight] = useState([]);
  // const [bookedFlight, setBookedFlight] = useState([]);
  // const [brandedUpSell, setBrandedUpSell] = useState([]);
  // const [upsellError, setUpsellError] = useState("");
  // const [lastFlight, setlastFlight] = useState([]);
  // const [alert, setAlert] = useState(false);
  // const [filteredFlights, setFilteredFlights] = useState([]);
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
