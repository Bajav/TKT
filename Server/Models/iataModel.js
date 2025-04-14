import mongoose, { model } from "mongoose";
import {iataConnection,airlineConnection} from '../DB/mongoose.js'

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

// initiate models
const IATACODE = mongoose.model("IATACODE", iataSchema);
const Airline = mongoose.model("Airline", airlineSchema);

// const find =()=>
//     {
//         const res = IATACODE.find();
//         console.log(res);
//     };
//     find();

// export models
export {IATACODE,Airline};

