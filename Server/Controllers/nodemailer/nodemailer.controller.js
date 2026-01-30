import { generateOTP,transporter } from "../../Services/NodeMailer/nodemailer.services.js";

export const sendOtp = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    // Generate OTP
    const otp = generateOTP();

    // Store OTP with expiration (5 minutes)
    otpStore.set(email, {
      otp,
      expiresAt: Date.now() + 5 * 60 * 1000,
    });

    // Send email
    await transporter.sendMail({
      from: '"Your App Name" <your-email@gmail.com>',
      to: email,
      subject: "Your Verification Code",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Email Verification</h2>
          <p>Your verification code is:</p>
          <h1 style="background: #f4f4f4; padding: 20px; text-align: center; letter-spacing: 5px;">
            ${otp}
          </h1>
          <p>This code will expire in 5 minutes.</p>
          <p style="color: #666; font-size: 12px;">
            If you didn't request this code, please ignore this email.
          </p>
        </div>
      `,
    });

    res.json({
      success: true,
      message: "OTP sent successfully",
      email, // Send back email for confirmation
    });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ error: "Failed to send OTP" });
  }
};

// Verify OTP endpoint
export const verifyOtp = (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.status(400).json({ error: "Email and OTP are required" });
  }
  const stored = otpStore.get(email);
  if (!stored) {
    return res.status(400).json({ error: "No OTP found for this email" });
  }
  // Check if expired
  if (Date.now() > stored.expiresAt) {
    otpStore.delete(email);
    return res.status(400).json({ error: "OTP has expired" });
  }
  // Verify OTP
  if (stored.otp !== otp) {
    return res.status(400).json({ error: "Invalid OTP" });
  }
  // OTP is valid
  otpStore.delete(email);
  res.json({
    success: true,
    message: "Email verified successfully",
    verified: true,
  });
};
