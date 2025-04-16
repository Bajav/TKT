// ✅ Corrected Code
import express from 'express';
import {searchFlights , getCheckIn, findLastPrice,getFlightOrder,cheapestDate,retriveOrder,deleteOrder} from '../Controllers/flightSearch.js';

const router = express.Router();

router.get('/results', searchFlights);
router.get("/checkin",getCheckIn);
router.get("/findLastPrice",findLastPrice);
router.get("/getFlightOrder",getFlightOrder);
router.get("/retriveOrder",retriveOrder);
router.get("/deleteOrder",deleteOrder);
router.get("/cheapestDate",cheapestDate);

export default router;