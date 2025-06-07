import "./ticket.scss";

function AirlineInfo(props) {
  return (
    <div className="flights-header">
      <div className="airLineIcone">
        <div className="icon">
          <img src={props.logo} alt="Airline Logo" className="airline-logo" />
        </div>
        <h4>{props.carrierCode}</h4>
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
