// Config/DB/mongoAtlas.config.js
import mongoose from "mongoose";
import { iataSchema,airlineSchema,iataCitySchema } from "../../Models/Database/atlast.iata.models.js";

const encodedPassword = encodeURIComponent(process.env.ENCODED_PASSWORD);

const DB_URI = `mongodb+srv://tkt_development:${encodedPassword}@tktdb.arfqreg.mongodb.net/?retryWrites=true&w=majority&appName=TKTDB`;

let atlasDb;
let models = {};

export const connectAtlasDb = async () => {
  if (atlasDb) return atlasDb;
  
  atlasDb = mongoose.createConnection(DB_URI, {
    ssl: true,
    tlsAllowInvalidCertificates: false,
  });

  atlasDb.on("connected", async () => {
    console.log("✅ Connected to TKTDB (Atlas)");
    
    // Optional: Auto-create indexes on startup (only in development)
    if (process.env.NODE_ENV === 'development') {
      try {
        const { createAllAtlasIndexes } = await import("../../db/atlasIndexes.js");
        console.log('🔧 Auto-creating indexes in development mode...');
        await createAllAtlasIndexes();
      } catch (err) {
        console.error('⚠️  Index auto-creation failed (non-fatal):', err.message);
      }
    }
  });

  atlasDb.on("error", (err) => {
    console.error("❌ Atlas connection error:", err);
  });

  atlasDb.on("disconnected", () => {
    console.log("⚠️ Disconnected from TKTDB");
  });

  await atlasDb.asPromise();
  
  return atlasDb;
};

export const getAtlasDb = () => {
  if (!atlasDb) throw new Error("Atlas DB not connected. Call connectAtlasDb() first.");
  return atlasDb;
};

export const getModels = (connection) => {
  if (!models.IATACODES) {
    models.IATACODES = connection.model("IATACODE",iataSchema);
    models.AIRLINES = connection.model("AIRLINE",airlineSchema);
    models.IATACITIES = connection.model("City",iataCitySchema);
  }
  return models;
};