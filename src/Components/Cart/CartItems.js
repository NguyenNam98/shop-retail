import React,{useContext} from 'react';
import './Cart.css';
import {CartContext} from '../../Context/Cart'
 function CartItems(props){
     const {cartItems,minusCount,removeProductCart,plusCount,updateCount}=useContext(CartContext);
     return(
         <div className='CartItem'>
             <div className='cartitems-list'>
                 {cartItems.length===0&&
                 <div className='no-product'> No products in the cart !</div>
                 }
                 {
                 cartItems.length>0&& 
                     <div className='cartitem-nav'>
                         <div className='cartitem-image'>Image</div>
                         <div className='cartitem-name'>Name</div>
                         <div className='cartitem-amout'>Amout</div>
                         <div className='cartitem-price'>Price</div>
                         <div className='cartitem-total-price'>Total Price</div>
                     </div>
                 }
                 {
                    cartItems.map((item,index)=>{
                        return(
                            <div className='cartitem-product'key={index}>
                                <div className='cartitem-image'>
                                    <img src={item.productImg[0]}
                                    width='80px'height='100%' 
                                    alt=''                                  
                                    />
                                </div>
                                <div className='cartitem-name'>{item.productName}</div>
                                    
                                     <div className='count-cart noselect'>
                                        <div className='count-cart-item left flex-center'
                                       
                                        >
                                        <i className="fa fa-minus" 
                                         id={item._id}
                                         onClick={minusCount}
                                          ></i>
                                        </div>
                                        <div className='count-cart-item text center'>
                                            <form style={{width: '100%', margin: '0', height: '30px'}}
                                            >
                                                <input 
                                                    type="text" 
                                                    value={item.count}
                                                    id={item._id}
                                                    onChange={updateCount}
                                                    style={{width: '100%', margin: '0', height: '30px'}}
                                                />
                                            </form>
                                        </div>
                                        <div className='count-cart-item right flex-center'
                                         
                                        >
                                        <i class="fa fa-plus" 
                                         id={item._id}
                                         onClick={plusCount}
                                         ></i>
                                        </div>
                                    </div>
                                    <div className='cartitem-price price'>
                                        {item.productFinalPrice.toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ
                                    </div>
                                    <div className='cartitem-total-price'>
                                    {(item.productFinalPrice*item.count)
                                    .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ
                                    </div>
                                    <div className='cartitem-remove'>
                                        <i className="fa fa-times" 
                                        id={item._id}
                                        onClick={removeProductCart}
                                        />
                                    </div>
                                </div>
                        )
                    })
                 }
             </div>
         </div>
     )
 }
 export default CartItems;