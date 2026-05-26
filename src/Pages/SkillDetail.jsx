import { useState } from "react";

export default function SkillDetail() {
  const [days, setDays] = useState(
    Array(7).fill(false)
  );

  const toggleDay = (index) => {
    const updatedDays = [...days];
    updatedDays[index] = !updatedDays[index];

    setDays(updatedDays);
  };

  const completed = days.filter(Boolean).length;

  const progress = (completed / days.length) * 100;

  return (
    <div className="container">
      <h1>Skill Details</h1>

<div className="checkbox-list">
  {days.map((day, index) => (
      <div className="checkbox-item" key={index}>
        <label>Day {index + 1}</label>

        <input
          type="checkbox"
          checked={day}
          onChange={() => toggleDay(index)}
        />
      </div>
      ))}
</div>


      <h2  style={{ marginTop: "20px" }}>
        Progress: {progress}%
        </h2>
    </div>
  );
}
