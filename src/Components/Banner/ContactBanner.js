import React from 'react';
import {Link} from 'react-router-dom';
import './Banner.css'
function Banner3(props){
    return(
        <div className="contactbanner">
            <div className='contactbanner-title'>{props.title}</div>
            <div className='contactbanner-breadcrumb'>
                <div className='contactbanner-home'><Link to='/'>Home</Link></div>
                <i className="fa fa-angle-right" />
                <div className='contactbanner-link'>Contact</div>
            </div>

        </div>
    )
}
export default Banner3;