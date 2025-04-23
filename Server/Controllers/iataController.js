import { IATACODE, Airline } from "../Models/iataModel";

const fetchIataCodes= async()=>{
  try{
    const iataCodes = await IATACODE.find();
    return iataCodes;
  }catch(err)
  {
    console.error("error fetching codes:",err)
    throw err
  }
};

const fetchAirlines= async()=>{
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