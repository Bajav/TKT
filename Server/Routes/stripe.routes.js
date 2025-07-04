import createPaymentIntent from "../Controllers/checkOut.controller.js";
import e from "express";

const router = e.Router();

router.post('/createpaymentintent',createPaymentIntent);

export default router;