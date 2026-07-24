const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendOTP = async (email, otp) => {

    await transporter.sendMail({

        from: `"HireKaro HR" <${process.env.EMAIL_USER}>`,

        to: email,

        subject: "HireKaro Password Reset OTP",

        html: `
            <h2>Password Reset</h2>

            <p>Your OTP is:</p>

            <h1>${otp}</h1>

            <p>This OTP is valid for 5 minutes.</p>

            <p>Please do not share this OTP with anyone.</p>
        `
    });

};

module.exports = sendOTP;