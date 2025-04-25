import express from 'express';
import formData from '../Controllers/flightsForm.js';
import {searchFlights ,brandedUpSell, getCheckIn, findLastPrice,getFlightOrder,cheapestDate,retriveOrder,deleteOrder,seatMap} from '../Controllers/flightSearch.js';

const router = express.Router();

// router.get('/', searchFlights);
router.post('/results', searchFlights);
router.get('/results', searchFlights);
router.post('/brandedUpSell', brandedUpSell);
router.get('/brandedUpSell', brandedUpSell);
router.get("/checkin",getCheckIn);
router.get("/findLastPrice",findLastPrice);
router.get("/getFlightOrder",getFlightOrder);
router.get("/retriveOrder",retriveOrder);
router.get("/seatMap",seatMap);
router.get("/deleteOrder",deleteOrder);
router.get("/cheapestDate",cheapestDate);

export default router;