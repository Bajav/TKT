import { getModels } from "../../Config/DB/mongoAtlas.config.js";
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

// Airport search indexes
export const createAtlasAirportIndexes = async () => {
  try {
    const atlasDb = getAtlasDb();
    const { IATACODES } = getModels(atlasDb);
    
    console.log('📋 Creating airport search indexes on Atlas...');
    
    // Drop existing indexes if they exist
    try {
      await IATACODES.collection.dropIndex('airport_search_index');
      await IATACODES.collection.dropIndex('airport_text_index');
    } catch (err) {
      // Indexes don't exist, that's fine
    }

    // Create compound index for efficient regex searches
    await IATACODES.collection.createIndex(
      {
        AirportCode: 1,
        City: 1,
        AirportName: 1,
        Country: 1
      },
      {
        name: 'airport_search_index',
        background: true // Don't block other operations
      }
    );

    // Create text index for full-text search
    await IATACODES.collection.createIndex(
      {
        AirportName: 'text',
        City: 'text',
        Country: 'text'
      },
      {
        name: 'airport_text_index',
        weights: {
          City: 10,
          AirportName: 5,
          Country: 3
        },
        background: true
      }
    );

    console.log('✅ Airport indexes created on Atlas');
    
    // Show all indexes
    const indexes = await IATACODES.collection.listIndexes().toArray();
    console.log('📊 Airport indexes:', indexes.map(i => i.name));
    
    return { success: true, message: 'Airport indexes created' };
    
  } catch (err) {
    console.error('❌ Error creating airport indexes:', err);
    throw err;
  }
};

// Airline search indexes
export const createAtlasAirlineIndexes = async () => {
  try {
    const atlasDb = getAtlasDb();
    const { AIRLINES } = getModels(atlasDb);
    
    console.log('📋 Creating airline search indexes on Atlas...');
    
    try {
      await AIRLINES.collection.dropIndex('airline_search_index');
      await AIRLINES.collection.dropIndex('airline_text_index');
    } catch (err) {
      // Indexes don't exist, that's fine
    }

    // Compound index
    await AIRLINES.collection.createIndex(
      {
        code: 1,
        name: 1
      },
      {
        name: 'airline_search_index',
        background: true
      }
    );

    // Text index for airline name
    await AIRLINES.collection.createIndex(
      {
        name: 'text'
      },
      {
        name: 'airline_text_index',
        background: true
      }
    );

    console.log('✅ Airline indexes created on Atlas');
    
    const indexes = await AIRLINES.collection.listIndexes().toArray();
    console.log('📊 Airline indexes:', indexes.map(i => i.name));
    
    return { success: true, message: 'Airline indexes created' };
    
  } catch (err) {
    console.error('❌ Error creating airline indexes:', err);
    throw err;
  }
};

// City search indexes
export const createAtlasCityIndexes = async () => {
  try {
    const atlasDb = getAtlasDb();
    const { IATACITIES } = getModels(atlasDb);
    
    console.log('📋 Creating city search indexes on Atlas...');
    
    try {
      await IATACITIES.collection.dropIndex('city_search_index');
      await IATACITIES.collection.dropIndex('city_text_index');
    } catch (err) {
      // Indexes don't exist, that's fine
    }

    // Compound index
    await IATACITIES.collection.createIndex(
      {
        iata: 1,
        name: 1,
        name_en: 1,
        country: 1
      },
      {
        name: 'city_search_index',
        background: true
      }
    );

    // Text index
    await IATACITIES.collection.createIndex(
      {
        name: 'text',
        name_en: 'text',
        country: 'text'
      },
      {
        name: 'city_text_index',
        weights: {
          name_en: 10,
          name: 8,
          country: 3
        },
        background: true
      }
    );

    console.log('✅ City indexes created on Atlas');
    
    const indexes = await IATACITIES.collection.listIndexes().toArray();
    console.log('📊 City indexes:', indexes.map(i => i.name));
    
    return { success: true, message: 'City indexes created' };
    
  } catch (err) {
    console.error('❌ Error creating city indexes:', err);
    throw err;
  }
};

// Master function to create all Atlas indexes
export  const createAllAtlasIndexes = async () => {
  console.log('🚀 Starting Atlas index creation process...\n');
  
  try {
    const results = await Promise.all([
      createAtlasAirportIndexes(),
      createAtlasAirlineIndexes(),
      createAtlasCityIndexes()
    ]);
    
    console.log('\n✨ All Atlas indexes created successfully!');
    return { success: true, results };
    
  } catch (err) {
    console.error('\n💥 Atlas index creation failed:', err);
    throw err;
  }
};

// Check existing indexes
export  const checkAtlasIndexes = async () => {
  try {
    const atlasDb = getAtlasDb();
    const { IATACODES, AIRLINES, IATACITIES } = getModels(atlasDb);
    
    console.log('🔍 Checking existing Atlas indexes...\n');
    
    const airportIndexes = await IATACODES.collection.listIndexes().toArray();
    console.log('✈️  Airport indexes:', airportIndexes.map(i => i.name));
    
    const airlineIndexes = await AIRLINES.collection.listIndexes().toArray();
    console.log('🛫 Airline indexes:', airlineIndexes.map(i => i.name));
    
    const cityIndexes = await IATACITIES.collection.listIndexes().toArray();
    console.log('🏙️  City indexes:', cityIndexes.map(i => i.name));
    
    return {
      airports: airportIndexes,
      airlines: airlineIndexes,
      cities: cityIndexes
    };
    
  } catch (err) {
    console.error('❌ Error checking indexes:', err);
    throw err;
  }
};