const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 3000;
const app = express();

// CORS options
const corsOptions = {
  origin: ["http://localhost:5173"]
};

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/PLACESDB")
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));


const placesSchema = new mongoose.Schema({
  continent: String,
  places: [
    {
      placeName: String,
      placeDescription: String,
      placeRank: Number
    }
  ]
});


const Places = mongoose.model("Places", placesSchema);

// Creating and saving the place document
const place = new Places({
  continent: "Africa",
  places: [
    { placeName: "Table Mountain", placeDescription: "A flat-topped mountain overlooking Cape Town, offering stunning views.", placeRank: 1 },
    { placeName: "Victoria Falls", placeDescription: "One of the largest and most famous waterfalls, located on the Zambezi River.", placeRank: 2 },
  ]
});

// place.save()
//   .then(() => console.log('Place saved successfully'))
//   .catch(err => console.error('Error saving place', err));

// Middleware setup
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.json({
    places: [
      {
        id: 1,
        continent: "Africa",
        places: [
          { name: "Table Mountain", description: "A flat-topped mountain overlooking Cape Town, offering stunning views.", rank: 1 },
          { name: "Victoria Falls", description: "One of the largest and most famous waterfalls, located on the Zambezi River.", rank: 2 },
          { name: "Sahara Desert", description: "The world's largest hot desert, covering much of North Africa.", rank: 3 },
  
        ]
      },
   
    ]
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
