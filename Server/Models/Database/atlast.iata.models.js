// Models/Database/atlast.iata.models.js
import mongoose from "mongoose";

export const iataSchema = new mongoose.Schema({
  AirportCode: String,
  AirportName: String,
  City: String,
  Country: String,
  Latitude: String,
  Longitude: String,
});

export const airlineSchema = new mongoose.Schema({
  name: String,
  code: String,
  is_lowcost: Boolean,
  logo: String,
});

export const iataCitySchema = new mongoose.Schema({
  id: Number,
  name: String,
  coordinates: String,
  country: String,
  iata: String,
  name_en: String,
  time_zone: String,
});

// Export schema definitions, not model instances
export const schemas = {
  iataSchema,
  airlineSchema,
  iataCitySchema
};

// // Lazy model getter
// let models = {};

// export const getModels = (connection) => {
//   if (!models.IATACODES) {
//     models.IATACODES = connection.model("IATACODE", iataSchema);
//     models.AIRLINES = connection.model("AIRLINE", airlineSchema);
//     models.IATACITIES = connection.model("City", iataCitySchema);
//   }
//   return models;
// };
