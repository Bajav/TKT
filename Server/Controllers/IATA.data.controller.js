import { Airline } from "../Models/iataModel";
// import airportCities from "../DATA/airportCities";

const data = async () => {
    await Airline.deleteMany()
    .then(()=>console.log("data deleted succesfuly"))
    .catch(err => console.log(err));
};
// data();