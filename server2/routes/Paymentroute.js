const express = require("express")
const Razorpay = require("razorpay");
 require('dotenv').config()
 const cors = require('cors')
 const router = express.Router()
// const PORT = process.env.PORT ||9000
// const app = express()
// app.use(express.json())
// app.use(cors())

const crypto = require("crypto");

// app.use("/payment", router);
router.post("/orders", async (req, res) => {
try {
const instance = new Razorpay({
key_id: process.env.RAZORPAY_KEY_ID,
key_secret: process.env.RAZORPAY_SECRET,
});

const options = {
amount: req.body.amount,
currency: "INR",
receipt: "receipt_order_74394",
};

const order = await instance.orders.create(options);
res.json(order);
} catch (error) {
res.status(500).send(error);
}
});

router.post("/success", async (req, res) => {
try {
const { orderCreationId, razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;
const shasum = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
const digest = shasum.digest("hex");

if (digest !== razorpaySignature) return res.status(400).json({ msg: "Transaction not legit!" });

res.json({ msg: "success", orderId: razorpayOrderId, paymentId: razorpayPaymentId });
} catch (error) {
res.status(500).send(error);
}
});

module.exports=router
// app.use("/payment", router);
// app.listen(PORT,()=>{
//     console.log(`Server is running on http://127.0.0.1:${PORT}`);
// })