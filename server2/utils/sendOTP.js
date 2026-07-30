const nodemailer = require("nodemailer");

const getTransporter = () => {
    const user = (process.env.EMAIL_USER || "supporthirekaro22@gmail.com").trim();
    const pass = (process.env.EMAIL_PASS || "ogxuqxeutljgifjg").trim();

    return nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: { user, pass },
    });
};

const sendOTP = async (email, otp) => {
    const transporter = getTransporter();
    const fromEmail = (process.env.EMAIL_USER || "supporthirekaro22@gmail.com").trim();

    await transporter.sendMail({
        from: `"HireKaro HR" <${fromEmail}>`,
        to: email,
        subject: "HireKaro Password Reset OTP",
        html: `
            <div style="font-family: Arial, sans-serif; padding:20px;">
                <h2>Password Reset Request</h2>
                <p>Your OTP for resetting your HireKaro password is:</p>
                <h1 style="color:#2563eb; letter-spacing: 2px;">${otp}</h1>
                <p>This OTP is valid for 10 minutes.</p>
                <p>If you did not request a password reset, please ignore this email.</p>
            </div>
        `
    });
};

module.exports = sendOTP;