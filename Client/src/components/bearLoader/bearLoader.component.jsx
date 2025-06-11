import "./bearLoader.styles.scss";
import { useContext, useState, useEffect, useRef } from "react";
import { FlightContext } from "../../components/context/flightSearch.context";
import errorIcon from "../../assets/icons/error-svgrepo-com.svg";
import { gsap } from "gsap";

function BearLoader() {
  const { upsellError } = useContext(FlightContext);
  const [errorCode, setErrorCode] = useState(false);
  const errorRef = useRef(null);

  useEffect(() => {
    setErrorCode(upsellError?.status === 400);
  }, [upsellError]);

  useEffect(() => {
    if (errorCode && errorRef.current) {
      gsap.fromTo(
        errorRef.current,
        {
          y: 200,
          scale: -0,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, [errorCode]);

  return (
    <div className="loadingClass">
      <span className="loaded"></span>

      {errorCode ? (
        <div ref={errorRef} className="uppsellError">
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
