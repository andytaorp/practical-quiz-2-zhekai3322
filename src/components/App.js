// import React, { useState } from "react";
// import Form from "./Form";
// import TaskList from "./TaskList";

// function App() {
//   const [tasks, setTasks] = useState([]);

//   const handleAddTask = (newTaskDescription) => {
//     // TODO: write code to add a new task
//     const newTask = {
//       id: Date.now(),
//       description: newTaskDescription,
//       completed: false,
//     };
//     setTasks([...tasks, newTask]); 
//   };

//   const handleToggleTask = (id) => {
//     // TODO: write code to toggle a task's status
//     const updatedTasks = tasks.map((task) =>
//       task.id === id ? { ...task, completed: !task.completed } : task
//     );
//     setTasks(updatedTasks);
//   };

//   const handleDeleteTask = (id) => {
//     // TODO: write code to delete a task
//     const updatedTasks = tasks.filter((task) => task.id !== id);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="app">
//       <h1>Task Tracker</h1>
//       {/*TODO: add a form to add a new task*/}
//       {/*TODO: add a list of tasks*/}
//       <Form onAddTask={handleAddTask} />
//       <TaskList tasks={tasks} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTaskDescription) => {
    if (!newTaskDescription.trim()) {
      return; 
    }
    
    const newTask = {
      id: uuidv4(), 
      description: newTaskDescription,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <Form onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;