// ✅ Corrected Code
import express from 'express';
import {searchFlights , getCheckIn, cheapestDate, findLastPrice} from '../Controllers/flightSearch.js';

const router = express.Router();

router.get('/results', searchFlights);
router.get("/checkin",getCheckIn);
router.get("/cheapestDate",cheapestDate);
router.get("/findLastPrice",findLastPrice);

export default router;