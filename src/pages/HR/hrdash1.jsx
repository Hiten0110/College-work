import React from "react";

import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,PieChart,Pie,Cell,Legend,} from "recharts";
import {FaHome,FaUser,FaClock,FaMoneyBillWave,FaComments,FaChartPie,FaHeadset,FaTachometerAlt,FaCalendarAlt,FaClipboardList,FaUsers,} from "react-icons/fa";
import HrSidebar from "./Hr_sidebar";

function Hrdash1() {


const barData = [
  { day: "Mon", hours: 8 },
  { day: "Tue", hours: 7 },
  { day: "Wed", hours: 8.5 },
  { day: "Thu", hours: 6.5 },
  { day: "Fri", hours: 8 },
  { day: "Sat", hours: 5 },
  { day: "Sun", hours: 0 },
];

const pieData = [
  { name: "Present", value: 18 },
  { name: "Leave", value: 4 },
  { name: "Absent", value: 2 },
];

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const holidays = [
    { id: 1, name: "New Year's Day", date: "01 Jan 2026" },
    { id: 2, name: "Lohri", date: "13 Jan 2026" },
    { id: 3, name: "Makar Sankranti / Pongal", date: "14 Jan 2026" },
    { id: 4, name: "Republic Day", date: "26 Jan 2026" },
    { id: 5, name: "Maha Shivratri", date: "15 Feb 2026" },
    { id: 6, name: "Holi", date: "04 Mar 2026" },
    { id: 7, name: "Ram Navami", date: "26 Mar 2026" },
    { id: 8, name: "Mahavir Jayanti", date: "02 Apr 2026" },
    { id: 9, name: "Good Friday", date: "03 Apr 2026" },
    { id: 10, name: "Baisakhi / Vaisakhi", date: "14 Apr 2026" },
    { id: 11, name: "Dr. B.R. Ambedkar Jayanti", date: "14 Apr 2026" },
    { id: 12, name: "Eid-ul-Fitr", date: "20 Apr 2026" },
    { id: 13, name: "Buddha Purnima", date: "01 May 2026" },
    { id: 14, name: "Bakrid (Eid-ul-Adha)", date: "27 May 2026" },
    { id: 15, name: "Muharram", date: "16 Jun 2026" },
    { id: 16, name: "Raksha Bandhan", date: "28 Aug 2026" },
    { id: 17, name: "Janmashtami", date: "05 Sep 2026" },
    { id: 18, name: "Milad-un-Nabi", date: "16 Sep 2026" },
    { id: 19, name: "Mahatma Gandhi Jayanti", date: "02 Oct 2026" },
    { id: 20, name: "Dussehra (Vijayadashami)", date: "20 Oct 2026" },
    { id: 21, name: "Diwali", date: "08 Nov 2026" },
    { id: 22, name: "Guru Nanak Jayanti", date: "24 Nov 2026" },
    { id: 23, name: "Christmas", date: "25 Dec 2026" },
  ];

    const team = [
    { id: 1, name: "Rahul Sharma", status: "Present" },
    { id: 2, name: "Priya Singh", status: "Leave" },
    { id: 3, name: "Aman Verma", status: "Present" },
    { id: 4, name: "Neha Gupta", status: "WFH" },
    { id: 5, name: "Rohan Kumar", status: "Present" },
  ];

const dates = [
  // Previous Month (June)
  { day: 29, month: "prev" },
  { day: 30, month: "prev" },

  // July
  { day: 1, status: "Present", hours: "08:42" },
  { day: 2, status: "Present", hours: "08:15" },
  { day: 3, status: "Present", hours: "08:31" },
  { day: 4, status: "Off" },
  { day: 5, status: "Off" },

  { day: 6, status: "Present", hours: "08:20" },
  { day: 7, status: "Present", hours: "08:40" },
  { day: 8, status: "Present", hours: "08:28" },
  { day: 9, status: "Present", hours: "08:36" },
  { day: 10, status: "Present", hours: "08:14" },
  { day: 11, status: "Off" },
  { day: 12, status: "Off" },

  { day: 13, status: "Present", hours: "08:30" },
  { day: 14, status: "Present", hours: "08:44" },
  { day: 15, status: "Leave" },
  { day: 16, status: "Present", hours: "08:25" },
  { day: 17, status: "Present", hours: "08:17" },
  { day: 18, status: "Off" },
  { day: 19, status: "Off" },

  { day: 20, status: "Present", hours: "08:38" },
  { day: 21, status: "Present", hours: "08:19" },
  { day: 22, status: "Partial", hours: "07:22" },
  { day: 23, status: "Present", hours: "08:33" },
  { day: 24, status: "Present", hours: "08:29" },
  { day: 25, status: "Off" },
  { day: 26, status: "Off" },

  { day: 27, status: "Present", hours: "08:18" },
  { day: 28, status: "Present", hours: "08:35" },
  { day: 29, status: "Present", hours: "08:27" },
  { day: 30, status: "Present", hours: "08:41" },
  { day: 31, status: "Present", hours: "08:12" },

  // Next Month (August)
  { day: 1, month: "next" },
  { day: 2, month: "next" },
];

  return (

    <div className="flex bg-gray-100 min-h-screen">

      {/* ================= Sidebar ================= */}

      <HrSidebar/>

      {/* ================= Right Side ================= */}

      <div className="flex-1">

        {/* ================= Top Navigation ================= */}

        <div className="bg-white shadow-sm border-b sticky top-0 z-40">

          <div className="flex items-center overflow-x-auto">

            <a
              href="#dashboard"
              className="flex items-center gap-2 px-6 h-20 hover:bg-blue-50 hover:text-blue-600 transition"
            >

              <FaTachometerAlt />

              Dashboard

            </a>

            <a
              href="#holidays"
              className="flex items-center gap-2 px-6 h-20 hover:bg-blue-50 hover:text-blue-600 transition"
            >

              <FaCalendarAlt />

              Holidays

            </a>

            <a
              href="#polls"
              className="flex items-center gap-2 px-6 h-20 hover:bg-blue-50 hover:text-blue-600 transition"
            >

              <FaComments />

              Polls

            </a>

            <a
              href="#attendance"
              className="flex items-center gap-2 px-6 h-20 hover:bg-blue-50 hover:text-blue-600 transition"
            >

              <FaClock />

              Attendance

            </a>

            <a
              href="#team"
              className="flex items-center gap-2 px-6 h-20 hover:bg-blue-50 hover:text-blue-600 transition"
            >

              <FaUsers />

              Team

            </a>

          </div>

        </div>

        {/* ================= Main Content ================= */}

       <div className="p-6 space-y-10">

        {/* ================= Dashboard ================= */}

<section id="dashboard">

  <h1 className="text-3xl font-bold text-gray-800 mb-6">
    Dashboard
  </h1>

  {/* Summary Cards */}

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-gray-500 text-sm">Present Today</h3>
      <h1 className="text-4xl font-bold text-green-600 mt-3">182</h1>
      <p className="text-green-500 mt-2 text-sm">
        +8 from yesterday
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-gray-500 text-sm">On Leave</h3>
      <h1 className="text-4xl font-bold text-yellow-500 mt-3">12</h1>
      <p className="text-yellow-500 mt-2 text-sm">
        Approved Leaves
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-gray-500 text-sm">Absent</h3>
      <h1 className="text-4xl font-bold text-red-500 mt-3">5</h1>
      <p className="text-red-500 mt-2 text-sm">
        Need Attention
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-gray-500 text-sm">Work From Home</h3>
      <h1 className="text-4xl font-bold text-blue-600 mt-3">24</h1>
      <p className="text-blue-500 mt-2 text-sm">
        Remote Employees
      </p>
    </div>

  </div>

  {/* Charts */}

  <div className="grid lg:grid-cols-3 gap-6 mt-8">

    {/* Bar Chart */}

    <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-5">
        Attendance (Last 7 Days)
      </h2>

      <ResponsiveContainer width="100%" height={320}>

        <BarChart data={barData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="hours"
            fill="#2563EB"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

    {/* Pie Chart */}

    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-xl font-semibold text-center mb-5">
        Today's Summary
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <PieChart>

          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={90}
            label
          >

            {pieData.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index]}
              />

            ))}

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>

  </div>

