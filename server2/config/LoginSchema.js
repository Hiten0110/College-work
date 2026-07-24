const mongoose = require("mongoose")
const LoginSchema = new mongoose.Schema({
    // email: String, 
    name: {//ager multiple value add kerni hai matlb not null and all
        type: String,
        required: true// meaning not null
    },
    email: {//ager multiple value add kerni hai matlb not null and all
        type: String,
        required: true,// meaning not null
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
    loginas: {
        type: String,
        required: true
    },

    otp: {
        type: String,
        default: null,
    },

    otpExpiry: {
        type: Date,
        default: null,
    },


})

module.exports = mongoose.model("Login", LoginSchema)//ager collection bani hui hogi toh vohi chale gi nhi toh khud baan jye gi