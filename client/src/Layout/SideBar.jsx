import FormProject from "../Components/Projects/Form.jsx";
import ListProjects from "../Components/Projects/List.jsx";

function SideSection() {
  
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
      </h1>
      <FormProject />
      <div className="proyectos">
        <h2 style={{marginBottom:"1.5rem"}}>Your projects</h2>
        <ListProjects/>
      </div>
    </aside>
  );
}

export default SideSection;
