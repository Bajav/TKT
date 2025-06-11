import "./ticket.scss";
import { motion } from "motion/react";

function AirlineInfo(props) {
  return (
    <div className="flights-header">
      <motion.div initial={{ opacity:0 ,scale:0 }} animate={{opacity:1,scale:1}} transition={{ ease: "easeIn", duration: 2 }} className="airLineIcone">
        <div className="icon">
          <img src={props.logo} alt="Airline Logo" className="airline-logo" />
        </div>
        <h4>{props.carrierCode}</h4>
      </motion.div>
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
