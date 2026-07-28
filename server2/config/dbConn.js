// .env se 

// check kerne ke liye ki url yha fetch horha hai ya nhi
// const mongoose=require('mongoose')
// require('dotenv').config({path: '../.env'})
// let DB_URL=process.env.MONGODB_URL
// console.log(DB_URL)
// let connection=mongoose.connect(DB_URL)
// module.exports=connection


const mongoose = require('mongoose');
require("dotenv").config();

const rawUrl = process.env.MONGODB_URL || "";
const db_url = rawUrl.replace(/^["']|["']$/g, "").trim();

let connection = async () => {
    try {
        if (!db_url) {
            console.error("Database connection error: MONGODB_URL is missing in environment variables!");
            return;
        }
        await mongoose.connect(db_url);
        console.log("Database connected successfully");
    } catch (err) {
        console.error("Database connection error:", err.message || err);
    }
};

module.exports = connection;