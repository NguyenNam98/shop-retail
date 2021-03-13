import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Signup.css"


export default function Registration() {

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
      if (response.data.loggedIn === true) {
        setLoginStatus(true);
      }
    });
  }, []);

  return (
    <div >
      <div className="Container">
        <h1>Login</h1>
        <input
          className="lg-input"
          type="text"
          placeholder="Email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="lg-input"
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="lg-check">
          <label className="remember" >
            <input type="checkbox"
           
            name="remember"
          />     
            Remember me
          </label >
          <label className="forgot-password">Forgotten your password?</label>
        </div>
        <button 
          type="submit"
          onClick={login}
          className="lg-btn"
        > 
        Login 
        </button>
        
        <div className="register">
          <p>Not a member? <a href="#">Join us</a></p>
        </div>
      </div>
      {loginStatus&&
      <button onClick={isUseAuth}>redirect</button>
      }
    </div>
  );
}