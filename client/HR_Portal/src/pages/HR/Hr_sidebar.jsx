import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaClock,
  FaMoneyBillWave,
  FaComments,
  FaChartPie,
  FaHeadset,
} from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { IoMdPersonAdd } from "react-icons/io";

function HrSidebar() {
  const navigate = useNavigate();

  const menu = [
    { name: "Home", icon: <FaHome size={20} />, link: "#dashboard" },
    { name: "Me", icon: <FaUser size={20} />, link: "/me" },
    { name: "Add Employee", icon: <IoMdPersonAdd size={20} />, link: "/addemp" },
    { name: "Attendance", icon: <FaClock size={20} />, link: "/attend" },
    { name: "HR Help", icon: <FaHeadset size={20} />, link: "#polls" },
    { name: "Finance", icon: <FaMoneyBillWave size={20} />, link: "#holidays" },
    { name: "Social", icon: <FaComments size={20} />, link: "#polls" },
    { name: "Performance", icon: <FaChartPie size={20} />, link: "#team" },
    { name: "Logout", icon: <CiLogout size={20} />, link: "/signin" },
  ];

  const handleLogout = async () => {
    try {
      const email = localStorage.getItem("email");

      await axios.put("http://localhost:3001/api/user/logout", {
        email,
      });

    } catch (err) {
      console.log(err);
    }

    localStorage.clear();

    navigate("/signin");
  };

  return (
    <aside className="w-72 bg-slate-950 text-gray-300 min-h-screen sticky top-0">

      <div className="px-8 py-8">
        <h1 className="text-3xl font-bold text-white">
          HIREKARO
        </h1>
      </div>

      <div className="px-5">

        {menu.map((item, index) => (

          item.name === "Logout" ? (

            <button
              key={index}
              onClick={handleLogout}
              className="w-full flex items-center gap-4 px-4 py-4 mb-2 rounded-xl hover:bg-slate-800 hover:text-white transition text-left"
            >
              {item.icon}
              <span>{item.name}</span>
            </button>

          ) : (

            <Link
              key={index}
              to={item.link}
              className="flex items-center gap-4 px-4 py-4 mb-2 rounded-xl hover:bg-slate-800 hover:text-white transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>

          )

        ))}

      </div>

    </aside>
  );
}

export default HrSidebar;