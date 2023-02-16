import { useState, useContext } from "react";
import TaskContext from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
        return
    } else {
        createTask(title, description);
    }
    setTitle("")
    setDescription("")
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-8">
        <h1 className="text-white font-bold text-2xl">Crea tu Tarea: </h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className="bg-slate-300 p-2 w-full mb-2 mt-3"
          />
        <textarea placeholder="Escribe una descripción de la tarea"
        className="bg-slate-300 p-2 w-full mb-3"
        onChange={(e) => {
          setDescription(e.target.value)
        }}
        value={description}
        ></textarea>
        <button
        className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-400 transition-all"
        >Guardar</button>
      </form>
      </div>
  );
}

export default TaskForm;