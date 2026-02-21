import { Router } from "express";
import {
  checkDbStatus,
  exportAll,
  importAirlines,
  importCities,
  importAirports,
    searchAtlasAirports,
  searchAtlasAirlines,
  searchAtlasCities,
} from "../../Controllers/MongoAtlas/atlas.controller.js";
import {  createIndexes,
  getIndexes,
  createAirportIndexes,
  createAirlineIndexes,
  createCityIndexes } from "../../Controllers/MongoAtlas/atlasind.controller.js";
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

// Atlas search routes (use these for production)
router.get("/atlas/searchairports", searchAtlasAirports);
router.get("/atlas/searchairlines", searchAtlasAirlines);
router.get("/atlas/searchcities", searchAtlasCities);

export default router;
