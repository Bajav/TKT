// ============================================================================
// FILE: db/atlasIndexes.js
// PURPOSE: Create indexes on MongoDB Atlas for fast searches
// ============================================================================

import { getAtlasDb,getModels } from "../../Config/DB/mongoAtlas.config";

/**
 * Create indexes for Airport collection
 * These indexes make airport searches 10-20x faster
 */
const createAtlasAirportIndexes = async () => {
  try {
    const atlasDb = getAtlasDb();
    const { IATACODES } = getModels(atlasDb);
    
    console.log('📋 Creating airport search indexes on Atlas...');
    
    // Drop existing indexes if they exist (clean slate)
    try {
      await IATACODES.collection.dropIndex('airport_search_index');
      console.log('🗑️  Dropped old airport_search_index');
    } catch (err) {
      // Index doesn't exist, that's fine
    }

    try {
      await IATACODES.collection.dropIndex('airport_text_index');
      console.log('🗑️  Dropped old airport_text_index');
    } catch (err) {
      // Index doesn't exist, that's fine
    }

    // Create compound index for regex searches
    // This speeds up queries like: AirportCode LIKE "LAX%"
    await IATACODES.collection.createIndex(
      {
        AirportCode: 1,    // 1 = ascending order
        City: 1,
        AirportName: 1,
        Country: 1
      },
      {
        name: 'airport_search_index',
        background: true  // Don't block other operations
      }
    );
    console.log('✅ Created airport_search_index (compound)');

    // Create text index for full-text search (optional but powerful)
    await IATACODES.collection.createIndex(
      {
        AirportName: 'text',
        City: 'text',
        Country: 'text'
      },
      {
        name: 'airport_text_index',
        weights: {
          City: 10,        // City matches are most important
          AirportName: 5,
          Country: 3
        },
        background: true
      }
    );
    console.log('✅ Created airport_text_index (full-text)');

    // List all indexes to verify
    const indexes = await IATACODES.collection.listIndexes().toArray();
    console.log('📊 Airport indexes:', indexes.map(i => i.name).join(', '));
    
    return { success: true, message: 'Airport indexes created' };
    
  } catch (err) {
    console.error('❌ Error creating airport indexes:', err);
    throw err;
  }
};

/**
 * Create indexes for Airline collection
 */
const createAtlasAirlineIndexes = async () => {
  try {
    const atlasDb = getAtlasDb();
    const { AIRLINES } = getModels(atlasDb);
    
    console.log('📋 Creating airline search indexes on Atlas...');
    
    // Drop old indexes
    try {
      await AIRLINES.collection.dropIndex('airline_search_index');
      console.log('🗑️  Dropped old airline_search_index');
    } catch (err) {
      // Doesn't exist
    }

    try {
      await AIRLINES.collection.dropIndex('airline_text_index');
      console.log('🗑️  Dropped old airline_text_index');
    } catch (err) {
      // Doesn't exist
    }

    // Compound index for code + name searches
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
    console.log('✅ Created airline_search_index (compound)');

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
    console.log('✅ Created airline_text_index (full-text)');

    const indexes = await AIRLINES.collection.listIndexes().toArray();
    console.log('📊 Airline indexes:', indexes.map(i => i.name).join(', '));
    
    return { success: true, message: 'Airline indexes created' };
    
  } catch (err) {
    console.error('❌ Error creating airline indexes:', err);
    throw err;
  }
};

/**
 * Create indexes for City collection
 */
const createAtlasCityIndexes = async () => {
  try {
    const atlasDb = getAtlasDb();
    const { IATACITIES } = getModels(atlasDb);
    
    console.log('📋 Creating city search indexes on Atlas...');
    
    // Drop old indexes
    try {
      await IATACITIES.collection.dropIndex('city_search_index');
      console.log('🗑️  Dropped old city_search_index');
    } catch (err) {
      // Doesn't exist
    }

    try {
      await IATACITIES.collection.dropIndex('city_text_index');
      console.log('🗑️  Dropped old city_text_index');
    } catch (err) {
      // Doesn't exist
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
    console.log('✅ Created city_search_index (compound)');

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
    console.log('✅ Created city_text_index (full-text)');

    const indexes = await IATACITIES.collection.listIndexes().toArray();
    console.log('📊 City indexes:', indexes.map(i => i.name).join(', '));
    
    return { success: true, message: 'City indexes created' };
    
  } catch (err) {
    console.error('❌ Error creating city indexes:', err);
    throw err;
  }
};

/**
 * Master function - creates ALL indexes at once
 */
export const createAllAtlasIndexes = async () => {
  console.log('\n🚀 Starting Atlas index creation process...\n');
  
  try {
    // Create all indexes in parallel (faster)
    const results = await Promise.all([
      createAtlasAirportIndexes(),
      createAtlasAirlineIndexes(),
      createAtlasCityIndexes()
    ]);
    
    console.log('\n✨ All Atlas indexes created successfully!\n');
    return { success: true, results };
    
  } catch (err) {
    console.error('\n💥 Atlas index creation failed:', err);
    throw err;
  }
};

/**
 * Check what indexes currently exist
 */
export const checkAtlasIndexes = async () => {
  try {
    const atlasDb = getAtlasDb();
    const { IATACODES, AIRLINES, IATACITIES } = getModels(atlasDb);
    
    console.log('\n🔍 Checking existing Atlas indexes...\n');
    
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

// Export individual functions too
export { 
  createAtlasAirportIndexes, 
  createAtlasAirlineIndexes, 
  createAtlasCityIndexes
};