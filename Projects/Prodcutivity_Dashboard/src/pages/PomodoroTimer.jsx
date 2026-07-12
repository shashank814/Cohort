import React, { useState, useEffect } from "react";

const Pomodoro = () => {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isWork, setIsWork] = useState(true);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => {
          if (prev === 0) {
            clearInterval(timer);

            if (isWork) {
              alert("Break time!");
              setTime(5 * 60);
            } else {
              alert("Back to work!");
              setTime(25 * 60);
            }

            setIsWork(!isWork);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, isWork]);

  const formatTime = () => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4">
      
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 text-center border border-white/20">
        
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-2">
          {isWork ? "Focus Mode" : "Break Time"}
        </h1>

        <div className="text-5xl sm:text-6xl font-bold text-white my-6 tracking-widest">
          {formatTime()}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setIsRunning(true)}
            className="px-5 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition text-white font-medium"
          >
            Start
          </button>

          <button
            onClick={() => setIsRunning(false)}
            className="px-5 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 transition text-white font-medium"
          >
            Pause
          </button>

          <button
            onClick={() => {
              setIsRunning(false);
              setTime(25 * 60);
              setIsWork(true);
            }}
            className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition text-white font-medium"
          >
            Reset
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          Stay focused. Take breaks. Repeat 🔁
        </p>
      </div>
    </div>
  );
};

export default Pomodoro;