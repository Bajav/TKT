require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Amadeus = require("amadeus");

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

// amadeus setUp
const amadeus = new Amadeus({
  clientId: process.env.API_KEY,
  clientSecret: process.env.SECRET_KEY,
});


// --get AIRPORTS , CITIES , COUNTRIES FROM DATABASE
app.route("/flights")
  .get(async (req, res) => {
    try {
      const [iataCodes, airlines] = await Promise.all([
        IATACODE.find().exec(),
        Airline.find().exec()
      ]);
      res.json({ iataCodes, airlines });
      
    } catch (err) {
      console.error("Error retrieving data:", err);
      res.status(500).json({ error: "Error retrieving data" });
    }
  });


var formData ;
app.route("/flights/flightsResults")
  .post(async (req, res) => {
   console.log(req.body);
   formData = req.body;
   res.send("hello");
  //  console.log()
  })

.get(async (req, res) => {
  // res.send(formData);
  const origin = formData.origin.slice(0,3);
  const destination = formData.destination.slice(0,3);
  const seatClass = formData.seatClass;
  const departureDate = formData.departureDate;
  const returnDate = formData.returnDate;
  const passengers = formData.passengers;
  const adults = passengers.adults;
  const infants = passengers.infants;
  const children = passengers.children;
  console.log(formData);
  // const departureDate = formData
  console.log(origin,destination,passengers);
    try {
      const response = await amadeus.shopping.flightOffersSearch.get({
        originLocationCode: origin,
        destinationLocationCode: destination,
        departureDate: departureDate,
        returnDate:returnDate,
        adults: adults,
        children: children,
        infants: infants,
        travelClass:seatClass,
        nonStop:false,
        currencyCode:"USD",
        max:40
      });
      if(response.data.length === 0)
        {
          console.log("no flights available");
        }else
        {
          res.send(response.data);
          const limitedData = response.data.slice(0,1)
          console.log(limitedData);
        }
      // res.send(response.data);
    } catch (error) {
      console.error(error);
    }
});

// --get/post /flights/flightsResults/flightPricing

let flightIndex ;
app.route("/flights/flightsResults/flightPricing")
.post((req, res)=>{
  console.log(req.body);
   flightIndex = req.body.index;
  console.log(flightIndex);
})
.get((req,res)=>{
  res.send("working");
  // console.log(req);
  console.log(flightIndex);
});



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
