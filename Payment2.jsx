import axios from "axios";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiTwotoneDatabase } from "react-icons/ai";
import { FaPercent } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { TbTaxEuro } from "react-icons/tb";
import img from "./public/hirekarologo.png";


function Payment2() {

    const navigate = useNavigate();
    const successSound = useRef(new Audio("/success.mp3"));

    async function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    }
    async function displayRazorpay() {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        const result = await axios.post("http://localhost:3001/api/payment/orders", { amount: 172482 });
        if (!result) {
            alert("Server error. Are you online?");
            return;
        }
        const { amount, id: order_id, currency } = result.data;
        const options = {
            key: "rzp_test_SjOOD4SfcQ88sp",
            amount: amount.toString(),
            currency: currency,
            name: "HireKaro",
            description: "Test Transaction",
            order_id: order_id,
            handler: async function (response) {

                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post(
                    "http://localhost:3001/api/payment/success",
                    data
                );

                // Play success sound
                successSound.current.play().catch((err) => {
                    console.log("Unable to play sound:", err);
                });

                // Wait for sound to play before redirecting
                setTimeout(() => {

                    alert(result.data.msg);

                    const role = localStorage.getItem("loginas");

                    if (role === "admin") {
                        navigate("/admin");
                    }
                    else if (role === "hr") {
                        navigate("/hr");
                    }
                    else {
                        navigate("/employee");
                    }

                }, 1800);
            },

            prefill: {
                name: "Your Name",
                email: "your.email@example.com",
                contact: "9999999999",
            },
            theme: {
                color: "#61dafb",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <>
            {/* Logo */}
            <div className="bg-white p-5 w-40 text-center mx-auto mt-20 rounded-2xl">
                {/* <Link to="/" className="text-4xl font-bold tracking-wide p-5">
      <span className="text-blue-600">Hire</span>
      <span className="text-gray-900">Karo</span>
    </Link> */}
                <img src={img} alt="Logo" className="w-40 h-auto" />
            </div>

            {/* Heading */}
            <div className="w-full flex justify-center mt-20">
                <h2 className="text-white font-bold text-2xl w-[970px]">Your Cart</h2>
            </div>

            {/* Main Container */}
            <div className="flex justify-center items-start gap-5 p-2 mb-70">

                {/* Left Div */}
                <div className="bg-white w-150 rounded-2xl shadow-2xl p-2">

                    <h2 className="flex items-center gap-3 font-semibold p-2"><AiTwotoneDatabase size={25} /> Executive Plan</h2>
                    <h2 className="font-bold p-2">Period</h2>

                    <div className="flex justify-between items-center px-2">
                        <span className="font-semibold">1 Month</span>
                        <div>
                            <span className="font-bold">₹1599</span>
                            <span className="font-semibold">/mo</span>
                        </div>
                    </div>

                    <h2 className="p-2 text-sm">Renew after 1 month at ₹599/mo for 1 month. Cancel anytime.</h2>
                    <div className="bg-black text-white p-2 flex items-center justify-between rounded-2xl">
                        <div className="flex items-center gap-3">
                            <div className="bg-amber-400 p-2 text-black rounded">
                                <FaPercent size={25} />
                            </div>
                            <h2 className="text-sm">Choose the Executive plan for biggest savings.</h2>
                        </div>
                        {/* <button className="border p-2 rounded-2xl w-30">Claim now</button> */}
                    </div><br />
                    <hr />

                    <div className="p-2">
                        <div className="flex items-center">
                            <div className="bg-amber-500 text-white rounded-2xl p-1">
                                <FiCheck size={10} />
                            </div>
                            <h2 className="text-sm p-2">Want a free domain? choose Executive plan</h2>
                        </div>

                        <div className="flex items-center">
                            <div className="bg-green-600 text-white rounded-2xl p-1">
                                <FiCheck size={10} />
                            </div>
                            <h2 className="text-sm p-2">You can use for some days after subscription is over</h2>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="bg-white p-2 rounded-2xl shadow-2xl w-90">
                    <h2 className="font-bold p-2">Order Summary</h2>
                    <h2 className="font-bold p-2">Executive Plan</h2>

                    <div className="p-2">
                        <div className="flex justify-between">
                            <span>1-month period</span>
                            <span className="font-bold">₹1599</span>
                        </div>

                        <div className="flex justify-between mt-2">
                            <span>Reach 100</span>
                            <div>
                                <span className="line-through text-sm text-gray-500">₹1,068</span>
                                <span className="font-bold ml-2">₹0</span>
                            </div>
                        </div>

                        <div className="flex justify-between mt-2">
                            <span>Daily Backup</span>
                            <div>
                                <span className="line-through text-sm text-gray-500">₹209</span>
                                <span className="font-bold ml-2">₹0</span>
                            </div>
                        </div><br />
                        <hr />

                        <div className="flex items-center justify-between mt-4 mb-4">
                            <div className="flex items-center gap-2">
                                <span>Taxes</span>
                                <TbTaxEuro />
                            </div>
                            <span className="font-bold">₹125.82</span>
                        </div>
                        <hr />

                        <div className="flex justify-between mt-4 mb-4">

                            <span className="font-bold">Total</span>

                            <div>
                                <span className="line-through text-sm text-gray-500">₹2,101.02</span>
                                <span className="font-bold ml-2">₹1724.82</span>
                            </div>
                        </div>

                        <h2 className="text-violet-600 mb-4">Have a coupon code?</h2>

                        <div className="flex gap-2">
                            <Link to="/price">
                                <button className="border mr-2 border-black p-2 w-40 rounded-2xl bg-emerald-400 text-black font-bold shadow-2xl hover:bg-emerald-300">Cancel</button>
                            </Link>
                            <button onClick={displayRazorpay} className="border border-black p-2 w-40 rounded-2xl bg-emerald-400 text-black font-bold shadow-2xl hover:bg-emerald-300">Pay Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Payment2;