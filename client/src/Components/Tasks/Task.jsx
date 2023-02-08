import { useContext } from "react";

import ProjectContext from "../../Context/Project/context.js";
import TaskContext from "../../Context/Task/context.js";

function Task({ task }) {
  //STATE GLOBAL PROJECT
  const globalState = useContext(ProjectContext);
  const { projectselected} = globalState;

  //STATE GLOBAL TASK
  const taskState = useContext(TaskContext);
  const { deleteTask, changeFormToEditTask, selectTask } = taskState;

  //FUNCTION TO DELETE TASK
  const handleDeleteTask = (e)=>{
    e.preventDefault();
    deleteTask(task._id)
    
  }
  const handleEditTask = (e)=>{
    e.preventDefault();
    changeFormToEditTask();
    selectTask(task)
  }
  
  // const handleChangeStatus = (task)=>{
  //   // e.preventDefault();
  //   if(task.status){
  //       task.status = false
  //   }else{
  //       task.status = true
  //   }
  //   changeStatus(task);
  // }

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.status ? (
          <button type="button" className="completo"
          //  onClick={()=>handleChangeStatus(task)}
           >
            Complete
          </button>
        ) : (
          <button type="button" className="incompleto" 
          // onClick={()=>handleChangeStatus(task)}
          >
            Incomplete
          </button>
        )}
      </div>
      
      <div className="acciones">
        <button 
        type="button" 
        className="btn btn-primario"
        onClick={handleEditTask}
        >
          Edit
        </button>

        <button 
        type="button" 
        className="btn btn-secundario"
        onClick={handleDeleteTask}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Task;
