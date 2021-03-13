import React,{useState} from 'react';
import './login.css';

function Login(props){
    const[tab,setTab]=useState(1);
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
                        <input type='text' placeholder='Email' className='login-email'/>
                        <input type='password' placeholder='Password' className='login-email'/>
                        <div className='login-remember'>
                            <input type='checkbox'/>
                            <div className='login-remember-text'>Remember me</div>
                        </div>
                        <div className='login-btn-tab'>Login</div>
                       <div className='login-forgot'>Forgotten your password ?</div>
                    </div>
                }
                {tab===2&&
                    <div className='login-info fade-out'>
                        <input type='text' placeholder='First Name ' className='login-email'/>
                        <input type='password' placeholder='Last Name' className='login-email'/>
                        <input type='password' placeholder='Email' className='login-email'/>
                        <input type='password' placeholder='Password' className='login-email'/>
                        <div className='login-btn-tab'>Register</div>
                     
                    </div>
                    }
            </div>

        </div>
    )
}
export default Login;