import React,{useState} from 'react';
import {withRouter} from 'react-router-dom';

 function ProductOverLay(props){
    const product=props.product;
    const [loading,setLoading]=useState(0);
    const cartClick = () => {
        setLoading(1)
        setTimeout(()=>{
            setLoading(0)
            // addToCart(props.product)
        }, 500)
    }

    const wishListClick = () => {
        setLoading(2)
        setTimeout(()=>{
            setLoading(0)
            // addToWishList(props.product)
        }, 500)
    }

    const redirect = (event) => {
        if (event.target.id === "overlay") {
            // window.scrollTo(0,0);
            props.history.push(`/products/${props.product._id}`);
        }
    }
    return(
        <div className='product-overlay'
        id='overlay'
        onClick={redirect}
        >
            <div 
            className='product-icon 
            flex-center icon-cart icon-btn'
            // onClick={cartClick}
            >
                {
                    loading===1&&
                    <div className='loading-icon'></div>
                }
                {
                    loading!==1&&
                    <i className="fa fa-cart-plus" aria-hidden="true"/>
                }

            </div>
            <div 
            className='product-icon 
            flex-center icon-wishlist icon-btn'
            // onClick={cartClick}
            >
                {
                    loading===2&&
                    <div className='loading-icon'></div>
                }
                {
                    loading!==2&&
                    <i className="fa fa-heart" aria-hidden="true"></i>
                }

            </div>
            <div 
            className='product-icon 
            flex-center icon-view icon-btn'
            onClick={props.openView}
            >
                {
                    loading===2&&
                    <div className='loading-icon'></div>
                }
                {
                    loading!==2&&
                    <i className="fa fa-eye" aria-hidden="true"></i>
                }

            </div>

        </div>
    )
}
export default withRouter(ProductOverLay);