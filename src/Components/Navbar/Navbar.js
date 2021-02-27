import React,{useState} from 'react'
import  {Link}
   from "react-router-dom";
import './Navbar.css';
import Button from '../LoginButton/Button';
import DropDown from '../Dropdown/Dropdown'

 function Navbar(){
     const[click,setClick]= useState(false);
     const handleClick=()=>setClick(!click);
     const closeMobileMenu=()=>setClick(false);

     const [dropDown,setDropDown]=useState(false)
    return (
        <>
            <nav className="Navbar">
               <Link to='/' className="nav-logo">MICHAEL
               </Link>
               <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times': 'fas fa-bars' }>
                  </i>
               </div>           
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                      <Link 
                      to='/'
                      className='nav-links' 
                      onClick={closeMobileMenu}
                      >
                      Men
                      <i className='fas fa-caret-down' />
                      </Link>
                      {dropDown&&{DropDown}}
                  </li>
                  <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>Women</Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>Kids</Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>Sale</Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>Sign up</Link>
                  </li>
               </ul>
               <form className='nav-search'>             
                   <Link to='search'> <input type='text' placeholder="Search.." className='nav-input'></input></Link>
                   <i className="fas fa-search"></i>
                </form>
               <div className='nav-cart'>
                    <Link to='like' className='favourite'><i class="far fa-heart"></i></Link>
                    <Link to='cart' className='cart'><i class="fas fa-cart-plus"></i></Link>
                </div>
                
                <Button/>
                
            </nav>
        </>
    ) 
 }
 export default Navbar;