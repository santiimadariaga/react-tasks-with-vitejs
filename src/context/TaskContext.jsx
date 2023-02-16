import { createContext, useState, useEffect } from "react"
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext()

export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([]);

  function createTask(titleTask, descTask) {
    setTasks([
      ...tasks,
      {
        title: titleTask,
        id: tasks.length,
        description: descTask,
      },
    ]);
  }

  function deleteTask (taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
        <TaskContext.Provider value={{
          tasks,
          deleteTask,
          createTask, 
          setTasks,
        }} >
            {props.children}
        </TaskContext.Provider>
  )
}

export default TaskContext