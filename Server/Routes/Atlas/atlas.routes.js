import { Router } from "express";
import {
  checkDbStatus,
  exportAll,
  importAirlines,
  importCities,
  importAirports,
  getIndexes,
  createIndexes,
  createAirportIndexes,
  createAirlineIndexes,
  createCityIndexes,
} from "../../Controllers/MongoAtlas/atlas.controller.js";
const router = Router();

router.get("/atlasstatus", checkDbStatus);
router.get("/exportData", exportAll);
router.get("/atlas/airlines", importAirlines);
router.get("/atlas/cities", importCities);
router.get("/atlas/airports", importAirports);
router.post("/indexes/create-all", createIndexes);
router.get("/indexes/check", getIndexes);
router.post("/indexes/airports", createAirportIndexes);
router.post("/indexes/airlines", createAirlineIndexes);
router.post("/indexes/cities", createCityIndexes);

export default router;
