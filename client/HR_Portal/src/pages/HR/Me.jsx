import React, { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaUserShield } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import API from "../../api/axios";

function PersonalInfo() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        loginas: ""
    });

    useEffect(() => {
        const email = localStorage.getItem("email");
        if (!email) return;

        API.get(`/api/user/getUser/${email}`)
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                // error handled silently
            });
    }, []);
        return (
            <div className="min-h-screen bg-slate-100 p-4 sm:p-8 flex items-center justify-center">

                <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8">

                    <div className="flex items-center gap-4 mb-6 sm:mb-8 border-b pb-4 sm:pb-6">
                        <Link to="/hr">
                            <button className="bg-slate-100 hover:bg-slate-200 p-3 rounded-xl shadow-sm transition flex items-center justify-center text-slate-800 shrink-0">
                                <IoMdArrowBack size={22} />
                            </button>
                        </Link>
                        <div>
                            <h1 className="text-2xl sm:text-4xl font-bold text-slate-800">
                                Personal Information
                            </h1>
                            <p className="text-gray-500 mt-0.5 text-xs sm:text-base">
                                View and manage your personal details.
                            </p>
                        </div>
                    </div>

                    {/* Name */}
                    <div className="flex items-center justify-between border rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 hover:shadow-lg transition">
                        <div className="flex items-center gap-3 sm:gap-5 min-w-0">
                            <div className="bg-blue-100 p-3 sm:p-4 rounded-xl shrink-0">
                                <FaUser className="text-xl sm:text-3xl text-blue-600" />
                            </div>
                            <div className="min-w-0">
                                <h2 className="text-gray-500 text-xs sm:text-sm">Name</h2>
                                <h1 className="text-base sm:text-2xl font-semibold break-words">{user.name}</h1>
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center justify-between border rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 hover:shadow-lg transition">
                        <div className="flex items-center gap-3 sm:gap-5 min-w-0">
                            <div className="bg-blue-100 p-3 sm:p-4 rounded-xl shrink-0">
                                <FaEnvelope className="text-xl sm:text-3xl text-blue-600" />
                            </div>
                            <div className="min-w-0">
                                <h2 className="text-gray-500 text-xs sm:text-sm">Email</h2>
                                <h1 className="text-base sm:text-2xl font-semibold break-all">{user.email}</h1>
                            </div>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center justify-between border rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 hover:shadow-lg transition">
                        <div className="flex items-center gap-3 sm:gap-5 min-w-0">
                            <div className="bg-blue-100 p-3 sm:p-4 rounded-xl shrink-0">
                                <FaPhoneAlt className="text-xl sm:text-3xl text-blue-600" />
                            </div>
                            <div className="min-w-0">
                                <h2 className="text-gray-500 text-xs sm:text-sm">Phone Number</h2>
                                <h1 className="text-base sm:text-2xl font-semibold break-words">{user.phone}</h1>
                            </div>
                        </div>
                    </div>

                    {/* Role */}
                    <div className="flex items-center justify-between border rounded-2xl p-4 sm:p-6 hover:shadow-lg transition">
                        <div className="flex items-center gap-3 sm:gap-5 min-w-0">
                            <div className="bg-blue-100 p-3 sm:p-4 rounded-xl shrink-0">
                                <FaUserShield className="text-xl sm:text-3xl text-blue-600" />
                            </div>
                            <div className="min-w-0">
                                <h2 className="text-gray-500 text-xs sm:text-sm">Role</h2>
                                <h1 className="text-base sm:text-2xl font-semibold break-words">{user.loginas}</h1>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }


export default PersonalInfo;