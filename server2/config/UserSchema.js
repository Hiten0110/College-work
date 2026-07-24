const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    // email: String, 
    email:{//ager multiple value add kerni hai matlb not null and all
        type: String,
        required:true// meaning not null
    },
    password: String
})

module.exports = mongoose.model("students",UserSchema)//ager collection bani hui hogi toh vohi chale gi nhi toh khud baan jye gi