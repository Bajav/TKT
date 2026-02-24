import mongoose from "mongoose";
import { iataSchema, airlineSchema, iataCitySchema } from "../../Models/Database/atlast.iata.models.js";

const encodedPassword = encodeURIComponent(process.env.ENCODED_PASSWORD);
const DB_URI = `mongodb+srv://tkt_development:${encodedPassword}@tktdb.arfqreg.mongodb.net/?retryWrites=true&w=majority&appName=TKTDB`;

let atlasDb;
let models = {};

export const connectAtlasDb = async () => {
  if (atlasDb) return atlasDb;
  
  atlasDb = mongoose.createConnection(DB_URI, {
    ssl: true,
    tlsAllowInvalidCertificates: false,
  });

  atlasDb.on("connected", () => {
    console.log("✅ Connected to TKTDB (Atlas)");
  });

  atlasDb.on("error", (err) => {
    console.error("❌ Atlas connection error:", err);
  });

  atlasDb.on("disconnected", () => {
    console.log("⚠️ Disconnected from TKTDB");
  });

  // Wait for connection
  await atlasDb.asPromise();
  
  // NOW create indexes AFTER connection is ready
  try {
    console.log('🔧 Creating search indexes...');
    await createIndexesNow();
    console.log('✅ Indexes ready!');
  } catch (err) {
    console.error('⚠️ Index creation failed:', err.message);
    console.error('Full error:', err);
  }
  
  return atlasDb;
};

export const getAtlasDb = () => {
  if (!atlasDb) throw new Error("Atlas DB not connected. Call connectAtlasDb() first.");
  return atlasDb;
};

export const getModels = (connection) => {
  if (!models.IATACODES) {
    models.IATACODES = connection.model("IATACODE", iataSchema);
    models.AIRLINES = connection.model("AIRLINE", airlineSchema);
    models.IATACITIES = connection.model("City", iataCitySchema);
  }
  return models;
};

// ============================================================================
// CREATE INDEXES AUTOMATICALLY
// ============================================================================

const createIndexesNow = async () => {
  try {
    console.log('📋 Getting models...');
    const { IATACODES, AIRLINES, IATACITIES } = getModels(atlasDb);

    console.log('📋 Creating airport indexes...');
    // Airport indexes
    await IATACODES.collection.createIndex(
      { AirportCode: 1, City: 1, AirportName: 1, Country: 1 },
      { name: 'airport_search_index', background: true }
    );

    await IATACODES.collection.createIndex(
      { AirportName: 'text', City: 'text', Country: 'text' },
      { 
        name: 'airport_text_index',
        weights: { City: 10, AirportName: 5, Country: 3 },
        background: true 
      }
    );
    console.log('✅ Airport indexes created');

    console.log('📋 Creating airline indexes...');
    // Airline indexes
    await AIRLINES.collection.createIndex(
      { code: 1, name: 1 },
      { name: 'airline_search_index', background: true }
    );

    await AIRLINES.collection.createIndex(
      { name: 'text' },
      { name: 'airline_text_index', background: true }
    );
    console.log('✅ Airline indexes created');

    console.log('📋 Creating city indexes...');
    // City indexes
    await IATACITIES.collection.createIndex(
      { iata: 1, name: 1, name_en: 1, country: 1 },
      { name: 'city_search_index', background: true }
    );

    await IATACITIES.collection.createIndex(
      { name: 'text', name_en: 'text', country: 'text' },
      { 
        name: 'city_text_index',
        weights: { name_en: 10, name: 8, country: 3 },
        background: true 
      }
    );
    console.log('✅ City indexes created');

    console.log('📊 All atlas search indexes created successfully');
    
  } catch (err) {
    // If indexes already exist, MongoDB will throw an error - that's okay
    if (err.code === 85 || err.codeName === 'IndexOptionsConflict' || err.message.includes('already exists')) {
      console.log('📊 Indexes already exist - skipping creation');
    } else {
      console.error('❌ Unexpected error creating indexes:', err);
      throw err;
    }
  }
};