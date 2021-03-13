import React,{useState} from 'react';
import {withRouter} from 'react-router-dom';
import Axios from 'axios';
import './contact.css';
import Map from './Map';

function ContactUs(props){
    const [contactName,setContactName]=useState('');
    const [contactEmail,setContactEmail]=useState('');
    const [contactSubject,setContactSubject]=useState('');
    const [contactMessage,setContactMessage]=useState('');
    const sendMessage=()=>{
        var data={
            contactName:contactName,
            contactEmail:contactEmail,
            contactSubject:contactSubject,
            contactMessage:contactMessage
        }
        Axios.post('http://localhost:3001/contact/touch',data);
        window.scrollTo(0,0);
         setContactMessage('');
         setContactEmail('');
         setContactName('');
         setContactSubject('');
         props.history.push("/shop")
    }
    return(
        <div className="contactus">
            <div className='contactus-container'>
                <div className='contactus-map'>
                    <Map/>
                </div>
                <div className='contactus-info'>
                    <div className='contactus-title'>Contact Us</div>
                    <div className='contactus-customer'>
                        <input 
                        type='text' placeholder='Name' 
                        value={contactName}
                        className='contactus-name'
                        onChange={(event)=>{setContactName(event.target.value)}}
                        />
                        <input
                        type='text' placeholder='Email' 
                        value={contactEmail}
                        className='contactus-name'
                        onChange={(event)=>{setContactEmail(event.target.value)}}
                        />
                        <input 
                        type='text' placeholder='Subject' 
                        value={contactSubject}
                        className='contactus-name'
                        onChange={(event)=>{setContactSubject(event.target.value)}}
                        />
                        <input 
                        type='text' placeholder='Message' 
                        value={contactMessage}
                        className='contactus-name'
                        onChange={(event)=>{setContactMessage(event.target.value)}}
                        />
                    </div>
                    <button 
                    className='contactus-btn'
                    onClick={sendMessage}
                    >
                        Send Message
                    </button>
                </div>
            </div>
         
        </div>
    )
}
export default withRouter(ContactUs);