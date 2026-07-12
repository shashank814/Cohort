import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Todo from "./pages/Todo";
import DailyPlanner from "./pages/DailyPlanner";
import DailyGoals from "./pages/DailyGoals";
import MotivationQuote from "./pages/MotivationQuote";
import PomodoroTimer from "./pages/PomodoroTimer";
import WeatherWidget from "./pages/WeatherWidget";
import DateTime from "./pages/DateTime";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="todo" element={<Todo />} />
          <Route path="daily-planner" element={<DailyPlanner />} />
          <Route path="daily-goals" element={<DailyGoals />} />
          <Route path="motivation" element={<MotivationQuote />} />
          <Route path="timer" element={<PomodoroTimer />} />
          <Route path="weather" element={<WeatherWidget />} />
          <Route path="date-time" element={<DateTime />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
