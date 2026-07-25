import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../api/axios";

function VerifyOTP() {
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const email = localStorage.getItem("resetEmail");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!otp) {
            toast.warn("Please enter OTP");
            return;
        }

        try {
            setLoading(true);
            const res = await API.post("/api/user/verifyotp", { email, otp });
            toast.success(res.data.message || "OTP verified successfully!");
            navigate("/resetpassword");
        } catch (err) {
            toast.error(
                err.response?.data?.message ||
                "Invalid OTP. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 py-8">

            <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 w-full max-w-md">

                <h2 className="text-3xl font-bold text-center text-blue-700">
                    Verify OTP
                </h2>

                <p className="text-center text-gray-500 mt-2 mb-6">
                    Enter the OTP sent to your email
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="mb-5">

                        <label className="block mb-2 font-medium">
                            OTP
                        </label>

                        <input
                            type="text"
                            maxLength="6"
                            placeholder="Enter 6-digit OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
                    >
                        {loading ? "Verifying..." : "Verify OTP"}
                    </button>

                </form>

            </div>

        </div>
    );
}

export default VerifyOTP;