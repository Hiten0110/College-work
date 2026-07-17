import React from "react";
import {
  FaHome,
  FaUser,
  FaClock,
  FaMoneyBillWave,
  FaComments,
  FaChartPie,
  FaHeadset,
} from "react-icons/fa";

function HrSidebar() {
  const menu = [
    { name: "Home", icon: <FaHome size={20} />, link: "#dashboard" },
    { name: "Me", icon: <FaUser size={20} />, link: "/me" },
    { name: "Attendance", icon: <FaClock size={20} />, link: "#attendance" },
    { name: "HR Help", icon: <FaHeadset size={20} />, link: "#polls" },
    { name: "Finance", icon: <FaMoneyBillWave size={20} />, link: "#holidays" },
    { name: "Social", icon: <FaComments size={20} />, link: "#polls" },
    { name: "Performance", icon: <FaChartPie size={20} />, link: "#team" },
  ];

  return (
    <aside className="w-72 bg-slate-950 text-gray-300 min-h-screen sticky top-0">

      <div className="px-8 py-8">
        <h1 className="text-3xl font-bold text-white">
          HIREKARO
        </h1>
      </div>

      <div className="px-5">

        {menu.map((item, index) => (

          <a
            key={index}
            href={item.link}
            className="flex items-center gap-4 px-4 py-4 mb-2 rounded-xl hover:bg-slate-800 hover:text-white transition"
          >

            {item.icon}

            <span>{item.name}</span>

          </a>

        ))}

      </div>

    </aside>
  );
}

export default HrSidebar;