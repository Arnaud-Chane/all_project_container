import { useState } from 'react';

import { PlusIcon } from '@heroicons/react/24/solid';

function CustomForm({ addTask }) {

  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now()
    });
    setTask("");
  }

  return (
    <div className="CustomForm">
      <form className="todo" onSubmit={handleSubmit}>
        <div className="wrapper">
          <input 
            type="text"
            id="task"
            className="input"
            value={task}
            onInput={(e) => setTask(e.target.value)}  
            required
            autoFocus
            maxLength={60}
            placeholder="Enter Task"
          />
          <label
            htmlFor=""
            className="label"

          >Enter Task</label>
        </div>
        <button
          className="btn"
          aria-label="Add Task"
          type="submit"
        >
          <PlusIcon />
        </button>
      </form>
    </div>
  )
}



export default CustomForm