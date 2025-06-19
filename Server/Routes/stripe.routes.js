import createPaymentIntent from "../Controllers/checkOut.controller.js";
import e from "express";

const router = e.Router();

router.post('/checkout',createPaymentIntent);

export default router;