// const connection = require('../config/dbConn')
// require('../config/dbConn')
const User = require('../config/LoginSchema')
const Attendance = require('../config/attendanceschema');
const Employee = require("../config/EmployeeSchema");
const sendEmployeeMail = require("../utils/mailer");
const sendOTP = require("../utils/sendOTP");

exports.PostUser = async (req, res) => {
    console.log(req.body);
    try {
        const user = await User.create(req.body)   // create ek method hai jo bhi hum data dump kere ge voh database mai hoga
        res.status(201).json(user)
    } catch (e) {
        console.log("========== ERROR ==========");
        console.log(e);
        console.log(e.message);
        console.log("===========================");

        res.status(400).json({
            message: e.message,
        });
    }
}

exports.LoginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "Email not found"
            });
        }

        if (user.password !== password) {
            return res.status(401).json({
                message: "Incorrect password"
            });
        }

        // ---------------- Attendance ----------------

        const now = new Date();

        const today = now.toISOString().split("T")[0];

        const loginTime = now.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });

        // Check if attendance already exists for today
        const attendance = await Attendance.findOne({
            employeeEmail: user.email,
            date: today,
        });

        if (!attendance) {

            let status = "";

            const hour = now.getHours();
            const minute = now.getMinutes();

            // Before or at 9:10 AM
            if (hour < 9 || (hour === 9 && minute <= 10)) {

                status = "Present";

            }

            // Between 9:11 AM and 9:30 AM
            else if (hour === 9 && minute <= 30) {

                status = "Half Day";

            }

            // After 9:30 AM
            else {

                status = "Absent";

            }

            await Attendance.create({

                employeeEmail: user.email,
                employeeName: user.name,
                date: today,
                loginTime,
                status,

            });

        }

        // --------------------------------------------

        return res.status(200).json({
            message: "Login Successful",
            user
        });

    } catch (err) {

        return res.status(500).json({
            message: err.message
        });

    }
};

exports.GetUser = async (req, res) => {
    try {
        const { email } = req.params;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(user);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

exports.GetMyAttendance = async (req, res) => {

    try {

        const { email } = req.params;

        const attendance = await Attendance.find({
            employeeEmail: email
        }).sort({ date: -1 });

        res.status(200).json(attendance);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};


exports.LogoutUser = async (req, res) => {

    try {

        const { email } = req.body;

        const now = new Date();

        const today = now.toISOString().split("T")[0];

        const logoutTime = now.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        });

        const attendance = await Attendance.findOne({
            employeeEmail: email,
            date: today
        });

        if (!attendance) {
            return res.status(404).json({
                message: "Attendance not found"
            });
        }

        attendance.logoutTime = logoutTime;

        const hour = now.getHours();
        const minute = now.getMinutes();

        // Before 5:30 PM
        if (hour < 17 || (hour === 17 && minute < 30)) {

            if (attendance.status === "Present") {
                attendance.status = "Half Day";
            }

        }

        await attendance.save();

        res.status(200).json({
            message: "Logout Successful"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

exports.AddEmployee = async (req, res) => {

    try {

        // Check login collection
        const loginExists = await User.findOne({
            email: req.body.email
        });

        if (loginExists) {
            return res.status(400).json({
                message: "Employee already exists"
            });
        }

        // Check employee collection
        const employeeExists = await Employee.findOne({
            email: req.body.email
        });

        if (employeeExists) {
            return res.status(400).json({
                message: "Employee already exists"
            });
        }

        // Save Employee Details
        const employee = await Employee.create(req.body);

        // Save Login Credentials
        await User.create({

            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            loginas: "employee"

        });

        await sendEmployeeMail(
            req.body.name,
            req.body.email,
            req.body.password
        );

        res.status(201).json({
            message: "Employee Added Successfully",
            employee
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

exports.GetEmployees = async (req, res) => {
    try {

        const employees = await Employee.find();

        res.status(200).json({
            success: true,
            employees
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "Email not found"
            });
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        user.otp = otp;
        user.otpExpiry = Date.now() + 10 * 60 * 1000;
        await user.save();

        // Dispatch OTP email asynchronously in background for instant response (< 200ms)
        sendOTP(email, otp).catch((err) => {
            console.error("Background OTP send error:", err);
        });

        return res.status(200).json({
            success: true,
            message: "OTP sent successfully"
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
};

exports.verifyOTP = async (req, res) => {

    try {

        const { email, otp } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        if (user.otp !== otp) {

            return res.status(400).json({
                message: "Invalid OTP"
            });

        }

        if (user.otpExpiry < Date.now()) {

            return res.status(400).json({
                message: "OTP Expired"
            });

        }

        res.status(200).json({

            success: true,

            message: "OTP Verified"

        });

    } catch (err) {

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};

exports.resetPassword = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        user.password = password;

        user.otp = null;

        user.otpExpiry = null;

        await user.save();

        res.status(200).json({

            success: true,

            message: "Password Changed Successfully"

        });

    } catch (err) {

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};