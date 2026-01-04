import { createContext, useReducer } from "react";

export const HotelContenxt=
  createContext({
    hotelJson: null,
    setHotelJson: () => {},
    hotelSearchData: null,
    setHotelSearchData: () => {},
    selectedHotel: null,
    setSelectedHotel: () => {},
    hotelError: null,
    setHotelError: () => {},
  });

export const HotelActions = {
  SET_HOTEL_JSON: "SET_HOTEL_JSON",
  SET_SELECTED_HOTEL: "SET_SELECTED_HOTEL",
  SET_HOTEL_SEARCH_DATA: "SET_HOTEL_SEARCH_DATA",
  SET_HOTEL_ERROR: "SET_HOTEL_ERROR",
};

const HotelReducer = (state, action) => {
  switch (action.type) {
    case HotelActions.SET_HOTEL_JSON:
      return { ...state, hotelJson: action.payload };
    case HotelActions.SET_SELECTED_HOTEL:
      return { ...state, selectedHotel: action.payload };
    case HotelActions.SET_HOTEL_SEARCH_DATA:
      return { ...state, hotelSearchData: action.payload };
    case HotelActions.SET_HOTEL_ERROR:
      return { ...state, hotelError: action.payload };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  hotelJson: null,
  hotelSearchData: null,
  selectedHotel: null,
  hotelError: null,
};

export const HotelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(HotelReducer, INITIAL_STATE);
  const { hotelJson, hotelSearchData, selectedHotel, hotelError } = state;
  const setHotelJson = (data) =>
    dispatch({ type: HotelActions.SET_HOTEL_JSON, payload: data });
  const setHotelSearchData = (data) =>
    dispatch({ type: HotelActions.SET_HOTEL_SEARCH_DATA, payload: data });
  const setSelectedHotel = (data) =>
    dispatch({ type: HotelActions.SET_SELECTED_HOTEL, payload: data });
  const setHotelError = (data) =>
    dispatch({ type: HotelActions.SET_HOTEL_ERROR, payload: data });
  const value = { hotelJson, hotelSearchData, selectedHotel, hotelError };
    return <HotelContenxt.Provider value={value}>{children}</HotelContenxt.Provider>
};
