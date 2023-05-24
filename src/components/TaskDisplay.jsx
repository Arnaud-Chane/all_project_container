function TaskDisplay({ task, onClick }) {

  return (
    <div>
      <li key={task.id}>
        {task.name}{" "}
        <button className="btn-delete" onClick={() => onClick()}>
          X
        </button>
      </li>
    </div>
  );
}

export default TaskDisplay;
