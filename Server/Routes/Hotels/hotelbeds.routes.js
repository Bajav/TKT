import {Router} from 'express';
import { hotelSearch,hotelContents } from '../../Controllers/Hotelbeds/hotelbeds.controller.js';
const router = Router();

router.post("/hotels",hotelSearch);
router.get("/hotels",hotelSearch);
router.post("/hotelscontents",hotelContents);
router.get("/hotelscontents",hotelContents);
export default router;