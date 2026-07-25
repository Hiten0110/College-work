import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../api/axios";

function ResetPassword() {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const email = localStorage.getItem("resetEmail");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!password || !confirmPassword) {
            toast.warn("Please fill all password fields");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            setLoading(true);
            const res = await API.put("/api/user/resetpassword", { email, password });
            toast.success(res.data.message || "Password reset successfully! Please sign in.");
            localStorage.removeItem("resetEmail");
            navigate("/signin");
        } catch (err) {
            toast.error(
                err.response?.data?.message ||
                "Failed to reset password"
            );
        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 py-8">

            <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 w-full max-w-md">

                <h2 className="text-3xl font-bold text-center text-blue-700">
                    Reset Password
                </h2>

                <p className="text-center text-gray-500 mt-2 mb-6">
                    Create a new password
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="mb-4">

                        <label className="block mb-2 font-medium">
                            New Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>

                    <div className="mb-6">

                        <label className="block mb-2 font-medium">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
                    >
                        {loading ? "Updating..." : "Change Password"}
                    </button>

                </form>

            </div>

        </div>

    );

}

export default ResetPassword;