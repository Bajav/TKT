require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Amadeus = require('amadeus');

const port = 3000;
const app = express();

// CORS Options
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));

// Middleware setup
app.use(express.json());
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/IATACODESDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// MongoDB Schema & Model
const iataSchema = new mongoose.Schema({
  AirportCode: String,
  AirportName: String,
  City: String,
  Country: String,
  Latitude: String,
  Longitude: String
});
const IATACODE = mongoose.model("IATACODE", iataSchema);

// Routes for Airports Data
app.route("/")
  .get((req, res) => {
    IATACODE.find()
      .then((foundData) => res.json(foundData))
      .catch((err) => {
        console.error("Error finding airports", err);
        res.status(500).json({ error: "Error retrieving airports data" });
      });
  });

// API to get Airports, Cities, and Country Codes
var flightData ;
app.route("/flights")
  .get((req, res) => {
    IATACODE.find()
      .then((foundData) => res.json(foundData))
      .catch((err) => {
        console.error("Error finding airports", err);
        res.status(500).json({ error: "Error retrieving airports data" });
      });
  })
  .post((req, res) => {
     flightData = req.body;
     console.log("flight data recieved");
    //  console.log(flightData);
    return flightData;
    // console.log(flightData);
  });
// Amadeus API setup
const amadeus = new Amadeus({
  clientId: process.env.API_KEY,
  clientSecret: process.env.SECRET_KEY
});
app.route("flights/flightsResults")
.get((res,req)=>{
  console.log("route is working");
})

// Test Route
app.get("/testing", (req, res) => {
  res.send("Hello, I am testing");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// const flightSearch = async () => {
//   try {
//     const response = await amadeus.shopping.flightOffersSearch.get({
//       originLocationCode: "EBB",
//       destinationLocationCode: "DXB",
//       departureDate: "2024-11-02",
//       returnDate: "2024-11-09",
//       adults: 1,
//       currencyCode: "USD",
//       max: 10,
//       nonStop: false,
//       travelClass: "ECONOMY",
//       maxPrice: 500,
//       includedAirlineCodes: "UR"
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching flight offers:", error.response?.data || error);
//     throw new Error("Error fetching flight offers.");
//   }
// };