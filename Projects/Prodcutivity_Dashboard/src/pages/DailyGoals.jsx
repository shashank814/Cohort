import React, { useEffect, useState } from "react";

const DailyGoals = () => {
  const [goalInput, setGoalInput] = useState("");
  const [goals, setGoals] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedGoals = JSON.parse(localStorage.getItem("dailyGoals"));
    if (savedGoals) setGoals(savedGoals);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("dailyGoals", JSON.stringify(goals));
  }, [goals]);

  // Add goal
  const addGoal = () => {
    if (!goalInput.trim()) return;

    const newGoal = {
      id: Date.now(),
      text: goalInput,
      completed: false,
    };

    setGoals([...goals, newGoal]);
    setGoalInput("");
  };

  // Toggle goal
  const toggleGoal = (id) => {
    const updated = goals.map((goal) =>
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    );
    setGoals(updated);
  };

  // Delete goal (optional but useful)
  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  // Progress
  const completedCount = goals.filter((g) => g.completed).length;

  return (
    <div className="max-w-2xl mx-auto mt-10 min-h-screen p-6 bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">
        🎯 Daily Goals
      </h1>

      {/* Input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={goalInput}
          onChange={(e) => setGoalInput(e.target.value)}
          placeholder="Enter your goal..."
          className="flex-1 px-4 py-2 rounded-xl border outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addGoal}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      {/* Progress */}
      <div className="mb-4 text-center font-medium">
        {completedCount} of {goals.length} completed
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-5">
        <div
          className="bg-green-500 h-3 rounded-full transition-all duration-500"
          style={{
            width:
              goals.length === 0
                ? "0%"
                : `${(completedCount / goals.length) * 100}%`,
          }}
        ></div>
      </div>

      {/* Goals List */}
      <div className="flex flex-col gap-3">
        {goals.length === 0 ? (
          <p className="text-center text-gray-500">No goals added yet</p>
        ) : (
          goals.map((goal) => (
            <div
              key={goal.id}
              className={`flex items-center justify-between p-3 rounded-xl shadow-sm transition ${
                goal.completed
                  ? "bg-green-100 line-through text-gray-500"
                  : "bg-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={goal.completed}
                  onChange={() => toggleGoal(goal.id)}
                  className="w-5 h-5 cursor-pointer"
                />
                <span>{goal.text}</span>
              </div>

              <button
                onClick={() => deleteGoal(goal.id)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DailyGoals;