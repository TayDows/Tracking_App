import { useState } from "react";
import skillsData from "../data/skills";
import SkillCard from "../Components/SkillCard";

function Dashboard() {
  const [skills] = useState(skillsData);
  const [filter, setFilter] = useState("All");

  const filteredSkills =
    filter === "All"
      ? skills
      : skills.filter((skill) => skill.level === filter);

  return (
    <div className="container">
      <h1>Dashboard</h1>

    <div className="filters">
      <select onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
    </div>

      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
