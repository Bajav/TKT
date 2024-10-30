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
// Amadeus API setup
const amadeus = new Amadeus({
  clientId: process.env.API_KEY,
  clientSecret: process.env.SECRET_KEY
});


app.route("/flights/flightsResults")
  .post(async (req, res) => {
    const flightData = req.body;
    console.log(flightData);
    const origin = flightData.origin.slice(0,3);
    const destination = flightData.destination.slice(0,3);
    const departureDate = flightData.departureDate;
    const returnDate = flightData.returnDate;
    const seatClass = flightData.seatClass;
    const passengers = flightData.passengers;
    const adult = passengers.adults;
    const children = passengers.children;
    const infant = passengers.infants;
    const multicity = flightData.multicity;
    // console.log({origin,destination,seatClass,multicity, adult, children,infant});
    

    // making a post req to amadeus API
    const  main  = async ()=> {
      try {
        // Find the cheapest flights from SYD to BKK
        const response = await amadeus.shopping.flightOffersSearch.get({
          originLocationCode: origin,
          destinationLocationCode: destination,
          departureDate: "2024-11-11",
          adults: "2",
          max:3
        });
    
        console.log(response.data);
        res.send(response.data);
      } catch (error) {
        console.error(error);
      }
  }
  main();
})

// .get(async (req, res) => {
//     try {
//       // Find the cheapest flights from SYD to BKK
//       const response = await amadeus.shopping.flightOffersSearch.get({
//         originLocationCode: "EBB",
//         destinationLocationCode: "DXB",
//         departureDate: "2024-11-11",
//         adults: "1",
//         max:3
//       });
  
//       console.log(response.data);
//       res.send(response.data);
//     } catch (error) {
//       console.error(error);
//     }
// });

// .get(async(req,res)=>{
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

//     res.status(200).json(response.data);  // Send data back as JSON
//   } catch (error) {
//     console.error("Error fetching flight offers:", error.response?.data || error);
//     res.status(500).json({ error: "Error fetching flight offers." });
//   }
// })

// Test Route
app.get("/testing", (req, res) => {
  res.send("Hello, I am testing");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// originLocationCode: "EBB",
// destinationLocationCode: "DXB",
// departureDate: "2024-11-02",
// returnDate: "2024-11-09",
// adults: 1,
// currencyCode: "USD",
// max: 10,
// nonStop: false,
// travelClass: "ECONOMY",
// maxPrice: 500,
// includedAirlineCodes: "UR"



// MORE OPTIONS
// try {
//   const response = await amadeus.shopping.flightOffersSearch.post({
//     currencyCode: "USD",
//     originDestinations: [
//       {
//         id: "1",
//         originLocationCode: "SYD",
//         destinationLocationCode: "BKK",
//         departureDateTimeRange: {
//           date: "2024-11-11",
//           time: "10:00:00",
//         },
//       },
//       {
//         id: "2",
//         originLocationCode: "BKK",
//         destinationLocationCode: "SYD",
//         departureDateTimeRange: {
//           date: "2024-11-11",
//           time: "17:00:00",
//         },
//       },
//     ],
//     travelers: [
//       {
//         id: "1",
//         travelerType: "ADULT",
//         fareOptions: ["STANDARD"],
//       },
//       {
//         id: "2",
//         travelerType: "CHILD",
//         fareOptions: ["STANDARD"],
//       },
//     ],
//     sources: ["GDS"],
//     searchCriteria: {
//       maxFlightOffers: 50,
//       flightFilters: {
//         cabinRestrictions: [
//           {
//             cabin: "BUSINESS",
//             coverage: "MOST_SEGMENTS",
//             originDestinationIds: ["1"],
//           },
//         ],
//         carrierRestrictions: {
//           excludedCarrierCodes: ["AA", "TP", "AZ"],
//         },
//       },
//     },
//   });

//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
// }
// main();