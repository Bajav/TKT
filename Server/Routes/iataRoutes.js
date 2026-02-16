// routes/iata.routes.js
import express from "express";
import {
  fetchAirlines,
  fetchIataCodes,
  uploadData,
  fecthCities,
  searchAirlines,
  searchAirports,
} from "../Controllers/iataController.js";
import { createSearchIndexes, listIndexes } from "../Controllers/iataindex.controller.js";

const router = express.Router();

// Existing routes
router.get("/iataCodes", fetchIataCodes);
router.get("/airlines", fetchAirlines);
router.get("/searchairlines", searchAirlines);
router.get("/searchairports", searchAirports);
router.get("/get/cities", fecthCities);

// Index management routes (only for development)
if (process.env.NODE_ENV !== 'production') {
  router.post("/admin/create-indexes", async (req, res) => {
    const result = await createSearchIndexes();
    res.json(result);
  });
  
  router.get("/admin/list-indexes", async (req, res) => {
    await listIndexes();
    res.json({ message: "Check console for index list" });
  });
}

export default router;