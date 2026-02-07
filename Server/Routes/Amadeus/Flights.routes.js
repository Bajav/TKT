import express from "express";
import {
  searchFlights,
  checkApiStatus,
  brandedUpSell,
  getCheckIn,
  findLastPrice,
  bookFlight,
  cheapestDate,
  retriveOrder,
  deleteOrder,
  flightDelayPrediction,
  seatMap,
} from "../../Controllers/Amadeus/flightSearch.controller.js";

const router = express.Router();

// router.get('/', searchFlights);
router.post("/results", searchFlights);
router.get("/amadeusstatus", checkApiStatus);
router.get("/results", searchFlights);
router.post("/brandedUpSell", brandedUpSell);
router.get("/brandedUpSell", brandedUpSell);
router.get("/findLastPrice", findLastPrice);
router.post("/findLastPrice", findLastPrice);
router.post("/bookflight", bookFlight);
router.post("/retriveOrder", retriveOrder);
// router.get("/getFlightOrder",getFlightOrder);
router.get("/checkin`", getCheckIn);
router.post("/seatMap", seatMap);
router.post("/deleteOrder", deleteOrder);
router.get("/cheapestdate", cheapestDate);
router.get("/flightdelay", flightDelayPrediction);

export default router;
