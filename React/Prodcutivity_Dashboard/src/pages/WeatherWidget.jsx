import React, { useEffect, useState } from "react";

const API_KEY = "4e759565e96c63f7c4649ad6830a8cd6"; // replace this

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchWeather = async (lat, lon) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );

      const data = await res.json();

      if (data.cod !== 200) {
        throw new Error("Failed to fetch weather");
      }

      setWeather(data);
    } catch (err) {
      setError("Unable to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  // Get location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          fetchWeather(pos.coords.latitude, pos.coords.longitude);
        },
        () => {
          // fallback (Kolkata)
          fetchWeather(22.5726, 88.3639);
        }
      );
    } else {
      fetchWeather(22.5726, 88.3639);
    }
  }, []);

  // UI States
  if (loading) {
    return (
      <div className="text-center mt-10 text-lg">Loading weather...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">{error}</div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg text-center">
      <h1 className="text-xl font-bold mb-2">
        {weather.name}
      </h1>

      {/* Temperature */}
      <h2 className="text-4xl font-bold">
        {Math.round(weather.main.temp)}°C
      </h2>

      {/* Condition */}
      <p className="capitalize text-lg mb-4">
        {weather.weather[0].description}
      </p>

      {/* Icon */}
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="mx-auto"
      />

      {/* Extra Details */}
      <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
        <div className="bg-white/40 p-3 rounded-xl">
          💧 Humidity
          <p className="font-semibold">{weather.main.humidity}%</p>
        </div>

        <div className="bg-white/40 p-3 rounded-xl">
          🌬 Wind
          <p className="font-semibold">{weather.wind.speed} m/s</p>
        </div>

        <div className="bg-white/40 p-3 rounded-xl">
          🌡 Feels Like
          <p className="font-semibold">
            {Math.round(weather.main.feels_like)}°C
          </p>
        </div>

        <div className="bg-white/40 p-3 rounded-xl">
          ☁ Clouds
          <p className="font-semibold">{weather.clouds.all}%</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;