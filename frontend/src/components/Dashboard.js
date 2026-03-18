import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Welcome to Smart Study Planner 📚</h2>

      <Link to="/tasks">
        <button>Go to Tasks</button>
      </Link>
    </div>
  );
}

export default Dashboard;