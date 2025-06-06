import "./bearLoader.styles.scss";
import { useContext } from "react";
import { FlightContext } from '../../components/context/flightSearch.context'

function BearLoader() {
  const {upsellError} = useContext(FlightContext);
  return (
    <div className="loadingClass">
    <span className="loaded"></span>
    <h1>{upsellError}</h1>
    </div>
  )
}

export default BearLoader