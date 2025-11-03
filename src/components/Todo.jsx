import React, { useState } from "react";
import TaskArray from "./TaskArray";

const Todo = () => {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  // Handle new task submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return; 
    setTaskArray((prev) => [...prev, { text: task, completed: false }]);
    setTask("");
  };

  // Delete task
  const handleDelete = (idx) => {
    setTaskArray((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleCheck = (idx) => {
    setTaskArray((prev) =>
      prev.map((t, i) => (i === idx ? { ...t, completed: !t.completed } : t))
    );
  };

  // Count completed tasks
  const completedCount = taskArray.filter((t) => t.completed).length;

  return (
    <div style={{ color: "white" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add</button>
      </form>

      <div>
        {taskArray.map((t, idx) => (
          <TaskArray
            key={idx}
            val={t.text}
            completed={t.completed}
            handleDelete={() => handleDelete(idx)}
            handleCheck={() => handleCheck(idx)}
          />
        ))}
      </div>

      <p>Completed : {completedCount}</p>
    </div>
  );
};

export default Todo;
