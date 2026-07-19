import React from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaUserShield } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function PersonalInfo() {
    const user = {
        name: "Hiten Mahendru",
        email: "hiten@gmail.com",
        phone: "9876543210",
        role: "HR",
    };

    return (
        <>

            <div className="min-h-screen bg-slate-100 p-8 relative">
                <Link to='/hr'>
                <button className="absolute top-6 left-6 bg-white p-3 rounded-xl shadow-md hover:bg-gray-100 transition">
                    <IoMdArrowBack size={22} />
                </button>
                </Link>
                <div className="w-[800px] mx-auto bg-white rounded-3xl shadow-xl p-8 mt-14">

                    <h1 className="text-4xl font-bold text-slate-800">
                        Personal Information
                    </h1>

                    <p className="text-gray-500 mt-2 mb-8">
                        View and manage your personal details.
                    </p>

                    {/* Name */}
                    <div className="flex items-center justify-between border rounded-2xl p-6 mb-6 hover:shadow-lg transition">
                        <div className="flex items-center gap-5">
                            <div className="bg-blue-100 p-4 rounded-xl">
                                <FaUser className="text-3xl text-blue-600" />
                            </div>

                            <div>
                                <h2 className="text-gray-500">Name</h2>
                                <h1 className="text-2xl font-semibold">{user.name}</h1>
                            </div>
                        </div>

                        <button className="text-blue-600 font-semibold hover:text-blue-800">
                            Edit
                        </button>
                    </div>

                    {/* Email */}
                    <div className="flex items-center justify-between border rounded-2xl p-6 mb-6 hover:shadow-lg transition">
                        <div className="flex items-center gap-5">
                            <div className="bg-blue-100 p-4 rounded-xl">
                                <FaEnvelope className="text-3xl text-blue-600" />
                            </div>

                            <div>
                                <h2 className="text-gray-500">Email</h2>
                                <h1 className="text-2xl font-semibold">{user.email}</h1>
                            </div>
                        </div>

                        <button className="text-blue-600 font-semibold hover:text-blue-800">
                            Edit
                        </button>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center justify-between border rounded-2xl p-6 mb-6 hover:shadow-lg transition">
                        <div className="flex items-center gap-5">
                            <div className="bg-blue-100 p-4 rounded-xl">
                                <FaPhoneAlt className="text-3xl text-blue-600" />
                            </div>

                            <div>
                                <h2 className="text-gray-500">Phone Number</h2>
                                <h1 className="text-2xl font-semibold">{user.phone}</h1>
                            </div>
                        </div>

                        <button className="text-blue-600 font-semibold hover:text-blue-800">
                            Edit
                        </button>
                    </div>

                    {/* Role */}
                    <div className="flex items-center justify-between border rounded-2xl p-6 hover:shadow-lg transition">
                        <div className="flex items-center gap-5">
                            <div className="bg-blue-100 p-4 rounded-xl">
                                <FaUserShield className="text-3xl text-blue-600" />
                            </div>

                            <div>
                                <h2 className="text-gray-500">Role</h2>
                                <h1 className="text-2xl font-semibold">{user.role}</h1>
                            </div>
                        </div>

                        <button className="text-blue-600 font-semibold hover:text-blue-800">
                            Edit
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default PersonalInfo;