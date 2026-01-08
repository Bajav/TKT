import { createContext, useReducer } from "react";

export const HotelContext = createContext({
  hotelJson: null,
  hotelSearchData: null,
  selectedHotel: null,
  hotelInfo: null,
  setHotelInfo: () => {},
  hotelError: null,
  hotelContents: null,
  setHotelJson: () => {},
  setHotelSearchData: () => {},
  setSelectedHotel: () => {},
  setHotelError: () => {},
  setHotelContents: () => {},
});

export const HotelActions = {
  SET_HOTEL_INFO: "SET_HOTEL_INFO",
  SET_HOTEL_CONTENTS: "SET_HOTEL_CONTENTS",
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
   case HotelActions.SET_HOTEL_INFO:
      return { ...state, hotelInfo: action.payload };
        case HotelActions.SET_HOTEL_CONTENTS:
      return { ...state, hotelContents: action.payload };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  hotelJson: null,
  hotelSearchData: null,
  selectedHotel: null,
  hotelError: null,
  hotelInfo: null,
  hotelContents: null,
};

export const HotelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(HotelReducer, INITIAL_STATE);

  const setHotelJson = (data) =>
    dispatch({ type: HotelActions.SET_HOTEL_JSON, payload: data });
  const setHotelInfo = (data) =>
    dispatch({ type: HotelActions.SET_HOTEL_INFO, payload: data });

  const setHotelSearchData = (data) =>
    dispatch({ type: HotelActions.SET_HOTEL_SEARCH_DATA, payload: data });

  const setSelectedHotel = (data) =>
    dispatch({ type: HotelActions.SET_SELECTED_HOTEL, payload: data });

  const setHotelError = (data) =>
    dispatch({ type: HotelActions.SET_HOTEL_ERROR, payload: data });

  const setHotelContents = (data) =>
    dispatch({ type: HotelActions.SET_HOTEL_CONTENTS, payload: data });
  const value = {
    hotelJson: state.hotelJson,
    hotelSearchData: state.hotelSearchData,
    selectedHotel: state.selectedHotel,
    hotelError: state.hotelError,
    hotelInfo: state.hotelInfo,
    hotelContents: state.hotelContents,
    setHotelContents,
    setHotelInfo,
    setHotelJson,
    setHotelSearchData,
    setSelectedHotel,
    setHotelError,
  };

  return (
    <HotelContext.Provider value={value}>{children}</HotelContext.Provider>
  );
};
