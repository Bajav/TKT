require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
import Flights from './Flights.js';

const port = 3000;
const app = express();



// Middleware setup
app.use(express.json());
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

const iataConnection = mongoose.createConnection("mongodb://127.0.0.1:27017/IATACODESDB");
iataConnection.on('connected', () => console.log('Connected to IATACODESDB'));

// Connect to second database (AIRLINESDB)
const airlineConnection = mongoose.createConnection("mongodb://127.0.0.1:27017/AIRLINESDB");
airlineConnection.on('connected', () => console.log('Connected to AIRLINESDB'));

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



const IATACODE = iataConnection.model("IATACODE", iataSchema);
const Airline = airlineConnection.model("Airline", airlineSchema);




// Test Route
app.get("/testing", (req, res) => {
  Airline.find()
  .then((foundData) => res.json(foundData))
  .catch((err) => {
    console.error("Error finding airports", err);
    res.status(500).json({ error: "Error retrieving airports data" });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// try{
// const response = await amadeus.booking.flightOrders.post({
//   data: {
//     type: "flight-order",
//     flightOffers: [pricingResponse.data.flightOffers[0]],
//     travelers: [
//       {
//         id: "1",
//         dateOfBirth: "1982-01-16",
//         name: {
//           firstName: "JORGE",
//           lastName: "GONZALES",
//         },
//         gender: "MALE",
//         contact: {
//           emailAddress: "jorge.gonzales833@telefonica.es",
//           phones: [
//             {
//               deviceType: "MOBILE",
//               countryCallingCode: "34",
//               number: "480080076",
//             },
//           ],
//         },
//         documents: [
//           {
//             documentType: "PASSPORT",
//             birthPlace: "Madrid",
//             issuanceLocation: "Madrid",
//             issuanceDate: "2015-04-14",
//             number: "00000000",
//             expiryDate: "2025-04-14",
//             issuanceCountry: "ES",
//             validityCountry: "ES",
//             nationality: "ES",
//             holder: true,
//           },
//         ],
//       },
//     ],
//   },
// });
// console.log(response);
// } catch (error) {
// console.error(error);
// }