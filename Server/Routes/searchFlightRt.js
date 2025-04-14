// ✅ Corrected Code
import express from 'express';
import {searchFlights , getCheckIn} from '../Controllers/flightSearch.js';

const router = express.Router();

router.get('/results', searchFlights);
router.get("/checkin",getCheckIn);

export default router;