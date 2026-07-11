import {
  FaTachometerAlt,
  FaClock,
  FaCalendarAlt,
  FaHeartbeat,
  FaLaptopHouse,
  FaClipboardList,
  FaUsers,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

function Hr_topbar() {
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/hr",
    },
    {
      name: "Time Tracking",
      icon: <FaClock />,
      path: "/hr/time-tracking",
    },
    {
      name: "Leaves",
      icon: <FaCalendarAlt />,
      path: "/hr/leaves",
    },
    {
      name: "Regularization",
      icon: <FaHeartbeat />,
      path: "/hr/regularization",
    },
    {
      name: "Work From Home",
      icon: <FaLaptopHouse />,
      path: "/hr/wfh",
    },
    {
      name: "Comp-off",
      icon: <FaClipboardList />,
      path: "/hr/compoff",
    },
    {
      name: "Roster",
      icon: <FaUsers />,
      path: "/hr/roster",
    },
  ];

  return (
    <div className="w-full h-16 bg-white border-b border-gray-200 flex items-center px-4 shadow-sm">

      {menu.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex items-center gap-2 px-5 h-full text-sm font-medium transition-all
          ${
            location.pathname === item.path
              ? "border-b-4 border-blue-600 text-blue-600 bg-blue-50"
              : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
          }`}
        >
          {item.icon}
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default Hr_topbar;