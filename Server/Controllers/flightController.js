import { IATACODE, Airline } from ("../Models/iataModel");

const getIataCodes = async (req, res) => {
  try {
    const iataCodes = await IATACODE.find().exec;
    res.jason(iataCodes);
  } catch (err) {
    console.log(err);
  }
};

const getAirlines = async (req, res) => {
  try {
    const airlines = await Airline.find().exec;
    res.json(airlines);
  } catch (err) {
    console.log(err);
  }
};

export default {getAirlines,getIataCodes};
