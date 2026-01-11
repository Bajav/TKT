import { Router } from "express";
import {
  hotelSearch,
  hotelContents,
  findBoards,
  findAccomodation,
  getFacilities,
  getRooms,
  hotelData,
  hotelComments,
  rateComments,
  promotions, 
  terminals,
  hotelRates,
} from "../../Controllers/Hotelbeds/hotelbeds.controller.js";
const router = Router();

router.post("/hotels", hotelSearch);
router.get("/hotels", hotelSearch);
router.post("/hotels/hotelrates", hotelRates); 
// isclean
// gets the details of the hotel. including [facilities and their descriptions,
// contacts,boards,segments,rooms and their descriptions, terminals and their 
// distances with description ]s
router.post("/hotels/hoteldata", hotelData);
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
router.post("/hotelscontents/comments", hotelComments);
router.get("/hotelscontents/ratecomments", rateComments);
router.get("/hotelscontents/promotions", promotions);
router.get("/hotelscontents/terminals", terminals);
export default router;
