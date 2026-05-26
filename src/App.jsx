import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddSkill from "./pages/AddSkill";
import SkillDetail from "./pages/SkillDetail";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddSkill />} />
          <Route path="/skill/:id" element={<SkillDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
