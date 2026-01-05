import { Router } from "express";
import {
  hotelSearch,
  hotelContents,
  findBoards,
  findAccomodation,
  getFacilities,
  getRooms,
  hotelData
} from "../../Controllers/Hotelbeds/hotelbeds.controller.js";
const router = Router();

router.post("/hotels", hotelSearch);
router.get("/hotels", hotelSearch);
// isclean
router.post("/hotels/hoteldata", hotelData);
// router.get("/hotels/hoteldata", hotelData); 
// isclean
router.post("/hotelscontents", hotelContents);
// router.get("/hotelscontents", hotelContents);

// isclean
router.get("/hotelscontents/boards", findBoards);
// isclean
router.get("/hotelscontents/accomodation", findAccomodation);
// isClean
router.get("/hotelscontents/facilities", getFacilities);
// isClean
router.get("/hotelscontents/rooms", getRooms);
export default router;
