import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { FlightSearchProvider } from "./components/context/flightSearch.context.jsx";
import { LocationProvider } from "./components/context/location.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FlightSearchProvider>
        <LocationProvider>
          <App />
        </LocationProvider>
      </FlightSearchProvider>
    </BrowserRouter>
  </StrictMode>
);
