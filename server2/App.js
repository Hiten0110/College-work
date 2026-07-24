const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connection = require("./config/dbConn");
const Userroute = require("./routes/Userroutes");
const Paymentroute = require("./routes/Paymentroute");

const App = express();

App.use(cors());
App.use(express.json());

const PORT = process.env.PORT || 3002;

connection();

App.use("/api/user", Userroute);
App.use("/api/payment", Paymentroute);

App.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
});