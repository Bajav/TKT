require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Amadeus = require('amadeus');

// console.log(process.env);`
// const amadeus = new Amadeus();
const port = 3080;
const app = express();

const corsOptions = {
  origin: ["http://localhost:5174"],
};

// Middleware setup
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

mongoose
  .connect("mongodb://127.0.0.1:27017/IATACODESDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));


app.route("/").get((req, res) => {
  IATACODE.find()
    .then((foundData) => {
      res.json(foundData);
    })
    .catch((err) => {
      console.error("Error finding airports", err);
      res.status(500).json({ error: "Error retrieving airports data" });
    });
});

// API GET AIRPORTS || CITIES || COUNTRY NAME CODES TO
app.route("/flights")
  .get((req, res) => {
    IATACODE.find()
      .then((foundData) => {
        res.json(foundData);
      })
      .catch((err) => {
        console.error("Error finding airports", err);
        res.status(500).json({ error: "Error retrieving airports data" });
      });
  })
  .post((req, res) => {
    const flightData = req.body;
    console.log(flightData);
  });

// ---GET REQS--- AMADEUS SDK ---//  
const amadeus = new Amadeus({
    clientId: process.env.API_KEY,
    clientSecret: process.env.SECRET_KEY
});
// -- SEARCH FOR FLIGHTS -- //
app.route("/flights/flightsResults")
.get(async (req, res) => {
    console.log(req);
  try {
    const response = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: "EBB",
      destinationLocationCode: "DXB",
      departureDate: "2024-11-02",
      adults: 1,
      travelClass: "ECONOMY",
      currencyCode: "USD",
      max: 20,
    });
    const flightOffers = response.data;
    res.json(flightOffers);
    console.log(flightOffers);
  } catch (error) {
    console.error('Error fetching flight offers:', error);
    res.status(500).send("Error fetching flight offers.");
  };
});


app.get("/testing", (req, res) => {

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// {
//     originLocationCode: "EBB",
//     destinationLocationCode: "DXB",
//     departureDate: "2024-11-02",
//     returnDate: "2024-11-09",    // For round trip
//     adults: 1,
//     children: 1,                 // Number of children
//     infants: 1,                  // Number of infants
//     travelClass: "ECONOMY",       // Can be "ECONOMY", "PREMIUM_ECONOMY", "BUSINESS", or "FIRST"
//     currencyCode: "USD",
//     max: 2,                      // Maximum number of results
//     tripType: "ROUND_TRIP",       // "ONE_WAY", "ROUND_TRIP", or "MULTI_CITY"
//     nonStop: true,                // To search only direct flights
//     maxStops: 1,                  // Preferred number of stops (e.g., 1 for one stop, 2 for two stops, etc.)
//     includeAirlines: ["EK"],      // Preferred airlines (use airline codes, e.g., "EK" for Emirates)
//     excludeAirlines: ["BA"],      // Exclude specific airlines (e.g., "BA" for British Airways)
//     stopDuration: {               // Stopover duration preference (min and max stop duration)
//       max: 180,                   // Maximum stop duration in minutes
//       min: 30                     // Minimum stop duration in minutes
//     },
//     cabinRestrictions: [          // Cabin restrictions for multi-segment flights
//       {
//         cabin: "BUSINESS",
//         coverage: "MOST_SEGMENTS",  // Options: "ALL_SEGMENTS" or "MOST_SEGMENTS"
//         originDestinationIds: ["1"]
//       }
//     ],
//     multiCity: [
//       {
//         originLocationCode: "EBB",
//         destinationLocationCode: "DXB",
//         departureDate: "2024-11-02"
//       },
//       {
//         originLocationCode: "DXB",
//         destinationLocationCode: "LHR",
//         departureDate: "2024-11-06"
//       }
//     ]
//   }

// try {
//   const response = await fetch('https://travelnext.works/api/aeroVE5/availability', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(requestBody)
//   });

//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.error('Error fetching flight availability:', error);
// }

// ----FLIGHT LOGIC API ---- //

// .get((req, res) => {
//     const reqBody = {
//       user_id: "balijawahussein_testAPI",
//       user_password: "balijawahusseinTest@2024",
//       access: "Test",
//       ip_address: "41.210.143.183",
//       requiredCurrency: "USD",
//       journeyType: "OneWay",
//       OriginDestinationInfo: [
//         {
//           departureDate: "2024-12-07",
//           airportOriginCode: "EBB",
//           airportDestinationCode: "DXB",
//         },
//       ],
//       class: "Economy",
//       adults: 2,
//       childs: 1,
//       infants: 1,
//     };
//     const options = {
//       hostname: "travelnext.works",
//       path: "/api/aeroVE5/availabilit",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Content-Length": Buffer.byteLength(JSON.stringify(reqBody)),
//       },
//     };
  
//     const request = https.request(options, (response) => {
//       let data = "";
//       response.on("data", (chunk) => {
//         data += chunk;
//       });
//       response.on("end", () => {
//         res.json(JSON.parse(data));
//       });
//     });
//     request.on("error", (error) => {
//       console.error(error);
//       res.status(500).send("Internal Server Error");
//     });
  
//     request.write(JSON.stringify(reqBody));
//     request.end();
//   });