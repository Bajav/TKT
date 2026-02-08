import mongoose from "mongoose";
import { getAtlasDb } from "../../Config/DB/mongoAtlas.config.js";

const atlastDB = getAtlasDb();

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

export const IATACODES =  atlastDB.model("IATACODE", iataSchema);
export const Airline =  atlastDB.model("AIRLINE", airlineSchema);
export const IATACITIES =  atlastDB.model("City", iataCitySchema);

