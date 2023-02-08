import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

//STATES
import ProjectState from "./Context/Project/state.js";
import TaskState from "./Context/Task/state.js";
import AuthState from "./Context/Auth/state.js";
import AlertState from "./Context/Alert/state.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProjectState>
      <TaskState>
        <AuthState>
          <AlertState>
            <App />
          </AlertState>
        </AuthState>
      </TaskState>
    </ProjectState>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
