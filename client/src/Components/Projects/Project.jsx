import { useContext } from "react";
import ProjectContext from "../../Context/Project/context.js";
import TaskContext from "../../Context/Task/context.js";

function Project({ project }) {
  //DESTRUCTURING PROP
  const {_id, name} = project;
  

  //STATE GLOBAL PROJECT
  const projectState = useContext(ProjectContext);
  const {selectProject} = projectState;

  

  const handleSelectClick = (id)=>{
    selectProject(id)
  }
  return (
    <li>
      <button
      style={{color:"white",backgroundColor:"black", padding:".5rem", marginBottom:"1.5px"}}
      type="button"
      className="btn btn-blank"
      onClick={()=>handleSelectClick(_id)}
      >{name}</button>
    </li>
  );
}

export default Project;
