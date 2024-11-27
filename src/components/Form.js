// import React, { useState } from "react";

// export default function Form({ onAddTask }) {
//   const [description, setDescription] = useState("");

//   const handleSubmit = (event) => {
//     // TODO: write code to handle form submission
//     event.preventDefault();
//     if (description) {
//       onAddTask(description);
//       setDescription("");
//     }
//   };

//   return (
//     /*TODO: add a form to add a new task*/
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder="Enter task description"
//       />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// }


import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (description.trim() !== "") {
      onAddTask(description);
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}