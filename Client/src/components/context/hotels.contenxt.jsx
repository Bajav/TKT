import { createContext, useReducer } from "react";

export const HotelContext = createContext({
  hotelJson: null,
  days:0,
  weeks:0,
  hotelSearchData: null,
  selectedHotel: null,
  hotelInfo: null,
  isDeal: null,
  hotelError: null,
  hotelContents: null,
  overlay: null,
  formData: null,

  setHotelJson: () => {},
  setDays: () => {},
  setWeeks: () => {},
  setFormData: () => {},
  setHotelSearchData: () => {},
  setSelectedHotel: () => {},
  setHotelInfo: () => {},
  setHotelContents: () => {},
  setHotelError: () => {},
  setDeal: () => {},
  setOverlay: () => {},
});

export const HotelActions = {
  SET_FORM_DATA :"SET_FORM_DATA",
  SET_DAYS:"SET_DAYS",
  SET_WEEKS:"SET_WEEKS",
  SET_HOTEL_INFO: "SET_HOTEL_INFO",
  SET_HOTEL_CONTENTS: "SET_HOTEL_CONTENTS",
  SET_HOTEL_JSON: "SET_HOTEL_JSON",
  SET_SELECTED_HOTEL: "SET_SELECTED_HOTEL",
  SET_HOTEL_SEARCH_DATA: "SET_HOTEL_SEARCH_DATA",
  SET_HOTEL_ERROR: "SET_HOTEL_ERROR",
  SET_DEAL: "SET_DEAL",
  SET_OVERLAY: "SET_OVERLAY",
};

const HotelReducer = (state, action) => {
  switch (action.type) {
    case HotelActions.SET_FORM_DATA:
      return {...state, formData : action.payload}
    case HotelActions.SET_HOTEL_JSON:
      return { ...state, hotelJson: action.payload };
    case HotelActions.SET_DEAL:
      return { ...state, isDeal: action.payload };
    case HotelActions.SET_DAYS:
      return { ...state, days: action.payload };
    case HotelActions.SET_WEEKS:
      return { ...state, weeks: action.payload };

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
    case HotelActions.SET_OVERLAY:
      return { ...state, overlay: action.payload };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  formData: null,
  isDeal: null,
  overlay: false,
  hotelJson: null,
  hotelSearchData: null,
  selectedHotel: null,
  hotelError: null,
  hotelInfo: null,
  hotelContents: null,
  days: 0,
  weeks: 0,
};

export const HotelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(HotelReducer, INITIAL_STATE);

    const setFormData = (data) =>
    dispatch({ type: HotelActions.SET_FORM_DATA, payload: data });
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
  const setDeal = (data) =>
    dispatch({ type: HotelActions.SET_DEAL, payload: data });
  const setOverlay = (data) =>
    dispatch({ type: HotelActions.SET_OVERLAY, payload: data });
  const setDays = (data) =>
    dispatch({ type: HotelActions.SET_DAYS, payload: data });
  const setWeeks = (data) =>
    dispatch({ type: HotelActions.SET_WEEKS, payload: data });
  const value = {
    formData: state.formData,
    hotelJson: state.hotelJson,
    hotelSearchData: state.hotelSearchData,
    selectedHotel: state.selectedHotel,
    hotelError: state.hotelError,
    hotelInfo: state.hotelInfo,
    hotelContents: state.hotelContents,
    isDeal: state.isDeal,
    overlay: state.overlay,
    days: state.days,
    weeks: state.weeks,
    setFormData,
    setDeal,
    setOverlay,
    setHotelContents,
    setHotelInfo,
    setHotelJson,
    setHotelSearchData,
    setSelectedHotel,
    setHotelError,
    setDays,
    setWeeks,
  };

  return (
    <HotelContext.Provider value={value}>{children}</HotelContext.Provider>
  );
};
