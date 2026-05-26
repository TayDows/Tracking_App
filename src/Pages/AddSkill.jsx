import { useState } from "react";

function AddSkill() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !date) {
      alert("Please fill all fields");
      return;
    }

    const newSkill = {
      id: Date.now(),
      name,
      level,
      startDate: date,
      progress: 0,
      completedDays: []
    };

    console.log(newSkill);

    alert("Skill Added!");

    setName("");
    setLevel("Beginner");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Skill</h1>

      <input
        type="text"
        placeholder="Skill name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      >
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">
        Add Skill
      </button>
    </form>
  );
}

export default AddSkill;
