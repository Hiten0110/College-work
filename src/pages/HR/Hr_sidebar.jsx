import {
  FaHome,
  FaUser,
  FaClock,
  FaMoneyBillWave,
  FaComments,
  FaChartPie,
  FaHeadset,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

function Hr_sidebar() {
  const location = useLocation();

  const menu = [
    {
      name: "Home",
      icon: <FaHome size={20} />,
      path: "/hr",
    },
    {
      name: "Me",
      icon: <FaUser size={20} />,
      path: "/hr/profile",
    },
    {
      name: "Attendance",
      icon: <FaClock size={20} />,
      path: "/hr/attendance",
    },
    {
      name: "HR Help",
      icon: <FaHeadset size={20} />,
      path: "/hr/help",
    },
    {
      name: "Finance",
      icon: <FaMoneyBillWave size={20} />,
      path: "/hr/payroll",
    },
    {
      name: "Social",
      icon: <FaComments size={20} />,
      path: "/hr/social",
    },
    {
      name: "Performance",
      icon: <FaChartPie size={20} />,
      path: "/hr/performance",
    },
  ];

  return (
    <aside className="w-72 h-screen bg-slate-950 text-gray-300 border-r border-slate-800 flex flex-col">

      {/* Logo */}
      <div className="px-8 py-8">
        <h1 className="text-3xl font-bold text-white tracking-wide">
          HIREKARO
        </h1>
      </div>

      {/* Menu */}
      <div className="flex-1 px-5">

        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-4 px-4 py-4 rounded-xl mb-2 transition-all duration-300 ${
              location.pathname === item.path
                ? "bg-slate-800 text-white"
                : "hover:bg-slate-800 hover:text-white"
            }`}
          >
            {item.icon}

            <span className="text-base font-medium">
              {item.name}
            </span>
          </Link>
        ))}

        {/* Helix AI */}

        <Link
          to="/hr/ai"
          className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-slate-800 transition-all duration-300 mt-2"
        >
          <div className="relative text-xl">
            🤖
            <span className="absolute -top-2 -right-5 bg-yellow-400 text-black text-[9px] px-1 rounded">
              NEW
            </span>
          </div>

          <span className="text-base font-medium text-white">
            Helix AI
          </span>
        </Link>

      </div>

      {/* Bottom Team Section */}

      <div className="px-5 pb-8">
        <p className="text-gray-500 text-sm font-semibold mb-4">
          YOUR TEAM
        </p>

        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 cursor-pointer transition">
          <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-white font-bold">
            H
          </div>

          <span className="text-white font-medium">
            HR Team
          </span>
        </div>
      </div>

    </aside>
  );
}

export default Hr_sidebar;