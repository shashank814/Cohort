import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("");

  const getTheme = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour <= 11) return "morning";
    if (hour >= 12 && hour <= 16) return "afternoon";
    if (hour >= 17 && hour <= 20) return "evening";
    return "night";
  };

  useEffect(() => {
    setTheme(getTheme());

    const interval = setInterval(() => {
      setTheme(getTheme());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const themeStyles = {
    morning:
      "bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 text-gray-800",
    afternoon:
      "bg-gradient-to-br from-amber-300 via-amber-400 to-violet-900 text-black",
    evening:
      "bg-gradient-to-br from-yellow-300 via-orange-400 to-orange-500 text-gray-900",
    night:
      "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white",
  };

  return (
    <div
      className={`flex flex-col md:flex-row min-h-screen transition-all duration-500 ${themeStyles[theme]}`}
    >
      {/* Sidebar */}
      <div className="w-full md:w-1/5 md:min-h-screen border-b md:border-r border-white/20 flex md:flex-col flex-row overflow-x-auto md:overflow-hidden px-4 md:px-6 bg-blue-900/90 text-white py-4 backdrop-blur-lg shadow-lg">
        <h1 className="hidden md:block text-2xl font-semibold mb-6 text-center">
          Dashboard
        </h1>

        <div className="flex md:flex-col flex-row gap-3 md:gap-2 w-full">
          {[
            { name: "Todo", path: "/todo" },
            { name: "Daily Planner", path: "/daily-planner" },
            { name: "Daily Goals", path: "/daily-goals" },
            { name: "Motivation", path: "/motivation" },
            { name: "Pomodoro", path: "/timer" },
            { name: "Weather", path: "/weather" },
            { name: "Date & Time", path: "/date-time" },
          ].map((item, index) => (
            <h2
              key={index}
              onClick={() => navigate(item.path)}
              className="whitespace-nowrap text-sm md:text-[16px] px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:scale-105 active:scale-95 text-center md:text-left"
            >
              {item.name}
            </h2>
          ))}
        </div>
      </div>

      {/* Page Content */}
      <div className="flex-1 p-4 md:p-6 bg-white/20 backdrop-blur-xl rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none shadow-inner">
        <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-md h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;