import { useState, useEffect } from "react";
import axios from "axios";

function Tasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    axios.post("http://localhost:5000/add-task", { task })
      .then(() => {
        fetchTasks();
      });
  };

  const fetchTasks = () => {
    axios.get("http://localhost:5000/tasks")
      .then((res) => {
        setTasks(res.data);
      });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>My Tasks 📅</h2>

      <input onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>{t.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;