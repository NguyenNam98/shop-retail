import React from 'react';
import {withRouter} from 'react-router-dom'
import './Banner.css';
function Banner2(props){
    const location= props.history.location.pathname.split('/')[(props.history.location.pathname.split('/').length-1)];
    let locationText = "";

    if (location.split('-').length > 1) {
        locationText = location.split('-').join(' ')
    } else {
        locationText = location;
    };

    return(
        <div className='banner2'>
            <div className='banner2-container'
              style={{
                  backgroundImage:`url(${props.imgBanner})`,
                
              }}
            >
                <div className='banner2-title'>
                    {locationText}
                </div>
                <div className='banner2-path'>
                    <div className='banner2-path-home'
                    onClick={()=>{
                        props.history.push('/')
                    }}
                    >
                        Home
                    </div>
                    <i className='fas fa-angle-right'></i>
                    <div className='banner2-path-certain'>
                        {locationText}
                    </div>
                </div>
            </div>

        </div>
    )
}
export default withRouter(Banner2);