import { createContext, useState } from "react";

const UiContext = createContext({
  isModel: true,
  setModel: () => {},
  isSuccess: false,
  setSuccess: () => {},
});

const UiContextProvider = ({ children }) => {
  const [isModel, setModel] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const value = { isModel, setModel, isSuccess, setSuccess };
  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};

export { UiContext, UiContextProvider };
