import React ,{useContext}from 'react';
import {withRouter} from 'react-router-dom'
import './Cart.css';
import CartItems from './CartItems';
import WishListItems from './WishListItems';
import {CartContext} from '../../Context/Cart';

 function Cart(props){
    const {totalItems}=useContext(CartContext);
     return(
         <div className={ props.openCart===true?'Cart':'Cart displaynone'}>
             <div className='cart-header'>
                 <div className='cart-title'>Cart</div>
                 <div className=' cart-close'>
                     <i className="fa fa-times" 
                     onClick={props.setCloseCart}
                     />
                 </div>
             </div>
            <div className={props.openCart===false ? 'fade-in':''}>
                <div className='cart-tab'>
                    <div
                    className={props.tab===1?'cart-items cart-items-active':'cart-items'}
                    onClick={()=>{props.setTab(1)}}
                    >
                       Cart 
                    </div>
                    <div
                    className={props.tab===2?'cart-items cart-items-active':'cart-items'}
                    onClick={()=>{props.setTab(2)}}
                    >
                         WishList 
                    </div>
                     
                  </div>
                  {props.tab===1&&<CartItems/>}
                  {props.tab===2&&<WishListItems/>}
            </div>
            { props.tab === 1 &&
                <div className="cart-checkout-box flex-center">
                    <div className="cart-checkout-text flex">
                        <p>Total: </p>
                        {totalItems &&
                            <p> {totalItems.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</p>
                        }
                    </div>
                    <div 
                        className="cart-checkout-btn btn-checkout"
                        onClick={()=>{
                            if (totalItems > 0) {    
                                props.history.push(`/checkout`);
                                window.location.reload(false);
                            }
                        }}
                    >Checkout</div> 
                </div>
            }

         </div>
     )
 }
 export default withRouter(Cart);