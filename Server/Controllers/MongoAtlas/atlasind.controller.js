// Controllers/atlasIndexController.js
import { 
  createAllAtlasIndexes, 
  checkAtlasIndexes,
  createAtlasAirportIndexes,
  createAtlasAirlineIndexes,
  createAtlasCityIndexes} from './atlasindex.controllers.js'
// Create all indexes
export const createIndexes = async (req, res) => {
  try {
    const result = await createAllAtlasIndexes();
    res.json({
      success: true,
      message: "All indexes created successfully",
      data: result
    });
  } catch (error) {
    console.error("Error creating indexes:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create indexes",
      error: error.message
    });
  }
};

// Check existing indexes
export const getIndexes = async (req, res) => {
  try {
    const indexes = await checkAtlasIndexes();
    res.json({
      success: true,
      data: indexes
    });
  } catch (error) {
    console.error("Error checking indexes:", error);
    res.status(500).json({
      success: false,
      message: "Failed to check indexes",
      error: error.message
    });
  }
};

// Create specific collection indexes
export const createAirportIndexes = async (req, res) => {
  try {
    const result = await createAtlasAirportIndexes();
    res.json({
      success: true,
      message: "Airport indexes created",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create airport indexes",
      error: error.message
    });
  }
};

export const createAirlineIndexes = async (req, res) => {
  try {
    const result = await createAtlasAirlineIndexes();
    res.json({
      success: true,
      message: "Airline indexes created",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create airline indexes",
      error: error.message
    });
  }
};

export const createCityIndexes = async (req, res) => {
  try {
    const result = await createAtlasCityIndexes();
    res.json({
      success: true,
      message: "City indexes created",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create city indexes",
      error: error.message
    });
  }
};