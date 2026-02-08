import mongoose, { model } from "mongoose";
import {iataConnection,airlineConnection,cityCodeConnection} from '../../Config/DB/mongoose.config.js'

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
const iataCitySchema = new mongoose.Schema({
  id: Number,
  name: String,
  coordinates: String,
  country: String,
  iata: String,
  name_en: String,
  time_zone: String,
});

// initiate models
const IATACODE =  iataConnection.model("IATACODE", iataSchema);
const Airline =  airlineConnection.model("Airline", airlineSchema);
const IATACITIES =  cityCodeConnection.model("City", iataCitySchema);

export {IATACODE,Airline,IATACITIES};

