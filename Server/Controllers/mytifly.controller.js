import { createMyFareBoxSession } from "../Config/mytifly/mytifly.config.js";
import { parseStringPromise } from "xml2js";

const startSession = async (req, res) => {
  try {
    const xmlResponse = await createMyFareBoxSession();
    //  const parsed = await parseStringPromise(xmlResponse.data);
    console.log(xmlResponse.data.Data.SessionId);
    res.send("session id created");
  } catch (err) {
   console.error("Failed to create MyFareBox session:", err.message);
    res.status(500).json({ error: "Session creation failed" });
  }
};

export default startSession;
