import React,{useState} from 'react';
import './Dropdown.css';
import {Link,withRouter} from 'react-router-dom';
import {menImgs,womanImgs} from './DropdownListItem';
import DropSlider from './DropdownSlider';
 function DropDown(props){
    const [click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
    
return(
     <div className={click ?'dropdown-click':'dropdown'}>
        <div className="dropdown-container">
            {  
                props.dataDropdown.map((item,index)=>{
                    return(
                        <ul 

                            className="dropdown-col"
                            key={index}
                        >
                            <label 
                              
                              onClick={handleClick}
                              className= "dropdown-listtitle"
                            >
                                <Link 
                                to={`${item.link}/${item.dropdownTilte.toLowerCase().replace(/\s+/g, '-')}`} 
                                
                                >
                                    {item.dropdownTilte}
                                </Link></label>
                            {
                                item.dropdownList.map((temp,index)=>{
                                    return(
                                        <li 
                                            onClick={handleClick}
                                            className="dropdown-listitem"
                                            key={index}
                                        >
                                            <Link to={`${item.link}/${temp.toLowerCase().replace(/\s+/g, '-')}`}>{temp}</Link>
                                            
                                        </li>
                                    )
                                })                          
                            } 
                        </ul>
                        
                    )
                })
                
            }
            { props.Sex=='Women'&&
                <DropSlider 
                className='dropslider'
                width='430'
                height='300'
                imgs={womanImgs}
                />
            }
            
           { props.Sex=='Men'&&
                <DropSlider 
                width='430'
                height='300'
                imgs={menImgs}
                />
            }
        </div> 
     </div>
 )
}
export default withRouter(DropDown);