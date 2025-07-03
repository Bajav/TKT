import axios from "axios";
import { createMyFareBoxSession } from "../Config/mytifly/mytifly.config.js";
// import { parseStringPromise } from "xml2js";


let fareSourceCode ;
let conversationId;
let sessionID;

const searchFlight = async (req, res) => {
  try {
    const sessionRes = await createMyFareBoxSession();
    const sessionId = sessionRes.data.Data.SessionId;
    sessionID=sessionId;
    console.log("Session ID type:", typeof sessionId);
    console.log(sessionId);
    if (!sessionId) {
      return res.status(401).json({ error: "Failed to get session ID" });
    }

    const flightSearchPayload = {
      OriginDestinationInformations: [
        {
          DepartureDateTime: "2025-09-11T00:00:00",
          OriginLocationCode: "EBB",
          DestinationLocationCode: "LHR",
        },
        {
          DepartureDateTime: "2025-09-16T00:00:00",
          OriginLocationCode: "LHR",
          DestinationLocationCode: "EBB",
        },
      ],
      TravelPreferences: {
        MaxStopsQuantity: "1",
        CabinPreference: "Y",
        Preferences: {
          CabinClassPreference: {
            CabinType: "Y",
            PreferenceLevel: "Preferred",
          },
        },
        AirTripType: "Return",
      },
      PricingSourceType: "All",
      IsRefundable: false,
      PassengerTypeQuantities: [
        {
          Code: "ADT",
          Quantity: 1,
        },
        {
          Code: "CHD",
          Quantity: 1,
        },
        {
          Code: "INF",
          Quantity: 1,
        },
      ],
      RequestOptions: "Fifty",
      Target: "Test",
      ConversationId: "testing",
    };

    const response = await axios.post(
      "https://restapidemo.myfarebox.com/api/v1/Search/Flight",
      flightSearchPayload,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${sessionId}`,
        },
      }
    );

    // console.log(
    //   "Flight Search Response:",
    //   response.data.Data.PricedItineraries.length
    // );
    // fareSourceCode=response.data.Data.PricedItineraries[0].AirItineraryPricingInfo.FareSourceCode;
    // conversationId = response.data.Data.ConversationId;
    // console.log("fareSourceCode ::: " ,fareSourceCode);
    // console.log("conversationId ::: " ,conversationId);
    res.status(200).json(response.data);
  } catch (err) {
    console.error("Flight search error:", err);
    res.status(500).json({ error: err.message });
  }
};

const revalidateFlight = async (req, res) => {
  try {
    const response = await axios.post(
      "https://restapidemo.myfarebox.com/api/v1/Revalidate/Flight",
      {
        FareSourceCode:fareSourceCode,
        Target: "Test",
        ConversationId: conversationId,
      },
           {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${sessionID}`,
        },
      }
    );
    console.log("revalidate :: ", response.data);
    res.json(response.data);
  } catch (err) {
    console.error("Flight search error:", err);
    res.status(500).json({ error: err });
  }
};

export { searchFlight,revalidateFlight };
