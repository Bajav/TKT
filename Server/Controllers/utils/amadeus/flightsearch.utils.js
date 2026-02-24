// ============================================================================
// FILE: utils/searchUtils.js
// PURPOSE: Reusable search functions that work with ANY Mongoose model
// ============================================================================

/**
 * Search airports by query string
 * Works with both local MongoDB and Atlas
 * 
 * @param {Model} AirportModel - Mongoose model for airports
 * @param {string} query - Search term from user
 * @param {number} limit - Max results to return
 * @returns {Promise<Array>} - Array of matching airports
 */
export const searchAirports = async (AirportModel, query, limit = 50) => {
  const startTime = Date.now();

  try {
    if (!query || query.length < 2) {
      return {
        suggestions: [],
        count: 0,
        duration: 0
      };
    }

    // Optimize search based on query type
    let searchQuery;

    // If user types exactly 3 letters (likely airport code like "LAX")
    if (query.length === 3 && /^[A-Z]{3}$/i.test(query)) {
      searchQuery = {
        AirportCode: { $regex: `^${query}`, $options: 'i' }
      };
    } else {
      // General search across all fields
      searchQuery = {
        $or: [
          { AirportCode: { $regex: `^${query}`, $options: 'i' } },
          { City: { $regex: `^${query}`, $options: 'i' } },
          { AirportName: { $regex: query, $options: 'i' } },
          { Country: { $regex: query, $options: 'i' } }
        ]
      };
    }

    const suggestions = await AirportModel.find(searchQuery)
      .select('AirportCode AirportName City Country')
      .limit(parseInt(limit))
      .lean(); // Returns plain JS objects (faster)

    const duration = Date.now() - startTime;

    return {
      suggestions,
      count: suggestions.length,
      duration
    };

  } catch (error) {
    console.error('❌ Error in searchAirports util:', error);
    throw error;
  }
};

/**
 * Search airlines by query string
 * 
 * @param {Model} AirlineModel - Mongoose model for airlines
 * @param {string} query - Search term from user
 * @param {number} limit - Max results to return
 * @returns {Promise<Array>} - Array of matching airlines
 */
export const searchAirlines = async (AirlineModel, query, limit = 50) => {
  try {
    if (!query || query.length < 2) {
      return {
        suggestions: [],
        count: 0
      };
    }

    const suggestions = await AirlineModel.find({
      $or: [
        { code: { $regex: `^${query}`, $options: 'i' } },
        { name: { $regex: query, $options: 'i' } }
      ]
    })
    .select('name code logo is_lowcost')
    .limit(parseInt(limit))
    .lean();

    return {
      suggestions,
      count: suggestions.length
    };

  } catch (error) {
    console.error('❌ Error in searchAirlines util:', error);
    throw error;
  }
};

/**
 * Search cities by query string
 * 
 * @param {Model} CityModel - Mongoose model for cities
 * @param {string} query - Search term from user
 * @param {number} limit - Max results to return
 * @returns {Promise<Array>} - Array of matching cities
 */
export const searchCities = async (CityModel, query, limit = 50) => {
  try {
    if (!query || query.length < 2) {
      return {
        suggestions: [],
        count: 0
      };
    }

    const suggestions = await CityModel.find({
      $or: [
        { name: { $regex: `^${query}`, $options: 'i' } },
        { name_en: { $regex: `^${query}`, $options: 'i' } },
        { iata: { $regex: `^${query}`, $options: 'i' } },
        { country: { $regex: query, $options: 'i' } }
      ]
    })
    .select('name name_en iata country coordinates time_zone')
    .limit(parseInt(limit))
    .lean();

    return {
      suggestions,
      count: suggestions.length
    };

  } catch (error) {
    console.error('❌ Error in searchCities util:', error);
    throw error;
  }
};