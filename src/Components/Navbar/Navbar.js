import React,{useState, useEffect,useContext} from 'react'
import  {Link,withRouter}
   from "react-router-dom";
import Axios from 'axios';
import './Navbar.css';
import DropDown from '../Dropdown/Dropdown';
import {CartContext} from '../../Context/Cart';
import Cart from '../Cart/Cart';
import Login from '../Login/Login';

 function Navbar(){
     const {cartItems} = useContext(CartContext);

     const [numberItems,setNumberItems]=useState(0);

     const[click,setClick]= useState(false);

     const [openCart,setOpenCart ]=useState(false);
     const setCloseCart=()=>{setOpenCart(false)};
     const [tab,setTab]=useState(1);

     const [openLogin,setOpenLogin] =useState(false);
     const setCloseLogin=()=>{setOpenLogin(false)};

     const[menDataDropdown, setMenDataDropDown]=useState([]);
     const[womenDataDropdown, setWomenDataDropDown]=useState([]);
     const [dropMen,setDropdownMen]=useState(false);
     const [dropWomen,setDropdownWomen]=useState(false);
     
     const handleClick=()=>setClick(!click);
     const closeMobileMenu=()=>setClick(false);

     const setClickMen=()=>setDropdownMen(true);
     const setClickWomen=()=>setDropdownWomen(true)
     
    const onMouseEnterMen=()=>{
        if(window.innerWidth<960){
            setDropdownMen(false)
        }else{
            setDropdownMen(true)
        }
    }
    const onMouseLeaveMen=()=>{
        if(window.innerWidth<960){
            setDropdownMen(false)
        }else{
            setDropdownMen(false)
        }
    }
    const onMouseEnterWomen=()=>{
        if(window.innerWidth<960){
            setDropdownWomen(false)
        }else{
            setDropdownWomen(true)
        }
    }
    const onMouseLeaveWomen=()=>{
        if(window.innerWidth<960){
            setDropdownWomen(false)
        }else{
            setDropdownWomen(false)
        }
    }
     useEffect(() => {
         Axios.get('http://localhost:3001/products').then((res)=>{
            const menProductGroupCate=[];
            const womenProductGroupCate=[];
        
            //find men group cate
            for(let i in res.data){
                if(res.data[i].productSex==='Man'){
                    menProductGroupCate.push(res.data[i].productGroupCate);
                }
            };
            
            let groupCateMen=menProductGroupCate.filter(function(elem,index,seft){
                return index===seft.indexOf(elem);
            });
            
             //find women group cate
             for(let i in res.data){
                if(res.data[i].productSex==='Woman'){
                    womenProductGroupCate.push(res.data[i].productGroupCate);
                }
            };
            let groupCateWomen=womenProductGroupCate.filter(function(elem,index,seft){
                return index===seft.indexOf(elem);
            });
            //find all cate in men groupcate
            let menDropdownContent =[];
            for(let i in groupCateMen){
                let menData={};
                let menGroupTitle=[];
                for(let j in res.data){
                    if(res.data[j].productGroupCate===groupCateMen[i]
                        &&res.data[j].productSex=='Man'){
                            menGroupTitle.push(res.data[j].productCate);
                    }
                }
                let menGroupCate2= menGroupTitle.filter(function(elem,index,seft){
                    return index === seft.indexOf(elem);
                });
                menData={
                    link:'/men',
                    dropdownTilte:groupCateMen[i],
                    dropdownList:menGroupCate2
                };
                menDropdownContent.push(menData);
            }
                //find all cate in women groupcate
                let womenDropdownContent =[];
                for(let i in groupCateWomen){
                    let womenData={};
                    let womenGroupTitle=[];
                    for(let j in res.data){
                        if(res.data[j].productGroupCate===groupCateWomen[i]
                            &&res.data[j].productSex=='Woman'){
                                womenGroupTitle.push(res.data[j].productCate);
                        }
                    }
                    let womenGroupCate2= womenGroupTitle.filter(function(elem,index,seft){
                        return index === seft.indexOf(elem);
                    });
                    womenData={
                        link:'/woman',
                        dropdownTilte:groupCateWomen[i],
                        dropdownList:womenGroupCate2
                    };
                 
                    womenDropdownContent.push(womenData);
                }
                
                setMenDataDropDown(menDropdownContent);
                setWomenDataDropDown(womenDropdownContent);
               
         })
         let exNumberItems=0;
         for(let i in cartItems){
             exNumberItems+=Number(cartItems[i].count)
         }
         setNumberItems(exNumberItems);
         
     },[cartItems])
    
    return (
        <div className='Navbar'>
            {openCart===true&&
            <Cart
            setCloseCart={setCloseCart}
            openCart={openCart}
            tab={tab}
            setTab={setTab}
            />
            }
            {
                openLogin===true&&
                <Login 
                setCloseLogin={setCloseLogin}
                openLogin={openLogin}
                />
            }
            {

            }
            <div className="navbar-container">
               <Link to='/' className="nav-logo rotate" onClick={()=>{
                   window.scrollTo(0,0)
               }}
               >
                   MICHAEL
               </Link>
               <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times': 'fas fa-bars' }>
                  </i>
               </div>           
               <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                  <li className={'nav-item'}>
                      <Link
                        onClick={closeMobileMenu,()=>{ window.scrollTo(0,0)}}
                        to='/' className='nav-links'
                     
                       >
                           Home 
                       </Link>
                  </li>
                  <li 
                  className='nav-item'
                  onMouseEnter={onMouseEnterMen}
                  onMouseLeave={onMouseLeaveMen}
                  >
                      <Link 
                        to='/men'
                        onClick={closeMobileMenu,()=>{ window.scrollTo(0,0)}}
                        className='nav-links'
                      >
                         Men                     
                      </Link>
                      <i 
                        onClick={setClickMen}
                        className='fas fa-caret-down' 
                       />
                    {dropMen&&<DropDown
                       
                        className='dropdown'
                        dataDropdown={menDataDropdown}
                        Sex='Men'
                      />
                   }
                   </li>
                   <li 
                    className='nav-item'
                    onMouseEnter={onMouseEnterWomen}
                    onMouseLeave={onMouseLeaveWomen}
                   >
                        <Link 
                            to='/woman'
                            className='nav-links'
                            onClick={closeMobileMenu,()=>{ window.scrollTo(0,0)}}
                        >
                            Women
                        
                        </Link>
                    <i
                     onClick={setClickWomen}
                     className='fas fa-caret-down' />
                    {dropWomen&&<DropDown
                        className="dropdown"
                        dataDropdown={womenDataDropdown}
                        Sex='Women'
                    />}
                  </li>
                  <li className='nav-item'>
                      <Link 
                        to='/news'
                        className='nav-links'
                        onClick={closeMobileMenu,()=>{ window.scrollTo(0,0)}}
                        >
                            News
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link 
                          to='/contact'
                          className='nav-links'
                        onClick={closeMobileMenu,()=>{ window.scrollTo(0,0)}}
                      >
                                Contact
                       </Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>Sign up</Link>
                  </li>
               </ul>
               <form className='nav-search'>             
                   <Link to='search' className='nav-input'> 
                       <input type='text' placeholder="Search.." >
                       </input>
                    </Link>
                   <i className="fas fa-search"></i>
                </form>
               <div className='nav-cart'
                onClick={()=>{setOpenCart(true)}}
               >
                        <i className="fas fa-cart-plus"></i>
                        <div className='number'>{numberItems}</div> 
                </div>
                
                <i className="fas fa-user" onClick={()=>{setOpenLogin(true)}}></i>
                
            </div>
        </div>
    ) 
 }
 export default withRouter (Navbar);