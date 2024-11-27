import React from "react";

/**
 * TODO: implement the Task component
 * @function Task
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
 */
export default function Task({ task, onToggleTask, onDeleteTask }) {
    const handleToggle = () => {
      onToggleTask(task.id);
    };
  
    const handleDelete = () => {
      onDeleteTask(task.id);
    };
  
    return (
      <li>
        <input
          type="checkbox"
          checked={task.completed}
          onClick={handleToggle} // Changed from onChange to onClick
        />
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.description}
        </span>
        <button onClick={handleDelete}>Delete</button>
      </li>
    );
}