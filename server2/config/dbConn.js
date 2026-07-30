// .env se 

// check kerne ke liye ki url yha fetch horha hai ya nhi
// const mongoose=require('mongoose')
// require('dotenv').config({path: '../.env'})
// let DB_URL=process.env.MONGODB_URL
// console.log(DB_URL)
// let connection=mongoose.connect(DB_URL)
// module.exports=connection


const mongoose=require('mongoose')
require("dotenv").config()
const db_url = process.env.MONGODB_URL



let connection=async()=>{
    try{
        await mongoose.connect(db_url)
        console.log("Database connected succesfully")
    }catch(err){
        console.log({message: err})
    }
}

module.exports=connection