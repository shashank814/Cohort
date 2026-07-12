import React, { useState } from "react";

const MotivationQuote = () => {
  const [quote, setQuote] = useState(null);

  const getdata = async () => {
    try {
      const res = await fetch("https://dummyjson.com/quotes/random");
      const data = await res.json();
      setQuote(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 bg-gradient-to-br from-green-200 via-emerald-300 to-teal-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-all duration-500">
      
      {quote && (
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 px-6 sm:px-10 py-6 rounded-3xl bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg flex flex-col gap-6 shadow-2xl border border-white/30 dark:border-gray-700 animate-fadeIn">
          
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white leading-relaxed text-center">
            “{quote.quote}”
          </p>

          <p className="self-end px-4 py-1 rounded-xl text-sm sm:text-base md:text-lg bg-amber-300 dark:bg-amber-500 text-gray-900 font-medium shadow">
            — {quote.author}
          </p>
        </div>
      )}

      <button
        onClick={getdata}
        className="mt-8 px-6 py-3 text-base sm:text-lg md:text-xl rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300"
      >
        Get Motivation ✨
      </button>
    </div>
  );
};

export default MotivationQuote;