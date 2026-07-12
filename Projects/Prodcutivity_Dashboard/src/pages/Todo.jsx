import React, { useState, useEffect } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  // ✅ Load data from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("task"));
    if (data) {
      setTask(data);
    }
  }, []);

  // ✅ Save data to localStorage whenever task changes
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  // ✅ Add Task
  const handleAdd = () => {
    if (input.trim() === "") return;

    const newTask = {
      text: input,
      completed: false,
      important: false,
    };

    setTask([...task, newTask]);
    setInput("");
  };

  // ✅ Delete Task
  const handleDelete = (index) => {
    const updated = task.filter((_, i) => i !== index);
    setTask(updated);
  };

  // ✅ Toggle Pending ↔ Completed
  const toggleStatus = (index) => {
    const updated = task.map((item, i) => {
      if (i === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setTask(updated);
  };

  const toggleImportant = (index) => {
  const updated = task.map((item, i) => {
    if (i === index) {
      return { ...item, important: !item.important };
    }
    return item;
  });

    setTask(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-emerald-100 flex flex-col items-center px-4 py-10">
      {/* Heading */}
      <h1 className="bg-green-600 text-white text-3xl sm:text-4xl font-bold px-8 py-3 rounded-2xl shadow-lg">
        TODO APP
      </h1>

      {/* Container */}
      <div className="w-full max-w-2xl mt-10 bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
        {/* Input */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add a new task..."
            className="flex-1 rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />

          <button
            onClick={handleAdd}
            className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 active:scale-95"
          >
            Add Todo
          </button>
        </div>

        <div className="my-6 border-t border-gray-200"></div>

        {/* Task List */}
        <div className="space-y-4">
          {task.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm hover:shadow-md"
            >
              {/* Task Text */}
              <p
                className={`font-medium ${
                  item.completed
                    ? "line-through text-gray-400"
                    : "text-gray-700"
                }`}
              >
                {item.text}
              </p>

              {/* Buttons */}
              <div className="flex gap-4">

                {/* Important */}
                <button
                  onClick={() => toggleImportant(index)}
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    item.important
                      ? "bg-red-200 text-red-800"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {item.important ? "Important" : "Mark Important"}
                </button>

                {/* Toggle */}
                <button
                  onClick={() => toggleStatus(index)}
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    item.completed
                      ? "bg-green-200 text-green-800"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {item.completed ? "Completed" : "Pending"}
                </button>

                {/* Delete */}
                <button
                  onClick={() => handleDelete(index)}
                  className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
