import React, { useReducer } from "react";

import axiosClient from "../../config/axios.js";

import projectContext from "./context";
import projectReducer from "./reducer";

import {
  SHOW_FORM_PROJECT,
  GET_PROJECTS,
  CREATE_PROJECT,
  SELECT_PROJECT,
  DELETE_PROJECT,
  // EDIT_PROJECT
} from "../../Type";

const ProjectState = (props) => {

  const initialState = {
    form_project: false,
    projects: [],
    project_selected:null,
  };

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(projectReducer, initialState);
  const { form_project, projects, project_selected } = state;

  //ACTIONS//

  //
  const showForm = () => {
    dispatch({
      type: SHOW_FORM_PROJECT,
    });
  };
  //
  const getProjects = async () => {
    try {
      const response = await axiosClient("/project");
      dispatch({
        type: GET_PROJECTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //
  const createProject = async (data) => {
    try {
      const response = await axiosClient.post("/project/create", data);
      dispatch({
        type: CREATE_PROJECT,
        payload: response.data.project,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //
  const selectProject =  (id) => {
    dispatch({
      type: SELECT_PROJECT,
      payload: id,
    });
  };
  const deleteProject = async(id,creator) => {
    try {
      const response = await axiosClient.delete(`/project/delete/${id}`,{paramas:{creator}})
      console.log(response)
      dispatch({
        type:DELETE_PROJECT,
        payload:response.data.projects
      })

    } catch (error) {
      console.log(error)
    }
    
  };

  return (
    <projectContext.Provider
      value={{
        form_project,
        projects,
        project_selected,
        showForm,
        getProjects,
        createProject,
        selectProject,
        deleteProject,
        // editProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
