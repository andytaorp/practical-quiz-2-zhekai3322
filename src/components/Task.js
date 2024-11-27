import React from "react";
/* TODO: implement the Task component */
export default function Task({ task, onToggleTask, onDeleteTask }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            marginLeft: "8px",
          }}
        >
          {task.description}
        </span>
      </label>
      <button
        onClick={() => onDeleteTask(task.id)}
        style={{ marginLeft: "16px", color: "red" }}
      >
        Delete
      </button>
    </li>
  );
}