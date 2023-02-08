import { useState,useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AlertContext from "../Context/Alert/context.js";
import AuthContext from "../Context/Auth/context.js";

//STYLES

const ContainerForm = styled.div`
  width: 350px;
  height: 450px;
  padding: 1rem 1rem;
  margin: 10rem auto;
  background-color: #ffffff;
  border-radius: 1rem;
  @media (min-width: 768px) {
    width: 500px;
    padding: 3rem 3rem;
  }
`;
const FieldForm = styled.div`
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  :last-of-type {
    margin: 0;
  }
`;
const Label = styled.label`
  flex: 0 0 100px;
  font-family: "Roboto", serif;
`;
const Input = styled.input`
  display: flex;
  border: 1px solid #e1e1e1;
  padding: 1rem;
  flex: 1;
`;
const Button = styled.button`
  background-color: #2f3848;
  color: #fff;
  width: 100%;
  font-family: "Raleway", serif;
  padding: 1.5rem;
  font-size: 1.4;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
  :hover {
    cursor: pointer;
    background-color: #1a202d;
  }
`;

//COMPONENT
function SignUp() {
  
  //INPUT
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  //MANEJADOR DE CAMPOS
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  //NAVIGATE
  const navigate = useNavigate()
  //ALERT STATE
  const alertState = useContext(AlertContext);
  const {alert,showAlert} = alertState;
  //AUTH STATE
  const authState = useContext(AuthContext);
  const {message,auth,registerUser} = authState;

  //DESTRUCTURING INPUT
  const {name, email,password,confirm}= input;

  //MANEJAR RESPUESTAS ERROR SERVIDOR
  useEffect(()=>{
    if(auth){
      navigate('/projects')
    }
    if(message){
      showAlert(message.msg,message.categorie)
    }
  },[auth,message,navigate])

  //MANEJADOR DE EVENTO
  const handleSubmit = (e) => {
    e.preventDefault();
    //validar campos vacios
    if(name=== ""||email==="" || password ===""||confirm===""){
      showAlert("All fields are required", "error")
      return
    }
    //validar contraseñas iguales
    if(password !== confirm) {
      showAlert("Password should match","error")
      return
    }
    //validar contraseña
    let regEx = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
    if(!password.match(regEx)){
      showAlert("password must contain between 8 and 16 characters,at least one uppercase, one lowercase and one special symbol","error")
      return
    }
    //cuando pase validaciones haz lo siguiente:
    registerUser(input)
  };
  //COMPONENTE
  return (
    <div className="contenedor-app">
      <ContainerForm>
        <h2>Sign Up</h2>

        <form>
          <FieldForm>
            <Label htmlFor="Name">Name</Label>
            <Input
              placeholder="Your name"
              id="name"
              type={"text"}
              name="name"
              onChange={handleChange}
            />
          </FieldForm>
          <FieldForm>
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="Your email"
              id="email"
              type={"email"}
              name="email"
              onChange={handleChange}
            />
          </FieldForm>
          <FieldForm>
            <Label htmlFor="password">Password</Label>
            <Input
              type={"password"}
              id="password"
              placeholder="Your password"
              name="password"
              onChange={handleChange}
            />
          </FieldForm>
          <FieldForm>
            <Label htmlFor="confirm">Confirm password</Label>
            <Input
              placeholder="Confirm password"
              id="confirm"
              type={"password"}
              name="confirm"
              onChange={handleChange}
            />
          </FieldForm>
          {
            alert?(
              <div className={`alert-${alert.categorie}`} >{alert.msg}</div>
            ):null
          }

          <FieldForm>
            <Button type="submit" onClick={handleSubmit}>Register</Button>
          </FieldForm>
        </form>

        <Link to={"/login"} className="enlace-cuenta">
          SignIn
        </Link>
      </ContainerForm>
    </div>
  );
}

export default SignUp;
