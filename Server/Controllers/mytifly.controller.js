import axios from "axios";
import { createMyFareBoxSession } from "../Config/mytifly/mytifly.config.js";
import { parseStringPromise } from "xml2js";

const startSession = async (req, res) => {
  try {
    // A2CB667D-8FAC-4581-A666-6E2AF54BEDC9-6648
    const xmlResponse = await createMyFareBoxSession();
    //  const parsed = await parseStringPromise(xmlResponse.data);
    console.log(xmlResponse.data.Data.SessionId);
    res.send("session id created");
  } catch (err) {
    console.error("Failed to create MyFareBox session:", err.message);
    res.status(500).json({ error: "Session creation failed" });
  }
};

const searchFlight = async (req, res) => {
  try {
    const sessionRes = await createMyFareBoxSession();
    const sessionId = sessionRes.data.Data.SessionId;
    console.log("Session ID type:", typeof sessionId);
    console.log(sessionId);
    if (!sessionId) {
      return res.status(401).json({ error: "Failed to get session ID" });
    }

    const flightSearchPayload = {
      OriginDestinationInformations: [
        {
          DepartureDateTime: "2025-09-11T00:00:00",
          OriginLocationCode: "LOS",
          DestinationLocationCode: "LHR",
        },
        {
          DepartureDateTime: "2025-09-16T00:00:00",
          OriginLocationCode: "LHR",
          DestinationLocationCode: "LOS",
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

    console.log("Flight Search Response:", response.data.Data.PricedItineraries.length);
    res.status(200).json(response.data);
  } catch (err) {
    console.error("Flight search error:", err);
    res.status(500).json({ error: err.message });
  }
};

export { startSession, searchFlight };
