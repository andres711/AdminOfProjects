import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";

//COMPONENTS
import LogIn from "./Pages/LogIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import MainPage from "./Pages/Main.jsx";
import RequiredAuth from "./Components/Auth/RequireAuth.jsx";

//CONFIG HEADER
import setHeader from "./config/setHeaderWithToken.js";
const token = localStorage.getItem("token");
setHeader(token);

function App() {
  return (
    
            <div>
              <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path="/new-account" element={<SignUp />} />
                <Route element={<RequiredAuth/>}>
                  <Route path="/projects" element={<MainPage/>} />
                </Route>
                <Route path="*" element={<Navigate to="/login" replace />} />
              </Routes>
            </div>
  );
}

export default App;
