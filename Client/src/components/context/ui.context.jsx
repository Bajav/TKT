import { createContext, useState } from "react";

const UiContext = createContext({
  isModel: false,
  setModel: () => {},
});

const UiContextProvider = ({ children }) => {
  const [isModel, setModel] = useState(false);
  const value = { isModel, setModel };
  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};

export {UiContext,UiContextProvider};
