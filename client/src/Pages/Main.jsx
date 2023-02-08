import SideBar from "../Layout/SideBar.jsx";
import Header from "../Layout/Header.jsx";
import FormTask from "../Components/Tasks/Form.jsx";
import ListTasks from "../Components/Tasks/List.jsx";


function MainPage() {
    
    return ( 
        <div className="contenedor-app">

            <SideBar/>
            <div className="seccion-principal">
                <Header/>
                <main>
                    <FormTask/>
                    <div className="contenedor-tareas">
                    <ListTasks/>
                    </div>
                </main>

            </div>
            
        </div>
     );
}

export default MainPage;