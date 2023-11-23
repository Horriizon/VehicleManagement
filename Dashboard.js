// Dashboard.js

import React, { useState } from 'react';

const Dashboard = () => {
  const [task, setTask] = useState('');
  const [vehicle, setVehicle] = useState('');

  const handleAddTask = () => {
    // Add logic to handle adding tasks
    alert(`Added Task: ${task}`);
  };

  const handleAddVehicle = () => {
    // Add logic to handle adding vehicles
    alert(`Added Vehicle: ${vehicle}`);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Add Task</h3>
        <label>
          Task:
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        </label>
        <br />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div>
        <h3>Add Vehicle</h3>
        <label>
          Vehicle:
          <input type="text" value={vehicle} onChange={(e) => setVehicle(e.target.value)} />
        </label>
        <br />
        <button onClick={handleAddVehicle}>Add Vehicle</button>
      </div>
    </div>
  );
};

export default Dashboard;
