import { IATACODE, Airline } from "../Models/iataModel.js";

const fetchIataCodes= async(req,res)=>{
  try{
    const airline = new Airline
    const iataCodes = await IATACODE.find();
    // console.log(iataCodes);
    return res.json(iataCodes);
    // return iataCodes;
  }catch(err)
  {
    console.error("error fetching codes:",err)
    throw err
  }
};

const fetchAirlines = async(req,res)=>{
  try{
    const airlines = await Airline.find();
    return res.json(airlines); // Add res.json!
  }catch(err) {
    console.error("error fetching airlines:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {fetchIataCodes,fetchAirlines};