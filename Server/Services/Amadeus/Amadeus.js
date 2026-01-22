import dotenv from "dotenv";
import Amadeus from "amadeus";
// import Axios from "axios";

dotenv.config();

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_API_KEY,
  clientSecret: process.env.AMADEUS_SECRET_KEY,
});

export default amadeus;