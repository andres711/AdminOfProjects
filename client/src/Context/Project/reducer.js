import { 
    SHOW_FORM_PROJECT,
    GET_PROJECTS,
    CREATE_PROJECT,
    SELECT_PROJECT,
    DELETE_PROJECT,
    // EDIT_PROJECT
 } from "../../Type";

const projectReducer = (state, action) =>{
    
    switch (action.type) {
        case SHOW_FORM_PROJECT:
            return({
                ...state,
                form_project: true
            })
        case GET_PROJECTS:
            return({
                ...state,
                projects: action.payload
            })
        case CREATE_PROJECT:
            return({
                ...state,
                projects: [...state.projects, action.payload],
                formproject: false
            })
        case SELECT_PROJECT:
            return({
                ...state,
                project_selected : state.projects.find(project => project._id === action.payload)
            })
        case DELETE_PROJECT:
            return ({
                ...state,
                projects:action.payload,
                project_selected:null
            })
        // case EDIT_PROJECT:
        //     return ({
        //         ...state,
        //         projectselected : {...state.projectselected, name: action.payload}
        //     })
        default:
            return state;
    }
}
export default projectReducer;