import { getPlaceReviews } from "../../Services/OpenTripMap/opentripmap.service.js";

const fetchPlaceReviews = async (req, res) => {
  try {
    let { lat, lon } = req.body;
    
    // Convert to numbers
    lat = parseFloat(lat);
    lon = parseFloat(lon);
    
    // Validate
    if (isNaN(lat) || isNaN(lon)) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Valid latitude and longitude are required",
      });
    }

    console.log("Controller: Fetching reviews for:", { lat, lon });
    
    const response = await getPlaceReviews(lat, lon);
    
    console.log("Controller: Got response");
    
    return res.status(200).json({
      success: true,
      totalPlaces: response.all?.length || 0,
      summary: {
        // Attractions & Tourism
        attractions: response.attractions?.length || 0,
        museums: response.museums?.length || 0,
        historic: response.historic?.length || 0,
        viewpoints: response.viewpoints?.length || 0,
        
        // Food & Drink
        restaurants: response.restaurants?.length || 0,
        cafes: response.cafes?.length || 0,
        bars: response.bars?.length || 0,
        
        // Leisure
        parks: response.parks?.length || 0,
        
        // Transportation
        trainStations: response.trainStations?.length || 0,
        subwayStations: response.subwayStations?.length || 0,
        tramStops: response.tramStops?.length || 0,
        busStops: response.busStops?.length || 0,
        busStations: response.busStations?.length || 0,
        airports: response.airports?.length || 0,
        helipads: response.helipads?.length || 0,
        totalTransportation: response.allTransportation?.length || 0,
      },
      data: response,
      message: "Successfully got places",
    });
    
  } catch (err) {
    console.error("Controller Error:", err.message);
    
    const errorResponse = {
      success: false,
      data: null,
      message: "Unable to get places",
    };
    
    if (err && err.message && typeof err.message === 'string') {
      errorResponse.message = err.message;
    }
    
    return res.status(400).json(errorResponse);
  }
};

export default fetchPlaceReviews;