// db/atlasIndexes.js
import {getAtlasDb,getModels} from "../../Config/DB/mongoAtlas.config.js"
// Airport search indexes
const createAtlasAirportIndexes = async () => {
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
const createAtlasAirlineIndexes = async () => {
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
const createAtlasCityIndexes = async () => {
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
const createAllAtlasIndexes = async () => {
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
const checkAtlasIndexes = async () => {
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

export { 
  createAtlasAirportIndexes, 
  createAtlasAirlineIndexes, 
  createAtlasCityIndexes,
  createAllAtlasIndexes,
  checkAtlasIndexes
};