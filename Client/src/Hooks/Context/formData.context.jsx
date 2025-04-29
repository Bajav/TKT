import { createContext, useState } from "react";

export const FormContext = createContext({});

export const FormContextProvider = ({ children }) => {
  const [travelData, setTravelData] = useState(null);
  return <FormContext.Provider value={{travelData,setTravelData}} >{children}</FormContext.Provider>;
};