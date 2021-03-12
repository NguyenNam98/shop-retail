import React,{useContext,useState} from 'react';
import './Checkout.css';
import {CartContext} from '../../Context/Cart';
import Axios from 'axios';
import {withRouter} from 'react-router-dom';

 function CheckoutBody(props){
    const{cartItems, totalItems,setCartItems}=useContext(CartContext);
    const [shippingFee,setShippingFee]=useState('20000');
    const [orderName,setOrderName]=useState('');
    const [orderPhone,setOrderPhone]=useState('');
    const [orderProvince,setOrderProvince]=useState('');
    const [orderDistrict,setOrderDistrict]=useState('');
    const [orderEmail,setOrderEmail]=useState('');
    const [orderAddress,setOrderAddress]=useState('');
    const orderTotal=totalItems+shippingFee;
    const [shipMethod,setShipMethod]=useState(0)
    const [methodPay,setMethodPay]=useState('');
    const list=[];
    for(let i in cartItems){
        list.push({
            id:cartItems[i]._id,
            amount:cartItems[i].count
        })
    }
    
   
    const placeAnOrder=()=>{
       let method='Viet post';
       if(shipMethod===1){
           method='Express'
       }
       else {if(shipMethod===2){
           method='fast shipping'
       }
       }
        const data={
            orderName: orderName,
            orderEmail: orderEmail,
            orderPhone: orderPhone,
            orderAddress: orderAddress,
            orderProvince: orderProvince,
            orderDistrict: orderDistrict,
            orderList: list,
            orderTotal: orderTotal,
            orderShipping: method,
            orderDate: new Date()
        }
        if(methodPay===''){
            alert(' please choose method payment')
        }
        else{
            Axios.post('http://localhost:3001/order/create',data)
            alert(' Your order sucessfull')
            document.body.style.overflow = 'hidden';
            window.scrollTo(0,0);
            localStorage.removeItem('total')
            localStorage.removeItem('cart') 
            props.history.push("/shop")
            setCartItems([])
            window.location.reload(false);
           
        }
        
      
    }
   
    return(
        <div className='checkoutbody'>
            <div className='checkoutbody-title'>Billing details</div>
            <div className='checkoutbody-info'>
                <div
                className='customer-info' 
                onChange={(event)=>{setOrderName(event.target.value)}}
                >
                    <div className='customer-info-title'>Name</div>
                    <input type='text' className='customer-input'/>
                </div>
                <div className='customer-info'onChange={(event)=>{
                    setOrderPhone(event.target.value)
                }}>
                    <div className='customer-info-title'>Phone Number</div>
                    <input type='text' className='customer-input'/>
                </div>
                <div className='customer-info'
                   onChange={(event)=>{setOrderEmail(event.target.value)}}
                >
                    <div className='customer-info-title'>Email</div>
                    <input type='text' className='customer-input'/>
                </div>
                <div className='customer-info'
                  onChange={(event)=>{setOrderProvince(event.target.value)}}
                >
                    <div className='customer-info-title'>Province</div>
                    <input type='text' className='customer-input'/>
                </div>
                <div className='customer-info'
                  onChange={(event)=>{setOrderDistrict(event.target.value)}}
                >
                    <div className='customer-info-title'>District</div>
                    <input type='text' className='customer-input'/>
                </div>
                <div className='customer-info'
                  onChange={(event)=>{setOrderAddress(event.target.value)}}
                >
                    <div className='customer-info-title'>Address</div>
                    <input type='text' className='customer-input'/>
                </div>
            </div>
            <div className='checkoutbody-title'>Your order</div>
            <div className='checkoutbody-info'>
                {
                    cartItems.map((item,index)=>{
                        return(
                                <div className='checkoutbody-cartitem' key={index}>
                                    <div className='checkout-item-info'>
                                        <img 
                                        src={item.productImg[0]} alt=''
                                        className='checkoutbody-items-img'
                                        width='100%' height='100%'
                                        />
                                        <div className='checkoutbody-items-name'>{item.productName}</div>
                                    </div>
                                    <div className='items-price-detail'>
                                        <div className='items-count'>x{item.count}</div>
                                        <div 
                                        className='items-price'>
                                            {(Number(item.count)*Number(item.productFinalPrice)).
                                            toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ
                                        </div>
                                    </div>
                                </div>                           
                        )
                    })
                }
                <div className='checkoutbody-bill'>
                    <div className='customer-info-title'>SUBTOTAL</div>
                    <div className='checkoutbody-total' >
                        {totalItems.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }đ
                    </div>
                </div>
                <div className='checkoutbody-bill'>
                    <div className='customer-info-title'>SHIPPING</div>
                    <select 
                    className='shipping-option'
                    onChange={(event)=>{setShippingFee(event.target.value)
                        setShipMethod(event.target.selectedIndex)
                         }}
                    >
                        <option value='20000' id='viet Post'>VIET POST -20000đ</option>
                        <option value='25000' id='ẼPRESS'>EXPRESS -25000đ</option>
                        <option value='35000'id='fast shipping'>FAST SHIPPING -35000đ</option>
                    </select>
                </div>
                <div className='checkoutbody-bill'>
                    <div className='customer-info-title'>TOTAL</div>
                    <div 
                    className='checkoutbody-total'
                    >
                        {(Number(shippingFee) +Number(totalItems)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }đ
                    </div>
                </div>
            </div>
            <div className='checkoutbody-title'>Payment method</div>
            <form className='paymenmethod'>
                <div className='checkbox-info'
                onChange={(event)=>{
                   setMethodPay(event.target.value)
                }}
                >
                        <input type='radio'  name='payment' value='cash'/>
                        <span className='text-checkbox' >Cash on delivery</span>
                        
                </div>
                <div className='checkbox-info'
                 onChange={(event)=>{
                    setMethodPay(event.target.value)
                }}
                >
                        <input type='radio'name='payment' value='zalo'/>
                        <span className='text-checkbox'>Zalo pay</span>
                        
                </div>
             </form>
             <div className='checkout-btn'
             onClick={placeAnOrder}
             >
                 <p>PLACE AN ORDER</p>
             </div>
        </div>
        
    )
}
export default withRouter(CheckoutBody);