import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { toast } from "react-toastify";
import API from "../../api/axios";

function AddEmployee() {
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        gender: "",
        department: "",
        designation: "",
        joiningDate: "",
        salary: "",
        address: "",
        employmentType: "",
        status: "Active",
    });

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value,
        });
    };

    const addEmployee = async (e) => {
        e.preventDefault();

        try {
            const response = await API.post("/api/user/addemployee", employee);
            toast.success("Employee Added Successfully!");

            setEmployee({
                name: "",
                email: "",
                password: "",
                phone: "",
                gender: "",
                department: "",
                designation: "",
                joiningDate: "",
                salary: "",
                address: "",
                employmentType: "",
                status: "Active",
            });

            // navigate("/employees");

        } catch (err) {
            toast.error(err.response?.data?.message || "Failed to add employee");
        }
    };

    return (
        <div className="bg-slate-100 min-h-screen px-4 sm:px-8 py-6 sm:py-12 flex items-center justify-center">

            <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-10">

                <div className="flex items-center gap-4 mb-6 sm:mb-8 border-b pb-4 sm:pb-6">
                    <Link to="/hr">
                        <button className="bg-slate-100 hover:bg-slate-200 p-3 rounded-xl shadow-sm transition flex items-center justify-center text-slate-800 shrink-0">
                            <IoMdArrowBack size={22} />
                        </button>
                    </Link>
                    <div>
                        <h1 className="text-2xl sm:text-4xl font-bold text-blue-600">
                            Add Employee
                        </h1>
                        <p className="text-gray-500 mt-0.5 text-xs sm:text-base">
                            Fill in the employee details.
                        </p>
                    </div>
                </div>

                <form
                    onSubmit={addEmployee}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                >

                    <div>
                        <label className="font-semibold">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={employee.name}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={employee.email}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={employee.password}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            Phone Number
                        </label>

                        <input
                            type="text"
                            name="phone"
                            value={employee.phone}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            Gender
                        </label>

                        <select
                            name="gender"
                            value={employee.gender}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        >
                            <option value="">Select</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="font-semibold">
                            Department
                        </label>

                        <select
                            name="department"
                            value={employee.department}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        >
                            <option value="">Select</option>
                            <option>HR</option>
                            <option>IT</option>
                            <option>Finance</option>
                            <option>Marketing</option>
                            <option>Sales</option>
                        </select>
                    </div>

                    <div>
                        <label className="font-semibold">
                            Designation
                        </label>

                        <input
                            type="text"
                            name="designation"
                            value={employee.designation}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            Joining Date
                        </label>

                        <input
                            type="date"
                            name="joiningDate"
                            value={employee.joiningDate}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            Salary
                        </label>

                        <input
                            type="number"
                            name="salary"
                            value={employee.salary}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            Employment Type
                        </label>

                        <select
                            name="employmentType"
                            value={employee.employmentType}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        >
                            <option value="">Select</option>
                            <option>Full Time</option>
                            <option>Part Time</option>
                            <option>Intern</option>
                        </select>
                    </div>

                    <div className="col-span-2">
                        <label className="font-semibold">
                            Address
                        </label>

                        <textarea
                            rows="4"
                            name="address"
                            value={employee.address}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">
                            Status
                        </label>

                        <select
                            name="status"
                            value={employee.status}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 mt-2"
                        >
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>

                    <div className="col-span-2 flex justify-end">

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-xl text-lg font-semibold"
                        >
                            Add Employee
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default AddEmployee;