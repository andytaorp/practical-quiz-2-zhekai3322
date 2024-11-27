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

export default function Task({ task, onToggleTask, onDeleteTask }) {
  const handleToggle = () => {
    onToggleTask(task.id);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
        aria-label={`Mark ${task.description} as completed`} 
      />
      <span style={{ 
        textDecoration: task.completed ? "line-through" : "none",
        marginLeft: '8px',
        flexGrow: 1 
      }}>
        {task.description}
      </span>
      <button 
        onClick={handleDelete} 
        aria-label={`Delete ${task.description}`}
        style={{ marginLeft: '8px' }}
      >
        Delete
      </button>
    </li>
  );
}