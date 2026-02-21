import airports from "../../DATA/airportCities.json" with { type: "json" };
import airLines from "../../DATA/airlines.json" with { type: "json" };
import iataCities from "../../JSONs/iatacityCodes.json" with { type: "json" };
// import { getAtlasDb } from "../../Config/DB/mongoAtlas.config.js" ;
import {getAtlasDb,getModels} from "../../Config/DB/mongoAtlas.config.js"

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
//INDEXS
// Search airports from Atlas
export const searchAtlasAirports = async (req, res) => {
  const startTime = Date.now();
  
  try {
    const atlasDb = getAtlasDb();
    const { IATACODES } = getModels(atlasDb);
    
    const { query, limit = 50 } = req.query;

    if (!query || query.length < 2) {
      return res.json({ suggestions: [], source: 'atlas' });
    }

    let searchQuery;
    
    if (query.length === 3 && /^[A-Z]{3}$/i.test(query)) {
      searchQuery = {
        AirportCode: { $regex: `^${query}`, $options: 'i' }
      };
    } else {
      searchQuery = {
        $or: [
          { AirportCode: { $regex: `^${query}`, $options: 'i' } },
          { City: { $regex: `^${query}`, $options: 'i' } },
          { AirportName: { $regex: query, $options: 'i' } },
          { Country: { $regex: query, $options: 'i' } }
        ]
      };
    }

    const suggestions = await IATACODES.find(searchQuery)
      .select('AirportCode AirportName City Country')
      .limit(parseInt(limit))
      .lean();

    const duration = Date.now() - startTime;
    console.log(`🌐 Atlas search "${query}" took ${duration}ms, found ${suggestions.length} results`);

    res.json({ 
      suggestions,
      count: suggestions.length,
      source: 'atlas',
      duration 
    });
    
  } catch (err) {
    console.error("❌ Error searching Atlas airports:", err);
    res.status(500).json({ 
      error: "Search failed",
      suggestions: [],
      source: 'atlas'
    });
  }
};

// Search airlines from Atlas
export const searchAtlasAirlines = async (req, res) => {
  try {
    const atlasDb = getAtlasDb();
    const { AIRLINES } = getModels(atlasDb);
    
    const { query, limit = 50 } = req.query;

    if (!query || query.length < 2) {
      return res.json({ suggestions: [], source: 'atlas' });
    }

    const suggestions = await AIRLINES.find({
      $or: [
        { code: { $regex: `^${query}`, $options: 'i' } },
        { name: { $regex: query, $options: 'i' } }
      ]
    })
    .select('name code logo')
    .limit(parseInt(limit))
    .lean();

    res.json({ 
      suggestions,
      count: suggestions.length,
      source: 'atlas'
    });
    
  } catch (err) {
    console.error("❌ Error searching Atlas airlines:", err);
    res.status(500).json({ 
      error: "Search failed",
      suggestions: [],
      source: 'atlas'
    });
  }
};

// Search cities from Atlas
export const searchAtlasCities = async (req, res) => {
  try {
    const atlasDb = getAtlasDb();
    const { IATACITIES } = getModels(atlasDb);
    
    const { query, limit = 50 } = req.query;

    if (!query || query.length < 2) {
      return res.json({ suggestions: [], source: 'atlas' });
    }

    const suggestions = await IATACITIES.find({
      $or: [
        { name: { $regex: `^${query}`, $options: 'i' } },
        { name_en: { $regex: `^${query}`, $options: 'i' } },
        { iata: { $regex: `^${query}`, $options: 'i' } },
        { country: { $regex: query, $options: 'i' } }
      ]
    })
    .select('name name_en iata country')
    .limit(parseInt(limit))
    .lean();

    res.json({ 
      suggestions,
      count: suggestions.length,
      source: 'atlas'
    });
    
  } catch (err) {
    console.error("❌ Error searching Atlas cities:", err);
    res.status(500).json({ 
      error: "Search failed",
      suggestions: [],
      source: 'atlas'
    });
  }
};