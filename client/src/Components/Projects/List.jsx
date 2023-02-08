import { Fragment, useContext, useEffect } from "react";
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import Project from "./Project.jsx";
import ProjectContext from "../../Context/Project/context.js";
import AuthContext from "../../Context/Auth/context.js";

function List() {
  const projectState = useContext(ProjectContext);
  const {getProjects, projects} = projectState;
  const authState = useContext(AuthContext);
  const {auth} = authState;

  useEffect(() => {
    if(!projects.length){
      getProjects();
    }
  },[projects,auth]);

  if (!projects.length) return <p>There is not projects, create once</p>;

  return (
    <Fragment>
      <ul className="listado-proyectos">
        <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project._id} classNames="proyectos" timeout={3000}>
             <Project  project={project} />
          </CSSTransition>
         
        ))}
        </TransitionGroup>
        
      </ul>
    </Fragment>
  );
}

export default List;
