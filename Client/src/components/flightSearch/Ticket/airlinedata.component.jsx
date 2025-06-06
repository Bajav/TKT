import "./ticket.scss";

import React from "react";

function AirlineInfo() {
  return (
    <div className="flights-header">
      <div className="airLineIcone">
        <div className="icon">
          <img
            src={airlinesLookUp[segmentOne[0].carrierCode]?.logo || ""}
            alt="Airline Logo"
            className="airline-logo"
          />
        </div>
        <h4>{segmentOne[0].carrierCode || ""}</h4>
      </div>
      <h3>
        {fareBrandMap[
          travelerPricings[0].fareDetailsBySegment[0].brandedFare
        ] || "economy premium"}
      </h3>
    </div>
  );
}

export default AirlineInfo;

{/* <div className="flights-header">
  <div className="airLineIcone">
    <div className="icon">
      <img
        src={airlinesLookUp[segmentOne[0].carrierCode]?.logo || ""}
        alt="Airline Logo"
        className="airline-logo"
      />
    </div>
    <h4>{segmentOne[0].carrierCode || ""}</h4>
  </div>
  <h3>
    {fareBrandMap[travelerPricings[0].fareDetailsBySegment[0].brandedFare] ||
      "economy premium"}
  </h3>
</div>; */}
