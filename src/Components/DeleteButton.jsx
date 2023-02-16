import React, {useContext} from 'react'
import TaskContext from '../context/TaskContext'

function DeleteButton() {

    const {setTasks, tasks} = useContext(TaskContext)
  
      return (
        <button 
        className={'bg-indigo-500 mt-3 text-white text-xl p-2 rounded-md hover:bg-indigo-400 transition-all'}
        onClick={() => {
          if (tasks !== []){
            setTasks([])}
          }
        }
        >
        Eliminar Todo
    </button>
  )
}

export default DeleteButton