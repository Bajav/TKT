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
app.use(bodyParser.json());
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

app.route("/")
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
  })
  .post((req,res)=>{
    const flightData = req.body;
    console.log(flightData);
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});