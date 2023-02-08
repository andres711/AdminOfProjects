import { useReducer } from "react";

import AlertContext from './context.js';
import alertReducer from './reducer.js';
import { SHOW_ALERT,HIDE_ALERT } from "../../Type/index.js";


const AlertState = (props)=> {
    const initialState= {
        alert:null
    }

    const [state,dispatch] = useReducer(alertReducer,initialState);

    const showAlert = (msg,categorie)=>{
        dispatch({
            type:SHOW_ALERT,
            payload:{msg,categorie}
        })

        setTimeout(()=>{
            dispatch({
                type:HIDE_ALERT,
            })
        },5000)
    }

    return (
        <AlertContext.Provider
        value={{
            alert:state.alert,
            showAlert
        }}
        >
        {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;