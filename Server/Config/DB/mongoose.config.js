// db/connections.js (or wherever your connections are)
import mongoose from "mongoose";
import { createSearchIndexes, listIndexes } from "./createIndexes.js";

const iataConnection = mongoose.createConnection("mongodb://127.0.0.1:27017/IATACODESDB");
iataConnection.on('connected', () => {
  console.log('✅ Connected to IATACODESDB');
});
iataConnection.on('error', (err) => {
  console.error('❌ IATACODESDB connection error:', err);
});

const airlineConnection = mongoose.createConnection("mongodb://127.0.0.1:27017/AIRLINESDB");
airlineConnection.on('connected', () => {
  console.log('✅ Connected to AIRLINESDB');
});
airlineConnection.on('error', (err) => {
  console.error('❌ AIRLINESDB connection error:', err);
});

const cityCodeConnection = mongoose.createConnection("mongodb://127.0.0.1:27017/CITIESDB");
cityCodeConnection.on('connected', () => {
  console.log('✅ Connected to CITIES DB');
});
cityCodeConnection.on('error', (err) => {
  console.error('❌ CITIESDB connection error:', err);
});

// Wait for all connections, then create indexes
const initializeDatabase = async () => {
  try {
    // Wait for all connections to be ready
    await Promise.all([
      iataConnection.asPromise(),
      airlineConnection.asPromise(),
      cityCodeConnection.asPromise()
    ]);
    
    console.log('\n🔧 All database connections established');
    
    // Create indexes
    await createSearchIndexes();
    
    // Optional: List indexes to verify
    // await listIndexes();
    
  } catch (err) {
    console.error('❌ Database initialization failed:', err);
    process.exit(1);
  }
};

export { 
  iataConnection, 
  airlineConnection, 
  cityCodeConnection,
  initializeDatabase 
};