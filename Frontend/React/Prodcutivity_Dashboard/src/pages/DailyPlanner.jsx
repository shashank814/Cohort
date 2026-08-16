import React, { useState, useEffect } from "react";

const DailyPlanner = () => {
  const generateTimeSlots = (interval) => {
    const slots = [];
    const totalMinutes = 24 * 60;

    for (let i = 0; i < totalMinutes; i += interval) {
      const startHour = Math.floor(i / 60);
      const startMin = i % 60;

      const end = i + interval;
      const endHour = Math.floor(end / 60);
      const endMin = end % 60;

      const format = (h, m) =>
        `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;

      slots.push({
        time: `${format(startHour, startMin)} - ${format(endHour, endMin)}`,
        task: "",
        important: false,
      });
    }

    return slots;
  };

  const [interval, setInterval] = useState(60);
  const [slots, setSlots] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [input, setInput] = useState("");

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("planner");
    if (saved) {
      setSlots(JSON.parse(saved));
    } else {
      setSlots(generateTimeSlots(interval));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (slots.length > 0) {
      localStorage.setItem("planner", JSON.stringify(slots));
    }
  }, [slots]);

  const handleAddTask = () => {
    if (input.trim() === "" || selectedIndex === null) return;

    const updated = [...slots];
    updated[selectedIndex].task = input;
    setSlots(updated);

    setInput("");
    setSelectedIndex(null);
  };

  const handleDelete = (index) => {
    const updated = [...slots];
    updated[index].task = "";
    updated[index].important = false;
    setSlots(updated);
  };

  const toggleImportant = (index) => {
    const updated = [...slots];
    updated[index].important = !updated[index].important;
    setSlots(updated);
  };

  const changeInterval = (value) => {
    setInterval(value);
    setSlots(generateTimeSlots(value));
    localStorage.removeItem("planner");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Daily Planner</h2>

      {/* Interval Selector */}
      <div className="mb-4 flex gap-2">
        {[15, 30, 60].map((val) => (
          <button
            key={val}
            onClick={() => changeInterval(val)}
            className={`px-3 py-1 rounded border ${
              interval === val ? "bg-blue-500 text-white" : ""
            }`}
          >
            {val} min
          </button>
        ))}
      </div>

      {/* Time Slots */}
      <div className="grid grid-cols-3 gap-3">
        {slots.map((slot, index) => (
          <div
            key={index}
            className={`border p-3 rounded transition cursor-pointer
            ${selectedIndex === index ? "bg-blue-200" : "hover:bg-gray-100"}
            ${slot.important ? "border-red-500" : ""}
            `}
            onClick={() => setSelectedIndex(index)}
          >
            <p className="font-semibold">{slot.time}</p>

            {slot.task && (
              <>
                <p className="text-sm mt-1">{slot.task}</p>

                <div className="flex gap-2 mt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleImportant(index);
                    }}
                    className="text-xs bg-yellow-400 px-2 rounded"
                  >
                    ⭐
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(index);
                    }}
                    className="text-xs bg-red-400 px-2 rounded text-white"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Add Task */}
      <div className="mt-6 flex gap-2">
        <input
          type="text"
          placeholder="Enter task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default DailyPlanner;