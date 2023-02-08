import { useContext,useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Task from "./Task";
import ProjectContext from "../../Context/Project/context.js";
import TaskContext from "../../Context/Task/context.js";


function ListTasks() {
  //STATE GLOBAL PROJECT
  const globalState = useContext(ProjectContext);
  const { project_selected, deleteProject} = globalState;
  //STATE GLOBAL TASK
  const taskState = useContext(TaskContext);
  const { tasks,getTasks } = taskState;
 

  useEffect(() => {
    if(project_selected){
      getTasks(project_selected._id)
    }
  },[project_selected])
  

  //CHECK IF EXIST PROJECT SELECTED
  if (!project_selected) return <h2>Select a project</h2>;



  //FUNCTION TO DELETE PROJECT
  const {_id, creator} = project_selected;
  const onClickDelete = (id, creator) => {
   deleteProject(id,creator)
  };

  //RENDERIZADO
  return (
    <div>
      <h2>{project_selected.name} </h2>
      <ul className="listado-tareas">
        {!tasks.length ? (
          <li className="tarea">
            <p>There are not tasks</p>
          </li>
        ) : (
          <TransitionGroup>
            {tasks.map((task, id) => (
              <CSSTransition 
              key={id}
              timeout={3000}
              classNames="tarea"
              >
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={()=>onClickDelete(_id,creator)}
      >
        Delete project &times;
      </button>
    </div>
  );
}

export default ListTasks;
