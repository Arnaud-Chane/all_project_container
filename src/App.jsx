import CustomForm from "./features/ToDo_CRUD/CustomForm";

export default function App() {

  const addTask = (task) => {
    console.log(task);
  }

  return (
    <div className="App">
      <div className="container">
        <header className="header-todo">
          <h1 className="header-title">My Task List</h1>
        </header>
        <CustomForm addTask={addTask} />
      </div>
    </div>
  );
}
