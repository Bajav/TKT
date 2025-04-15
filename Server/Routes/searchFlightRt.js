// ✅ Corrected Code
import express from 'express';
import {searchFlights , getCheckIn, findLastPrice,getFlightOrder} from '../Controllers/flightSearch.js';

const router = express.Router();

router.get('/results', searchFlights);
router.get("/checkin",getCheckIn);
router.get("/findLastPrice",findLastPrice);
router.get("/getFlightOrder",getFlightOrder);

export default router;