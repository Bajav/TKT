import express from "express";
import {
  fetchAirlines,
  fetchIataCodes,
  uploadData,
  fecthCities,
  searchAirlines,
  searchAirports,
} from "../Controllers/iataController.js";

const router = express.Router();

router.get("/iataCodes", fetchIataCodes);
router.get("/airlines", fetchAirlines);
router.get("/searchairlines", searchAirlines);
router.get("/searchairports", searchAirports);
router.get("/get/cities", fecthCities);
router.get("/get/cities", fecthCities);

export default router;
