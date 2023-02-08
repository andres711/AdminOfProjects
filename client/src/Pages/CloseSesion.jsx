import { useEffect,useContext } from "react";
import {useNavigate} from "react-router-dom";

import AuthContext from "../Context/Auth/context.js";

function CloseSesion() {
    const navigate = useNavigate();
    const authState = useContext(AuthContext);
    const {closeSesion} = authState;

    useEffect(()=>{
        setTimeout(()=>{
            closeSesion()
            navigate('/login')
        },1000)
       
    },[closeSesion,navigate])

    return ( 
        <h3>Sesion closed</h3>
     );
}

export default CloseSesion;