import React from 'react';
import './contact.css';

function ContactBody(props){
    return(
        <div className="contactbody">
            <div className='contactbody-container'>
                <div className='contactbody-quote'>“Buy what you don’t have yet or what you really want, which can be mixed with what you already own. Buy only because something excites you, not just for the simple act of shopping.”</div>
                <div className='contactbody-info'>
                    <div className= 'contactbody-address'>
                        <i className="fa fa-home icon" />
                        <div className='contactbody-title'>ADDRESS</div>
                    <div className='contactbody-detail'>UIT, Khu pho 6, Thu Duc, TP HCM</div>
                    </div>

                    <div className= 'contactbody-address'>
                        <i className="fa fa-phone icon" />
                        <div className='contactbody-title'>PHONE NUMBER</div>
                        <div className='contactbody-detail'>+84 098636373</div>
                    </div>
                    <div className= 'contactbody-address'>
                        <i className="fas fa-envelope-open-text icon"></i>
                        <div className='contactbody-title'>EMAIL</div>
                        <div className='contactbody-detail'>michael@gmail.com</div>
                    </div>
                    
                </div>
            </div>
           
        </div>
    )
}
export default ContactBody;