import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

function SkillCard({ skill }) {
  return (
    <div className="card">
      <h2>{skill.name}</h2>

      <span className={`level ${skill.level.toLowerCase()}`}>
        {skill.level}
      </span>

      <ProgressBar progress={skill.progress} />

      <p>{skill.progress}% Complete</p>

      <Link to={`/skill/${skill.id}`}>
        View Details
      </Link>
    </div>
  );
}
export default SkillCard;