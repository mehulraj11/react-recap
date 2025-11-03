import { useState } from "react";

const DynamicList = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTaskList((prevState) => [...prevState, task]);
    setTask("");
  };

  const handleDelete = (idx) => {
    setTaskList((prevState) => prevState.filter((_, i) => i !== idx));
  };
console.log(taskList);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">+</button>
      </form>

      <ul>
        {taskList.map((t, idx) => (
          <li key={idx}>
            {t}{" "}
            <button
              onClick={() => handleDelete(idx)}
              style={{ marginLeft: "10px" }}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicList;
