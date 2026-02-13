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


// connectAtlasDb = async () => {
//   // Log at the top of the function that it will perform input validation before creating a connection
//   console.log("Starting to connect Atlas DB");

//   try {
//     if (atlasDb) return atlasDb; // Return existing connection

//     // Validate database configuration and network connectivity before connecting to TKTDB
//     if (!validAtlasDb || (new mongooseURI(DB_URI, {
//         ssl: true,
//         tlsAllowInvalidCertificates: false
//     }).connect() === null)) {
//       try {
//         console.log("✅ Validation failed: Database configuration is invalid.");
//       } catch (error) {
//         console.error("❌ Connection error when validating Atlas DB:", error);
//       }
//       return;
//     }

//     // Create the connection with validation in mind
//     const mongooseConnection = await new mongooseURI(DB_URI, {
//         ssl: true,
//         tlsAllowInvalidCertificates: false
//     });

//     // Log that the connection will be made immediately
//     console.log("✅ Connection being made");

//     // Start the connection to ensure it's ready for operation
//     await mongooseConnection.connect();

//     // Log confirmation after successful connection
//     console.log("⚠️ Connection is ready. Starting operations.");

//     // Handle any errors during the connection process
//     try {
//       await Promise.all(
//         [atlasDb.on("connected", () => console.log("✅ Connected to TKTDB")),
//           atlasDb.on("error", (err) => console.error("❌ Connection error:", err)),
//           Atlas DB.on("disconnected", () => console.log("⚠️ Disconnected from TKTDB"))
//         ]
//       );
//     } catch (err) {
//       console.error("❌ Connection error:", err);
//     }

//   // Log that the connection operation has completed successfully
//   console.log("✅ Connect to Atlas DB: Success complete.");

//   return atlasDb;
// };