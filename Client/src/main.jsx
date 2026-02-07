import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { FlightSearchProvider } from "./components/context/flightSearch.context.jsx";
import { LocationProvider } from "./components/context/location.context.jsx";
import { UserContextProvider } from "./components/context/user.context.jsx";
import { UiContextProvider } from "./components/context/ui.context.jsx";
import { HotelProvider } from "./components/context/hotels.contenxt.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <UserContextProvider>
          <HotelProvider>
            <FlightSearchProvider>
              <UiContextProvider>
                <LocationProvider>
                  <App />
                </LocationProvider>
              </UiContextProvider>
            </FlightSearchProvider>
          </HotelProvider>
        </UserContextProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
