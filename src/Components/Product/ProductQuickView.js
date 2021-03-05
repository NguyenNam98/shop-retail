import React from 'react';
import {withRouter} from 'react-router-dom';

function ProductQuickView(props){
    return(
        <div>
            <div className='productquickview'>
                <div className='productquickview-container'>
                </div>
            </div>
        </div>
    )
}
export default withRouter( ProductQuickView);