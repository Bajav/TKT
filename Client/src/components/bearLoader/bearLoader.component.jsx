import "./bearLoader.styles.scss";
import { useContext, useState } from "react";
import { FlightContext } from "../../components/context/flightSearch.context";
import errorIcon from "../../assets/icons/error-svgrepo-com.svg";
function BearLoader() {
  const { upsellError } = useContext(FlightContext);
  console.log(upsellError);
  return (
    <div className="loadingClass">
      <span className="loaded"></span>

      <div className="uppsellError">
        <img src={errorIcon} alt="errorIcon" />
        <h1>{upsellError}</h1>
      </div>
    </div>
  );
}

export default BearLoader;
