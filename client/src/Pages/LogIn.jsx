import { useState,useContext,useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import styled from "styled-components";

import AlertContext from "../Context/Alert/context.js";
import AuthContext from "../Context/Auth/context.js";

//STYLES

const ContainerForm = styled.div`
  width: 350px;
  height: 350px;
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

//COMPONENTE
function LogIn() {
  const navigate = useNavigate()
  //Alert STATE
  const alertState = useContext(AlertContext);
  const { alert, showAlert } = alertState;
  //AUTH STATE
  const authState = useContext(AuthContext);
  const { message, auth, loginUser,authUser } = authState;
  useEffect(() => {
    if(auth) {
      navigate('/projects')
    }
    if(message){
      showAlert(message.msg, message.categorie)
    }
  }, [auth, message])
  

  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const {email,password} = input;

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      showAlert("All field are required", "error");
      return;
    }
    loginUser(input)
  };

  return (
    <div className="contenedor-app">
      <ContainerForm>
        <h2>Log In</h2>

        <form>
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
          {alert ? (
            <div className={`alert-${alert.categorie}`}>{alert.msg}</div>
          ) : null}
          <FieldForm>
            <Button type="submit" onClick={handleSubmit}>
              Login
            </Button>
          </FieldForm>
        </form>

        <Link to={"/new-account"} className="enlace-cuenta">
          Create account
        </Link>
      </ContainerForm>
    </div>
  );
}

export default LogIn;
