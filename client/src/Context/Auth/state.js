import { useReducer } from "react";

import AuthContext from "./context.js";
import authReducer from "./reducer.js";
import clientAxios from "../../config/axios";
import setHeader from "../../config/setHeaderWithToken";
import {
  SUCCESSFULL_REGISTRATION,
  FAILED_REGISTRATION,
  GET_USER,
  SUCCESSFULL_LOGIN,
  FAILED_LOGIN,
  CLOSE_SESION,
} from "../../Type";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    authorized: null,
    user: null,
    message: null,
  };

  const [state, dispacth] = useReducer(authReducer, initialState);
  //REGISTRO USUARIO
  const registerUser = async (data) => {
    try {
      const response = await clientAxios.post(`api/auth/register`, data);
      console.log(response);
      dispacth({
        type: SUCCESSFULL_REGISTRATION,
        payload: response.data.token,
      });
      //solucion parcial
      setTimeout(() => {
        authUser();
      }, 50);
    } catch (error) {
      console.log(error.response);
      const alert = {
        msg: error.response.data.msg,
        categorie: "error",
      };
      dispacth({
        type: FAILED_REGISTRATION,
        payload: alert,
      });
    }
  };

  //LOGIN USUARIO
  const loginUser = async (data) => {
    try {
      const response = await clientAxios.post(`api/auth/login`, data);
      dispacth({
        type: SUCCESSFULL_LOGIN,
        payload: response.data.token,
      });
    } catch (error) {
      console.log(error.response);
      const alert = {
        msg: error.response.data.msg,
        categorie: "error",
      };
      dispacth({
        type: FAILED_LOGIN,
        payload: alert,
      });
    }
  };
  const authUser = async () => {
    const token = localStorage.getItem("token");
    try {
      setHeader(token);
      const response = await clientAxios("/api/auth");
      dispacth({
        type: GET_USER,
        payload: response.data,
      });
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        categorie: "error",
      };
      dispacth({
        type: FAILED_REGISTRATION,
        payload: alert,
      });
    }
  };
  //CERRAR SESION
  const closeSesion = () => {
    dispacth({
      type: CLOSE_SESION,
    });
  };

  //PROVEO ESTADO Y ACTIONS A COMPONENTES HIJOS
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        auth: state.authorized,
        user: state.user,
        message: state.message,
        registerUser,
        loginUser,
        closeSesion,
        authUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
