import React from "react";

const TaskArray = ({ val, completed, handleDelete, handleCheck }) => {
  return (
    <div
      style={{
        border: "2px solid white",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "5px",
        margin: "5px",
      }}
    >
      <input type="checkbox" checked={completed} onChange={handleCheck} />
      <p style={{ textDecoration: completed ? "line-through" : "none" }}>
        {val}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskArray;
