import React,{useState, useEffect} from 'react'
import  {Link,withRouter}
   from "react-router-dom";
import Axios from 'axios';
import './Navbar.css';
import Button from '../LoginButton/Button';
import DropDown from '../Dropdown/Dropdown';


 function Navbar(){
     const[click,setClick]= useState(false);
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
                    console.log(groupCateMen);
                    womenDropdownContent.push(womenData);
                }
                
                setMenDataDropDown(menDropdownContent);
                setWomenDataDropDown(womenDropdownContent);
               
         })
     },[])
    return (
        <div className='Navbar'>
            <nav className="navbar-container">
               <Link to='/' className="nav-logo">MICHAEL
               </Link>
               <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times': 'fas fa-bars' }>
                  </i>
               </div>           
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                      <Link
                        to='/' className='nav-links' 
                        onClick={closeMobileMenu}
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
                        className='nav-links' 
                        onClick={closeMobileMenu}
                      
                      >
                      Men                     
                      </Link>
                      <i 
                       onClick={setClickMen}
                      className='fas fa-caret-down' />
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
                        onClick={closeMobileMenu}
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
                        onClick={closeMobileMenu}
                        >
                            News
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link 
                          to='/abouts'
                          className='nav-links'
                           onClick={closeMobileMenu}
                      >
                                About
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
               <div className='nav-cart'>
                    <Link to='like' className='favourite'><i class="far fa-heart"></i></Link>
                    <Link to='cart' className='cart'><i class="fas fa-cart-plus"></i></Link>
                </div>
                
                <Button/>
                
            </nav>
        </div>
    ) 
 }
 export default withRouter (Navbar);