import {Router} from 'express';
import { hotelSearch } from '../../Controllers/Hotelbeds/hotelbeds.controller.js';
const router = Router();

router.post("/hotels",hotelSearch);
router.get("/hotels",hotelSearch);

export default router;