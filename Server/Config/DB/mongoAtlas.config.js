// Config/DB/mongoAtlas.config.js
import mongoose from "mongoose";

const encodedPassword = encodeURIComponent(process.env.ENCODED_PASSWORD);

const DB_URI = `mongodb+srv://tkt_development:${encodedPassword}@tktdb.arfqreg.mongodb.net/?retryWrites=true&w=majority&appName=TKTDB`;

let atlasDb;

export const connectAtlasDb = async () => {
  if (atlasDb) return atlasDb; // Return existing connection
  
  atlasDb = mongoose.createConnection(DB_URI, {
    ssl: true,
    tlsAllowInvalidCertificates: false,
  });

  atlasDb.on("connected", () => {
    console.log("✅ Connected to TKTDB");
  });

  atlasDb.on("error", (err) => {
    console.error("❌ Connection error:", err);
  });

  atlasDb.on("disconnected", () => {
    console.log("⚠️ Disconnected from TKTDB");
  });

  // Wait for connection to be ready
  await atlasDb.asPromise();
  
  return atlasDb;
};

export const getAtlasDb = () => {
  if (!atlasDb) throw new Error("DB not connected yet. Call connectAtlasDb() first.");
  return atlasDb;
};