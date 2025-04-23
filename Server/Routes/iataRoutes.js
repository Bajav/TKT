import express from "express";
import { fetchAirlines,fetchIataCodes } from "../Controllers/iataController.js";

const router = express.Router();

router.get("/iataCodes",fetchIataCodes);
router.get("/airlines",fetchAirlines);

export default router;