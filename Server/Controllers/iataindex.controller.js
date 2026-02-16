// Add to your model file or create a migration
import { IATACODE, Airline } from "./Models/Database/iataModel.js";

// Run this once to create indexes
export const createIndexes = async () => {
  try {
    await IATACODE.createIndex({ 
      AirportCode: 1, 
      AirportName: 'text', 
      City: 'text', 
      Country: 'text' 
    });
    
    await Airline.createIndex({ 
      name: 'text', 
      code: 1 
    });
    
    console.log('Indexes created successfully');
  } catch (err) {
    console.error('Error creating indexes:', err);
  }
};

// Call once or add to your server startup
// createIndexes();