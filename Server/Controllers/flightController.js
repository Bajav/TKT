import { IATACODE, Airline } from "../Models/iataModel";

const getIataCodes = async (req, res) => {
  try {
    const iataCodes = await IATACODE.find().exec();
    res.jason(iataCodes);
  } catch (err) {
    console.log(err);
    res.status(err.status).json({ message: 'Something went wrong', error: err.message });
  }
};

const getAirlines = async (req, res) => {
  try {
    const airlines = await Airline.find().exec();
    res.json(airlines);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong', error: err.message });
    console.log(err);
  }
};

export default {getAirlines,getIataCodes};
