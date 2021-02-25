import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";

export default function Registration() {
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState(false);

  Axios.defaults.withCredentials = true;

  const isUseAuth=()=>{
    Axios.get("http://localhost:3001/useAuth",{
      headers:{
        "x-access-token":localStorage.getItem("token")
      },
    }).then((response) =>{
      console.log(response.data)
    });
  }

  const register = () => {
    Axios.post("http://localhost:3001/auth/register", {
      email: emailReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password:password,
    }).then((response) => {
      if (response.data.auth) {
        setLoginStatus(true);
        localStorage.setItem("token",response.data.token)
      } else {
        setLoginStatus(false);
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(true);
      }
    });
  }, []);

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Email</label>
        <input
          type="text"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={register}> Register </button>
      </div>

      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}> Login </button>
      </div>
      {loginStatus&&
      <button onClick={isUseAuth}>redirect</button>
      }
    </div>
  );
}