import { IATACODE, Airline,IATACITIES } from "../Models/Database/iataModel.js";
import citiesJson from '../JSONs/iatacityCodes.json' with { type: "json" };

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

const uploadData =async (req,res)=>{
  try{
    const result =await IATACITIES.insertMany(citiesJson);
     res.status(200).json({
      success: true,
      message: `Successfully imported ${result.length} cities`,
      count: result.length,
    });
  }catch(err){
    console.log(err);
     res.status(400).json({
      success: false,
      message: `failed to save cities`,
      data: err,
    });
  }
}
const fecthCities = async (req,res)=>{
  try{
    const response = await IATACITIES.find();
      res.json(response);
  }catch(error){
    res.status(401).json({
      success:false,
      message:"failed to import cities form local db",
      data:error
    })
  }
}
export {fetchIataCodes,fetchAirlines,uploadData,fecthCities};