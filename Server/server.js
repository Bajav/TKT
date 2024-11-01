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

// amadeus setUp
const amadeus = new Amadeus({
  clientId: process.env.API_KEY,
  clientSecret: process.env.SECRET_KEY,
});


// --get AIRPORTS , CITIES , COUNTRIES FROM DATABASE
app.route("/flights")
  .get((req, res) => {
    IATACODE.find()
      .then((foundData) => res.json(foundData))
      .catch((err) => {
        console.error("Error finding airports", err);
        res.status(500).json({ error: "Error retrieving airports data" });
      });
  })

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
        max:10
      });
  
      console.log(response.data);
      res.send(response.data);
    } catch (error) {
      console.error(error);
    }
})



// Test Route
app.get("/testing", (req, res) => {
  res.send("Hello, I am testing");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
