// import mongoose from "mongoose";

// // encodeURIComponent('d!*%XJMLJBN29PP');
// const encodedPassword = encodeURIComponent('d!*%XJMLJBN29PP');

// const DB_URI = `mongodb+srv://tkt_development:${encodedPassword}@tktdb.arfqreg.mongodb.net/?retryWrites=true&w=majority&appName=TKTDB`;

// let atlasDb;

// export const connectAtlasDb = async () => {
//   atlasDb = mongoose.createConnection(DB_URI,{
//   ssl: true, // Explicitly required for Atlas
//   tlsAllowInvalidCertificates: false, // For strict production security
// });

//   atlasDb.on("connected", () => {
//     console.log("✅ Connected to TKTDB");
//   });

//   atlasDb.on("error", (err) => {
//     console.error("❌ Connection error:", err);
//   });

//   atlasDb.on("disconnected", () => {
//     console.log("⚠️ Disconnected from TKTDB");
//   });

//   return atlasDb;
// };

// export const getAtlasDb = () => {
//   if (!atlasDb) throw new Error("DB not connected yet.");
//   return atlasDb;
// };