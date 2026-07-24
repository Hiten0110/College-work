const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({

    employeeEmail: {
        type: String,
        required: true,
    },

    employeeName: {
        type: String,
        required: true,
    },

    date: {
        type: String,
        required: true,
    },

    loginTime: {
        type: String,
        required: true,
    },

    logoutTime: {
        type: String,
        default: "",
    },
    workingHours: {
        type: String,
        default: ""
    },

    status: {
        type: String,
        enum: ["Present", "Half Day", "Absent"],
        default: "Present",
    }

}, { timestamps: true });

module.exports = mongoose.model("Attendance", attendanceSchema);