import React from 'react';
import {Link} from 'react-router-dom'
import './Layouts.css'

export default function Footer (){
    const handleClick=()=>{
        window.scrollTo(0,0)
    }
    return(
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-link'>
                <p className="cr">©Michael</p>
                    <Link to="/news" onClick={handleClick}>News</Link>
                    <Link to="/contact" onClick={handleClick}>FAQs</Link>
                    <Link to="/contact" onClick={handleClick}>Contact us</Link>
                </div>
                <div className='footer-icon'>
                   <i  className="fab fa-twitter cart-icon"> </i>
                   <i className="fab fa-facebook cart-icon"></i>
                   <i className="fab fa-instagram-square cart-icon"></i>
                   <i className="fab fa-pinterest cart-icon"></i>
                   <i className="fab fa-google cart-icon"></i>
                </div>
            </div>

        </div>
    )
}