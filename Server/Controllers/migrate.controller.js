import { atlasDb } from "../Config/DB/mongoAtlas.js";
import { IATACODE, Airline } from "../Models/iataModel.js";
import { iataConnection } from "../Config/DB/mongoose.js";
import { IATACODES } from "../Models/atlast.iata.models.js";


// Migration function
export async function migrateData(req,res) {
  try {

    // Fetch all documents from local DB
    const documents = await Airline.find().lean();
    console.log(`Found ${documents.length} documents in local DB`);

    // Insert into Atlas DB
    const atlasCollection = atlasDb.collection("airline");
    
    // Insert into Atlas DB collection
    await atlasCollection.insertMany(documents);
    console.log('Data migrated successfully');


    // Close connections
    iataConnection.close();
    atlasDb.close();
    res.send(`found data ${documents.length}`);
  } catch (err) {
    console.error('Migration failed:', err);
  }
}

Promise.all([
  iataConnection.asPromise(),
  atlasDb.asPromise(),
]).then(migrateData).catch((err) => console.error('Connection failed:', err));