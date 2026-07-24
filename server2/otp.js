require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// =======================
// MongoDB Connection
// =======================

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

// =======================
// OTP Schema
// =======================

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const OTP = mongoose.model("OTP", otpSchema);

// =======================
// Nodemailer
// =======================

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// =======================
// Send OTP API
// =======================

app.post("/send-otp", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Generate Random 6 Digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Remove Previous OTP
    await OTP.deleteMany({ email });

    // Save OTP
    await OTP.create({
      email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 Minutes
    });

    // Send Mail
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Email Verification OTP",
      html: `
      <div style="font-family:Arial;padding:20px">
      
      <h2>Email Verification</h2>

      <p>Your One Time Password is</p>

      <h1 style="letter-spacing:5px;color:#0d6efd">
      ${otp}
      </h1>

      <p>This OTP is valid for 5 minutes.</p>

      <br>

      <p>Thank You</p>

      </div>
      `,
    });

    res.status(200).json({
      success: true,
      message: "OTP Sent Successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// =======================
// Verify OTP API
// =======================

app.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required",
      });
    }

    const data = await OTP.findOne({ email, otp });

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (new Date() > data.expiresAt) {
      await OTP.deleteOne({ _id: data._id });

      return res.status(400).json({
        success: false,
        message: "OTP Expired",
      });
    }

    await OTP.deleteOne({ _id: data._id });

    res.status(200).json({
      success: true,
      message: "OTP Verified Successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// =======================
// Home Route
// =======================

app.get("/", (req, res) => {
  res.send("OTP API Running...");
});

// =======================
// Server
// =======================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server Running on http://localhost:${PORT}`);
});