import express from "express";
import { fetchAirlines,fetchIataCodes,uploadData,fecthCities } from "../Controllers/iataController.js";

const router = express.Router();

router.get("/iataCodes",fetchIataCodes);
router.get("/airlines",fetchAirlines);
router.get("/api/cities",uploadData);
router.get("/get/cities",fecthCities);

export default router;