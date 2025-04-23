import { IATACODE, Airline } from "../Models/iataModel";

const fetchIataCodes= async(req,res)=>{
  try{
    const iataCodes = await IATACODE.find();
    return iataCodes;
  }catch(err)
  {
    console.error("error fetching codes:",err)
    throw err
  }
};
const fetchAirlines= async(req,res)=>{
  try{
    const airlines = await Airline.find();
    return airlines;
  }catch(err)
  {
    console.error("error fetching airlines:",err)
    throw err
  }
};
export {fetchIataCodes,fetchAirlines};