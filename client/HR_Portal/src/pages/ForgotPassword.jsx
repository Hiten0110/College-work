import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../api/axios";

function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            toast.warn("Please enter your email");
            return;
        }

        try {
            setLoading(true);
            const res = await API.post("/api/user/forgotpassword", { email });
            toast.success(res.data.message || "OTP sent to your email!");
            localStorage.setItem("resetEmail", email);
            navigate("/verifyotp");
        } catch (err) {
            toast.error(
                err.response?.data?.message ||
                "Something went wrong while sending OTP"
            );
        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 py-8">

            <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 w-full max-w-md">

                <h2 className="text-3xl font-bold text-center text-blue-700">
                    Forgot Password
                </h2>

                <p className="text-center text-gray-500 mt-2 mb-6">
                    Enter your registered email address
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="mb-5">

                        <label className="block mb-2 font-medium">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
                    >

                        {loading ? "Sending OTP..." : "Send OTP"}

                    </button>

                </form>

            </div>

        </div>

    );
}

export default ForgotPassword;