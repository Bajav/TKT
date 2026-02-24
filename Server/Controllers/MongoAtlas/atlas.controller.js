import airports from "../../DATA/airportCities.json" with { type: "json" };
import airLines from "../../DATA/airlines.json" with { type: "json" };
import iataCities from "../../JSONs/iatacityCodes.json" with { type: "json" };
// import { getAtlasDb } from "../../Config/DB/mongoAtlas.config.js" ;
import {getAtlasDb,getModels} from "../../Config/DB/mongoAtlas.config.js"
import { searchAirlines,searchAirports,searchCities } from "../utils/amadeus/flightsearch.utils.js";

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
//search for data through indexes
export const searchAtlasAirports = async (req, res) => {
  try {
    const atlasDb = getAtlasDb();
    const { IATACODES } = getModels(atlasDb);
    
    const { query, limit = 50 } = req.query;

    // Use the reusable util
    const result = await searchAirports(IATACODES, query, limit);

    console.log(`🌐 Atlas airport search: "${query}" took ${result.duration}ms, found ${result.count} results`);

    res.json({ 
      ...result,
      source: 'atlas'
    });
    
  } catch (err) {
    console.error("❌ Error in searchAtlasAirports:", err);
    res.status(500).json({ 
      error: "Search failed",
      message: err.message,
      suggestions: [],
      source: 'atlas'
    });
  }
};


export const searchAtlasAirlines = async (req, res) => {
  try {
    const atlasDb = getAtlasDb();
    const { AIRLINES } = getModels(atlasDb);
    
    const { query, limit = 50 } = req.query;

    // Use the reusable util
    const result = await searchAirlines(AIRLINES, query, limit);

    res.json({ 
      ...result,
      source: 'atlas'
    });
    
  } catch (err) {
    console.error("❌ Error in searchAtlasAirlines:", err);
    res.status(500).json({ 
      error: "Search failed",
      message: err.message,
      suggestions: [],
      source: 'atlas'
    });
  }
};

export const searchAtlasCities = async (req, res) => {
  try {
    const atlasDb = getAtlasDb();
    const { IATACITIES } = getModels(atlasDb);
    
    const { query, limit = 50 } = req.query;

    // Use the reusable util
    const result = await searchCities(IATACITIES, query, limit);

    res.json({ 
      ...result,
      source: 'atlas'
    });
    
  } catch (err) {
    console.error("❌ Error in searchAtlasCities:", err);
    res.status(500).json({ 
      error: "Search failed",
      message: err.message,
      suggestions: [],
      source: 'atlas'
    });
  }
};
