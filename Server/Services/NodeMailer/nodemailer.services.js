// Install: npm install nodemailer
import nodemailer from 'nodemailer';
import crypto from 'crypto';



// Store OTPs temporarily (use Redis in production)
export const otpStore = new Map();
// Create transporter with Gmail
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'balijawahussein@gmail.com',
    pass: process.env.EMAIL_PS
  }
});

// Generate OTP
export const generateOTP = () =>  {
  return crypto.randomInt(100000, 999999).toString();
}
