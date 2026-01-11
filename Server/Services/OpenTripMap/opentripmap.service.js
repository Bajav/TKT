import axios from "axios";

export async function getPlaceReviews(lat, lon) {
  lat = parseFloat(lat);
  lon = parseFloat(lon);
  
  if (isNaN(lat) || isNaN(lon)) {
    throw new Error("Invalid latitude or longitude values");
  }

  try {
    const radius = 2000; // 2km radius
    const overpassUrl = "https://overpass-api.de/api/interpreter";
    
    // Query for various points of interest INCLUDING TRANSPORTATION
    const query = `
      [out:json][timeout:25];
      (
        node["tourism"="attraction"](around:${radius},${lat},${lon});
        node["tourism"="museum"](around:${radius},${lat},${lon});
        node["tourism"="hotel"](around:${radius},${lat},${lon});
        node["tourism"="viewpoint"](around:${radius},${lat},${lon});
        node["historic"](around:${radius},${lat},${lon});
        node["amenity"="restaurant"](around:${radius},${lat},${lon});
        node["amenity"="cafe"](around:${radius},${lat},${lon});
        node["amenity"="bar"](around:${radius},${lat},${lon});
        node["amenity"="pub"](around:${radius},${lat},${lon});
        node["leisure"="park"](around:${radius},${lat},${lon});
        node["shop"="mall"](around:${radius},${lat},${lon});
        way["tourism"="attraction"](around:${radius},${lat},${lon});
        way["historic"](around:${radius},${lat},${lon});
        
        node["railway"="station"](around:${radius},${lat},${lon});
        node["railway"="subway_entrance"](around:${radius},${lat},${lon});
        node["railway"="tram_stop"](around:${radius},${lat},${lon});
        node["highway"="bus_stop"](around:${radius},${lat},${lon});
        node["amenity"="bus_station"](around:${radius},${lat},${lon});
        node["aeroway"="aerodrome"](around:${radius},${lat},${lon});
        node["aeroway"="helipad"](around:${radius},${lat},${lon});
        way["railway"="station"](around:${radius},${lat},${lon});
        way["amenity"="bus_station"](around:${radius},${lat},${lon});
        way["aeroway"="aerodrome"](around:${radius},${lat},${lon});
      );
      out body;
      >;
      out skel qt;
    `;

    console.log("Fetching places from Overpass API...");

    const response = await axios.post(
      overpassUrl,
      `data=${encodeURIComponent(query)}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        timeout: 30000, // 30 second timeout
      }
    );

    console.log("Overpass API returned:", response.data.elements?.length || 0, "places");

    if (!response.data.elements || response.data.elements.length === 0) {
      return [];
    }

    // Process and filter results
    const places = response.data.elements
      .filter(el => el.lat && el.lon && el.tags) // Only elements with coordinates and tags
      .map((place) => {
        const distance = calculateDistance(lat, lon, place.lat, place.lon);
        
        // Determine category
        const category = place.tags.tourism || 
                        place.tags.amenity || 
                        place.tags.historic || 
                        place.tags.leisure || 
                        place.tags.shop ||
                        place.tags.railway ||
                        place.tags.highway ||
                        place.tags.aeroway ||
                        'other';
        
        return {
          id: place.id,
          name: place.tags.name || place.tags['name:en'] || "Unnamed Location",
          category: category,
          type: place.type, // node or way
          latitude: place.lat,
          longitude: place.lon,
          distance: Math.round(distance), // meters
          distanceKm: (distance / 1000).toFixed(2),
          distanceMiles: (distance / 1609.34).toFixed(2),
          
          // Additional details
          cuisine: place.tags.cuisine,
          phone: place.tags.phone || place.tags['contact:phone'],
          website: place.tags.website || place.tags['contact:website'],
          email: place.tags.email || place.tags['contact:email'],
          openingHours: place.tags.opening_hours,
          address: place.tags['addr:street'] 
            ? `${place.tags['addr:housenumber'] || ''} ${place.tags['addr:street']}`.trim()
            : null,
          city: place.tags['addr:city'],
          postcode: place.tags['addr:postcode'],
          
          // Ratings and accessibility
          stars: place.tags.stars,
          wheelchair: place.tags.wheelchair,
          
          // Transportation specific
          operator: place.tags.operator, // e.g., "London Underground"
          network: place.tags.network,   // e.g., "National Rail"
          routes: place.tags.routes,     // Train/bus routes
          
          // Airport specific
          iata: place.tags.iata,         // Airport code e.g., "LHR"
          icao: place.tags.icao,
          
          // Links
          wikipedia: place.tags.wikipedia,
          wikidata: place.tags.wikidata,
          
          // Description
          description: place.tags.description,
          
          // All tags for reference
          allTags: place.tags,
        };
      })
      .sort((a, b) => a.distance - b.distance); // Sort by distance

    console.log("Processed places:", places.length);
    
    // Group by category
    const grouped = {
      all: places,
      
      // Attractions & Tourism
      attractions: places.filter(p => p.category === 'attraction'),
      museums: places.filter(p => p.category === 'museum'),
      viewpoints: places.filter(p => p.category === 'viewpoint'),
      historic: places.filter(p => p.allTags?.historic),
      
      // Food & Drink
      restaurants: places.filter(p => p.category === 'restaurant'),
      cafes: places.filter(p => p.category === 'cafe'),
      bars: places.filter(p => ['bar', 'pub'].includes(p.category)),
      
      // Leisure
      parks: places.filter(p => p.category === 'park'),
      
      // Transportation
      trainStations: places.filter(p => p.category === 'station'),
      subwayStations: places.filter(p => p.category === 'subway_entrance'),
      tramStops: places.filter(p => p.category === 'tram_stop'),
      busStops: places.filter(p => p.category === 'bus_stop'),
      busStations: places.filter(p => p.category === 'bus_station'),
      airports: places.filter(p => p.category === 'aerodrome'),
      helipads: places.filter(p => p.category === 'helipad'),
      
      // Combined transportation
      allTransportation: places.filter(p => 
        ['station', 'subway_entrance', 'tram_stop', 'bus_stop', 'bus_station', 'aerodrome', 'helipad'].includes(p.category)
      ),
    };
    
    return grouped;
    
  } catch (error) {
    console.error("Overpass API Error:", error.message);
    if (error.response) {
      console.error("Error response:", error.response.data);
    }
    throw new Error(error.message || "Failed to fetch places from Overpass API");
  }
}

// Haversine formula to calculate distance
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth's radius in meters
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
}