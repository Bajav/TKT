// ✅ Corrected Code
import express from 'express';
import {searchFlights ,brandedUpSell, getCheckIn, findLastPrice,getFlightOrder,cheapestDate,retriveOrder,deleteOrder,seatMap} from '../Controllers/flightSearch.js';

const router = express.Router();

router.get('/results', searchFlights);
router.get('/brandedUpSell', brandedUpSell);
router.get("/checkin",getCheckIn);
router.get("/findLastPrice",findLastPrice);
router.get("/getFlightOrder",getFlightOrder);
router.get("/retriveOrder",retriveOrder);
router.get("/seatMap",seatMap);
router.get("/deleteOrder",deleteOrder);
router.get("/cheapestDate",cheapestDate);

export default router;