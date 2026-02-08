import { IATACODES,IATACITIES,AIRLINES } from "../../Models/Database/atlast.iata.models.js";
import airports from '../../DATA/airportCities.json'
import airLines from '../../DATA/airlines.json'
import iataCities from '../../JSONs/iatacityCodes.json'
import { getAtlasDb } from "../../Config/DB/mongoAtlas.config.js";

const atlasDb = getAtlasDb();
export const checkDbStatus = (req, res) => {
  const state = atlasDb.readyState;
  res.json({ dbState: state,message:"mongo atlas db state is active" });
};


export const importIATACities = async (req, res) => {
  try {
    // Clear existing data (optional - remove if you want to keep existing records)
    await IATACITIES.deleteMany({});
    
    // Bulk insert with ordered: false for better error handling
    const result = await IATACITIES.insertMany(iataCities, { 
      ordered: false,
      lean: true 
    });
    
    res.status(200).json({
      success: true,
      message: `Successfully imported ${result.length} cities`,
      count: result.length
    });
  } catch (error) {
    console.error('Error importing IATA cities:', error);
    res.status(500).json({
      success: false,
      message: 'Error importing cities',
      error: error.message
    });
  }
};

export const importAirports = async (req, res) => {
  try {
    await IATACODES.deleteMany({});
    
    const result = await IATACODES.insertMany(airports, { 
      ordered: false,
      lean: true 
    });
    
    res.status(200).json({
      success: true,
      message: `Successfully imported ${result.length} airports`,
      count: result.length
    });
  } catch (error) {
    console.error('Error importing airports:', error);
    res.status(500).json({
      success: false,
      message: 'Error importing airports',
      error: error.message
    });
  }
};

export const importAirlines = async (req, res) => {
  try {
    await AIRLINES.deleteMany({});
    
    const result = await AIRLINES.insertMany(airLines, { 
      ordered: false,
      lean: true 
    });
    
    res.status(200).json({
      success: true,
      message: `Successfully imported ${result.length} airlines`,
      count: result.length
    });
  } catch (error) {
    console.error('Error importing airlines:', error);
    res.status(500).json({
      success: false,
      message: 'Error importing airlines',
      error: error.message
    });
  }
};

// Import all data at once
export const importAllData = async (req, res) => {
  try {
    const results = await Promise.allSettled([
      IATACITIES.insertMany(iataCities, { ordered: false }),
      IATACODES.insertMany(airports, { ordered: false }),
      AIRLINES.insertMany(airLines, { ordered: false })
    ]);

    const summary = {
      cities: results[0].status === 'fulfilled' ? results[0].value.length : 0,
      airports: results[1].status === 'fulfilled' ? results[1].value.length : 0,
      airlines: results[2].status === 'fulfilled' ? results[2].value.length : 0,
      errors: results.filter(r => r.status === 'rejected').map(r => r.reason.message)
    };

    res.status(200).json({
      success: true,
      message: 'Bulk import completed',
      summary
    });
  } catch (error) {
    console.error('Error in bulk import:', error);
    res.status(500).json({
      success: false,
      message: 'Error in bulk import',
      error: error.message
    });
  }
};