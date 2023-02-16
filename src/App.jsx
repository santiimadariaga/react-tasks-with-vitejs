import React from "react";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import DeleteButton from "./Components/DeleteButton";

function App() {

  return (
    <main>
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
        <div className="max-w-full flex justify-center mt-5">
          <DeleteButton />
        </div>
      </div>
    </main>
  );
}

export default App;