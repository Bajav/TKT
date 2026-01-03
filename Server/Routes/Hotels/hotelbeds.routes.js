import {Router} from 'express';
import { hotelSearch,hotelContents,findBoards,findAccomodation,getFacilities} from '../../Controllers/Hotelbeds/hotelbeds.controller.js';
const router = Router();

router.post("/hotels",hotelSearch);
router.get("/hotels",hotelSearch);
router.post("/hotelscontents",hotelContents);
router.get("/hotelscontents/boards",findBoards);
router.get("/hotelscontents/accomodation",findAccomodation);
router.get("/hotelscontents/facilities",getFacilities);
export default router;