</section>

{/* ================= Holidays & Team ================= */}

<section id="holidays" className="grid lg:grid-cols-2 gap-6">

  {/* Holiday List */}

  <div className="bg-white rounded-xl shadow-md overflow-hidden">

    <div className="p-4 border-b">
      <h2 className="text-xl font-semibold">📅 Holiday List</h2>
    </div>

    <div className="max-h-96 overflow-y-auto">

      <table className="w-full">

        <thead className="bg-gray-100 sticky top-0">

          <tr>
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">Holiday</th>
            <th className="p-3 text-left">Date</th>
          </tr>

        </thead>

        <tbody>

          {holidays.map((item) => (

            <tr
              key={item.id}
              className="border-b hover:bg-gray-50"
            >

              <td className="p-3">{item.id}</td>

              <td className="p-3">{item.name}</td>

              <td className="p-3">{item.date}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>

  {/* Team Members */}

  <section id="team">

    <div className="bg-white rounded-xl shadow-md overflow-hidden">

      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">👥 Team Members</h2>
      </div>

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">Employee</th>
            <th className="p-3 text-left">Status</th>
          </tr>

        </thead>

        <tbody>

          {team.map((member) => (

            <tr
              key={member.id}
              className="border-b hover:bg-gray-50"
            >

              <td className="p-3">{member.id}</td>

              <td className="p-3">{member.name}</td>

              <td className="p-3">

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold

                  ${
                    member.status === "Present"
                      ? "bg-green-100 text-green-700"

                      : member.status === "Leave"
                      ? "bg-yellow-100 text-yellow-700"

                      : "bg-blue-100 text-blue-700"
                  }

                  `}
                >

                  {member.status}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </section>

</section>

{/* ================= Polls & Announcements ================= */}

<section id="polls" className="grid lg:grid-cols-2 gap-6">

  {/* Polls */}

  <div className="bg-white rounded-xl shadow-md overflow-hidden">

    <div className="flex justify-between items-center p-4 border-b">

      <h2 className="text-xl font-semibold">

        📊 Polls

      </h2>

      <span className="bg-gray-100 px-3 py-1 rounded">

        0

      </span>

    </div>

    <div className="p-10 text-center text-gray-500">

      No Polls Available

    </div>

  </div>

  {/* Announcements */}

  <div className="bg-white rounded-xl shadow-md overflow-hidden">

    <div className="p-4 border-b">

      <h2 className="text-xl font-semibold">

        📢 Announcements

      </h2>

    </div>

    <table className="w-full">

      <thead className="bg-gray-100">

        <tr>

          <th className="p-3 text-left">#</th>

          <th className="p-3 text-left">Announcement</th>

          <th className="p-3 text-left">Date</th>

        </tr>

      </thead>

      <tbody>

        <tr className="border-b hover:bg-gray-50">

          <td className="p-3">1</td>

          <td className="p-3">

            Welcome to HireKaro HR Portal 🎉

          </td>

          <td className="p-3">

            14 Jul 2026

          </td>

        </tr>

        <tr className="border-b hover:bg-gray-50">

          <td className="p-3">2</td>

          <td className="p-3">

            Monthly Team Meeting on Friday

          </td>

          <td className="p-3">

            18 Jul 2026

          </td>

        </tr>

      </tbody>

    </table>

  </div>

</section>
{/* ================= Attendance ================= */}

<section id="attendance">

  <div className="bg-white rounded-xl shadow-md overflow-hidden">

    <div className="flex items-center justify-between p-5 border-b">

      <h2 className="text-2xl font-bold">

        Attendance Calendar

      </h2>

      <span className="text-blue-600 font-semibold">

        May 2026

      </span>

    </div>

    {/* Week Days */}

    <div className="grid grid-cols-7 bg-gray-100">

      {days.map((day) => (

        <div
          key={day}
          className="p-3 text-center font-semibold border"
        >

          {day}

        </div>

      ))}

    </div>

    {/* Calendar */}

    <div className="grid grid-cols-7">

      {dates.map((item, index) => (

        <div
          key={index}
          className="border h-32 p-3 hover:bg-gray-50 transition"
        >

          <h3
            className={`font-bold

              ${
                item.month === "prev" || item.month === "next"

                  ? "text-gray-400"

                  : "text-gray-800"

              }

            `}
          >

            {item.day}

          </h3>

          <div className="mt-3">

            {item.status === "Present" && (

              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">

                Present

              </span>

            )}

            {item.status === "Leave" && (

              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">

                Leave

              </span>

            )}

            {item.status === "Off" && (

              <span className="bg-gray-400 text-white px-3 py-1 rounded-full text-xs">

                Off

              </span>

            )}

            {item.status === "Partial" && (

              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs">

                Partial

              </span>

            )}

          </div>

          {item.hours && (

            <p className="mt-5 text-xs bg-gray-100 rounded p-2 text-center">

              {item.hours}

            </p>

          )}

        </div>

      ))}

    </div>

  </div>

</section>

</div>

</div>

</div>

);

}

export default Hrdash1;

