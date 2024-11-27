// import React from "react";

// // /**
// //  * TODO: implement the Task component
// //  * @function Task
// //  * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
// //  */
// export default function Task({ task, onToggleTask, onDeleteTask }) {
//   const handleToggle = () => {
//     onToggleTask(task.id);
//   };

//   const handleDelete = () => {
//     onDeleteTask(task.id);
//   };

//   return (
//     <li>
//       <input
//         type="checkbox"
//         checked={task.completed}
//         onChange={handleToggle}
//       />
//       <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
//         {task.description}
//       </span>
//       <button onClick={handleDelete}>Delete</button>
//     </li>
//   );
// }

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