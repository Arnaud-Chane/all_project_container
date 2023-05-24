import { useState } from 'react';

function TaskFrom({tasks, setTasks}) {

  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const tasksCopy = [...tasks];
    const id = new Date().getTime();
    const name = newTask;
    tasksCopy.push({id, name});
    setTasks(tasksCopy);
    setNewTask("");
  }

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={newTask}
          type="text"
          placeholder="Add your task"
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TaskFrom;
