import React from 'react';
import './Layouts.css';

function NewsLetter(){
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
                    
                    <input type="email" placeholder='Enter your email...' className='letter-input'/>
                    
                    <button className='letter-btn'>
                        Subcribe
                    </button>
                </div>
            </div>
        </div>
    )
}
export default NewsLetter;