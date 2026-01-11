import axios from "axios";
const openTripMapKey = process.env.OPEN_TRIP_MAP_API;

export async function getPlaceReviews(lat, lon) {
  try {
    // Debug: Check if API key is loaded
    console.log("OpenTripMap API Key:", openTripMapKey ? "Key exists" : "Key is missing!");
    console.log("Key length:", openTripMapKey?.length);
    
    if (!openTripMapKey) {
      throw new Error("OpenTripMap API key is not configured in environment variables");
    }

    // Get places with ratings
    const response = await axios.get(
      `https://api.opentripmap.com/0.1/en/places/radius`,
      {
        params: {
          radius: 1000,
          lon: lon,
          lat: lat,
          rate: 2, 
          kinds: "accomodations,foods,interesting_places",
          apikey: "5ae2e3f221c38a28845f05b6988c99757bf3948d9dd03a292671396c",
        },
      }
    );

    return response;
  } catch (error) {
    // Better error logging
    if (error.response) {
      console.error("OpenTripMap API Error:", {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
      });
    } else {
      console.error("Error fetching reviews:", error.message);
    }
    throw error;
  }
}