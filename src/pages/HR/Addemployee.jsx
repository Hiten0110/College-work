import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

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
            const response = await fetch(
                "http://localhost:3001/api/employee/add",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(employee),
                }
            );

            const result = await response.json();

            if (!response.ok) {
                alert(result.message);
                return;
            }

            alert("Employee Added Successfully!");

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

            navigate("/employees");

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 py-10">
            <Link to="/hr">
                <button className="absolute top-6 left-6 bg-white p-3 rounded-xl shadow-md hover:bg-gray-100 transition">
                    <IoMdArrowBack size={22} />
                </button>
            </Link>

            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">

                <h1 className="text-4xl font-bold text-blue-600 mb-2">
                    Add Employee
                </h1>

                <p className="text-gray-500 mb-8">
                    Fill in the employee details.
                </p>

                <form
                    onSubmit={addEmployee}
                    className="grid grid-cols-2 gap-6"
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