import "./bearLoader.styles.scss";
import { useContext, useState, useEffect } from "react";
import { FlightContext } from "../../components/context/flightSearch.context";
import errorIcon from "../../assets/icons/error-svgrepo-com.svg";
function BearLoader() {
  const { upsellError } = useContext(FlightContext);
  const [errorCode, setErrorCode] = useState(false);
  console.log(upsellError);
  useEffect(() => {
    upsellError?.status === 400 ? setErrorCode(true) : setErrorCode(false);
  });

  return (
    <div className="loadingClass">
      <span className="loaded"></span>

      {errorCode ? (
        <div className="uppsellError">
          <img src={errorIcon} alt="Error Icon" />
          <h1>{upsellError?.detail || "Something went wrong."}</h1>
        </div>
      ) : (
        <div className="finding-deals">
          <h1>Finding deals...</h1>
        </div>
      )}
    </div>
  );
}

export default BearLoader;
