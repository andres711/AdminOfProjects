import { useState, useContext } from "react";
import ProjectContext from "../../Context/Project/context.js";


function Form() {

  //Extraer estado global
  const globalState = useContext(ProjectContext);
  let {form_project,showForm,createProject} = globalState;
  
  //State para proyecto
  const [project, saveProject] = useState({
    name:""
  })
  const [error, setError] = useState(false)
  
  //FUNCION FORM ESTADO LOCAL
  const handleChangeProject = (e)=>{
    saveProject({
      ...project,
      [e.target.name] : e.target.value
    })
  }
  //FUNCIONES PARA MOSTRAR/OCULTAR FORM
  const handleClickOpen = (e) => {
    e.preventDefault();
    showForm()
  };
 
  //FUNCION PARA CREAR PROYECTO
  const handleOnClick = (e)=>{
    e.preventDefault()
    //Validate form
    if(project.name === ""){
      setError(true)
      return
    } 
    //Create project
    createProject(project)
    //Clean input
    saveProject({
      name:""
    })
    setError(false)
  }
  //COMPONENTE
  return (
    <div>
      <button onClick={handleClickOpen} className="btn btn-primario btn-block">
        New project
      </button>
      {form_project ? (
        <form className="formulario-nuevo-proyecto">
          <input
            type={"text"}
            placeholder="Name project ..."
            className="input-text"
            name="name"
            value={project.name}
            onChange={handleChangeProject}
          />
          <input
            type={"submit"}
            value="Create"
            onClick={handleOnClick}
            className="btn btn-primario btn-block"
          />
        </form>
      ) : null}
      {
        error? <p className="mensaje error">Name is required</p>
        : null
      }
    </div>
  );
}

export default Form;
