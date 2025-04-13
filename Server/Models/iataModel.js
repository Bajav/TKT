import mongoose from "mongoose";

// Define schemas and models on specific connections
const iataSchema = new mongoose.Schema({
  AirportCode: String,
  AirportName: String,
  City: String,
  Country: String,
  Latitude: String,
  Longitude: String,
});
const airlineSchema = new mongoose.Schema({
  name: String,
  code: String,
  is_lowcost: Boolean,
  logo: String,
});

//   module.exports = mongoose.model('User', userSchema);

module.exports = mongoose.model("IATACODE", iataSchema);
module.exports = mongoose.model("Airline", airlineSchema);

