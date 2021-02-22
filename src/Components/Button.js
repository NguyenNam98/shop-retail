import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';
function Button(){
    return (
        <Link to='/signup'>
            <button className='btn'>Sign up</button>
        </Link>
    );
}
export default Button ;