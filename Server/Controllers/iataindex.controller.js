// db/createIndexes.js
import { IATACODE, Airline, IATACITIES } from "../Models/Database/iataModel.js";

const createSearchIndexes = async () => {
  try {
    console.log('🔄 Creating search indexes...');
    
    // ========== IATA CODES INDEXES ==========
    console.log('Creating IATACODE indexes...');
    
    // Drop existing indexes if any (optional - for clean slate)
    try {
      await IATACODE.collection.dropIndexes();
    } catch (err) {
      console.log('No existing IATACODE indexes to drop');
    }
    
    // Create optimized search index for airports
    await IATACODE.collection.createIndex(
      {
        AirportCode: 1,
        City: 1,
        AirportName: 1,
        Country: 1
      },
      {
        name: 'airport_search_compound'
      }
    );
    
    console.log('✅ IATACODE indexes created');

    // ========== AIRLINE INDEXES ==========
    console.log('Creating Airline indexes...');
    
    try {
      await Airline.collection.dropIndexes();
    } catch (err) {
      console.log('No existing Airline indexes to drop');
    }
    
    await Airline.collection.createIndex(
      {
        name: 1,
        code: 1
      },
      {
        name: 'airline_search_compound'
      }
    );
    
    console.log('✅ Airline indexes created');

    // ========== CITIES INDEXES ==========
    console.log('Creating IATACITIES indexes...');
    
    try {
      await IATACITIES.collection.dropIndexes();
    } catch (err) {
      console.log('No existing IATACITIES indexes to drop');
    }
    
    // Add appropriate indexes for cities (adjust fields as needed)
    await IATACITIES.collection.createIndex(
      {
        city: 1,
        country: 1
      },
      {
        name: 'city_search_compound'
      }
    );
    
    console.log('✅ IATACITIES indexes created');
    console.log('🎉 All search indexes created successfully!');
    
    return { success: true, message: 'All indexes created' };
  } catch (err) {
    console.error('❌ Error creating indexes:', err);
    return { success: false, error: err.message };
  }
};

// Function to check existing indexes
const listIndexes = async () => {
  try {
    console.log('\n📋 Current Indexes:');
    
    const iataIndexes = await IATACODE.collection.getIndexes();
    console.log('\nIATACODE indexes:', Object.keys(iataIndexes));
    
    const airlineIndexes = await Airline.collection.getIndexes();
    console.log('Airline indexes:', Object.keys(airlineIndexes));
    
    const cityIndexes = await IATACITIES.collection.getIndexes();
    console.log('IATACITIES indexes:', Object.keys(cityIndexes));
    
  } catch (err) {
    console.error('Error listing indexes:', err);
  }
};

export { createSearchIndexes, listIndexes };