import {Router} from 'express';
import {verifyOtp } from '../../Controllers/nodemailer/nodemailer.controller.js';

const router = Router();

// router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);
export default router;