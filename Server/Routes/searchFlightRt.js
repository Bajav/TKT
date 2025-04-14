// ✅ Corrected Code
import express from 'express';
import {searchFlights , responsse} from '../Controllers/flightSearch.js';

const router = express.Router();

router.get('/results', searchFlights);

export default router;