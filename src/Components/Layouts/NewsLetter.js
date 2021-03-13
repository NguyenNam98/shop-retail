import React,{useState} from 'react';
import Axios from 'axios';
import './Layouts.css';

function NewsLetter(){
    const [emailSubribe,setEmailSubcribe]= useState('');
    const subcribe=()=>{
      const data={
          emailSubcribe:emailSubribe
      }
      Axios.post('http://localhost:3001/email/subcribe',data)
      setEmailSubcribe('');
      alert('your email subcribe successfull')
      window.scrollTo(0,0);
    }
    return(
        <div className='newsletter'>
            <div className='newsletter-container'>
                <div className='letter-title'>
                    Newsletter
                </div>
                <div className ='letter-quote'>
                    Get timely updates from your favorite products
                </div>
                <div className='letter-form'>
                    
                    <input 
                    type="email" placeholder='Enter your email...' 
                    className='letter-input'
                    value={emailSubribe}
                    onChange={(event)=>{setEmailSubcribe(event.target.value)}}
                    />
                    
                    <button className='letter-btn' onClick={subcribe}>
                        Subcribe
                    </button>
                </div>
            </div>
        </div>
    )
}
export default NewsLetter;