// .env se 

// check kerne ke liye ki url yha fetch horha hai ya nhi
// const mongoose=require('mongoose')
// require('dotenv').config({path: '../.env'})
// let DB_URL=process.env.MONGODB_URL
// console.log(DB_URL)
// let connection=mongoose.connect(DB_URL)
// module.exports=connection


const mongoose = require('mongoose');

let connection = async () => {
    try {
        const rawUrl = process.env.MONGODB_URL || "";
        const db_url = rawUrl.replace(/^["']|["']$/g, "").trim();

        if (!db_url) {
            console.error("CRITICAL ERROR: MONGODB_URL environment variable is missing or empty!");
            return;
        }

        console.log("Connecting to MongoDB:", db_url.replace(/:([^:@]+)@/, ":****@"));
        await mongoose.connect(db_url, {
            serverSelectionTimeoutMS: 5000
        });
        console.log("Database connected successfully");
    } catch (err) {
        console.error("Database connection error:", err.message || err);
    }
};

module.exports = connection;