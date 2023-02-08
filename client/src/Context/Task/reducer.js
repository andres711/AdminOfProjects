import { 
    GET_TASKS,
    CREATE_TASK,
    DELETE_TASK,
    EDIT_TASK,
    SELECT_TASK,
    CHANGE_FORM_TO_EDIT_TASK,
    CLEAR_TASKS,
     } from "../../Type";

    
const taskReducer = (state,action)=>{
    
    switch (action.type) {
        case GET_TASKS:
            return({
                ...state,
                tasks: action.payload
            })
        case CREATE_TASK:
            return ({
                ...state,
                tasks: [...state.tasks, action.payload]
            })

        case DELETE_TASK:
            return({
                ...state,
                tasks: state.tasks.filter(t => t._id !== action.payload)
            })

        case EDIT_TASK:
                return ({
                    ...state,
                    tasks: state.tasks.map(task => task._id === action.payload._id ? action.payload : task)
                })

        case SELECT_TASK:
            return ({
                ...state,
                selectedTask: action.payload
            })
        
        case CHANGE_FORM_TO_EDIT_TASK:
            return ({
                ...state,
                optionEdit : !state.optionEdit
            })
        case CLEAR_TASKS:
            return({
                ...state,
                tasks:[]
            })
        default:
            return state;
    }
}

export default taskReducer;