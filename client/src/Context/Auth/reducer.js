import {
  SUCCESSFULL_REGISTRATION,
  FAILED_REGISTRATION,
  GET_USER,
  SUCCESSFULL_LOGIN,
  FAILED_LOGIN,
  CLOSE_SESION,
} from "../../Type";

const authReducer = (state, action) => {
  switch (action.type) {
    case SUCCESSFULL_REGISTRATION:
    case SUCCESSFULL_LOGIN:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        authorized: true,
        message:null,
        token:action.payload
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        authorized:true,
        message:null
      };
    case FAILED_LOGIN:
    case FAILED_REGISTRATION:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        message: action.payload,
      };
    case CLOSE_SESION:
      localStorage.removeItem("token");
      return {
        token: null,
        user: null,
        authorized: null,
        message: null,
      };

    default:
      return state;
  }
};

export default authReducer;
