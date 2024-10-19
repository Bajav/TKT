const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 3000;
const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"]
};

// Middleware setup
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/IATACODESDB")
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));


const iataSchema = new mongoose.Schema({
  AirportCode: String,
  AirportName: String,
  City: String,
  Country: String,
  Latitude: String,
  Longitude: String
});

const IATACODE = mongoose.model("IATACODE", iataSchema);

// Sample data


// Insert all airports at once
// IATACODE.insertMany(newAirports)
//   .then(() => console.log('Airports saved successfully'))
//   .catch(err => console.error('Error saving airports', err));
// app.route("/flights")
// .get((req, res) => {
//   res.json({
//     message: "Welcome to the airport database!"
//   });
// });

app.route("/flights")
  .get((req, res) => {
    IATACODE.find()
      .then((foundData) => {
        res.json(foundData);
      })
      .catch(err => {
        console.error('Error finding airports', err);
        res.status(500).json({ error: 'Error retrieving airports data' });
      });
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});