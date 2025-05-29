import mongoose from "mongoose";
// seed.js
import { IATACODE,Airline } from "./Models/iataModel.js"; 
import airportCities from "./DATA/airportCities.js";
import airlines from "./DATA/airlines.js/index.js";

dotenv.config();

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    // Optional: clear existing data
    await MyModel.deleteMany({});
    console.log("Old data cleared");

    // Insert new data
    await MyModel.insertMany(myData);
    console.log("Data inserted successfully");

    process.exit(); // Exit script
  } catch (err) {
    console.error("Error seeding data:", err);
    process.exit(1); // Exit with failure
  }
}

seedDatabase();
