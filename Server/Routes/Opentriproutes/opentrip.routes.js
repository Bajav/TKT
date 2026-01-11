import { Router } from "express";
import fetchPlaceReviews from "../../Controllers/OpenTripMap/opentripmap.controller.js";
const route = Router();
route.post('/getreviews',fetchPlaceReviews);
export default route;