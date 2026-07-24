import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    FaCheckCircle,
    FaClock,
    FaTimesCircle,
    FaSearch,
    FaCalendarAlt,
} from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function EmployeeAttendance() {
    const email = localStorage.getItem("email");

    const [attendance, setAttendance] = useState([]);
    const [filteredAttendance, setFilteredAttendance] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const [presentCount, setPresentCount] = useState(0);
    const [halfDayCount, setHalfDayCount] = useState(0);
    const [absentCount, setAbsentCount] = useState(0);

    useEffect(() => {
        fetchAttendance();
    }, []);

    const fetchAttendance = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3001/api/user/myattendance/${email}`
            );

            setAttendance(response.data);
            setFilteredAttendance(response.data);

            calculateSummary(response.data);

            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    const calculateSummary = (data) => {
        let present = 0;
        let half = 0;
        let absent = 0;

        data.forEach((item) => {
            if (item.status === "Present") present++;
            else if (item.status === "Half Day") half++;
            else absent++;
        });

        setPresentCount(present);
        setHalfDayCount(half);
        setAbsentCount(absent);
    };

    useEffect(() => {
        if (search === "") {
            setFilteredAttendance(attendance);
            return;
        }

        const result = attendance.filter(
            (item) =>
                item.date.toLowerCase().includes(search.toLowerCase()) ||
                item.status.toLowerCase().includes(search.toLowerCase())
        );

        setFilteredAttendance(result);
    }, [search, attendance]);

    return (
        <div className="min-h-screen bg-slate-100 p-8">

            {/* Heading */}
       
                 <Link to="/hr">
                    <button className="absolute top-20 left-6 bg-white p-3 rounded-xl shadow-md hover:bg-gray-100 transition">
                        <IoMdArrowBack size={22} />
                    </button>
                </Link>
           

            <div className="mb-8 ms-20">

                <h1 className="text-4xl font-bold text-slate-800">
                    My Attendance
                </h1>

                <p className="text-gray-500 mt-2">
                    View your attendance history and daily records.
                </p>

            </div>

            {/* Summary Cards */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Present */}

                <div className="bg-white rounded-2xl shadow-lg p-6 border-l-8 border-green-500">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-500 font-semibold">
                                Present
                            </p>

                            <h2 className="text-4xl font-bold mt-3 text-green-600">
                                {presentCount}
                            </h2>

                        </div>

                        <FaCheckCircle
                            size={50}
                            className="text-green-500"
                        />

                    </div>

                </div>

                {/* Half Day */}

                <div className="bg-white rounded-2xl shadow-lg p-6 border-l-8 border-yellow-500">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-500 font-semibold">
                                Half Day
                            </p>

                            <h2 className="text-4xl font-bold mt-3 text-yellow-500">
                                {halfDayCount}
                            </h2>

                        </div>

                        <FaClock
                            size={50}
                            className="text-yellow-500"
                        />

                    </div>

                </div>

                {/* Absent */}

                <div className="bg-white rounded-2xl shadow-lg p-6 border-l-8 border-red-500">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-500 font-semibold">
                                Absent
                            </p>

                            <h2 className="text-4xl font-bold mt-3 text-red-600">
                                {absentCount}
                            </h2>

                        </div>

                        <FaTimesCircle
                            size={50}
                            className="text-red-500"
                        />

                    </div>

                </div>

            </div>

            {/* Search Box */}

            <div className="bg-white mt-8 rounded-2xl shadow-lg p-5 flex flex-col md:flex-row justify-between gap-5">

                <div className="relative w-full md:w-96">

                    <FaSearch className="absolute top-4 left-4 text-gray-400" />

                    <input
                        type="text"
                        placeholder="Search by date or status..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>

                <div className="flex items-center gap-3 text-gray-600 font-semibold">

                    <FaCalendarAlt />

                    Total Records : {filteredAttendance.length}

                </div>

            </div>
            {/* Attendance Table */}

            <div className="bg-white mt-8 rounded-2xl shadow-lg overflow-hidden">

                {loading ? (

                    <div className="flex justify-center items-center h-72">

                        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>

                    </div>

                ) : filteredAttendance.length === 0 ? (

                    <div className="flex flex-col justify-center items-center h-72">

                        <FaCalendarAlt
                            size={60}
                            className="text-gray-400 mb-4"
                        />

                        <h2 className="text-2xl font-bold text-gray-600">
                            No Attendance Found
                        </h2>

                        <p className="text-gray-400 mt-2">
                            Your attendance records will appear here.
                        </p>

                    </div>

                ) : (

                    <div className="overflow-x-auto">

                        <table className="min-w-full">

                            <thead className="bg-blue-600 text-white">

                                <tr>

                                    <th className="px-6 py-4 text-left">
                                        Date
                                    </th>

                                    <th className="px-6 py-4 text-left">
                                        Login Time
                                    </th>

                                    <th className="px-6 py-4 text-left">
                                        Logout Time
                                    </th>

                                    <th className="px-6 py-4 text-left">
                                        Working Hours
                                    </th>

                                    <th className="px-6 py-4 text-center">
                                        Status
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {filteredAttendance.map((item, index) => {

                                    return (

                                        <tr
                                            key={item._id}
                                            className={`${index % 2 === 0
                                                    ? "bg-gray-50"
                                                    : "bg-white"
                                                } hover:bg-blue-50 duration-200`}
                                        >

                                            <td className="px-6 py-4 font-medium text-gray-700">
                                                {item.date}
                                            </td>

                                            <td className="px-6 py-4">
                                                {item.loginTime}
                                            </td>

                                            <td className="px-6 py-4">

                                                {item.logoutTime === ""
                                                    ? "--"
                                                    : item.logoutTime}

                                            </td>

                                            <td className="px-6 py-4">

                                                {item.workingHours
                                                    ? item.workingHours
                                                    : "--"}

                                            </td>

                                            <td className="px-6 py-4 text-center">

                                                {item.status === "Present" && (

                                                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">

                                                        Present

                                                    </span>

                                                )}

                                                {item.status === "Half Day" && (

                                                    <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">

                                                        Half Day

                                                    </span>

                                                )}

                                                {item.status === "Absent" && (

                                                    <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">

                                                        Absent

                                                    </span>

                                                )}

                                            </td>

                                        </tr>

                                    );

                                })}

                            </tbody>

                        </table>

                    </div>

                )}

            </div>
            {/* Footer */}

            <div className="mt-8 text-center text-gray-500 text-sm">

                © 2026 HireKaro HRMS • Employee Attendance Portal

            </div>

        </div>
    );
}

export default EmployeeAttendance;