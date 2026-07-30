const nodemailer = require("nodemailer");

const getTransporter = () => {
    const rawUser = process.env.EMAIL_USER || "supporthirekaro22@gmail.com";
    const rawPass = process.env.EMAIL_PASS || "ogxuqxeutljgifjg";

    const user = rawUser.replace(/^["']|["']$/g, "").trim();
    const pass = rawPass.replace(/[^a-zA-Z0-9]/g, "").trim();

    return nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // TLS / STARTTLS
        auth: { user, pass },
        tls: {
            rejectUnauthorized: false
        }
    });
};

const sendOTP = async (email, otp) => {
    try {
        const transporter = getTransporter();
        const rawUser = process.env.EMAIL_USER || "supporthirekaro22@gmail.com";
        const fromEmail = rawUser.replace(/^["']|["']$/g, "").trim();

        const info = await transporter.sendMail({
            from: `"HireKaro HR" <${fromEmail}>`,
            to: email.trim(),
            subject: "HireKaro Password Reset OTP",
            html: `
                <div style="font-family: Arial, sans-serif; padding:20px; border: 1px solid #e2e8f0; rounded-lg: 10px;">
                    <h2 style="color:#1e40af;">Password Reset Request</h2>
                    <p style="color:#475569;">Your OTP for resetting your HireKaro password is:</p>
                    <h1 style="color:#2563eb; letter-spacing: 4px; background: #eff6ff; padding: 10px 20px; display: inline-block; border-radius: 8px;">${otp}</h1>
                    <p style="color:#64748b;">This OTP is valid for 10 minutes.</p>
                    <p style="color:#94a3b8; font-size: 12px;">If you did not request a password reset, please ignore this email.</p>
                </div>
            `
        });

        console.log("OTP Email Sent Successfully:", info.response);
    } catch (err) {
        console.error("CRITICAL: Failed to send OTP email:", err.message || err);
    }
};

module.exports = sendOTP;