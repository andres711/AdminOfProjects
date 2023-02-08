import { useState, useContext,useEffect } from "react";
import ProjectContext from "../../Context/Project/context.js";
import TaskContext from "../../Context/Task/context.js";

function FormTask() {
  //LOCAL STATE TO SAVE TASK
  const [task, saveTask] = useState({
    name: "",
  });
  const [error, setError] = useState(false)
  //GLOBAL STATE PROJECT
  const projectState = useContext(ProjectContext);
  const { project_selected } = projectState;
  
  //GLOBAL STATE TASK
  const taskState = useContext(TaskContext)
  const {createTask,changeFormToEditTask, selected_task,editTask,form_edit} = taskState;
  
  //USE EFFECT
  useEffect(()=>{
    if(selected_task === null){
      saveTask({
        name:""
      })
    }
    else{
      saveTask(selected_task)
    }
  },[selected_task]);

 
  //Si no hay proyecto selccionado no se pueden agregar tareas
  if (!project_selected) return null;
  //MANEJADOR DE FORMULARIO
  const handleChangeTask = (e) => {
    saveTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  //FUNCTIONS

  //Create
  const handleCreateTask = (e)=>{
    e.preventDefault();
    if(task.name === ""){
      setError(true)
      return
    }
    task.projectId = project_selected._id
    createTask(task)
    setError(false)
    saveTask({
      name:""
    })
  }
  //Edit
  const handleEditTask = (e)=>{
    e.preventDefault();
    if(task.name === ""){
      setError(true)
      return
    }
    selected_task.name = task.name
    editTask(selected_task)
    changeFormToEditTask()
    setError(false)
    saveTask({
      name:""
    })
  }

 
  //COMPONENTE
  return (
    <div className="formulario">
      <form>
        <input
          type="text"
          placeholder="Name task"
          className="input-text"
          name="name"
          value={task.name}
          onChange={handleChangeTask}
        />
        {
          form_edit
          ?(
            <input
            type={"submit"}
            className="btn btn-primario btn-submit btn-block"
            value="Edit task"
            onClick={handleEditTask}
          />
          )
          :(
            <input
            type={"submit"}
            className="btn btn-primario btn-submit btn-block"
            value="Add task"
            onClick={handleCreateTask}
          />
          )
        }
       
      </form>
      {
        error 
        ?<p className="mensaje error">Name task is required</p>
        :null
      }
    </div>
  );
}

export default FormTask;
