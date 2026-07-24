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
import Dash from "./Dash";

function Hr_topbar() {
  const location = useLocation();

  return (
    <div className="bg-white min-h-screen">
      <div className="w-320 h-20 bg-white border-b border-gray-200 flex items-center px-4 shadow-sm">

        {/* Dashboard */}
        <Link
          to="/dash"
          className={`flex items-center gap-2 px-5 h-full text-sm font-medium transition-all ${
            location.pathname === "/hr"
              ? "border-b-4 border-blue-600 text-blue-600 bg-blue-50"
              : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
          }`}
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </Link>

        {/* Time Tracking */}
        <Link
          to="/hr/time-tracking"
          className={`flex items-center gap-2 px-5 h-full text-sm font-medium transition-all ${
            location.pathname === "/hr/time-tracking"
              ? "border-b-4 border-blue-600 text-blue-600 bg-blue-50"
              : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
          }`}
        >
          <FaClock />
          <span>Time Tracking</span>
        </Link>

        {/* Leaves */}
        <Link
          to="/hr/leaves"
          className={`flex items-center gap-2 px-5 h-full text-sm font-medium transition-all ${
            location.pathname === "/hr/leaves"
              ? "border-b-4 border-blue-600 text-blue-600 bg-blue-50"
              : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
          }`}
        >
          <FaCalendarAlt />
          <span>Leaves</span>
        </Link>

        {/* Regularization */}
        <Link
          to="/hr/regularization"
          className={`flex items-center gap-2 px-5 h-full text-sm font-medium transition-all ${
            location.pathname === "/hr/regularization"
              ? "border-b-4 border-blue-600 text-blue-600 bg-blue-50"
              : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
          }`}
        >
          <FaHeartbeat />
          <span>Regularization</span>
        </Link>

        {/* Work From Home */}
        <Link
          to="/hr/wfh"
          className={`flex items-center gap-2 px-5 h-full text-sm font-medium transition-all ${
            location.pathname === "/hr/wfh"
              ? "border-b-4 border-blue-600 text-blue-600 bg-blue-50"
              : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
          }`}
        >
          <FaLaptopHouse />
          <span>Work From Home</span>
        </Link>

        {/* Comp-off */}
        <Link
          to="/hr/compoff"
          className={`flex items-center gap-2 px-5 h-full text-sm font-medium transition-all ${
            location.pathname === "/hr/compoff"
              ? "border-b-4 border-blue-600 text-blue-600 bg-blue-50"
              : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
          }`}
        >
          <FaClipboardList />
          <span>Comp-off</span>
        </Link>

        {/* Roster */}
        <Link
          to="/hr/roster"
          className={`flex items-center gap-2 px-5 h-full text-sm font-medium transition-all ${
            location.pathname === "/hr/roster"
              ? "border-b-4 border-blue-600 text-blue-600 bg-blue-50"
              : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
          }`}
        >
          <FaUsers />
          <span>Roster</span>
        </Link>

      </div>
  <Dash/>
   
    </div>
  );
}

export default Hr_topbar;