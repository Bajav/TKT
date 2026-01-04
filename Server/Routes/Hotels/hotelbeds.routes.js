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
router.get("/hotels/hoteldata", hotelData);
router.post("/hotelscontents", hotelContents);
router.get("/hotelscontents/boards", findBoards);
router.get("/hotelscontents/accomodation", findAccomodation);
router.get("/hotelscontents/facilities", getFacilities);
// gets the details of the hotel. including [facilities and their descriptions,
// contacts,boards,segments,rooms and their descriptions, terminals and their 
// distances with description ]
router.get("/hotelscontents/rooms", getRooms);
export default router;
