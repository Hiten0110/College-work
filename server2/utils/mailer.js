const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendEmployeeMail = async (name, email, password) => {
    try {

        await transporter.sendMail({

            from: `"HireKaro HR" <${process.env.EMAIL_USER}>`,

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

                    <a href="http://localhost:5173/signin"
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

        console.log(err);

    }
};

module.exports = sendEmployeeMail;