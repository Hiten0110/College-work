import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiTwotoneDatabase } from "react-icons/ai";
import { FaPercent } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { TbTaxEuro } from "react-icons/tb";
import { toast } from "react-toastify";
import img from "./public/hirekarologo.png";
import API from "./src/api/axios";

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
            toast.error("Razorpay SDK failed to load. Are you online?");
            return;
        }
        try {
            const result = await API.post("/api/payment/orders", { amount: 159900 });
            const { amount, id: order_id, currency } = result.data;
            const options = {
                key: "rzp_test_SjOOD4SfcQ88sp",
                amount: amount.toString(),
                currency: currency,
                name: "HireKaro",
                description: "Executive Plan Subscription",
                order_id: order_id,
                handler: async function (response) {
                    const data = {
                        orderCreationId: order_id,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                    };
                    await API.post("/api/payment/success", data);
                    successSound.current.play().catch(() => {});
                    toast.success("Payment Successful!");
                    navigate("/thankyou");
                },
                prefill: {
                    name: localStorage.getItem("username") || "User",
                    email: localStorage.getItem("email") || "user@example.com",
                    contact: localStorage.getItem("phone") || "9999999999",
                },
                theme: {
                    color: "#2563eb",
                },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (err) {
            toast.error("Payment initiation failed. Please try again.");
        }
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
            <div className="w-full flex justify-center mt-10 sm:mt-20 px-4">
                <h2 className="text-white font-bold text-xl sm:text-2xl w-full max-w-5xl">Your Cart</h2>
            </div>

            {/* Main Container */}
            <div className="flex flex-col lg:flex-row justify-center items-start gap-5 px-4 max-w-5xl mx-auto mb-20">

                {/* Left Div */}
                <div className="bg-white w-full lg:w-3/5 rounded-2xl shadow-2xl p-4 sm:p-6">

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