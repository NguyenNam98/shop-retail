import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import './Banner.css'
function NewsBanner(props){
    const location=props.history.location.pathname;
    const listLoca =location.split('/');
   
    
    return(
        <div className="newsbanner">
            <div className='newsbanner-title'>{listLoca[1]?listLoca[1]:listLoca[0]}</div>
            <div className='newsbanner-breadcrumb'>
                <div className='newsbanner-home'><Link to='/'>Home</Link></div>            
                <i className="fa fa-angle-right" />
                <div className='newsbanner-home'><Link to='news'>News</Link></div>
            </div>

        </div>
    )
}
export default withRouter(NewsBanner);