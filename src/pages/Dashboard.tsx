import React from 'react';
import './styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <button className="logout-button">Logout</button>
      </header>
      <main className="dashboard-main">
        <section className="stats-section">
          <div className="stat-card">
            <h2>Total Tasks</h2>
            <p>42</p>
          </div>
          <div className="stat-card">
            <h2>Completed</h2>
            <p>30</p>
          </div>
          <div className="stat-card">
            <h2>Pending</h2>
            <p>12</p>
          </div>
        </section>
        <section className="tasks-section">
          <h2>Recent Tasks</h2>
          <ul className="task-list">
            <li className="task-item">Task 1 - Complete API integration</li>
            <li className="task-item">Task 2 - Frontend UI update</li>
            <li className="task-item">Task 3 - Database migration</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;