import React,{useState,useEffect,useContext} from 'react';
import './login.css';
import Axios from 'axios';
import {UserContext} from '../../Context/User.context';
import Acount from './Account';


function Login(props){
    const { setUserInfoFunc}=useContext(UserContext);
    const [auth,setAuth]=useState(false);
    const[tab,setTab]=useState(1);
    const[loginEmail,setLoginEmail]=useState('');
    const[loginPassword,setLoginPassword]=useState('');
    const[registerEmail,setRegisterEmail]=useState('');
    const[registerPassword,setRegisterPassword]=useState('');
    const[registerFisrtName,setRegisterFisrtName]=useState('');
    const[registerLastName,setRegisterLastName]=useState('');

    useEffect(() => {
        Axios.get("http://localhost:3001/user/login",{
            headers:{
              "x-access-token":localStorage.getItem("token")
            },
          }).then((res) =>{
           
            if(res.data.auth){
            setUserInfoFunc(res.data.user)
            setAuth(true)
          
            }
          });
    },[])
    const postLogin=()=>{
        Axios.post("http://localhost:3001/user/login", {
            email: loginEmail,
            password:loginPassword,
          }).then((response) => {
            if (response.data.auth) {
              localStorage.setItem("token",response.data.token)
              setAuth(response.data.auth)
              setUserInfoFunc(response.data.user)
            } else {
                setAuth(false)
            }
          });
    }
    const register=()=>{
        Axios.post('http://localhost:3001/user/register',{
            lastName:registerLastName,
            fisrtName:registerFisrtName,
            email:registerEmail,
            password:registerPassword
        }).then((res)=>{
            alert(res.data)
            window.location.reload(false)
        }).catch((err)=>{
            alert(err.response.data)
        })
    }
    return(
        <div className={props.openLogin===true? 'login':'login displaynone '}>
            <div className='login-header'>
                <div className='login-title'>My Acount</div>
                <div className=' login-close'>
                     <i className="fa fa-times" 
                     onClick={props.setCloseLogin}
                     />
                 </div>
            </div>
            {auth===true&&<Acount/>}
            {auth===false && 
            <div>
                <div>
                    <div className='login-tab fade-out'>
                        <div 
                        className={tab===1?'tab-login tab-login-active':'tab-login'}
                        onClick={()=>{setTab(1)}}
                        >
                            Login
                        </div>
                        <div 
                        className={tab===2?'tab-login tab-login-active':'tab-login'}
                        onClick={()=>{setTab(2)}}
                        >
                            Register
                        </div>
                        
                    </div>
                    {tab===1&&
                        <div className='login-info fade-in'>
                            <input type='text' placeholder='Email' className='login-email'
                            onChange={(event)=>{setLoginEmail(event.target.value)}}
                            />
                            <input 
                            type='password' placeholder='Password' 
                            className='login-email'
                            onChange={(event)=>{setLoginPassword(event.target.value)}}
                            />
                            <div className='login-remember'>
                                <input type='checkbox'/>
                                <div className='login-remember-text'>Remember me</div>
                            </div>
                            <div className='login-btn-tab'
                            onClick={postLogin}
                            >Login</div>
                        <div 
                        className='login-forgot'
                        
                        >
                            Forgotten your password ?
                            </div>
                        </div>
                    }
                    {tab===2&&
                        <div className='login-info fade-out'>
                            <input 
                            type='text' placeholder='First Name ' 
                            className='login-email'
                            onChange={(event)=>{setRegisterFisrtName(event.target.value)}}
                            />
                            <input type='text' placeholder='Last Name' 
                            className='login-email'
                            onChange={(event)=>{setRegisterLastName(event.target.value)}}
                            />
                            <input type='email' placeholder='Email' 
                            className='login-email'
                            onChange={(event)=>{setRegisterEmail(event.target.value)}}
                            />
                            <input type='password' placeholder='Password' 
                            className='login-email'
                            onChange={(event)=>{setRegisterPassword(event.target.value)}}
                            />
                            <div 
                            className='login-btn-tab'
                            onClick={register}
                            >
                                Register
                            </div>
                        </div>
                        }
                </div>
            </div>
        }
        </div>
    )
}
export default Login;