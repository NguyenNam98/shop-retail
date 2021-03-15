import React,{useContext,useState,useEffect} from 'react';
import './login.css';
import {UserContext} from '../../Context/User.context';
import Axios from 'axios';

function Acount(){
    const { userInfo}=useContext(UserContext);
    const [fisrtName,setFisrtName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [address,setAddress]=useState('');
    const [img,setImg]=useState('');
    const [tab,setTab]=useState(1);
    const [orderList,setOrderList]=useState([]);
    useEffect(() => {
      if(userInfo){
          setFisrtName(userInfo.first_name);
          setLastName(userInfo.last_name);
          setEmail(userInfo.email);
          setPhoneNumber(userInfo.phoneNumber);
          setAddress(userInfo.userAddress)
          setImg(userInfo.userImg)
      }
     
    },[userInfo])
    const myOrder=()=>{
        Axios.get('http://localhost:3001/order').then((res)=>{
            const listItem=[]
            for(let i in res.data){
                if(res.data[i].orderEmail===email){
                    listItem.push(res.data[i])
                }
            }
            setOrderList(listItem);
        })
        setTab(2);
    }
    return(
        <div className='account'>
            <div className='account-container'>
                <div className='account-left'>
                    <div className='account-avt'>
                        <img src={userInfo.userImg} width='100%' height='100%'
                        className='account-img'
                        />
                        <div className='account-name'>
                         {userInfo.first_name}
                      
                        </div>
                    </div>
                    <div className='account-tab'>
                        <div 
                        className={tab===1?'tab tab-active':'tab'}
                        onClick={()=>{setTab(1)}}
                        >
                            My Account
                        </div>
                        <div 
                        className={tab===2?'tab tab-active':'tab'}
                        onClick={myOrder}
                        >
                            My Orders
                        </div>
                        <div 
                        className={tab===3?'tab tab-active':'tab'}
                        onClick={()=>{
                            localStorage.removeItem('token')
                           window.location.reload(false); }}
                        >
                            Log Out
                        </div>
                    </div>
                </div>
                {tab==1&&
                <div className='myaccount-right'>
                    <div className='myaccount-header'>
                        <div className='myaccount-title'>Account Information</div>
                        <div className='myaccount-note'>
                            Manage account information for account security
                        </div>
                    </div>
                    <div className='myaccount-detail'>
                        <div className='myaccount-item'>
                            <div className='detail-title' >Fisrt Name</div>
                            <input type='text' className='detail-input'value={fisrtName}/>
                        </div>
                        <div className='myaccount-item'>
                            <div className='detail-title'>Last-Name</div>
                            <input type='text' className='detail-input'value={lastName}/>
                        </div>
                        <div className='myaccount-item'>
                            <div className='detail-title'>Avatar</div>
                            <input type='text' className='detail-input'/>
                        </div>
                        <div className='myaccount-item'>
                            <div className='detail-title'>Email</div>
                            <input type='text' className='detail-input' value={email}/>
                        </div>
                        
                        <div className='myaccount-item'>
                            <div className='detail-title'>Phone Number</div>
                            <input type='text' className='detail-input' value={phoneNumber}/>
                        </div>
                        <div className='myaccount-item'>
                            <div className='detail-title'>Address</div>
                            <input type='text' className='detail-input'value={address}/>
                        </div>
                        <div className='myaccount-item'>
                            <div className='detail-title'>New Password</div>
                            <input type='text' className='detail-input'/>
                        </div>
                        <div className='btn'>
                       <div className='myaccount-btn'>Update information</div>
                       </div>
                    </div>
                </div>
                }
                {
                    tab===2&&
                    <div className='order'>
                        <div className='order-header'>
                            <div className='header-title'>Orders information</div>
                            <div className='header-note'>All about your orders</div>
                        </div>
                        <div className='order-tab'>
                            <div className='order-tab-item'>Shipping</div>
                            <div className='order-tab-item'>Date</div>
                            <div className='order-tab-item'>Items</div>
                            <div className='order-tab-item'>Total Money</div>
                        </div>
                        {
                            orderList.map((item,index)=>{
                                var totalitem=0;
                                var date =new Date(item.orderDate);
                                for(let i in item.orderList){
                                    totalitem+=item.orderList[i].amount
                                }
                                return(
                                    <div className='order-list' key={index}>
                                        <div className='order-item'>{item.orderShipping}</div>
                                        <div>{date.getDate()}-{date.getMonth()+1}-{date.getFullYear()}</div>
                                        <div>{totalitem}</div>
                                        <div>{item.orderTotal.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Đ</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}
export default Acount;