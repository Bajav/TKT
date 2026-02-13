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
  hotelAvailbility,
  initiateBooking,
  verifyEmail,
  verifyOtp,
} from "../../Controllers/Hotelbeds/hotelbeds.controller.js";
const router = Router();

router.post("/hotels", hotelSearch);
router.get("/hotels", hotelSearch);
router.post("/hotels/hotelrates", hotelRates); 
router.post("/hotels/availability", hotelAvailbility); 
router.post("/initiateBooking", initiateBooking); 
router.post("/hotels/hoteldata", hotelData);
// isclean
router.post("/hotelscontents", hotelContents);
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
// verify email
router.post("/sendotp", verifyEmail);
router.post("/verifyotp", verifyOtp);
export default router;
