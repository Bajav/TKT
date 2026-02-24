// import { IATACODE, Airline, IATACITIES } from "../Models/Database/iataModel.js";
// import citiesJson from "../JSONs/iatacityCodes.json" with { type: "json" };

// const fetchIataCodes = async (req, res) => {
//   try {
//     const airline = new Airline();
//     const iataCodes = await IATACODE.find();
//     // console.log(iataCodes);
//     return res.json(iataCodes);
//     // return iataCodes;
//   } catch (err) {
//     console.error("error fetching codes:", err);
//     throw err;
//   }
// };

// const fetchAirlines = async (req, res) => {
//   try {
//     const airlines = await Airline.find();
//     return res.json(airlines); // Add res.json!
//   } catch (err) {
//     console.error("error fetching airlines:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const uploadData = async (req, res) => {
//   try {
//     const result = await IATACITIES.insertMany(citiesJson);
//     res.status(200).json({
//       success: true,
//       message: `Successfully imported ${result.length} cities`,
//       count: result.length,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({
//       success: false,
//       message: `failed to save cities`,
//       data: err,
//     });
//   }
// };
// const fecthCities = async (req, res) => {
//   try {
//     const response = await IATACITIES.find();
//     res.json(response);
//   } catch (error) {
//     res.status(401).json({
//       success: false,
//       message: "failed to import cities form local db",
//       data: error,
//     });
//   }
// };

// const searchAirports = async (req, res) => {
//   try {
//     const { query, limit = 10 } = req.query;

//     // Return empty if query too short
//     if (!query || query.length < 2) {
//       return res.json({ suggestions: [] });
//     }

//     // Search with text index (we'll create this next)
//     const suggestions = await IATACODE.find({
//       $or: [
//         { AirportCode: { $regex: `^${query}`, $options: "i" } }, // Starts with query (higher priority)
//         { AirportName: { $regex: query, $options: "i" } },
//         { City: { $regex: query, $options: "i" } },
//         { Country: { $regex: query, $options: "i" } },
//       ],
//     })
//       .select("AirportCode AirportName City Country") // Only needed fields
//       .limit(parseInt(limit))
//       .lean(); // Faster - returns plain objects

//     res.json({ suggestions });
//   } catch (err) {
//     console.error("Error searching airports:", err);
//     res.status(500).json({ error: "Search failed" });
//   }
// };

// // Optional: For airlines search
// const searchAirlines = async (req, res) => {
//   try {
//     const { query, limit = 10 } = req.query;

//     if (!query || query.length < 2) {
//       return res.json({ suggestions: [] });
//     }

//     const suggestions = await Airline.find({
//       $or: [
//         { name: { $regex: query, $options: "i" } },
//         { code: { $regex: query, $options: "i" } },
//       ],
//     })
//       .select("name code")
//       .limit(parseInt(limit))
//       .lean();

//     res.json({ suggestions });
//   } catch (err) {
//     console.error("Error searching airlines:", err);
//     res.status(500).json({ error: "Search failed" });
//   }
// };

// export {
//   fetchIataCodes,
//   fetchAirlines,
//   uploadData,
//   fecthCities,
//   searchAirlines,
//   searchAirports,
// };
