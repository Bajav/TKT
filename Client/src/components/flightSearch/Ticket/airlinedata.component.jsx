import "./ticket.scss";
import { motion } from "motion/react";

function AirlineInfo(props) {
  return (
    <div className="flights-header">
      <div className="airLineIcone">
        <div className="icon">
          <img src={props.logo} alt="Airline Logo" className="airline-logo" />
        </div>
        <div className="airlines-header">
        <h4>{props.carrierCode}</h4>
        {!props.multicityAirline?null:<h4>{props.multicityCode}</h4>}
        </div>
      </div>
      <h3>{props.airlineName}</h3>
    </div>
  );
}

export default AirlineInfo;
{/* <AirlineInfo
  logo={}
  carrierCode={}
  airlineName={
    
  }
/> */}

{/* <div className="flights-header">
  <div className="airLineIcone">
    <div className="icon">
      <img
        src={airlinesLookUp[segments[0]?.carrierCode]?.logo || ""}
        alt="Airline Logo"
        className="airline-logo"
      />
    </div>
    <h4>{airlinesLookUp[segments[0]?.carrierCode]?.name || ""}</h4>
  </div>
  <h4>{segments[0]?.aircraft?.code || ""}</h4>
</div>; */}
