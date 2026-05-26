import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add Skill</Link>
      </div>

      <ThemeToggle />
    </nav>
  );
}

export default Navbar;

