import "./bearLoader.styles.scss";
import { useContext, useState, useEffect } from "react";
import { FlightContext } from "../../components/context/flightSearch.context";
import errorIcon from "../../assets/icons/error-svgrepo-com.svg";
import { motion, scale } from "motion/react";
function BearLoader() {
  const { upsellError } = useContext(FlightContext);
  const [errorCode, setErrorCode] = useState(false);
  console.log(upsellError);
  useEffect(() => {
    upsellError?.status === 400 ? setErrorCode(true) : setErrorCode(false);
  }, [upsellError]);

  return (
    <div className="loadingClass">
      <span className="loaded"></span>
   
        {errorCode ? (
          <motion.div
            aria-live="assertive"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }} // ✅ Enables exit animation
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="uppsellError"
          >
            <img src={errorIcon} alt="Error Icon" />
            <h1>{upsellError?.detail || "Something went wrong."}</h1>
          </motion.div>
        ) : (
          <div className="finding-deals">
            <h1>Finding deals...</h1>
          </div>
        )}
    </div>
  );
}

export default BearLoader;
