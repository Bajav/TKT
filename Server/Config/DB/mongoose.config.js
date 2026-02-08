import mongoose from "mongoose";

const iataConnection = mongoose.createConnection("mongodb://127.0.0.1:27017/IATACODESDB");
iataConnection.on('connected', () => console.log('Connected to IATACODESDB'));

// Connect to second database (AIRLINESDB)
const airlineConnection = mongoose.createConnection("mongodb://127.0.0.1:27017/AIRLINESDB");
airlineConnection.on('connected', () => console.log('Connected to AIRLINESDB'));
const cityCodeConnection = mongoose.createConnection("mongodb://127.0.0.1:27017/CITIESDB");
cityCodeConnection.on('connected', () => console.log('Connected to CITIES DB'));

export { iataConnection, airlineConnection,cityCodeConnection};