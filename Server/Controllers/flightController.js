import { IATACODE, Airline } from "../Models/iataModel.js";
import airportCities from "../DATA/airportCities.js";

const getIataCodes = async (req, res) => {
  try {
    const iataCodes = await IATACODE.find();
    res.json(iataCodes);
    // res.send("working")
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong', error: err.message });
  }
};

const getAirlines = async (req, res) => {
  try {
    const airlines = await Airline.find();
    res.json(airlines);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong', error: err.message });
    console.log(err);
  }
};

export default {getAirlines,getIataCodes};
