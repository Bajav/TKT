import dotenv from "dotenv";
import express from "express";
import { IATACODE,Airline } from "../Models/iataModel";

const router = express.Router();
const app = express();

dotenv.config();


// amadeus setUp

const amadeus = new Amadeus({
    clientId: process.env.API_KEY,
    clientSecret: process.env.SECRET_KEY,
  });
  
  

  // --get AIRPORTS , CITIES , COUNTRIES FROM DATABASE
  app.route("/flights")
    .get(async (req, res) => {
      try {
        const [iataCodes, airlines] = await Promise.all([
          IATACODE.find().exec(),
          Airline.find().exec()
        ]);
        res.json({ iataCodes, airlines });
        res.send("we are working");
      } catch (err) {
        console.error("Error retrieving data:", err);
        res.status(500).json({ error: "Error retrieving data" });
      }
    });
  
  
  var formData ;
  let flightOffersResponse ;
  app.route("/flights/flightsResults")
    .post(async (req, res) => {
     console.log(req.body);
     formData = req.body;
     res.send("hello");
    //  console.log()
    })
  
    // get form data from frontend to backend, then do a get req
  .get(async (req, res) => {
    // res.send(formData);
    // const origin = formData.origin.slice(0,3);
    // const destination = formData.destination.slice(0,3);
    // const seatClass = formData.seatClass;
    // const departureDate = formData.departureDate;
    // const returnDate = formData.returnDate;
    // const passengers = formData.passengers;
    // const adults = passengers.adults;
    // const infants = passengers.infants;
    // const children = passengers.children;
    // console.log(formData);
    // const departureDate = formData
    // API get req
    // console.log(origin,destination,passengers);
  });
  
  // --get/post /flights/flightsResults/flightPricing
  
  let flightIndex ;
  let pricingResponse;
  app.route("/flights/flightsResults/flightPricing")
  .post((req, res)=>{
    console.log(req.body);
     flightIndex = req.body.index;
    console.log("flightIndex :: " + " " + flightIndex);
  })
  .get(async(req,res)=>{
    try{
      const response = await amadeus.shopping.flightOffers.pricing.post(
        {
          data: {
            type: "flight-offers-pricing",
            flightOffers: [flightOffersResponse[0]],
          },
        },
        { include: "credit-card-fees,detailed-fare-rules" }
      );
      pricingResponse = response.data;
      console.log(`pricing response ::: ${pricingResponse}`);
      res.send(pricingResponse);
    }catch(err)
    {
      console.log(err);
    }
  });
  let confirmOrder ;
  app.get("/flights/flightsResults/confirmOrder",async (req,res)=>{
    try{
      // console.log(pricingResponse.flightOffers[0]);
      const response = await amadeus.booking.flightOrders.post({
        data: {
          type: "flight-order",
          flightOffers: [pricingResponse.flightOffers[0]],
          travelers: [
            {
              id: "1",
              dateOfBirth: "1982-01-16",
              name: {
                firstName: "hussein",
                lastName: "balijawa",
              },
              gender: "MALE",
              contact: {
                emailAddress: "balijawahussein@gmail.com",
                phones: [
                  {
                    deviceType: "MOBILE",
                    countryCallingCode: "256",
                    number: "781372789",
                  },
                ],
              },
              documents: [
                {
                  documentType: "PASSPORT",
                  birthPlace: "Kampala",
                  issuanceLocation: "Madrid",
                  issuanceDate: "2023-04-14",
                  number: "00000000",
                  expiryDate: "2027-09-14",
                  issuanceCountry: "UG",
                  validityCountry: "UG",
                  nationality: "UG",
                  holder: true,
                },
              ],
            },
          ],
        },
      });
      res.send(response.data);
      confirmOrder = response.data;
    }catch(err){
      console.log(err)
    }
  });
  
  // seatMaps
  let seatMaps ;
  app.get("/flights/flightsResults/confirmOrder/seatMap",async (req,res)=>{
    try {
      // Returns all the seat maps of a given order
      const response = await amadeus.shopping.seatmaps.get({
        "flight-orderId": confirmOrder.id,
      });
      seatMaps = response.data;
      console.log(seatMaps);
      res.send(seatMaps);
    } catch (error) {
      console.error(error);
    }
  });

  export default router;