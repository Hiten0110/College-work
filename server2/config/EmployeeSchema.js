const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    gender: String,

    department: String,

    designation: String,

    joiningDate: String,

    salary: Number,

    address: String,

    employmentType: String,

    status: {
        type: String,
        default: "Active"
    }

}, { timestamps: true });

module.exports = mongoose.model("Employee", employeeSchema);