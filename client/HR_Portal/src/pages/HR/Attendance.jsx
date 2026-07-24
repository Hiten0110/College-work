import React from "react";

function Attendance() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dates = [
    { day: 26, month: "prev" },
    { day: 27, month: "prev" },
    { day: 28, month: "prev" },
    { day: 29, month: "prev" },
    { day: 30, month: "prev" },

    { day: 1, status: "Present", hours: "08:42" },
    { day: 2, status: "Off" },

    { day: 3, status: "Off" },
    { day: 4, status: "Present", hours: "08:02" },
    { day: 5, status: "Present", hours: "08:35" },
    { day: 6, status: "Present", hours: "08:29" },
    { day: 7, status: "Present", hours: "08:04" },
    { day: 8, status: "Present", hours: "08:39" },
    { day: 9, status: "Off" },

    { day: 10, status: "Off" },
    { day: 11, status: "Present", hours: "08:16" },
    { day: 12, status: "Partial", hours: "07:21" },
    { day: 13, status: "Present", hours: "08:40" },
    { day: 14, status: "Present", hours: "08:23" },
    { day: 15, status: "Present", hours: "08:18" },
    { day: 16, status: "Off" },

    { day: 17, status: "Off" },
    { day: 18, status: "Present", hours: "08:31" },
    { day: 19, status: "Present", hours: "08:20" },
    { day: 20, status: "Present", hours: "08:27" },
    { day: 21, status: "Leave" },
    { day: 22, status: "Present", hours: "08:44" },
    { day: 23, status: "Off" },

    { day: 24, status: "Off" },
    { day: 25, status: "Present", hours: "08:15" },
    { day: 26, status: "Present", hours: "08:33" },
    { day: 27, status: "Present", hours: "08:28" },
    { day: 28, status: "Present", hours: "08:11" },
    { day: 29, status: "Present", hours: "08:30" },
    { day: 30, status: "Off" },

    { day: 31, status: "Off" },

    { day: 1, month: "next" },
    { day: 2, month: "next" },
    { day: 3, month: "next" },
    { day: 4, month: "next" },
    { day: 5, month: "next" },
    { day: 6, month: "next" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg mt-6 overflow-hidden">

      {/* Header */}

      <div className="flex justify-between items-center p-5 border-b">
        <h2 className="text-2xl font-bold text-gray-800">
          Attendance Calendar
        </h2>

        <span className="text-lg font-semibold text-blue-600">
          May 2026
        </span>
      </div>

      {/* Week Days */}

      <div className="grid grid-cols-7 bg-gray-100">

        {days.map((day) => (
          <div
            key={day}
            className="text-center font-semibold text-gray-700 border p-3"
          >
            {day}
          </div>
        ))}

      </div>

      {/* Calendar */}

      <div className="grid grid-cols-7">

        {dates.map((item, index) => (
          <div
            key={`${item.month || "current"}-${item.day}-${index}`}
            className="border h-36 p-3 flex flex-col justify-between hover:bg-gray-50 transition"
          >
            <div>

              {/* Date */}

              <h3
                className={`font-bold text-lg ${
                  item.month === "prev" || item.month === "next"
                    ? "text-gray-400"
                    : "text-black"
                }`}
              >
                {item.day}
              </h3>

              {/* Status */}

              <div className="mt-3">

                {item.status === "Present" && (
                  <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                    Present
                  </span>
                )}

                {item.status === "Off" && (
                  <span className="bg-gray-400 text-white text-xs px-3 py-1 rounded-full">
                    Off
                  </span>
                )}

                {item.status === "Partial" && (
                  <span className="bg-yellow-500 text-white text-xs px-3 py-1 rounded-full">
                    Partial
                  </span>
                )}

                {item.status === "Leave" && (
                  <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                    Leave
                  </span>
                )}

              </div>
            </div>

            {/* Working Hours */}

            {item.hours && (
              <p className="text-xs text-center bg-gray-100 py-2 rounded font-medium text-gray-700">
                Working Hours : {item.hours}
              </p>
            )}

          </div>
        ))}

      </div>
    </div>
  );
}

export default Attendance;