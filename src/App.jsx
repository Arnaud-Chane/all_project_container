import { useState } from "react";
import TaskDisplay from "./components/TaskDisplay";
import TaskForm from "./components/TaskFrom";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Eat" },
    { id: 2, name: "Sleep" },
    { id: 3, name: "Drink" },
  ]);


  const handleDelete = (id) => {
    const tasksCopy = [...tasks];
    const tasksFiltered = tasksCopy.filter(task => task.id !== id);
    setTasks(tasksFiltered);
  };


  return (
    <div className="App">
      <h1 className="todo-list">Todo List</h1>
      <ul>
        {tasks.map((task) => (
          <TaskDisplay 
            task={task} 
            key={task.id} 
            onClick={() => handleDelete(task.id)}
          />
        ))}
      </ul>
      <TaskForm 
        tasks={tasks} 
        setTasks={setTasks} 
      />
    </div>
  );
}

export default App;
