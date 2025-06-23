// import { atlasDb } from "../Config/DB/mongoAtlas.js";



// export const startAtlas = async (req, res) => {
//   try {
//     atlasDb.on("connected", () => console.log("Connected to TKTDB"));
//     res.send("atlas db is success full")
//   } catch (err) {
//     atlasDb.on('error', (err) => {
//       console.error('Connection error:', err);
//     });
    
//     atlasDb.on('disconnected', () => {
//       console.log('Disconnected from TKTDB');
//     });
//   }
// };

