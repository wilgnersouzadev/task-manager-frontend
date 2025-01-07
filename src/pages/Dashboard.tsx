import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/Dashboard.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://localhost:3000/api/tasks", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(response.data);
      } catch (error) {
        alert("Session expired. Please login again.");
        navigate("/login");
      }
    };
    fetchTasks();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "completed":
        return "task-completed";
      case "pending":
        return "task-pending";
      case "overdue":
        return "task-overdue";
      default:
        return "";
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
      </header>
      <section className="tasks-section">
        <h2>Your Tasks</h2>
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`task-item ${getStatusClass(task.status)}`}
            >
              {task.title}
            </li>
          ))}
        </ul>

        <div className="task-legend">
          <div className="legend-item">
            <span className="color-box completed"></span> Completed
          </div>
          <div className="legend-item">
            <span className="color-box pending"></span> Pending
          </div>
          <div className="legend-item">
            <span className="color-box overdue"></span> Overdue
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
