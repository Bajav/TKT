import { getModels } from "../../Models/Database/atlast.iata.models.js";
import airports from "../../DATA/airportCities.json" with { type: "json" };
import airLines from "../../DATA/airlines.json" with { type: "json" };
import iataCities from "../../JSONs/iatacityCodes.json" with { type: "json" };
import { getAtlasDb } from "../../Config/DB/mongoAtlas.config.js";

export const checkDbStatus = (req, res) => {
  const state = atlasDb.readyState;
  res.json({ dbState: state, message: "mongo atlas db state is active" });
};

export const exportCities = async (req, res) => {
  const atlasDb = getAtlasDb();
  const { IATACITIES } = getModels(atlasDb);
  try {
    // Clear existing data (optional - remove if you want to keep existing records)
    await IATACITIES.deleteMany({});

    // Bulk insert with ordered: false for better error handling
    const result = await IATACITIES.insertMany(iataCities, {
      ordered: false,
      lean: true,
    });

    res.status(200).json({
      success: true,
      message: `Successfully imported ${result.length} cities`,
      count: result.length,
    });
  } catch (error) {
    console.error("Error importing IATA cities:", error);
    res.status(500).json({
      success: false,
      message: "Error importing cities",
      error: error.message,
    });
  }
};

export const exportAirports = async (req, res) => {
  try {
    const atlasDb = getAtlasDb();
    const { IATACODES } = getModels(atlasDb);
    await IATACODES.deleteMany({});

    const result = await IATACODES.insertMany(airports, {
      ordered: false,
      lean: true,
    });

    res.status(200).json({
      success: true,
      message: `Successfully imported ${result.length} airports`,
      count: result.length,
    });
  } catch (error) {
    console.error("Error importing airports:", error);
    res.status(500).json({
      success: false,
      message: "Error importing airports",
      error: error.message,
    });
  }
};

export const exportAirlines = async (req, res) => {
  try {
    const atlasDb = getAtlasDb();
    const { AIRLINES } = getModels(atlasDb);
    await AIRLINES.deleteMany({});

    const result = await AIRLINES.insertMany(airLines, {
      ordered: false,
      lean: true,
    });

    res.status(200).json({
      success: true,
      message: `Successfully imported ${result.length} airlines`,
      count: result.length,
    });
  } catch (error) {
    console.error("Error importing airlines:", error);
    res.status(500).json({
      success: false,
      message: "Error importing airlines",
      error: error.message,
    });
  }
};

// Import all data at once
export const exportAll = async (req, res) => {
  try {
    const atlasDb = getAtlasDb();
    const { AIRLINES, IATACITIES, IATACODES } = getModels(atlasDb);
    const results = await Promise.allSettled([
      IATACITIES.insertMany(iataCities, { ordered: false }),
      IATACODES.insertMany(airports, { ordered: false }),
      AIRLINES.insertMany(airLines, { ordered: false }),
    ]);

    const summary = {
      cities: results[0].status === "fulfilled" ? results[0].value.length : 0,
      airports: results[1].status === "fulfilled" ? results[1].value.length : 0,
      airlines: results[2].status === "fulfilled" ? results[2].value.length : 0,
      errors: results
        .filter((r) => r.status === "rejected")
        .map((r) => r.reason.message),
    };

    res.status(200).json({
      success: true,
      message: "Bulk import completed",
      summary,
    });
  } catch (error) {
    console.error("Error in bulk import:", error);
    res.status(500).json({
      success: false,
      message: "Error in bulk import",
      error: error.message,
    });
  }
};
// import data from db
export const importAirlines = async (req, res) => {
    try {
      const atlasDb = getAtlasDb();
      const { AIRLINES} = getModels(atlasDb);
    const airlines = await AIRLINES.find();
    res.json({
      success: true,
      data: airlines,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "failed to fetch airlines",
      data: error,
    });
  }
};
export const importCities = async (req, res) => {
    try {
      const atlasDb = getAtlasDb();
      const { IATACITIES} = getModels(atlasDb);
    const cities = await IATACITIES.find();
    res.json({
      success: true,
      data: cities,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "failed to fetch cities",
      data: error,
    });
  }
};
export const importAirports = async (req, res) => {
    try {
      const atlasDb = getAtlasDb();
      const { IATACODES} = getModels(atlasDb);
    const airports = await IATACODES.find();
    res.json({
      success: true,
      data: airports,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "failed to fetch airports",
      data: error,
    });
  }
};
// const fetchIataCodes = async (req, res) => {
//   try {
//     const airline = new Airline();
//     const iataCodes = await IATACODE.find();
//     // console.log(iataCodes);
//     return res.json(iataCodes);
//     // return iataCodes;
//   } catch (err) {
//     console.error("error fetching codes:", err);
//     throw err;
//   }
// };

// const fetchAirlines = async (req, res) => {
//   try {
//     const airlines = await Airline.find();
//     return res.json(airlines); // Add res.json!
//   } catch (err) {
//     console.error("error fetching airlines:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
