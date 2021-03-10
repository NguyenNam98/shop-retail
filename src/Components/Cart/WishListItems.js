import React,{useContext} from 'react';
import './Cart.css';
import {CartContext} from '../../Context/Cart'
import Axios from 'axios';

 function WishList(props){
     const {wishListItems,addToCart,removeWishLish}=useContext(CartContext);
     const cartClick = (event) => {
        const id = event.target.id
        Axios.get(`http://localhost:3001/products/${id}`)
            .then(res => {
                res.data.map((item,index)=>{
                    return(addToCart(item))
                    
                })
            }
        )
    }

     return(
         <div className='wish-list'>
            
                 {wishListItems.length===0&&
                 <div className='no-product'> The WishList is empty !</div>
                 }
              
                 {
                    wishListItems.map((item,index)=>{
                        return(
                            <div className='wishlist-product' key={index}>
                                <div className='wishlist-image'>
                                    <img src={item.productImg[0]}
                                    width='80px'height='100%' 
                                    alt=''                                  
                                    />
                                </div>
                                <div className='wishlist-name'>{item.productName}</div>

                                <div className='wishlist-price'>
                                    {item.productFinalPrice.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ
                                </div>
                                {/* <div className='wishlist-btn'
                                     id={item._id}
                                     onClick={(event)=>{cartClick(event)
                                        removeWishLish(event)
                                    }}
                                >
                                    <i className="fa fa-cart-plus" style={{pointerEvents:'none'}} />
                                    <div className='wishlist-text'>Add to cart</div>
                                </div> */}
                                <button className='wishlist-btn'
                                     id={item._id}
                                     onClick={(event)=>{cartClick(event)
                                        removeWishLish(event)
                                    }} >Add to cart</button>
                                <div className='wishlist-remove'>
                                    <i className="fa fa-times" 
                                    id={item._id}
                                    onClick={removeWishLish}
                                    />
                                </div>
                            </div>
                        )
                    })
                 }
           
         </div>
     )
 }
 export default WishList;