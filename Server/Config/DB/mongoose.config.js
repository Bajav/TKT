// import mongoose from "mongoose";

// export let iataConnection = null;
// export  let airlineConnection = null;
// export  let cityCodeConnection = null;

// export const connectDatabases = async () => {
//   if (iataConnection && airlineConnection && cityCodeConnection) {
//     console.log("⚡ Connections already active");
//     return;
//   }

//   iataConnection = mongoose.createConnection("mongodb://127.0.0.1:27017/IATACODESDB");
//   airlineConnection = mongoose.createConnection("mongodb://127.0.0.1:27017/AIRLINESDB");
//   cityCodeConnection = mongoose.createConnection("mongodb://127.0.0.1:27017/CITIESDB");

//   [iataConnection, airlineConnection, cityCodeConnection].forEach((conn, i) => {
//     conn.on("connected", () => console.log(`✅ DB ${i + 1} connected`));
//     conn.on("error", (err) => console.error(`❌ DB ${i + 1} error:`, err));
//   });

//   await Promise.all([
//     iataConnection.asPromise(),
//     airlineConnection.asPromise(),
//     cityCodeConnection.asPromise()
//   ]);

//   console.log("🔥 All DBs connected");
// };