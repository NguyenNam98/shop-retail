import React from 'react';
import {Link} from 'react-router-dom';
import './Banner.css'
function Banner3(props){
    return(
        <div className="banner3">
            <div className='banner3-title'>{props.title}</div>
            <div className='banner3-breadcrumb'>
                <div className='banner3-home'><Link to='/'>Home</Link></div>
                <i className="fa fa-angle-right" />
                <div className='banner3-link'>{props.title}</div>
            </div>

        </div>
    )
}
export default Banner3;