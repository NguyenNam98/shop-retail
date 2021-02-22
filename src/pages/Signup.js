import React,{useState,useEffect} from'react'
import Axios from 'axios';

export default function Signup(){
    Axios.defaults.withCredentials = true;

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const [loginStatus, setLoginSatus]= useState('');

    const login=()=>{
        Axios.post("http://localhost:3001/login",{
        email:email,
        password:password,
        }).then((response)=>{
            if(response.data.message)
            {
                setLoginSatus(response.data.message);
                console.log(response.data)
            }
            else
            {
                setLoginSatus(response.data[0].email);
                console.log(response.data[0])
            }
        });
    
    }
    useEffect(() => {
        
        Axios.get("http://localhost:3001/login").then((response)=>{
            if(response.data.loggedId==true){
                setLoginSatus(response.data.user[0].email);
                
            }
        });
       
    }, [])
    return(
        <>
            <form className="login">
                <h1>Login</h1>
                <div className="email">
                    <label>email</label>
                    <input type="text"
                    placeholder="email"
                    onChange={(e) => {setEmail(e.target.value);
                    }}
                    />
                </div>
                <div className="password">
                    <label>password</label>
                    <input type="password"
                     placeholder="password"
                     onChange={(e)=>setPassword(e.target.value)}
                     />
                </div>
                <button onClick={login}>Login</button>
                
            </form>
        </>
    )
}
