import { useReducer } from "react";
import TaskContext from "./context.js";
import taskReducer from "./reducer.js";
import {
  GET_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  SELECT_TASK,
  CHANGE_FORM_TO_EDIT_TASK,
  CLEAR_TASKS
} from "../../Type";

import clientAxios from "../../config/axios.js";

const TaskState = (props) => {
  const initialState = {
    tasks:[],
    form_edit: false,
    selected_task: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);
  //Destructuring
  const { tasks, form_edit, selected_task } = state;
  
  //ACTIONS
  //
  const getTasks = async (projectId) => {
    try {
      const response = await clientAxios(`/task/${projectId}`);
      //const response = clientAxios("/task", {params: {projectId}})
      console.log(response)
      dispatch({
        type: GET_TASKS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type:GET_TASKS,
        payload:[]
      })
    }
  };
  //
  const createTask = async (task) => {
    try {
      const response = await clientAxios.post("/task/create", task);
      dispatch({
        type: CREATE_TASK,
        payload: response.data.task,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //
  const deleteTask = async (taskId) => {
    try {
      await clientAxios.delete(`task/delete/${taskId}`)
      dispatch({
        type:DELETE_TASK,
        payload:taskId
      })
    } catch (error) {
      console.log(error)
    }
  };
  //
  const editTask = (taskId) => {
    try {
      const response = clientAxios.put(`/task/edit/${taskId}`)
      return dispatch({
        type:EDIT_TASK,
        payload:response.data.task
      })
    } catch (error) {
      console.log(error)
    }
  };
  //
  const selectTask = (task) => {
    dispatch({
      type: SELECT_TASK,
      payload: task,
    });
  };
  //
  const changeFormToEditTask = () => {
    dispatch({
      type: CHANGE_FORM_TO_EDIT_TASK,
    });
  };
  //
  const clearTasks = () =>{
    dispatch({
      type:CLEAR_TASKS
    })
  }


  return (
    <TaskContext.Provider
      value={{
        tasks,
        form_edit,
        selected_task,
        getTasks,
        createTask,
        deleteTask,
        selectTask,
        editTask,
        changeFormToEditTask,
        clearTasks
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
