import {Router} from 'express';
import { hotelSearch,hotelContents,findBoards,findAccomodation} from '../../Controllers/Hotelbeds/hotelbeds.controller.js';
const router = Router();

router.post("/hotels",hotelSearch);
router.get("/hotels",hotelSearch);
router.post("/hotelscontents",hotelContents);
router.get("/hotelscontents/boards",findBoards);
router.get("/hotelscontents/accomodation",findAccomodation);
export default router;