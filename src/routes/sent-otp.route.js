import express from "express";

const router = express.Router();

router.post("/send-otp", (req, res) => {
  const { mobile } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  res.status(200).json({ otp, mobile, message: "OTP sent successfully" });
});

router.get("/get-otp", (req, res) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  res.status(200).json({ otp, message: "OTP sent successfully" });
});

export default router;
