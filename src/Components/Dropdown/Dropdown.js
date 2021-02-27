import React,{useState} from 'react'
import {Men} from './MenuItems'
import './Dropdown.css'
import {Link} from 'react-router-dom'
export default function DropDown(){
    const [click,setClick]=useState(false);
   const handleClick=()=>setClick(!click);
 return(
     <>
     <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {Men.map((item, index) => {
          return (
            <li key={index}>
              <Link
                
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
     </>
 )
}