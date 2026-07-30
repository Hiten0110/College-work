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

const sendEmployeeMail = async (name, email, password) => {
    try {
        const transporter = getTransporter();
        const fromEmail = (process.env.EMAIL_USER || "supporthirekaro22@gmail.com").trim();

        await transporter.sendMail({
            from: `"HireKaro HR" <${fromEmail}>`,
            to: email,
            subject: "Welcome to HireKaro",
            html: `
                <div style="font-family: Arial, sans-serif; padding:20px">
                    <h2>Welcome to HireKaro 🎉</h2>
                    <p>Hello <b>${name}</b>,</p>
                    <p>Your employee account has been created successfully.</p>
                    <hr>
                    <h3>Login Credentials</h3>
                    <p><b>Email :</b> ${email}</p>
                    <p><b>Password :</b> ${password}</p>
                    <br>
                    <a href="https://amazing-taffy-060a35.netlify.app/signin"
                    style="
                        background:#2563eb;
                        color:white;
                        padding:10px 20px;
                        text-decoration:none;
                        border-radius:6px;
                    ">
                        Login Now
                    </a>
                    <br><br>
                    <p>Please change your password after your first login.</p>
                    <br>
                    <p>Regards,</p>
                    <h3>HireKaro Team</h3>
                </div>
            `
        });

        console.log("Email Sent Successfully");
    } catch (err) {
        console.error("Failed to send employee mail:", err.message || err);
    }
};

module.exports = sendEmployeeMail;