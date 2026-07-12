import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = () => {
    return currentTime.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = () => {
    return currentTime.toLocaleTimeString("en-IN");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 px-4">
      
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-6 text-center">
        
        <h1 className="text-sm sm:text-base text-gray-300 tracking-wide">
          {formatDate()}
        </h1>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 tracking-widest">
          {formatTime()}
        </h2>

        <div className="mt-6 text-xs text-gray-400">
          Live Date & Time ⏱️
        </div>
      </div>
    </div>
  );
};

export default DateTime;