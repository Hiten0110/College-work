import React, { useState } from "react";
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
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { IoMdPersonAdd } from "react-icons/io";

function HrSidebar() {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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

  const navContent = (
    <>
      <div className="px-6 py-6 flex items-center justify-between">
        <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-wider">
          HIREKARO
        </h1>
        <button
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden text-gray-400 hover:text-white p-1"
        >
          <FaTimes size={20} />
        </button>
      </div>

      <div className="px-4 space-y-1">
        {menu.map((item, index) => (
          item.name === "Logout" ? (
            <button
              key={index}
              onClick={() => {
                setIsMobileOpen(false);
                handleLogout();
              }}
              className="w-full flex items-center gap-4 px-4 py-3 text-sm lg:text-base font-medium rounded-xl hover:bg-slate-800 hover:text-white transition text-left text-gray-300"
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ) : (
            <Link
              key={index}
              to={item.link}
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center gap-4 px-4 py-3 text-sm lg:text-base font-medium rounded-xl hover:bg-slate-800 hover:text-white transition text-gray-300"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          )
        ))}
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="bg-slate-950 text-white p-3 rounded-xl shadow-lg hover:bg-slate-800 focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          {isMobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar Content */}
      <div className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-slate-950 z-50 transform transition-transform duration-300 ease-in-out ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {navContent}
      </div>

      {/* Desktop Permanent Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 bg-slate-950 text-gray-300 min-h-screen sticky top-0 shrink-0">
        {navContent}
      </aside>
    </>
  );
}

export default HrSidebar;