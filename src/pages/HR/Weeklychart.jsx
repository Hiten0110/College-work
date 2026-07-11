import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import Attendance from "./Attendance";

function Dashboard() {
  // ---------------- Chart Data ----------------

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

  // ---------------- Holiday Data ----------------

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

  // ---------------- Team Data ----------------

  const team = [
    { id: 1, name: "Rahul Sharma", status: "Present" },
    { id: 2, name: "Priya Singh", status: "Leave" },
    { id: 3, name: "Aman Verma", status: "Present" },
    { id: 4, name: "Neha Gupta", status: "WFH" },
    { id: 5, name: "Rohan Kumar", status: "Present" },
  ];

  return (
    <div className="p-6 space-y-6">

      {/* Charts Section */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Bar Chart */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-6">
            Last 7 Days Summary
          </h2>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="hours"
                fill="#22c55e"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="w-full lg:w-96 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-center mb-6">
            Today's Summary
          </h2>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
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

      {/* Tables Section */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Holiday List */}
        <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden">

          <div className="p-4 border-b bg-white">
            <h2 className="text-lg font-semibold">
              📅 Holiday List
            </h2>
          </div>

          <div className="h-80 overflow-y-auto">
            <table className="w-full">
              <thead className="bg-gray-100 sticky top-0 z-10">
                <tr>
                  <th className="p-3 text-left">S.No</th>
                  <th className="p-3 text-left">Holiday Name</th>
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
        <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden">

          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">
              👥 Team Members
            </h2>
          </div>

          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">S.No</th>
                <th className="p-3 text-left">Name</th>
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
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${member.status === "Present"
                        ? "bg-green-100 text-green-700"
                        : member.status === "Leave"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                        }`}
                    >
                      {member.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>

      {/* Polls & Announcements */}

      <div className="flex gap-6 mt-6">

        {/* Polls */}
        <div className="w-1/2 bg-white rounded-xl shadow-lg overflow-hidden">

          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              📊 Polls
            </h2>

            <span className="bg-gray-100 px-2 py-1 rounded text-sm">
              0
            </span>
          </div>

          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Questions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-5 text-gray-500">
                  No Polls List
                </td>
              </tr>
            </tbody>
          </table>

        </div>

        {/* Announcements */}
        <div className="w-1/2 bg-white rounded-xl shadow-lg overflow-hidden">

          <div className="flex justify-between items-center p-4 border-b">

            <h2 className="text-lg font-semibold flex items-center gap-2">
              📢 Announcements
            </h2>

            <div className="flex items-center gap-4 text-sm">

              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                High (0)
              </span>

              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                Medium (0)
              </span>

              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                Low (2)
              </span>

            </div>

          </div>

          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">S.No</th>
                <th className="p-3 text-left">Announcements</th>
                <th className="p-3 text-left">Date</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">1</td>
                <td className="p-3">
                  <span className="text-gray-400 mr-2">●</span>
                  Welcome Aboard !!!
                </td>
                <td className="p-3">10/07/2026</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
      <Attendance/>
    </div>
  );
}

export default Dashboard;