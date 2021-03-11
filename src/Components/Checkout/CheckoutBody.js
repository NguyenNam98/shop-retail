import React,{useContext,useState} from 'react';
import './Checkout.css';
import {CartContext} from '../../Context/Cart';

export default function CheckoutBody(){
    const{cartItems, totalItems}=useContext(CartContext);
    const [shippingFee,setShippingFee]=useState(20000);
    return(
        <div className='checkoutbody'>
            <div className='checkoutbody-title'>Billing details</div>
            <div className='checkoutbody-info'>
                <div className='customer-info'>
                    <div className='customer-info-title'>Name</div>
                    <input type='text' className='customer-input'/>
                </div>
                <div className='customer-info'>
                    <div className='customer-info-title'>Phone Number</div>
                    <input type='text' className='customer-input'/>
                </div>
                <div className='customer-info'>
                    <div className='customer-info-title'>Email</div>
                    <input type='text' className='customer-input'/>
                </div>
                <div className='customer-info'>
                    <div className='customer-info-title'>Province</div>
                    <input type='text' className='customer-input'/>
                </div>
                <div className='customer-info'>
                    <div className='customer-info-title'>District</div>
                    <input type='text' className='customer-input'/>
                </div>
                <div className='customer-info'>
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
                    onChange={(event)=>{setShippingFee(event.target.value)}}
                    >
                        <option value='20000'>VIET POST -20000đ</option>
                        <option value='25000'>EXPRESS -25000đ</option>
                        <option value='35000'>FAST SHIPPING -35000đ</option>
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
            <div className='paymenmethod'>
                <div className='checkbox-info'>
                        <input type='checkbox' id='payment' name='payment'/>
                        <span className='text-checkbox' >Cash on delivery</span>
                        
                </div>
                <div className='checkbox-info'>
                        <input type='checkbox'id='payment2'name='payment'/>
                        <span className='text-checkbox'>Zalo pay</span>
                        
                </div>
             </div>
             <div className='checkout-btn'>
                 <p>PLACE AN ORDER</p>
             </div>
        </div>
        
    )
}