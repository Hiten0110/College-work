import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function VerifyOTP() {
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const email = localStorage.getItem("resetEmail");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!otp) {
            alert("Please enter OTP");
            return;
        }

        try {
            setLoading(true);

            const res = await axios.post(
                "http://localhost:3001/api/user/verifyotp",
                {
                    email,
                    otp,
                }
            );

            alert(res.data.message);

            navigate("/resetpassword");

        } catch (err) {

            alert(
                err.response?.data?.message ||
                "Invalid OTP"
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

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